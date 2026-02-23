"use client";

import * as React from "react";
import { Search, Palette, Code, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description: "We help organizations clarify requirements and define technical approach.",
    duration: "1-2 weeks",
    deliverables: ["Requirements document", "Technical strategy", "Project roadmap"],
  },
  {
    icon: Palette,
    title: "Design & Prototyping",
    description: "Designed for clarity. You'll see how the solution works before development begins.",
    duration: "2-3 weeks",
    deliverables: ["UI/UX designs", "Interactive prototypes", "Design system"],
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "Built to support your needs. Continuous testing and regular demos keep you informed.",
    duration: "3–8 weeks (small) · 8–20 weeks (enterprise)",
    deliverables: ["Working software", "Test reports", "Documentation"],
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    description: "Trusted by organizations for reliable deployment and ongoing support.",
    duration: "Ongoing",
    deliverables: ["Live deployment", "Performance reports", "Support & maintenance"],
  },
];

export function ProcessSection() {
  return (
    <AnimatedSection variant="muted" size="default" animation="slide-up" className="border-t border-hairline">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-headline mb-4 md:mb-6">
          Process
        </h2>
        <p className="text-body text-medium-contrast max-w-2xl mx-auto">
          How we approach each project.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8 md:space-y-12 md:pl-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute -left-[33px] top-8 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                
                {/* Content Card */}
                <div className="p-6 md:p-8 rounded-lg border border-border bg-background/50 hover:bg-background/80 hover:border-primary/30 transition-all duration-200">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-high-contrast">
                        {step.title}
                      </h3>
                      <p className="text-sm text-medium-contrast mt-1">{step.duration}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-medium-contrast mb-4">
                    {step.description}
                  </p>
                  
                  {/* Deliverables */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs font-medium text-high-contrast mb-2 uppercase tracking-wider">
                      Deliverables:
                    </p>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-medium-contrast">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No CTA here - flows naturally to FAQ, then dedicated CTA section */}
      </div>
    </AnimatedSection>
  );
}
