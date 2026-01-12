"use client";

import { PremiumServiceCard } from "./premium-service-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ScrollAnimation, StaggerGrid, StaggerItem } from "@/components/animations";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/cms-client";

export function ServicesSection() {
  return (
      <AnimatedSection 
        id="services" 
        variant="default" 
        size="default" 
        animation="slide-up"
        className="relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(0, 184, 230, 0.1) 0%, transparent 50%),
                linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, transparent 50%),
                linear-gradient(45deg, rgba(0, 184, 230, 0.05) 0%, transparent 50%)
              `,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(0, 102, 255, 0.03) 1px, transparent 1px),
                linear-gradient(rgba(0, 102, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-muted/30 pointer-events-none" />

        <div className="relative z-10">
          <ScrollAnimation variant="fadeInUp">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  What We Offer
                </span>
              </div>
              <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Our Services
              </h2>
              <p className="text-base xs:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Comprehensive technology solutions tailored to your business needs. 
                From commercial applications to classified defense systems, we engineer software for the world&apos;s most demanding missions.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <StaggerItem key={service.id || index}>
                <div className="relative">
                  {service.featured && (
                    <div className="absolute -top-3 right-4 z-20 px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full shadow-lg">
                      Strategic
                    </div>
                  )}
                  <PremiumServiceCard
                    serviceId={service.id}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    learnMoreHref={service.href || `/services/${service.id}`}
                    variant={service.variant}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          {/* Additional CTA */}
          <ScrollAnimation variant="fadeInUp" delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Need a custom solution? Let&apos;s discuss your specific requirements.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors group min-h-[44px] px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Schedule a consultation"
              >
                Schedule a Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform stroke-current dark:stroke-current" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </AnimatedSection>
  );
}

