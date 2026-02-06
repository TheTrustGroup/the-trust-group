"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { SectionHeader } from "./section-header";

const proofPoints = [
  {
    title: "Systematic Approach",
    description: "We follow established engineering practices and systematic approaches that ensure consistent, reliable outcomes.",
  },
  {
    title: "Enterprise Standards",
    description: "Every system is built to meet enterprise-grade requirements for security, performance, and maintainability.",
  },
  {
    title: "Long-Term Design",
    description: "We design systems with long-term operation in mind, ensuring they remain reliable and maintainable over time.",
  },
];

export function WhyTrustUs() {
  return (
    <Section variant="default" size="default" className="bg-background border-t border-hairline" container={false}>
      <div className="max-w-5xl mx-auto container-padding-apple section-padding-apple">
        <SectionHeader title="Why Trust Us" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-apple">
          {proofPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="card-apple glass-card p-6 md:p-8"
            >
              <h3 className="text-title mb-3 text-high-contrast dark:text-high-contrast">
                {point.title}
              </h3>
              <p className="text-body text-medium-contrast dark:text-medium-contrast">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
