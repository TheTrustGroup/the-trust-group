"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "./animated-section";
import { cn } from "@/lib/utils";
import { faqEntries } from "@/lib/faq-data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection variant="default" size="default" animation="fade-in" className="border-t border-hairline">
      <div className="relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-headline mb-4 md:mb-6">
            FAQ
          </h2>
          <p className="text-body text-medium-contrast max-w-2xl mx-auto">
            Common questions about our approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqEntries.map((faq, index) => (
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
                  <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug pr-4">
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
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                    {faq.ctaLink && (
                      <>
                        {" "}
                        <Link href={faq.ctaLink.href} className="text-primary hover:underline font-medium">
                          {faq.ctaLink.label}
                        </Link>
                      </>
                    )}
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
