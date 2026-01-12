"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Shield, Zap, Target, Users } from "lucide-react";
import { ScrollAnimation } from "@/components/animations";
import { AnimatedSection } from "./animated-section";

const differentiators = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "We leverage cutting-edge AI and modern technologies to deliver solutions that give you a competitive edge.",
    benefit: "Stay ahead of the competition with future-proof solutions",
  },
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "500+ successful projects, 98% client satisfaction, and 10+ years of delivering excellence.",
    benefit: "Work with a trusted partner with demonstrated results",
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Agile methodologies and experienced teams mean faster time-to-market without compromising quality.",
    benefit: "Launch faster and start seeing ROI sooner",
  },
  {
    icon: Target,
    title: "Business-Focused",
    description: "We don't just build technology. We solve business problems and drive measurable results.",
    benefit: "Solutions aligned with your business objectives",
  },
  {
    icon: Users,
    title: "Dedicated Partnership",
    description: "From concept to launch and beyond, we are with you every step of the way, providing ongoing support.",
    benefit: "Long-term partnership, not just a one-time project",
  },
];

export function ValuePropositionSection() {
  return (
    <AnimatedSection variant="default" size="default" animation="fade-in">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 30% 50%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 50%, rgba(0, 184, 230, 0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10">
          <ScrollAnimation variant="fadeInUp">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
                What Makes Us Different
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                We combine technical excellence with business acumen to deliver solutions that don&apos;t just work—they transform your business.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollAnimation key={index} variant="fadeInUp" delay={index * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative p-6 md:p-8 rounded-2xl border-2 border-border bg-background/60 backdrop-blur-sm hover:border-primary/40 hover:bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                    
                    {/* Icon */}
                    <div className="relative mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-7 w-7 text-primary stroke-current" strokeWidth={2} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-start gap-2 pt-4 border-t border-border/50">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5 stroke-current" strokeWidth={2} fill="currentColor" />
                      <p className="text-sm text-success font-medium leading-relaxed">
                        {item.benefit}
                      </p>
                    </div>
                  </motion.div>
                </ScrollAnimation>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <ScrollAnimation variant="fadeInUp" delay={0.6}>
            <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-sm md:text-base text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-success mb-2">98%</div>
                  <p className="text-sm md:text-base text-muted-foreground">Client Satisfaction</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10+</div>
                  <p className="text-sm md:text-base text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm md:text-base text-muted-foreground">Team Members</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </AnimatedSection>
  );
}
