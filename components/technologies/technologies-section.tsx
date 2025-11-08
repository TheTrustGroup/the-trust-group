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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(0, 184, 230, 0.1) 0%, transparent 50%),
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
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-muted/20 pointer-events-none" />

      <div className="relative z-10">
        <ScrollAnimation variant="fadeInUp">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Our Arsenal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Tech We Love
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive expertise across the entire technology stack, from AI and machine learning 
              to cloud infrastructure and modern development frameworks.
            </p>
          </div>
        </ScrollAnimation>

        {/* Premium Tech Showcase */}
        <PremiumTechShowcase />

        {/* Stats Footer */}
        <ScrollAnimation variant="fadeInUp" delay={0.3}>
          <div className="mt-16 pt-8 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {technologies.length}+
                </div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {technologyCategories.length - 1}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {technologies.filter((t) => t.proficiency === "expert").length}+
                </div>
                <div className="text-sm text-muted-foreground">Expert Level</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Coverage</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </AnimatedSection>
  );
}

