"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ScrollAnimation } from "@/components/animations";
import { AnimatedSection } from "./animated-section";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What industries do you serve?",
    answer: "We work with businesses across various industries including e-commerce, healthcare, finance, education, SaaS, and enterprise solutions. Our expertise spans multiple sectors, allowing us to bring best practices from one industry to another.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during the discovery phase and keep you updated throughout the project.",
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with regular sprints, demos, and feedback cycles. Our process includes: Discovery & Strategy (1-2 weeks), Design & Prototyping (2-3 weeks), Development & Testing (6-12 weeks), and Launch & Optimization (ongoing). You're involved at every stage.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! We offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, feature enhancements, and 24/7 monitoring. We believe in long-term partnerships, not just one-time projects.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern technologies including React, Next.js, TypeScript, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), and mobile development (React Native, Flutter). We choose the best technology stack for each project's specific needs.",
  },
  {
    question: "How do you ensure project quality?",
    answer: "Quality is built into our process through code reviews, automated testing, continuous integration, regular demos, and QA testing. We maintain high coding standards and follow industry best practices. All projects go through rigorous testing before launch.",
  },
  {
    question: "What are your pricing models?",
    answer: "We offer flexible pricing models including fixed-price projects, time & materials, and retainer agreements. Pricing depends on project scope, complexity, and timeline. We provide detailed proposals with transparent pricing after understanding your requirements.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely! We excel at collaborating with in-house teams. We can augment your existing team, work alongside them, or take full ownership of a project. Our flexible engagement models adapt to your needs.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection variant="default" size="default" animation="fade-in">
      <div className="relative">
        <ScrollAnimation variant="fadeInUp">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <HelpCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              Got Questions? We Have Answers
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Everything you need to know about working with The Trust Group
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} variant="fadeInUp" delay={index * 0.05}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={cn(
                    "w-full text-left p-6 rounded-xl border-2 transition-all duration-300",
                    "hover:border-primary/40 hover:shadow-lg",
                    openIndex === index
                      ? "border-primary/40 bg-primary/5 shadow-lg"
                      : "border-border bg-background/60 backdrop-blur-sm"
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 pt-4 border-t border-border/50 text-sm md:text-base text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Additional Help CTA */}
        <ScrollAnimation variant="fadeInUp" delay={0.4}>
          <div className="mt-12 md:mt-16 text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              Still have questions?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Us
                <HelpCircle className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </AnimatedSection>
  );
}
