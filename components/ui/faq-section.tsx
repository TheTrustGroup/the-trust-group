"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What types of systems do you build?",
    answer: "We help organizations build mission-critical AI systems, enterprise software, secure infrastructure, and defense applications. Built for reliability, security, and performance.",
  },
  {
    question: "How do you approach security and reliability?",
    answer: "Security and reliability are foundational. We implement defense-in-depth strategies, conduct threat modeling, perform security audits, and maintain compliance standards. Systems are designed with redundancy, failover mechanisms, and monitoring. We follow secure-by-design principles and meet standards including SOC 2, ISO 27001, and defense-specific frameworks.",
  },
  {
    question: "Do you work with enterprise or high-stakes organizations?",
    answer: "Yes. We help organizations in defense, intelligence, finance, healthcare, and other sectors where system failure carries significant consequences. Trusted by government contractors, Fortune 500 enterprises, and organizations requiring high levels of security and reliability. We maintain appropriate clearances and compliance certifications.",
  },
  {
    question: "How do engagements typically begin?",
    answer: "Engagements start with a technical discovery phase where we assess requirements, constraints, and existing infrastructure. We provide a detailed technical proposal outlining architecture, approach, timeline, and resource allocation. For sensitive projects, we conduct security assessments and establish secure communication channels before beginning work.",
  },
  {
    question: "What is your technical approach to AI systems?",
    answer: "We help organizations build production-grade AI systems designed for reliability, explainability, and security. Built to support rigorous model validation, continuous monitoring, adversarial testing, and integration with existing enterprise infrastructure. Systems that make correct decisions under uncertainty and can be audited and maintained long-term.",
  },
  {
    question: "How do you handle system scalability and performance?",
    answer: "Designed for scale from the start. We help organizations build systems using proven patterns like microservices, event-driven architectures, and distributed systems principles. Performance is measured, monitored, and optimized continuously. Built to handle growth without architectural rewrites.",
  },
  {
    question: "What is your development and deployment process?",
    answer: "Built to support rigorous engineering practices: version control, code reviews, automated testing, continuous integration, and infrastructure-as-code. Deployments are automated, tested in staging, and can be rolled back instantly. We maintain documentation, runbooks, and operational procedures. For critical systems, we implement blue-green deployments and canary releases.",
  },
  {
    question: "Do you provide ongoing operations and maintenance?",
    answer: "Yes. We help organizations maintain systems with 24/7 monitoring, incident response, security updates, performance optimization, and capacity management. For mission-critical systems, we provide dedicated on-call engineering support. Built to support long-term reliability as requirements evolve.",
  },
];

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
          {faqs.map((faq, index) => (
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
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* No CTA here - flows naturally to dedicated CTA section before contact */}
      </div>
    </AnimatedSection>
  );
}
