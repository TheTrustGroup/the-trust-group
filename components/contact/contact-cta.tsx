import Link from "next/link";
import { siteConfig } from "@/lib/cms-client";

/**
 * Homepage contact block. One action (the private briefing) plus a direct
 * email; the full form lives on /contact. Server component, no motion.
 */
export function ContactCTA() {
  const email = siteConfig.contact.email;

  return (
    <section
      id="contact"
      className="ttg-section border-t border-[var(--ttg-border)] py-20 md:py-[120px] px-6 lg:px-16"
      style={{ background: "var(--ttg-bg)" }}
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[720px]">
          <p
            className="text-[10px] uppercase tracking-[0.18em] mb-6 flex items-center gap-4"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--ttg-muted)",
            }}
          >
            <span>Private briefing</span>
            <span
              className="flex-1 h-px max-w-[120px]"
              style={{ background: "var(--ttg-border)" }}
              aria-hidden
            />
          </p>
          <h2
            id="contact-heading"
            className="ttg-serif text-[clamp(36px,4.5vw,64px)] leading-[1.02] tracking-[-0.02em]"
            style={{ color: "var(--ttg-navy)" }}
          >
            Start a Conversation
          </h2>
          <p
            className="mt-6 max-w-[520px] text-[15px] leading-[1.75]"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--ttg-muted)",
            }}
          >
            Share your requirements and we&apos;ll respond within 24 hours.
            Confidential, no obligation, NDA available from the first
            conversation.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 lg:items-end">
          <Link href="/contact" className="ttg-btn-pill">
            Request a Private Briefing
          </Link>
          <a
            href={`mailto:${email}`}
            className="ttg-text-link ttg-text-link--plain"
          >
            or email {email}
          </a>
          <Link href="/security" className="ttg-text-link ttg-text-link--plain">
            How we handle sensitive work <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
