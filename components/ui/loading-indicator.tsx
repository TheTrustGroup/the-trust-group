"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingIndicatorProps {
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "dots" | "pulse";
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

export function LoadingIndicator({
  size = "md",
  variant = "spinner",
  className,
  text,
  fullScreen = false,
}: LoadingIndicatorProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  const spinner = (
    <Loader2 className={cn("animate-spin text-primary", sizeClasses[size])} />
  );

  const dots = (
    <div className="flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={cn("rounded-full bg-primary", sizeClasses[size])}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );

  const pulse = (
    <motion.div
      className={cn("rounded-full bg-primary", sizeClasses[size])}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  const content = (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      {variant === "spinner" && spinner}
      {variant === "dots" && dots}
      {variant === "pulse" && pulse}
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm" style={{ zIndex: "var(--z-loading)" }}>
        {content}
      </div>
    );
  }

  return content;
}

// Inline loading indicator for buttons and small spaces
export function InlineLoader({ className }: { className?: string }) {
  return (
    <Loader2 className={cn("h-4 w-4 animate-spin text-current", className)} />
  );
}

// Overlay loading indicator
export function OverlayLoader({ text }: { text?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-lg" style={{ zIndex: "var(--z-base)" }}>
      <LoadingIndicator text={text} />
    </div>
  );
}

