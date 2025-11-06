"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import { prefersReducedMotion } from "@/lib/animations";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  // Disable parallax for reduced motion
  if (prefersReducedMotion()) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

