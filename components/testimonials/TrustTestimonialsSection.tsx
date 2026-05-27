/**
 * Client feedback summaries tied to published engagements.
 * Role + organization only (no invented personal names). Quotes are paraphrased.
 */

import Link from "next/link";

type TestimonialMetric = { value: string; suffix: string; label: string };

type TestimonialEntry = {
  quote: string;
  role: string;
  company: string;
  metrics?: TestimonialMetric[];
  caseStudyHref?: string;
  liveHref?: string;
};

const FEATURED: TestimonialEntry = {
  quote:
    '"We run the public shop and the warehouse floor on separate surfaces now. Staff sign into inventory and POS without touching the customer site, and the storefront stayed fast through our busiest drops."',
  role: "Operations lead",
  company: "Extreme Dept Kidz",
  metrics: [
    { value: "2", suffix: "", label: "Surfaces: storefront + staff workspace" },
    { value: "Live", suffix: "", label: "Public URLs you can verify" },
    { value: "Web", suffix: "", label: "Next.js production stack" },
  ],
  caseStudyHref: "/case-studies/extreme-dept-kidz",
  liveHref: "https://extremedeptkidz.com",
};

const CARDS: TestimonialEntry[] = [
  {
    quote:
      '"Drop weeks used to mean chaos in the back room. The warehouse app is where we handle stock counts and POS — it is the system the team opens for operations."',
    role: "Studio manager",
    company: "Hunnid Official",
    caseStudyHref: "/case-studies/hunnid-official",
    liveHref: "https://warehouse.hunnidofficial.com",
  },
  {
    quote:
      '"We needed production software on a real timeline, not another slide deck. The booking stack shipped to market with architecture we could stand behind in public materials."',
    role: "Co-founder",
    company: "Velora (West Africa mobility)",
    caseStudyHref: "/case-studies/velora",
  },
];

function Attribution({ entry }: { entry: TestimonialEntry }) {
  return (
    <div className="flex flex-col gap-1 pt-6 border-t border-[var(--ttg-border)]">
      <span
        className="text-[13px] font-semibold tracking-[0.01em] capitalize"
        style={{ color: "var(--ttg-navy)" }}
      >
        {entry.role}
      </span>
      <span
        className="text-[10px] uppercase tracking-[0.08em]"
        style={{
          fontFamily: "var(--ttg-font-sans)",
          color: "var(--ttg-navy)",
        }}
      >
        {entry.company}
      </span>
      <div className="mt-3 flex flex-col gap-2">
        {entry.caseStudyHref && (
          <Link
            href={entry.caseStudyHref}
            className="text-[10px] uppercase tracking-[0.1em] no-underline transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--ttg-muted)",
            }}
          >
            View engagement overview →
          </Link>
        )}
        {entry.liveHref && (
          <a
            href={entry.liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.1em] no-underline transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--ttg-muted)",
            }}
          >
            View live project ↗
          </a>
        )}
      </div>
    </div>
  );
}

export function TrustTestimonialsSection() {
  return (
    <section
      className="ttg-section border-t border-[var(--ttg-border)] py-20 md:py-[120px] px-6 lg:px-16 relative"
      style={{ background: "var(--ttg-bg)" }}
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="sr-only">
        Client feedback
      </h2>

      <div
        className="text-[10px] uppercase tracking-[0.18em] mb-4 flex items-center gap-4"
        style={{
          fontFamily: "var(--ttg-font-sans)",
          color: "var(--ttg-muted)",
        }}
        aria-hidden
      >
        <span>Client feedback</span>
        <span
          className="flex-1 h-px max-w-[120px]"
          style={{ background: "var(--ttg-border)" }}
        />
      </div>
      <p
        className="text-[11px] max-w-2xl mb-12 leading-relaxed"
        style={{
          fontFamily: "var(--ttg-font-sans)",
          color: "var(--ttg-muted)",
        }}
      >
        Summaries of client feedback on published work. Paraphrased for the site;
        attributed by role and organization, not individual names.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px border border-[var(--ttg-border)]"
        style={{ background: "var(--ttg-border)" }}
      >
        <div
          className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-16 items-center p-8 md:p-16 border-b border-[var(--ttg-border)]"
          style={{ background: "var(--ttg-bg-white)" }}
        >
          <div>
            <span
              className="ttg-serif text-[80px] leading-[0.6] block mb-6"
              style={{ color: "rgba(26,31,46,0.08)" }}
              aria-hidden
            >
              &ldquo;
            </span>
            <p
              className="text-[20px] leading-[1.6] mb-0 italic"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                color: "var(--ttg-navy)",
                marginBottom: "36px",
              }}
            >
              {FEATURED.quote}
            </p>
            <Attribution entry={FEATURED} />
          </div>
          <div className="flex flex-col justify-end gap-5">
            {FEATURED.metrics?.map((m, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 py-5 border-b border-[var(--ttg-border)] last:border-b-0"
              >
                <span
                  className="ttg-serif text-4xl leading-none"
                  style={{ color: "var(--ttg-navy)" }}
                >
                  {m.value}
                  {m.suffix ? (
                    <em className="not-italic text-[var(--ttg-navy)]">
                      {m.suffix}
                    </em>
                  ) : null}
                </span>
                <span
                  className="text-[9px] uppercase tracking-[0.12em]"
                  style={{
                    fontFamily: "var(--ttg-font-sans)",
                    color: "var(--ttg-muted)",
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {CARDS.map((card, i) => (
          <div
            key={i}
            className="p-8 md:p-10 transition-colors duration-300 hover:bg-[var(--ttg-bg)]"
            style={{ background: "var(--ttg-bg-white)" }}
          >
            <span
              className="ttg-serif text-[80px] leading-[0.6] block mb-6"
              style={{ color: "rgba(26,31,46,0.08)" }}
              aria-hidden
            >
              &ldquo;
            </span>
            <p
              className="text-[15px] leading-[1.75] mb-9 italic"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                color: "var(--ttg-navy)",
              }}
            >
              {card.quote}
            </p>
            <Attribution entry={card} />
          </div>
        ))}
      </div>
    </section>
  );
}
