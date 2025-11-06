"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { fadeInUp, getAnimationVariants } from "@/lib/animations";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn";
}

const variantMap = {
  fadeInUp: fadeInUp,
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } },
  slideInLeft: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } },
  slideInRight: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } },
  scaleIn: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } },
};

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  duration,
  variant = "fadeInUp",
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = variantMap[variant];
  const animationVariants = getAnimationVariants(variants);

  // Add delay and custom duration if provided
  const customVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: {
        ...(typeof animationVariants.visible === 'object' && 'transition' in animationVariants.visible 
          ? animationVariants.visible.transition 
          : { duration: 0.6 }),
        delay,
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
    >
      {children}
    </motion.div>
  );
}

