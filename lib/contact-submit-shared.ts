/** Allowed service values (simple contact form). */
export const CONTACT_SERVICE_OPTIONS = [
  "Secure & Defense-Adjacent Systems",
  "Robotics & Edge AI",
  "AI Solutions & Implementation",
  "Custom Software Development",
  "Mobile App Development",
  "Web Development",
  "Cloud Solutions",
  "Consulting & Strategy",
  "Other",
] as const;

/** Premium multi-step form stores service slugs; map to labels for email templates. */
export const PREMIUM_SERVICE_SLUG_TO_LABEL: Record<string, string> = {
  "ai-solutions": "AI Solutions & Implementation",
  "custom-software": "Custom Software Development",
  "mobile-apps": "Mobile App Development",
  "web-development": "Web Development",
  "cloud-solutions": "Cloud Solutions",
  consulting: "Consulting & Strategy",
  "defense-technology": "Secure & Defense-Adjacent Systems",
  other: "Other",
};

export const CONTACT_BUDGET_OPTIONS = [
  "Under $50K",
  "$50K - $100K",
  "$100K - $250K",
  "$250K - $500K",
  "$500K+",
  "Not sure yet",
] as const;

/** Premium budget slider uses value slugs; normalize for EmailJS. */
export const PREMIUM_BUDGET_SLUG_TO_LABEL: Record<string, string> = {
  "under-50k": "Under $50K",
  "50k-100k": "$50K - $100K",
  "100k-250k": "$100K - $250K",
  "250k-500k": "$250K - $500K",
  "500k-plus": "$500K+",
  "not-sure": "Not sure yet",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sanitizeText(s: unknown, max: number): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

export function validateContactPayload(body: unknown):
  | { ok: true; data: {
      name: string;
      email: string;
      company: string;
      service: string;
      description: string;
      budget: string;
      phone: string;
      filesInfo: string;
      turnstileToken?: string;
    } }
  | { ok: false; error: string; status: number } {

  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid JSON body", status: 400 };
  }

  const o = body as Record<string, unknown>;

  const name = sanitizeText(o.name, 120);
  const email = sanitizeText(o.email, 254).toLowerCase();
  const company = sanitizeText(o.company, 200);
  const service = sanitizeText(o.service, 120);
  const description = sanitizeText(o.description, 8000);
  const budget = sanitizeText(o.budget, 80);
  const phone = sanitizeText(o.phone, 40);
  const filesInfo = sanitizeText(o.files_info, 2000);
  const turnstileToken =
    typeof o.turnstileToken === "string" ? o.turnstileToken.slice(0, 2048) : undefined;

  if (name.length < 1) return { ok: false, error: "Name is required", status: 400 };
  if (!EMAIL_RE.test(email)) return { ok: false, error: "Valid email is required", status: 400 };
  const serviceLabel =
    CONTACT_SERVICE_OPTIONS.includes(service as (typeof CONTACT_SERVICE_OPTIONS)[number])
      ? service
      : PREMIUM_SERVICE_SLUG_TO_LABEL[service];
  if (!serviceLabel) {
    return { ok: false, error: "Invalid service selection", status: 400 };
  }
  if (description.length < 20) {
    return { ok: false, error: "Description must be at least 20 characters", status: 400 };
  }
  const budgetLabel =
    !budget
      ? ""
      : CONTACT_BUDGET_OPTIONS.includes(budget as (typeof CONTACT_BUDGET_OPTIONS)[number])
        ? budget
        : PREMIUM_BUDGET_SLUG_TO_LABEL[budget];
  if (budget && !budgetLabel) {
    return { ok: false, error: "Invalid budget selection", status: 400 };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      company,
      service: serviceLabel,
      description,
      budget: budgetLabel || budget,
      phone,
      filesInfo,
      turnstileToken,
    },
  };
}
