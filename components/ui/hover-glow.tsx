"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface HoverGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: "sm" | "md" | "lg";
}

export function HoverGlow({ 
  children, 
  className, 
  glowColor = "rgba(0, 102, 255, 0.4)",
  intensity = "md"
}: HoverGlowProps) {
  const intensityClasses = {
    sm: "hover:shadow-[0_0_10px_rgba(0,102,255,0.3)]",
    md: "hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]",
    lg: "hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]",
  };

  return (
    <div
      className={cn(
        "transition-all duration-300",
        intensityClasses[intensity],
        className
      )}
      style={{
        ["--glow-color" as string]: glowColor,
      }}
    >
      {children}
    </div>
  );
}

