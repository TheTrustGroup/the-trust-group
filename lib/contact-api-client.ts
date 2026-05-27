export class ContactApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ContactApiError";
    this.status = status;
  }
}

export async function postContactJson(
  path: "/api/contact" | "/api/briefing",
  body: Record<string, unknown>
): Promise<void> {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = (await res.json().catch(() => ({}))) as { error?: string };

  if (!res.ok) {
    throw new ContactApiError(data.error || "Request failed", res.status);
  }
}
