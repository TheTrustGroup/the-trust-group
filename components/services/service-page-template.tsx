import Link from "next/link";
import { generateBreadcrumbs, generateStructuredData } from "@/lib/seo";
import { ServiceHero } from "@/components/services/service-hero";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceContactForm } from "@/components/services/service-contact-form";
import { TTGSectionHeading } from "@/components/ttg/section-heading";
import type { ServicePageDefinition } from "@/data/service-pages/types";

interface ServicePageTemplateProps {
  service: ServicePageDefinition;
}

function CapabilitySection({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="ttg-section border-t border-[var(--ttg-border)] px-6 py-20 md:py-[100px] lg:px-16"
      style={{ background: "var(--ttg-bg-white)" }}
    >
      <TTGSectionHeading title={title} description={intro} />
      {children}
    </section>
  );
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.breadcrumbLabel, url: `/services/${service.slug}` },
  ]);

  const serviceSchema = generateStructuredData("Service", {
    serviceType: service.schemaServiceType,
    description: service.schemaDescription,
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
  });

  const cap = service.capabilities;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServiceHero
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        description={service.hero.description}
        features={service.hero.features}
      />

      {service.whySection && (
        <CapabilitySection
          title={service.whySection.title}
          intro={service.whySection.intro.trim() || undefined}
        >
          <div className="ttg-cells grid-cols-1 md:grid-cols-2">
            {service.whySection.items.map((item) => (
              <div key={item.number} className="ttg-cell p-8 md:p-10">
                <span
                  className="ttg-serif mb-8 block text-[36px] leading-none"
                  style={{ color: "var(--ttg-muted-lt)" }}
                  aria-hidden
                >
                  {item.number}
                </span>
                <h3
                  className="ttg-serif mb-3 text-[24px] leading-[1.15]"
                  style={{ color: "var(--ttg-navy)" }}
                >
                  {item.title}
                </h3>
                <p className="ttg-body">{item.description}</p>
              </div>
            ))}
          </div>
        </CapabilitySection>
      )}

      <CapabilitySection title={cap.title} intro={cap.intro}>
        <div className="ttg-cells grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cap.items.map((item) => (
            <div key={item.title} className="ttg-cell flex flex-col p-8 md:p-10">
              <h3
                className="ttg-serif mb-3 text-[24px] leading-[1.15]"
                style={{ color: "var(--ttg-navy)" }}
              >
                {item.title}
              </h3>
              {item.description.trim() ? (
                <p className="ttg-body mb-6">{item.description}</p>
              ) : null}
              <ul className="mt-auto list-none space-y-2 border-t border-[var(--ttg-border)] p-0 pt-5">
                {item.features.map((feature) => (
                  <li key={feature} className="ttg-body text-[13px]">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CapabilitySection>

      {service.compliance && (
        <CapabilitySection
          title={service.compliance.title}
          intro={service.compliance.intro}
        >
          <div className="ttg-cells grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {service.compliance.items.map((standard) => (
              <div key={standard.title} className="ttg-cell p-8 md:p-10">
                <h3
                  className="ttg-serif mb-3 text-[22px] leading-[1.15]"
                  style={{ color: "var(--ttg-navy)" }}
                >
                  {standard.title}
                </h3>
                {standard.description.trim() ? (
                  <p className="ttg-body">{standard.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        </CapabilitySection>
      )}

      <ProcessTimeline
        steps={service.process.steps}
        title={service.process.title}
        description={service.process.description}
      />

      {service.techStack && (
        <CapabilitySection
          title={service.techStack.title}
          intro={service.techStack.intro}
        >
          <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-3 border-t border-[var(--ttg-border)] p-0 pt-8">
            {service.techStack.tags.map((tech) => (
              <li
                key={tech}
                className="text-[13px] uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-navy)",
                }}
              >
                {tech}
              </li>
            ))}
          </ul>
        </CapabilitySection>
      )}

      {service.caseStudies && (
        <CapabilitySection
          title={service.caseStudies.title}
          intro={service.caseStudies.intro}
        >
          <div className="ttg-cells grid-cols-1 md:grid-cols-2">
            {service.caseStudies.items.map((study) => {
              const body = (
                <div className="ttg-cell flex h-full flex-col p-8 md:p-10">
                  <h3
                    className="ttg-serif mb-3 text-[24px] leading-[1.15]"
                    style={{ color: "var(--ttg-navy)" }}
                  >
                    {study.title}
                  </h3>
                  <p className="ttg-body mb-6">{study.description}</p>
                  <ul className="mt-auto list-none space-y-2 border-t border-[var(--ttg-border)] p-0 pt-5">
                    {study.results.map((result) => (
                      <li key={result} className="ttg-body text-[13px]">
                        {result}
                      </li>
                    ))}
                  </ul>
                  {study.href && (
                    <p className="ttg-text-link mt-8">
                      {study.href.startsWith("/case-studies/")
                        ? "Read case study →"
                        : "Request overview →"}
                    </p>
                  )}
                </div>
              );
              return study.href ? (
                <Link
                  key={study.title}
                  href={study.href}
                  className="block no-underline"
                >
                  {body}
                </Link>
              ) : (
                <div key={study.title}>{body}</div>
              );
            })}
          </div>
        </CapabilitySection>
      )}

      {service.pricingBand && (
        <CapabilitySection
          title={service.pricingBand.title}
          intro={service.pricingBand.intro}
        >
          <div className="ttg-cells mb-10 grid-cols-1 md:grid-cols-3">
            {service.pricingBand.columns.map((col) => (
              <div key={col.title} className="ttg-cell p-8 md:p-10">
                <h3
                  className="ttg-serif mb-3 text-[22px] leading-[1.15]"
                  style={{ color: "var(--ttg-navy)" }}
                >
                  {col.title}
                </h3>
                <p className="ttg-body">{col.description}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="ttg-btn-pill">
            Get a Custom Quote
          </Link>
        </CapabilitySection>
      )}

      {service.classifiedNote && (
        <section
          className="ttg-section border-t border-[var(--ttg-border)] px-6 py-20 md:py-[100px] lg:px-16"
          style={{ background: "var(--ttg-bg)" }}
        >
          <TTGSectionHeading
            title={service.classifiedNote.title}
            description={service.classifiedNote.body}
          />
          <Link href={service.classifiedNote.ctaHref} className="ttg-btn-pill">
            {service.classifiedNote.ctaLabel}
          </Link>
        </section>
      )}

      <ServiceFAQ faqs={service.faqs} />

      <ServiceContactForm
        serviceName={service.contact.serviceName}
        prefillService={service.contact.prefillService}
      />
    </>
  );
}
