import Link from "next/link";
import { TTGSectionHeading } from "@/components/ttg/section-heading";
import { services } from "@/lib/cms-client";
import type { Service } from "@/data/types";

interface ServicesSectionProps {
  servicesToShow?: Service[];
  maxItems?: number;
  /** Use 4 columns on large screens when the grid has a multiple of four. */
  lgColumns?: 3 | 4;
  /** Render the title as the page h1 (Capabilities page) or a section h2. */
  headingLevel?: "h1" | "h2";
  title?: string;
  description?: string;
}

function capabilityLabel(service: Service): string | null {
  switch (service.capabilityLabel) {
    case "strategic":
      return "Strategic";
    case "emerging":
      return "Emerging";
    case undefined:
      return service.featured ? "Strategic" : null;
    default: {
      const exhaustive: never = service.capabilityLabel;
      return exhaustive;
    }
  }
}

function pickServices(servicesToShow: Service[] | undefined, maxItems: number): Service[] {
  if (servicesToShow?.length) return servicesToShow.slice(0, maxItems);
  const featured = services.filter((s) => s.featured);
  const rest = services.filter((s) => !s.featured);
  return [...featured, ...rest].slice(0, maxItems);
}

function ServiceCard({
  service,
  headingLevel,
}: {
  service: Service;
  headingLevel: "h2" | "h3";
}) {
  const label = capabilityLabel(service);
  const href = service.href ?? `/services/${service.id}`;
  const Heading = headingLevel;

  return (
    <Link
      href={href}
      className="ttg-cell flex flex-col p-8 md:p-10 no-underline"
      aria-label={`${service.title} — view capability`}
    >
      <div className="mb-8 flex items-start justify-between gap-4">
        <Heading
          className="ttg-serif text-[26px] leading-[1.1]"
          style={{ color: "var(--ttg-navy)" }}
        >
          {service.title}
        </Heading>
        {label && (
          <span
            className="shrink-0 border px-2.5 py-1 text-[9px] uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--ttg-muted)",
              borderColor: "var(--ttg-border)",
            }}
          >
            {label}
          </span>
        )}
      </div>

      <p className="ttg-body mb-8">{service.description}</p>

      {service.features.length > 0 && (
        <ul className="m-0 flex-1 list-none border-t border-[var(--ttg-border)] p-0 pt-6">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="ttg-body py-1.5 text-[13px]"
              style={{ color: "var(--ttg-navy)" }}
            >
              {feature}
            </li>
          ))}
        </ul>
      )}

      <span className="ttg-text-link mt-10">
        View capability <span aria-hidden>→</span>
      </span>
    </Link>
  );
}

export function ServicesSection({
  servicesToShow,
  maxItems = 3,
  lgColumns = 3,
  headingLevel = "h2",
  title = "Solutions",
  description = "What we build.",
}: ServicesSectionProps = {}) {
  const displayed = pickServices(servicesToShow, maxItems);

  return (
    <section
      id="services"
      className="ttg-section border-t border-[var(--ttg-border)] py-20 md:py-[120px] px-6 lg:px-16"
      style={{ background: "var(--ttg-bg)" }}
      aria-labelledby="services-heading"
    >
      <TTGSectionHeading
        id="services-heading"
        as={headingLevel}
        title={title}
        description={description}
      />

      <div
        className={`ttg-cells grid-cols-1 sm:grid-cols-2 ${
          lgColumns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {displayed.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            headingLevel={headingLevel === "h1" ? "h2" : "h3"}
          />
        ))}
      </div>
    </section>
  );
}
