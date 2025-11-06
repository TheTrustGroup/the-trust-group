"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/animations";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const reducedMotionVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(prefersReducedMotion());
  }, []);

  const variants = isReducedMotion ? reducedMotionVariants : pageVariants;

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

