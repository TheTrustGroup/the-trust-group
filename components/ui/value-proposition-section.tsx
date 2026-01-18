"use client";

import * as React from "react";
import { CheckCircle2, Shield, Zap, Target, Users } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const differentiators = [
  {
    icon: Shield,
    title: "Reliability by Design",
    description: "Systems engineered for mission-critical operations. Every component is designed, tested, and deployed with reliability as the primary requirement.",
    benefit: "Systems that operate without failure under critical conditions",
  },
  {
    icon: Target,
    title: "Outcome-Driven Engineering",
    description: "We solve specific problems with measurable results. Every technical decision is evaluated against business objectives and system requirements.",
    benefit: "Solutions that deliver defined outcomes, not just features",
  },
  {
    icon: Zap,
    title: "Systematic Approach",
    description: "Methodical engineering processes ensure consistent quality, predictable timelines, and maintainable systems.",
    benefit: "Predictable delivery with clear milestones and deliverables",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description: "We maintain and evolve systems over time. Ongoing support, security updates, and performance optimization are part of the commitment.",
    benefit: "Systems that improve over time, not degrade",
  },
];

export function ValuePropositionSection() {
  return (
    <AnimatedSection variant="default" size="default" animation="fade-in">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            What Makes Us Different
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Engineering-led approach to building systems that solve real problems and deliver measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="p-6 md:p-8 rounded-lg border border-border bg-background/50 hover:bg-background/80 hover:border-primary/30 transition-all duration-200">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-start gap-2 pt-4 border-t border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
    </AnimatedSection>
  );
}
