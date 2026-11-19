import { TTGSectionHeading } from "@/components/ttg/section-heading";

const proofPoints = [
  {
    number: "01",
    title: "Architecture before code",
    description:
      "Every engagement starts with a written design and a milestone-by-milestone plan. Problems surface on paper, not in production.",
  },
  {
    number: "02",
    title: "Confidential from the first call",
    description:
      "A mutual NDA before any detail is shared. Client names, screenshots and production URLs are never published without permission.",
  },
  {
    number: "03",
    title: "Built for real conditions",
    description:
      "Heat, dust, unreliable power and patchy connectivity are design inputs, not surprises. Systems are planned for where they will actually run.",
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
