import { NextResponse } from "next/server";
import { sendEmailJs, isEmailJsConfigured } from "@/lib/emailjs-server";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit-ip";
import { isTurnstileRequired, verifyTurnstileToken } from "@/lib/turnstile-verify";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_OPTIONS = [
  "Robotics & Edge AI",
  "Secure & Defense-Adjacent Systems",
  "AI Solutions & Implementation",
  "Custom Enterprise Software",
  "Mobile Application Development",
  "Cloud Infrastructure & DevOps",
  "Consulting & Technology Strategy",
  "Multiple / Unsure",
] as const;

const BUDGET_OPTIONS = [
  "Under $50K",
  "$50K – $150K",
  "$150K – $500K",
  "$500K+",
  "To Be Discussed",
] as const;

function sanitize(s: unknown, max: number): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

const WINDOW_MS = Number(process.env.BRIEFING_RATE_LIMIT_WINDOW_MS ?? 15 * 60 * 1000);
const MAX_REQ = Number(process.env.BRIEFING_RATE_LIMIT_MAX ?? "5");

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limited = checkRateLimit(`briefing:${ip}`, MAX_REQ, WINDOW_MS);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfterSec) } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const o = body as Record<string, unknown>;

  const firstName = sanitize(o.firstName, 80);
  const lastName = sanitize(o.lastName, 80);
  const workEmail = sanitize(o.workEmail, 254).toLowerCase();
  const phone = sanitize(o.phone, 40);
  const organization = sanitize(o.organization, 200);
  const role = sanitize(o.role, 120);
  const serviceArea = sanitize(o.serviceArea, 120);
  const budget = sanitize(o.budget, 80);
  const projectOverview = sanitize(o.projectOverview, 12000);
  const requiresNda = Boolean(o.requiresNda);
  const privacyAccepted = Boolean(o.privacyAccepted);
  const turnstileToken =
    typeof o.turnstileToken === "string" ? o.turnstileToken.slice(0, 2048) : undefined;

  if (firstName.length < 1) return NextResponse.json({ error: "First name is required" }, { status: 400 });
  if (lastName.length < 1) return NextResponse.json({ error: "Last name is required" }, { status: 400 });
  if (!EMAIL_RE.test(workEmail)) return NextResponse.json({ error: "Valid work email is required" }, { status: 400 });
  if (organization.length < 1) return NextResponse.json({ error: "Organization is required" }, { status: 400 });
  if (role.length < 1) return NextResponse.json({ error: "Role is required" }, { status: 400 });
  if (!SERVICE_OPTIONS.includes(serviceArea as (typeof SERVICE_OPTIONS)[number])) {
    return NextResponse.json({ error: "Invalid service area" }, { status: 400 });
  }
  if (budget && !BUDGET_OPTIONS.includes(budget as (typeof BUDGET_OPTIONS)[number])) {
    return NextResponse.json({ error: "Invalid budget selection" }, { status: 400 });
  }
  if (projectOverview.length < 20) {
    return NextResponse.json({ error: "Project overview must be at least 20 characters" }, { status: 400 });
  }
  if (!privacyAccepted) {
    return NextResponse.json({ error: "You must accept the privacy statement" }, { status: 400 });
  }

  if (isTurnstileRequired()) {
    const secret = process.env.TURNSTILE_SECRET_KEY!;
    const human = await verifyTurnstileToken(turnstileToken, secret, ip);
    if (!human) {
      return NextResponse.json({ error: "Human verification failed. Please try again." }, { status: 400 });
    }
  }

  if (!isEmailJsConfigured()) {
    return NextResponse.json(
      { error: "Form is temporarily unavailable. Please email us directly." },
      { status: 503 }
    );
  }

  const briefingTemplateId =
    process.env.EMAILJS_BRIEFING_TEMPLATE_ID?.trim() ||
    process.env.NEXT_PUBLIC_EMAILJS_BRIEFING_TEMPLATE_ID?.trim() ||
    process.env.EMAILJS_TEMPLATE_ID?.trim() ||
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();

  if (!briefingTemplateId) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 503 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "info@thetrustgroupsolutions.com";

  try {
    await sendEmailJs(
      {
        first_name: firstName,
        last_name: lastName,
        from_email: workEmail,
        phone: phone || "Not provided",
        organization,
        role,
        service_area: serviceArea,
        budget: budget || "Not specified",
        project_overview: projectOverview,
        requires_nda: requiresNda ? "Yes" : "No",
        to_email: toEmail,
        reply_to: workEmail,
      },
      briefingTemplateId
    );
  } catch {
    return NextResponse.json({ error: "Could not deliver your request. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
