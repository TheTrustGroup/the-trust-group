import { TTGSectionHeading } from "@/components/ttg/section-heading";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
  title?: string;
}

/** Always-visible FAQ list — no accordion hide-behind-JS. */
export function ServiceFAQ({
  faqs,
  title = "Common Questions",
}: ServiceFAQProps) {
  if (faqs.length === 0) return null;

  return (
    <section
      className="ttg-section border-t border-[var(--ttg-border)] px-6 py-20 md:py-[100px] lg:px-16"
      style={{ background: "var(--ttg-bg-white)" }}
      aria-labelledby="service-faq-heading"
    >
      <TTGSectionHeading id="service-faq-heading" title={title} />
      <dl className="grid grid-cols-1 gap-x-16 border-t border-[var(--ttg-border)] md:grid-cols-2 lg:gap-x-24">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="border-b border-[var(--ttg-border)] py-10"
          >
            <dt
              className="ttg-serif mb-4 text-[22px] leading-[1.15]"
              style={{ color: "var(--ttg-navy)" }}
            >
              {faq.question}
            </dt>
            <dd className="ttg-body max-w-[560px]">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
