"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { staggerContainer, staggerItem, getAnimationVariants } from "@/lib/animations";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerGrid({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = getAnimationVariants({
    ...staggerContainer,
    visible: {
      ...staggerContainer.visible,
      transition: {
        ...(typeof staggerContainer.visible === 'object' && 'transition' in staggerContainer.visible
          ? staggerContainer.visible.transition
          : { duration: 0.6 }),
        staggerChildren: staggerDelay,
      },
    },
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const itemVariants = getAnimationVariants(staggerItem);

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

