"use client";

"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { getAnimationVariants, prefersReducedMotion } from "@/lib/animations";

interface IntersectionAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn";
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationClass?: string; // For CSS-based animations
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
};

/**
 * Component that uses Intersection Observer instead of scroll listeners
 * Much more performant than scroll-based visibility detection
 */
export function IntersectionAnimation({
  children,
  className = "",
  delay = 0,
  duration,
  variant = "fadeInUp",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
  animationClass = "",
}: IntersectionAnimationProps) {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const baseVariants = variantMap[variant] || variantMap.fadeInUp;
  const animationVariants = getAnimationVariants(baseVariants);

  // Add delay and custom duration if provided
  const customVariants = {
    ...animationVariants,
    visible: {
      ...animationVariants.visible,
      transition: {
        ...(typeof animationVariants.visible === "object" && "transition" in animationVariants.visible
          ? animationVariants.visible.transition
          : { duration: 0.6 }),
        delay,
        ...(duration && { duration }),
      },
    },
  };

  // Respect reduced motion preference
  const shouldAnimate = !prefersReducedMotion();

  // If using CSS classes instead of framer-motion
  if (animationClass) {
    return (
      <div
        ref={ref}
        className={`${className} ${isIntersecting ? animationClass : ""}`}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate={isIntersecting || !shouldAnimate ? "visible" : "hidden"}
      variants={shouldAnimate ? customVariants : { visible: { opacity: 1 } }}
      className={className}
      style={{
        willChange: shouldAnimate && isIntersecting ? "transform, opacity" : "auto",
      }}
    >
      {children}
    </motion.div>
  );
}

