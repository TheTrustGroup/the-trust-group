import Link from "next/link";
import { TTGSectionHeading } from "@/components/ttg/section-heading";

const steps = [
  { number: "01", title: "Discovery", duration: "1–2 weeks" },
  { number: "02", title: "Design", duration: "2–3 weeks" },
  {
    number: "03",
    title: "Development",
    duration: "3–8 weeks (small) · 8–20 weeks (enterprise)",
  },
  { number: "04", title: "Launch", duration: "Ongoing" },
];

export function ProcessSectionSimplified() {
  return (
    <section
      className="ttg-section border-t border-[var(--ttg-border)] py-20 md:py-[120px] px-6 lg:px-16"
      style={{ background: "var(--ttg-bg-white)" }}
      aria-labelledby="process-heading"
    >
      <TTGSectionHeading
        id="process-heading"
        title="How We Work"
        description="A systematic approach to delivering reliable systems."
        aside={
          <Link href="/services" className="ttg-text-link">
            View detailed process <span aria-hidden>→</span>
          </Link>
        }
      />

      <ol className="ttg-cells m-0 list-none grid-cols-2 p-0 md:grid-cols-4">
        {steps.map((step) => (
          <li key={step.number} className="ttg-cell p-8 md:p-10">
            <span
              className="ttg-serif block text-[40px] leading-none mb-10"
              style={{ color: "var(--ttg-muted-lt)" }}
              aria-hidden
            >
              {step.number}
            </span>
            <h3
              className="ttg-serif text-[24px] leading-[1.1] mb-3"
              style={{ color: "var(--ttg-navy)" }}
            >
              {step.title}
            </h3>
            <p className="ttg-body text-[13px]">{step.duration}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
