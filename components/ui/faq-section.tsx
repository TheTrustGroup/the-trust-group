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
    answer: "We engineer mission-critical AI systems, enterprise software platforms, secure infrastructure, and defense-grade applications. Our work spans real-time decision systems, secure communications platforms, intelligence analytics tools, and scalable cloud architectures. We focus on systems where reliability, security, and performance are non-negotiable.",
  },
  {
    question: "How do you approach security and reliability?",
    answer: "Security and reliability are foundational, not afterthoughts. We implement defense-in-depth strategies, conduct threat modeling, perform security audits, and maintain strict compliance standards. Our systems are designed with redundancy, failover mechanisms, and comprehensive monitoring. We follow secure-by-design principles and industry standards including SOC 2, ISO 27001, and defense-specific frameworks.",
  },
  {
    question: "Do you work with enterprise or high-stakes organizations?",
    answer: "Yes. We work with organizations operating in defense, intelligence, finance, healthcare, and other sectors where system failure carries significant consequences. Our clients include government contractors, Fortune 500 enterprises, and organizations requiring the highest levels of security and reliability. We maintain appropriate clearances and compliance certifications.",
  },
  {
    question: "How do engagements typically begin?",
    answer: "Engagements start with a technical discovery phase where we assess requirements, constraints, and existing infrastructure. We provide a detailed technical proposal outlining architecture, approach, timeline, and resource allocation. For sensitive projects, we conduct security assessments and establish secure communication channels before beginning work.",
  },
  {
    question: "What is your technical approach to AI systems?",
    answer: "We build production-grade AI systems with emphasis on reliability, explainability, and security. Our approach includes rigorous model validation, continuous monitoring, adversarial testing, and integration with existing enterprise infrastructure. We prioritize systems that make correct decisions under uncertainty and can be audited and maintained long-term.",
  },
  {
    question: "How do you handle system scalability and performance?",
    answer: "We architect systems for scale from the start, using proven patterns like microservices, event-driven architectures, and distributed systems principles. Performance is measured, monitored, and optimized continuously. We conduct load testing, capacity planning, and design for horizontal scalability. Our systems are built to handle growth without architectural rewrites.",
  },
  {
    question: "What is your development and deployment process?",
    answer: "We follow rigorous engineering practices: version control, code reviews, automated testing, continuous integration, and infrastructure-as-code. Deployments are automated, tested in staging environments, and can be rolled back instantly. We maintain detailed documentation, runbooks, and operational procedures. For critical systems, we implement blue-green deployments and canary releases.",
  },
  {
    question: "Do you provide ongoing operations and maintenance?",
    answer: "Yes. We offer operational support including 24/7 monitoring, incident response, security updates, performance optimization, and capacity management. For mission-critical systems, we provide dedicated on-call engineering support. We maintain long-term relationships with clients to ensure systems continue operating reliably as requirements evolve.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection variant="default" size="default" animation="fade-in">
      <div className="relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Technical and operational questions about our engineering approach.
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

        {/* CTA - Calm, enterprise-appropriate */}
        <div className="mt-12 md:mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="px-8 py-6 text-base font-medium border hover:bg-background/50 transition-colors"
          >
            <a href="/contact">
              Discuss Your Requirements
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
