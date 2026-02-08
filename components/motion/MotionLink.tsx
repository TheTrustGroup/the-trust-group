"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type MotionLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  children: React.ReactNode;
};

/**
 * Link with subtle hover: opacity + translateX only. No layout shift.
 * Respects prefers-reduced-motion (disables hover animation).
 */
export function MotionLink({ children, className, ...linkProps }: MotionLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link className={className} {...linkProps}>
      <motion.span
        className="inline-block"
        whileHover={shouldReduceMotion ? undefined : { opacity: 0.8, x: 2 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </Link>
  );
}
