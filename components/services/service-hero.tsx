"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon?: LucideIcon;
  features?: string[];
}

export function ServiceHero({
  title,
  subtitle,
  description,
  icon: Icon,
  features = [],
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            {Icon && <Icon className="h-4 w-4 text-primary" />}
            <span className="text-sm font-medium text-primary">{subtitle}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {title}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          {features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

