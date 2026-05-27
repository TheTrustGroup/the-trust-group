import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/contact-submit-shared";
import { sendEmailJs, isEmailJsConfigured } from "@/lib/emailjs-server";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit-ip";
import { isTurnstileRequired, verifyTurnstileToken } from "@/lib/turnstile-verify";

const WINDOW_MS = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? 15 * 60 * 1000);
const MAX_REQ = Number(process.env.CONTACT_RATE_LIMIT_MAX ?? "8");

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limited = checkRateLimit(`contact:${ip}`, MAX_REQ, WINDOW_MS);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec) },
      }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = validateContactPayload(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: parsed.status });
  }

  if (isTurnstileRequired()) {
    const secret = process.env.TURNSTILE_SECRET_KEY!;
    const human = await verifyTurnstileToken(parsed.data.turnstileToken, secret, ip);
    if (!human) {
      return NextResponse.json({ error: "Human verification failed. Please try again." }, { status: 400 });
    }
  }

  if (!isEmailJsConfigured()) {
    return NextResponse.json(
      { error: "Contact is temporarily unavailable. Please email us directly." },
      { status: 503 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || "info@thetrustgroupsolutions.com";

  try {
    await sendEmailJs({
      from_name: parsed.data.name,
      from_email: parsed.data.email,
      company: parsed.data.company || "Not provided",
      phone: parsed.data.phone || "Not provided",
      service: parsed.data.service,
      message: parsed.data.description,
      budget: parsed.data.budget || "Not specified",
      files_info: parsed.data.filesInfo || "No files attached",
      to_email: toEmail,
      reply_to: parsed.data.email,
    });
  } catch {
    return NextResponse.json({ error: "Could not deliver your message. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
