/**
 * Server-only EmailJS send via REST API (keys stay off the client).
 * @see https://www.emailjs.com/docs/rest-api/send/
 */

function getEmailJsConfig() {
  const serviceId =
    process.env.EMAILJS_SERVICE_ID ?? process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId =
    process.env.EMAILJS_TEMPLATE_ID ?? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey =
    process.env.EMAILJS_PUBLIC_KEY ?? process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY ?? process.env.EMAILJS_ACCESS_TOKEN;

  return { serviceId, templateId, publicKey, privateKey };
}

export function isEmailJsConfigured(): boolean {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();
  return Boolean(serviceId && templateId && publicKey);
}

/**
 * Sends one email. templateId overrides default (e.g. briefing template).
 * template_params keys must match your EmailJS template variables.
 */
export async function sendEmailJs(
  templateParams: Record<string, string>,
  templateIdOverride?: string
): Promise<void> {
  const { serviceId, templateId, publicKey, privateKey } = getEmailJsConfig();
  const templateIdFinal = templateIdOverride ?? templateId;

  if (!serviceId || !templateIdFinal || !publicKey) {
    throw new Error("EmailJS is not configured (service, template, or public key missing).");
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (privateKey) {
    headers.Authorization = `Bearer ${privateKey}`;
  }

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers,
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateIdFinal,
      user_id: publicKey,
      template_params: templateParams,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`EmailJS send failed (${res.status})`);
  }
}
