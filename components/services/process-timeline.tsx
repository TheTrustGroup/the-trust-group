"use client";

import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  title: string;
  description: string;
  duration?: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  title?: string;
  description?: string;
}

export function ProcessTimeline({
  steps,
  title = "Our Process",
  description = "A proven methodology for delivering exceptional results",
}: ProcessTimelineProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 md:gap-8 items-start"
                >
                  {/* Step Number/Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl border-4 border-background shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      {step.duration && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          {step.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

