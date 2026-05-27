"use client";

import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation";
import { Briefcase, Shield, Globe, Code2 } from "lucide-react";

const pillars = [
  {
    icon: Briefcase,
    label: "Production focus",
    description: "Software built to run in market, not slide decks.",
  },
  {
    icon: Shield,
    label: "Clear disclosure",
    description: "Live, limited, classified, and pipeline work labeled on /work.",
  },
  {
    icon: Globe,
    label: "Verifiable proof",
    description: "Public URLs and case studies where clients allow.",
  },
  {
    icon: Code2,
    label: "Full-stack delivery",
    description: "Web, operations tooling, mobility, and enterprise systems.",
  },
];

export function StatisticsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {pillars.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="text-center">
            <div className="bg-primary/10 text-primary w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon className="h-8 w-8 md:h-10 md:w-10" strokeWidth={2} aria-hidden />
            </div>
            <p className="text-base md:text-lg font-semibold text-foreground mb-2">
              {item.label}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
