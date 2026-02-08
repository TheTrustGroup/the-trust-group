"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "framer-motion";

/**
 * Section entrance: opacity + translateY only. Triggers once on viewport entry.
 * No scroll-linked animation, no layout shift. Respects prefers-reduced-motion.
 */
export function MotionSection({
  children,
  className,
  ...rest
}: HTMLMotionProps<"section">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
