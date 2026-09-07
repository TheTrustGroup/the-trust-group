import { TTGSectionHeading } from "@/components/ttg/section-heading";

const proofPoints = [
  {
    number: "01",
    title: "Systematic Approach",
    description:
      "We follow established engineering practices and systematic approaches that ensure consistent, reliable outcomes.",
  },
  {
    number: "02",
    title: "Enterprise Standards",
    description:
      "Every system is built to meet enterprise-grade requirements for security, performance, and maintainability.",
  },
  {
    number: "03",
    title: "Long-Term Design",
    description:
      "We design systems with long-term operation in mind, ensuring they remain reliable and maintainable over time.",
  },
];

export function WhyTrustUs() {
  return (
    <section
      className="ttg-section border-t border-[var(--ttg-border)] py-20 md:py-[120px] px-6 lg:px-16"
      style={{ background: "var(--ttg-bg-white)" }}
      aria-labelledby="why-trust-us-heading"
    >
      <TTGSectionHeading id="why-trust-us-heading" title="Why Trust Us" />

      <div className="ttg-cells grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {proofPoints.map((point) => (
          <div key={point.number} className="ttg-cell p-8 md:p-10">
            <span
              className="ttg-serif block text-[40px] leading-none mb-10"
              style={{ color: "var(--ttg-muted-lt)" }}
              aria-hidden
            >
              {point.number}
            </span>
            <h3
              className="ttg-serif text-[26px] leading-[1.1] mb-4"
              style={{ color: "var(--ttg-navy)" }}
            >
              {point.title}
            </h3>
            <p className="ttg-body">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
