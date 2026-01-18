"use client";

import * as React from "react";
import { Search, Palette, Code, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, challenges, and target audience. Through workshops and analysis, we create a comprehensive strategy.",
    duration: "1-2 weeks",
    deliverables: ["Requirements document", "Technical strategy", "Project roadmap"],
  },
  {
    icon: Palette,
    title: "Design & Prototyping",
    description: "Our design team creates user-centered designs and interactive prototypes. You'll see exactly how your solution will look and work before development begins.",
    duration: "2-3 weeks",
    deliverables: ["UI/UX designs", "Interactive prototypes", "Design system"],
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "Agile development with continuous testing, regular demos, and quality assurance. You're involved every step of the way with transparent communication.",
    duration: "6-12 weeks",
    deliverables: ["Working software", "Test reports", "Documentation"],
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    description: "Smooth deployment, performance monitoring, and ongoing optimization. We ensure your solution performs at its best from day one.",
    duration: "Ongoing",
    deliverables: ["Live deployment", "Performance reports", "Support & maintenance"],
  },
];

export function ProcessSection() {
  return (
    <AnimatedSection variant="muted" size="default" animation="slide-up">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
          How We Work
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Systematic approach to building reliable systems.
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
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{step.duration}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Deliverables */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs font-medium text-foreground mb-2 uppercase tracking-wider">
                      Deliverables:
                    </p>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary/70 flex-shrink-0" />
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

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
