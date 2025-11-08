"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientAnimationProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "accent" | "rainbow";
}

export function GradientAnimation({ 
  children, 
  className = "",
  variant = "primary"
}: GradientAnimationProps) {
  const gradientVariants = {
    primary: "from-primary via-accent to-primary",
    accent: "from-accent via-primary to-accent",
    rainbow: "from-primary via-accent via-warning to-primary",
  };

  return (
    <motion.div
      className={cn(
        "bg-gradient-to-r",
        gradientVariants[variant],
        "bg-[length:200%_auto]",
        "animate-gradient",
        className
      )}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}

