"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

/**
 * Block entrance: opacity + translateY only. Triggers once on viewport entry.
 * Use to wrap content that already lives inside a section (avoids nested sections).
 * No layout shift. Respects prefers-reduced-motion.
 */
export function MotionReveal({
  children,
  className,
  ...rest
}: HTMLMotionProps<"div">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
