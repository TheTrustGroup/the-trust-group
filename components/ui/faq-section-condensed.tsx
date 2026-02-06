"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { cn } from "@/lib/utils";
import Link from "next/link";

const topFAQs = [
  {
    question: "What industries do you serve?",
    answer: "We serve a diverse range of industries including healthcare, financial services, defense, e-commerce, real estate, transportation, hospitality, and enterprise SaaS. Our solutions are tailored to meet industry-specific requirements and compliance standards.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Small projects typically take 3-4 months, while larger enterprise systems may take 6-12 months. We provide detailed timelines during the discovery phase and maintain transparent communication throughout the project lifecycle.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies (Next.js, React, TypeScript), mobile development (React Native), AI/ML (Python, TensorFlow), cloud infrastructure (AWS, Azure, Kubernetes), and enterprise databases (PostgreSQL, MongoDB). We choose technologies based on project requirements and long-term maintainability.",
  },
  {
    question: "How do you start a project?",
    answer: "We begin with a technical discovery phase where we assess your requirements, constraints, and existing infrastructure. This includes stakeholder interviews, technical audits, and architecture planning. We then provide a detailed proposal with approach, timeline, and resource allocation before beginning development.",
  },
  {
    question: "What support do you offer post-launch?",
    answer: "We provide comprehensive post-launch support including 24/7 monitoring, incident response, security updates, performance optimization, and capacity management. For mission-critical systems, we offer dedicated on-call engineering support and maintenance agreements tailored to your needs.",
  },
];

export function FAQSectionCondensed() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection variant="default" size="default" animation="fade-in" className="border-t border-hairline">
      <div className="max-w-3xl mx-auto container-padding-apple section-padding-apple">
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4 md:mb-6">
            Common Questions
          </h2>
          <Link 
            href="/faq" 
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            View all FAQs
            <span>→</span>
          </Link>
        </div>

        <div className="space-y-4">
          {topFAQs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "border border-border dark:border-border/60 rounded-lg transition-all duration-150",
                openIndex === index && "border-primary/30 dark:border-primary/40"
              )}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={cn(
                  "w-full text-left p-6 md:p-8 transition-colors duration-150",
                  "hover:bg-muted/30 dark:hover:bg-muted/40",
                  openIndex === index && "bg-muted/20 dark:bg-muted/30"
                )}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-base md:text-lg font-semibold text-high-contrast dark:text-high-contrast leading-snug pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-muted-foreground dark:text-muted-foreground transition-transform duration-150 flex-shrink-0 mt-0.5",
                      openIndex === index && "rotate-180"
                    )} 
                    strokeWidth={2}
                  />
                </div>
                
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-150 ease-out",
                    openIndex === index ? "max-h-[1000px] opacity-100 mt-6 pt-6 border-t border-border/50 dark:border-border/40" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-sm md:text-base text-medium-contrast dark:text-medium-contrast leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
