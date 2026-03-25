import { generateBreadcrumbs, generateStructuredData } from "@/lib/seo";
import { ServiceHero } from "@/components/services/service-hero";
import { Section } from "@/components/ui/section";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceContactForm } from "@/components/services/service-contact-form";
import { CheckCircle2, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import type { ServicePageDefinition } from "@/data/service-pages/types";

interface ServicePageTemplateProps {
  service: ServicePageDefinition;
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
  const capSectionVariant = cap.sectionVariant ?? "default";

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
      <main className="min-h-screen">
        <ServiceHero
          title={service.hero.title}
          subtitle={service.hero.subtitle}
          description={service.hero.description}
          iconName={service.hero.iconName}
          features={service.hero.features}
        />

        {service.whySection && (
          <Section variant="default" size="default">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {service.whySection.title}
              </h2>
              {service.whySection.intro.trim() ? (
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {service.whySection.intro}
                </p>
              ) : null}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {service.whySection.items.map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl font-bold text-primary/30">{item.number}</div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </Section>
        )}

        <Section variant={capSectionVariant} size="default">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
                {cap.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                {cap.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cap.items.map((item, index) => (
                <Card key={index} className={cap.cardClassName}>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    {item.description.trim() ? (
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    ) : null}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {service.compliance && (
          <Section variant="default" size="default">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {service.compliance.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {service.compliance.intro}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {service.compliance.items.map((standard, index) => (
                <Card key={index} className="border-2 text-center">
                  <CardHeader>
                    <CardTitle className="text-xl">{standard.title}</CardTitle>
                    {standard.description.trim() ? (
                      <CardDescription className="text-base">{standard.description}</CardDescription>
                    ) : null}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </Section>
        )}

        <ProcessTimeline
          steps={service.process.steps}
          title={service.process.title}
          description={service.process.description}
        />

        {service.techStack && (
          <Section variant="muted" size="default">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {service.techStack.title}
              </h2>
              <p className="text-lg text-muted-foreground">{service.techStack.intro}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {service.techStack.tags.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-background border-2 border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>
        )}

        {service.caseStudies && (
          <Section variant="default" size="default">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {service.caseStudies.title}
              </h2>
              <p className="text-lg text-muted-foreground">{service.caseStudies.intro}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {service.caseStudies.items.map((study, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription className="text-base">{study.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success" />
                          <span className="text-foreground font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>
        )}

        {service.pricingBand && (
          <Section variant="primary" size="default" className="bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {service.pricingBand.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">{service.pricingBand.intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {service.pricingBand.columns.map((col, i) => (
                  <div key={i} className="p-6 rounded-xl bg-background border-2 border-border">
                    <h3 className="font-bold text-lg mb-2 text-foreground">{col.title}</h3>
                    <p className="text-muted-foreground text-sm">{col.description}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Section>
        )}

        {service.classifiedNote && (
          <Section variant="primary" size="default" className="bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="max-w-3xl mx-auto text-center">
              <Lock className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                {service.classifiedNote.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 whitespace-pre-line">
                {service.classifiedNote.body}
              </p>
              <Button size="lg" className="group" asChild>
                <Link href={service.classifiedNote.ctaHref}>
                  {service.classifiedNote.ctaLabel}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Section>
        )}

        <ServiceFAQ faqs={service.faqs} />

        <ServiceContactForm
          serviceName={service.contact.serviceName}
          prefillService={service.contact.prefillService}
        />
      </main>
    </>
  );
}
