import { TTGSectionHeading } from "@/components/ttg/section-heading";

interface ProcessStep {
  title: string;
  description: string;
  duration?: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  title?: string;
  description?: string;
}

export function ProcessTimeline({
  steps,
  title = "Our Process",
  description = "A systematic approach to delivering reliable systems.",
}: ProcessTimelineProps) {
  return (
    <section
      className="ttg-section border-t border-[var(--ttg-border)] px-6 py-20 md:py-[100px] lg:px-16"
      style={{ background: "var(--ttg-bg)" }}
      aria-labelledby="service-process-heading"
    >
      <TTGSectionHeading
        id="service-process-heading"
        title={title}
        description={description}
      />
      <ol className="ttg-cells m-0 list-none grid-cols-1 p-0 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="ttg-cell p-8 md:p-10">
            <span
              className="ttg-serif mb-8 block text-[36px] leading-none"
              style={{ color: "var(--ttg-muted-lt)" }}
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3
              className="ttg-serif mb-2 text-[22px] leading-[1.15]"
              style={{ color: "var(--ttg-navy)" }}
            >
              {step.title}
            </h3>
            {step.duration && (
              <p className="ttg-label mb-4">{step.duration}</p>
            )}
            <p className="ttg-body">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
