"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "500+",
    label: "Projects Delivered",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "100+",
    label: "Organizations Served",
  },
];

export function HeroMetrics() {
  return (
    <section className="relative bg-background border-t border-hairline">
      <div className="max-w-5xl mx-auto container-padding-apple py-8 md:py-12">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05, ease: [0.4, 0, 0.2, 1] }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-high-contrast mb-1 md:mb-2">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-medium-contrast">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
