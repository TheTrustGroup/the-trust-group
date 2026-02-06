"use client";

import * as React from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { PremiumTechShowcase } from "./premium-tech-showcase";
import { ScrollAnimation } from "@/components/animations";
import { technologies, technologyCategories } from "@/lib/cms-client";

export function TechnologiesSection() {
  return (
    <AnimatedSection
      id="technologies"
      variant="default"
      size="default"
      animation="slide-up"
      className="relative overflow-hidden"
    >
      {/* Background patterns removed - decorative only */}

      <div className="relative z-10">
        <ScrollAnimation variant="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast">
              Technologies
            </h2>
            <p className="text-lg md:text-xl text-medium-contrast max-w-3xl mx-auto">
              Expertise across AI, cloud infrastructure, and modern development frameworks.
            </p>
          </div>
        </ScrollAnimation>

        {/* Premium Tech Showcase */}
        <div>
          <h3 className="sr-only">Technology Stack</h3>
          <PremiumTechShowcase />
        </div>

        {/* Stats removed - doesn't build meaningful credibility */}
      </div>
    </AnimatedSection>
  );
}

