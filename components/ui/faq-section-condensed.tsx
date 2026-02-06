"use client";

import * as React from "react";
import { AnimatedSection } from "./animated-section";
import { motion } from "framer-motion";

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
  return (
    <AnimatedSection variant="default" size="default" animation="fade-in" className="border-t border-hairline">
      <div className="max-w-6xl mx-auto container-padding-apple section-padding-apple">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-headline mb-4 md:mb-6">
            Common Questions
          </h2>
        </div>

        {/* Two-column layout - Apple-inspired, calm, readable */}
        {/* Mobile: single column, Desktop: two columns with staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-12 lg:gap-x-20 lg:gap-y-16">
          {topFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="space-y-3 md:space-y-4"
            >
              {/* Question - Headline-style, confident */}
              <h3 className="text-lg md:text-xl font-semibold text-high-contrast dark:text-high-contrast leading-tight tracking-tight">
                {faq.question}
              </h3>
              
              {/* Answer - Concise, well-written, confident */}
              <p className="text-base md:text-lg text-medium-contrast dark:text-medium-contrast leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
