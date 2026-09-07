/**
 * Disclosure posture — replaces named client testimonials.
 * Past engagements are confidential; we do not publish quotes that identify clients.
 */

import Link from "next/link";

const POINTS = [
  {
    title: "Client identity withheld",
    body: "We do not publish brand names, logos, or production URLs without explicit permission. Most clients prefer it that way.",
  },
  {
    title: "Anonymous summaries only",
    body: "When we reference past work publicly, it is industry context and outcome shape — never enough to identify the organization.",
  },
  {
    title: "Detail under NDA",
    body: "Architecture, metrics, and references are shared in a private briefing after mutual confidentiality is in place.",
  },
] as const;

export function TrustTestimonialsSection() {
  return (
    <section
      className="ttg-section border-t border-[var(--ttg-border)] py-20 md:py-[120px] px-6 lg:px-16 relative"
      style={{ background: "var(--ttg-bg)" }}
      aria-labelledby="disclosure-heading"
    >
      <p
        className="text-[10px] uppercase tracking-[0.18em] mb-4 flex items-center gap-4"
        style={{
          fontFamily: "var(--ttg-font-sans)",
          color: "var(--ttg-muted)",
        }}
      >
        <span>How we disclose work</span>
        <span
          className="flex-1 h-px max-w-[120px]"
          style={{ background: "var(--ttg-border)" }}
          aria-hidden
        />
      </p>

      <h2
        id="disclosure-heading"
        className="ttg-serif text-[clamp(32px,4vw,52px)] leading-[1.02] tracking-[-0.02em] mb-6 max-w-[720px]"
        style={{ color: "var(--ttg-navy)" }}
      >
        Past work is confidential by default.
      </h2>

      <p
        className="text-[15px] leading-[1.75] max-w-2xl mb-14"
        style={{
          fontFamily: "var(--ttg-font-sans)",
          color: "var(--ttg-muted)",
        }}
      >
        Not every client wants their systems on a public portfolio. We treat
        that as the standard, not the exception.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px border border-[var(--ttg-border)]"
        style={{ background: "var(--ttg-border)" }}
      >
        {POINTS.map((point) => (
          <div
            key={point.title}
            className="p-8 md:p-10"
            style={{ background: "var(--ttg-bg-white)" }}
          >
            <h3
              className="ttg-serif text-[24px] leading-[1.15] mb-4"
              style={{ color: "var(--ttg-navy)" }}
            >
              {point.title}
            </h3>
            <p className="ttg-body">{point.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/contact" className="ttg-btn-pill">
          Request a Private Briefing
        </Link>
      </div>
    </section>
  );
}
