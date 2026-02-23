"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Cloud,
  Code,
  Smartphone,
  Globe,
  TrendingUp,
  Shield,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Brain,
  Cloud,
  Code,
  Smartphone,
  Globe,
  TrendingUp,
  Shield,
  Building2,
};

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  /** Icon name (e.g. "Brain") so Server Components can pass a string instead of a component */
  iconName?: string;
  features?: string[];
}

export function ServiceHero({
  title,
  subtitle,
  description,
  iconName,
  features = [],
}: ServiceHeroProps) {
  const Icon = iconName ? ICON_MAP[iconName] : undefined;
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
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" strokeWidth={2} />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA — use Link directly so navigation always fires (no button intercept) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium h-12 px-8 bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium h-12 px-8 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

