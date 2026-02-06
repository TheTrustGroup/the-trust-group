"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { SectionHeader } from "./section-header";

// Icon Components - Inline SVGs for theme compatibility
const SystematicApproachIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <rect x="6" y="5" width="20" height="5" rx="1" />
      <rect x="6" y="13" width="20" height="5" rx="1" />
      <rect x="6" y="21" width="20" height="5" rx="1" />
      <path d="M16 10v2M16 18v2" />
      <path d="M26 7.5h2M26 15.5h2M26 23.5h2" />
      <path d="M27 6.5l1 1-1 1M27 14.5l1 1-1 1M27 22.5l1 1-1 1" />
    </g>
  </svg>
);

const EnterpriseStandardsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M16 5L9 8v7c0 5.5 3.5 9.5 7 11 3.5-1.5 7-5.5 7-11V8l-7-3z" />
      <circle cx="16" cy="13.5" r="4.5" />
      <path d="M13.5 13.5l1.5 1.5 3-3" strokeWidth="1.8" />
    </g>
  </svg>
);

const LongTermDesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M8 16a8 8 0 0 1 8-8" />
      <path d="M24 16a8 8 0 0 1-8 8" />
      <path d="M22 12l2-2-2-2" />
      <circle cx="16" cy="16" r="6" />
      <circle cx="16" cy="16" r="3.5" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

const proofPoints = [
  {
    title: "Systematic Approach",
    description: "We follow established engineering practices and systematic approaches that ensure consistent, reliable outcomes.",
    icon: SystematicApproachIcon,
  },
  {
    title: "Enterprise Standards",
    description: "Every system is built to meet enterprise-grade requirements for security, performance, and maintainability.",
    icon: EnterpriseStandardsIcon,
  },
  {
    title: "Long-Term Design",
    description: "We design systems with long-term operation in mind, ensuring they remain reliable and maintainable over time.",
    icon: LongTermDesignIcon,
  },
];

export function WhyTrustUs() {
  return (
    <Section variant="default" size="default" className="bg-background border-t border-hairline" container={false}>
      <div className="max-w-5xl mx-auto container-padding-apple section-padding-apple">
        <SectionHeader title="Why Trust Us" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-apple">
          {proofPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="card-apple glass-card p-6 md:p-8"
              >
                {/* Icon */}
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary">
                  <IconComponent />
                </div>
                
                <h3 className="text-title mb-3 text-high-contrast dark:text-high-contrast">
                  {point.title}
                </h3>
                <p className="text-body text-medium-contrast dark:text-medium-contrast">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
