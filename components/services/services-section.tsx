"use client";

import { EnhancedServiceCard } from "./enhanced-service-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ScrollAnimation, StaggerGrid, StaggerItem } from "@/components/animations";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/cms-client";
import * as Icons from "lucide-react";

// Helper to get icon component by name
function getIconComponent(iconName: string): React.ComponentType<any> {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<any>>)[iconName];
  return IconComponent || Icons.Code; // Fallback to Code icon
}

export function ServicesSection() {
  return (
      <AnimatedSection 
        id="services" 
        variant="default" 
        size="default" 
        animation="slide-up"
        className="bg-gradient-to-b from-background to-muted/30"
      >
        <ScrollAnimation variant="fadeInUp">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                What We Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions tailored to your business needs. 
              From AI implementation to cloud infrastructure, we deliver excellence in every project.
            </p>
          </div>
        </ScrollAnimation>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = getIconComponent(service.icon);
              return (
                <StaggerItem key={service.id || index}>
                  <EnhancedServiceCard
                    icon={IconComponent as any}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    learnMoreHref={service.href || `/services/${service.id}`}
                    variant={service.variant}
                  />
                </StaggerItem>
              );
            })}
          </StaggerGrid>

      {/* Additional CTA */}
      <ScrollAnimation variant="fadeInUp" delay={0.3}>
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom solution? Let&apos;s discuss your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors group"
          >
            Schedule a Consultation
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </ScrollAnimation>
    </AnimatedSection>
  );
}

