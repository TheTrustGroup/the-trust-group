"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { cn } from "@/lib/utils";
import Link from "next/link";

const topFAQs = [
  {
    question: "What types of systems do you build?",
    answer: "We help organizations build mission-critical AI systems, enterprise software, secure infrastructure, and defense applications. Built for reliability, security, and performance.",
  },
  {
    question: "How do you approach security and reliability?",
    answer: "Security and reliability are foundational. We implement defense-in-depth strategies, conduct threat modeling, perform security audits, and maintain compliance standards. We follow secure-by-design principles and meet standards including SOC 2, ISO 27001, and defense-specific frameworks.",
  },
  {
    question: "How do engagements typically begin?",
    answer: "Engagements start with a technical discovery phase where we assess requirements, constraints, and existing infrastructure. We provide a detailed technical proposal outlining architecture, approach, timeline, and resource allocation.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes. We help organizations maintain systems with 24/7 monitoring, incident response, security updates, performance optimization, and capacity management. For mission-critical systems, we provide dedicated on-call engineering support.",
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
                "border border-border rounded-lg transition-all duration-150",
                openIndex === index && "border-primary/30"
              )}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={cn(
                  "w-full text-left p-6 md:p-8 transition-colors duration-150",
                  "hover:bg-muted/30",
                  openIndex === index && "bg-muted/20"
                )}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-base md:text-lg font-semibold text-high-contrast leading-snug pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-150 flex-shrink-0 mt-0.5",
                      openIndex === index && "rotate-180"
                    )} 
                    strokeWidth={2}
                  />
                </div>
                
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-150 ease-out",
                    openIndex === index ? "max-h-[1000px] opacity-100 mt-6 pt-6 border-t border-border/50" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-sm md:text-base text-medium-contrast leading-relaxed">
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
