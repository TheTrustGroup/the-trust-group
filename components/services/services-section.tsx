"use client";

import { PremiumServiceCard } from "./premium-service-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerGrid, StaggerItem } from "@/components/animations";
import { services } from "@/lib/cms-client";
import type { Service } from "@/data/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  servicesToShow?: Service[];
  maxItems?: number;
}

export function ServicesSection({ 
  servicesToShow, 
  maxItems = 3 
}: ServicesSectionProps = {}) {
  // Show featured services first, limit to maxItems
  const displayedServices = servicesToShow || 
    services
      .filter(service => service.featured)
      .slice(0, maxItems)
      .concat(
        services
          .filter(service => !service.featured)
          .slice(0, Math.max(0, maxItems - services.filter(s => s.featured).length))
      )
      .slice(0, maxItems);

  return (
    <AnimatedSection 
      id="services" 
      variant="default" 
      size="default" 
      animation="slide-up"
      className="relative overflow-hidden border-t border-hairline"
    >
      <div className="relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-headline mb-4 md:mb-6">
            Solutions
          </h2>
          <p className="text-body text-medium-contrast max-w-2xl mx-auto">
            What we build.
          </p>
        </div>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-apple mb-8 md:mb-12">
          {displayedServices.map((service, index) => (
            <StaggerItem key={service.id || index}>
              <div className="relative">
                {service.featured && (
                  <div className="absolute -top-3 right-4 z-20 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-apple">
                    Strategic
                  </div>
                )}
                <PremiumServiceCard
                  serviceId={service.id}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  variant={service.variant}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Secondary CTA */}
        <div className="text-center">
          <Link 
            href="/services" 
            className="btn-apple inline-flex items-center gap-2"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}

