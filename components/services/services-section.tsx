"use client";

import { PremiumServiceCard } from "./premium-service-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerGrid, StaggerItem } from "@/components/animations";
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

        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              Solutions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Technology systems engineered for reliability, security, and scale.
            </p>
          </div>

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

        </div>
      </AnimatedSection>
  );
}

