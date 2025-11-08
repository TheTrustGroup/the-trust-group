"use client";

import * as React from "react";
import { motion, useInView, Variants } from "framer-motion";
import { getAnimationVariants, prefersReducedMotion } from "@/lib/animations";

interface EnhancedScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn" | "rotateIn" | "slideUpScale" | "fadeInRotate";
  threshold?: number;
  once?: boolean;
  stagger?: number;
}

const variantMap: Record<string, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  },
  slideUpScale: {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
  },
  fadeInRotate: {
    hidden: { opacity: 0, rotate: -5 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
};

export function EnhancedScrollAnimation({
  children,
  className = "",
  delay = 0,
  duration,
  variant = "fadeInUp",
  threshold = 0.1,
  once = true,
  stagger,
}: EnhancedScrollAnimationProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    once, 
    margin: "-100px",
    amount: threshold,
  });

  const baseVariants = variantMap[variant] || variantMap.fadeInUp;
  const variants = getAnimationVariants(baseVariants);

  // Add delay and custom duration
  const customVariants: Variants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(typeof variants.visible === 'object' && 'transition' in variants.visible 
          ? variants.visible.transition 
          : { duration: 0.6 }),
        delay: stagger !== undefined ? stagger : delay,
        ...(duration && { duration }),
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      className={className}
      style={{
        willChange: prefersReducedMotion() ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}

