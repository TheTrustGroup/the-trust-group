"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket, CheckCircle2 } from "lucide-react";
import { ScrollAnimation } from "@/components/animations";
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
      <div className="relative">
        <ScrollAnimation variant="fadeInUp">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              How We Work
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              A transparent, collaborative process designed to deliver exceptional results while keeping you informed every step of the way.
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 opacity-20" />

          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <ScrollAnimation key={index} variant="fadeInUp" delay={index * 0.15}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg transform -translate-x-1/2 z-10" />
                    
                    {/* Content Card */}
                    <div className={`flex-1 ${isEven ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="group relative p-6 md:p-8 rounded-2xl border-2 border-border bg-background/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                      >
                        {/* Glow Effect */}
                        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                        
                        {/* Icon & Title */}
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? "md:justify-end" : ""}`}>
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-6 w-6 text-primary stroke-current" strokeWidth={2} />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {step.title}
                            </h3>
                            <p className="text-sm text-primary font-medium mt-1">{step.duration}</p>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Deliverables */}
                        <div className="pt-4 border-t border-border/50">
                          <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
                            Key Deliverables:
                          </p>
                          <ul className={`space-y-2 ${isEven ? "md:text-right" : ""}`}>
                            {step.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                {!isEven && <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />}
                                <span>{deliverable}</span>
                                {isEven && <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 ml-auto" />}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Spacer for timeline alignment */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <ScrollAnimation variant="fadeInUp" delay={0.6}>
          <div className="mt-12 md:mt-16 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <Rocket className="h-5 w-5" />
              </a>
            </motion.div>
            <p className="text-sm text-muted-foreground mt-4">
              Ready to begin? Let&apos;s discuss your project
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </AnimatedSection>
  );
}
