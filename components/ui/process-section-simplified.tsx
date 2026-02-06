"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import Link from "next/link";

const steps = [
  { number: "01", title: "Discovery", duration: "1-2 weeks" },
  { number: "02", title: "Design", duration: "2-3 weeks" },
  { number: "03", title: "Development", duration: "6-12 weeks" },
  { number: "04", title: "Launch", duration: "Ongoing" },
];

export function ProcessSectionSimplified() {
  return (
    <AnimatedSection variant="muted" size="default" animation="slide-up" className="border-t border-hairline">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-headline mb-4 md:mb-6">
          How We Work
        </h2>
        <p className="text-body text-medium-contrast max-w-2xl mx-auto mb-6">
          A systematic approach to delivering reliable systems.
        </p>
        <Link 
          href="/process" 
          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
        >
          View detailed process
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto container-padding-apple">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary/20 mb-2">
              {step.number}
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-1 text-high-contrast">
              {step.title}
            </h3>
            <p className="text-sm text-medium-contrast">{step.duration}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
