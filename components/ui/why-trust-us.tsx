"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { SectionHeader } from "./section-header";
import Image from "next/image";
import { cn } from "@/lib/utils";

const proofPoints = [
  {
    title: "Systematic Approach",
    description: "We follow established engineering practices and systematic approaches that ensure consistent, reliable outcomes.",
    icon: "/icons/systematic-approach.svg",
  },
  {
    title: "Enterprise Standards",
    description: "Every system is built to meet enterprise-grade requirements for security, performance, and maintainability.",
    icon: "/icons/enterprise-standards.svg",
  },
  {
    title: "Long-Term Design",
    description: "We design systems with long-term operation in mind, ensuring they remain reliable and maintainable over time.",
    icon: "/icons/long-term-design.svg",
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
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary">
                <Image
                  src={point.icon}
                  alt={`${point.title} icon`}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              
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
