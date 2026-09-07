import Link from "next/link";
import { TTGSectionHeading } from "@/components/ttg/section-heading";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
}

/**
 * Capability page hero — TTG cream/navy, no gradient blobs or icon pills.
 */
export function ServiceHero({
  title,
  subtitle,
  description,
  features = [],
}: ServiceHeroProps) {
  return (
    <section
      className="ttg-section border-b border-[var(--ttg-border)] px-6 pb-16 pt-12 lg:px-16 lg:pb-24 lg:pt-16"
      style={{ background: "var(--ttg-bg)" }}
      aria-labelledby="service-hero-heading"
    >
      <p
        className="mb-6 text-[10px] uppercase tracking-[0.18em]"
        style={{
          fontFamily: "var(--ttg-font-sans)",
          color: "var(--ttg-muted)",
        }}
      >
        {subtitle}
      </p>
      <h1
        id="service-hero-heading"
        className="ttg-serif mb-6 max-w-[900px] text-[clamp(40px,5.5vw,72px)] leading-[1.02] tracking-[-0.02em]"
        style={{ color: "var(--ttg-navy)" }}
      >
        {title}
      </h1>
      <p
        className="mb-10 max-w-[560px] whitespace-pre-line text-[15px] leading-[1.75]"
        style={{
          fontFamily: "var(--ttg-font-sans)",
          color: "var(--ttg-muted)",
        }}
      >
        {description}
      </p>
      {features.length > 0 && (
        <ul className="mb-12 max-w-[640px] list-none space-y-3 border-t border-[var(--ttg-border)] p-0 pt-8">
          {features.map((feature) => (
            <li
              key={feature}
              className="text-[14px] leading-[1.6]"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                color: "var(--ttg-navy)",
              }}
            >
              {feature}
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <Link href="/contact" className="ttg-btn-pill">
          Request a Private Briefing
        </Link>
        <Link href="/work" className="ttg-text-link">
          View engagements <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
