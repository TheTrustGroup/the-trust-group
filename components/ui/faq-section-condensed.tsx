import Link from "next/link";
import { TTGSectionHeading } from "@/components/ttg/section-heading";
import { faqEntries, condensedFAQCount } from "@/lib/faq-data";

const topFAQs = faqEntries.slice(0, condensedFAQCount);

export function FAQSectionCondensed() {
  return (
    <section
      className="ttg-section border-t border-[var(--ttg-border)] py-20 md:py-[120px] px-6 lg:px-16"
      style={{ background: "var(--ttg-bg)" }}
      aria-labelledby="faq-heading"
    >
      <TTGSectionHeading
        id="faq-heading"
        title="Common Questions"
        aside={
          faqEntries.length > condensedFAQCount ? (
            <Link href="/faq" className="ttg-text-link">
              View all FAQs <span aria-hidden>→</span>
            </Link>
          ) : undefined
        }
      />

      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 border-t border-[var(--ttg-border)]">
        {topFAQs.map((faq) => (
          <div
            key={faq.question}
            className="border-b border-[var(--ttg-border)] py-10"
          >
            <dt
              className="ttg-serif text-[24px] leading-[1.15] mb-4"
              style={{ color: "var(--ttg-navy)" }}
            >
              {faq.question}
            </dt>
            <dd className="ttg-body max-w-[560px]">
              {faq.answer}
              {faq.ctaLink && (
                <>
                  {" "}
                  <Link
                    href={faq.ctaLink.href}
                    className="underline underline-offset-4 decoration-[var(--ttg-border)] hover:decoration-[var(--ttg-navy)] transition-colors"
                    style={{ color: "var(--ttg-navy)" }}
                  >
                    {faq.ctaLink.label}
                  </Link>
                </>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
