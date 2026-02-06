"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

/**
 * Glass Card with enhanced micro-interactions
 * - Hover lift: 3-5px
 * - Subtle shadow transition
 * - Smooth, luxurious feel
 */
export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn("card-apple glass-card", className)}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
      whileTap={{ 
        y: -2,
        transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
      }}
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface GlassButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
}

/**
 * Button optimized for glass containers
 * - Subtle scale on hover
 * - Opacity transition
 * - Smooth interactions
 */
export function GlassButton({ children, className, ...props }: GlassButtonProps) {
  return (
    <motion.button
      className={cn("btn-apple", className)}
      whileHover={{ 
        scale: 1.02,
        opacity: 0.9,
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
      }}
      style={{
        willChange: "transform, opacity",
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

interface GlassLinkProps extends HTMLMotionProps<"a"> {
  children: ReactNode;
  className?: string;
}

/**
 * Link optimized for glass containers
 * - Subtle scale and opacity
 * - Smooth transitions
 */
export function GlassLink({ children, className, ...props }: GlassLinkProps) {
  return (
    <motion.a
      className={className}
      whileHover={{ 
        scale: 1.02,
        opacity: 0.85,
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
      }}
      style={{
        willChange: "transform, opacity",
        display: "inline-block",
      }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
