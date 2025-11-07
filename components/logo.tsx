"use client";

import * as React from "react";
import { useId } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "icon" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
}

export function Logo({ 
  variant = "full", 
  size = "md",
  className,
  showText = true 
}: LogoProps) {
  const sizeClasses = {
    sm: { icon: "h-6 w-6", text: "text-lg" },
    md: { icon: "h-8 w-8", text: "text-xl" },
    lg: { icon: "h-12 w-12", text: "text-2xl" },
  };

  const currentSize = sizeClasses[size];

  if (variant === "icon") {
    return (
      <div className={cn("flex items-center", className)}>
        <LogoIcon className={currentSize.icon} />
      </div>
    );
  }

  if (variant === "text") {
    return (
      <span className={cn("font-bold text-primary", currentSize.text, className)}>
        The Trust Group
      </span>
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoIcon className={currentSize.icon} />
      {showText && (
        <span className={cn("font-bold text-foreground", currentSize.text)}>
          The Trust Group
        </span>
      )}
    </div>
  );
}

interface LogoIconProps {
  className?: string;
}

function LogoIcon({ className }: LogoIconProps) {
  const uniqueId = useId();
  const gradientId = `logoGradient-${uniqueId}`;
  const filterId = `logoGlow-${uniqueId}`;
  
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#0066FF", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#00D4FF", stopOpacity: 1 }} />
        </linearGradient>
        <filter id={filterId}>
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer hexagon */}
      <polygon
        points="200,60 280,110 280,210 200,260 120,210 120,110"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="3"
        opacity="0.3"
      />
      
      {/* Main hexagon */}
      <polygon
        points="200,80 260,120 260,200 200,240 140,200 140,120"
        fill={`url(#${gradientId})`}
        opacity="0.9"
      />
      
      {/* Inner circuit pattern */}
      <g stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.6">
        {/* Vertical lines */}
        <line x1="200" y1="100" x2="200" y2="140" />
        <line x1="200" y1="180" x2="200" y2="220" />
        
        {/* Horizontal connections */}
        <line x1="170" y1="140" x2="230" y2="140" />
        <line x1="170" y1="180" x2="230" y2="180" />
        
        {/* Diagonal connections */}
        <line x1="170" y1="140" x2="160" y2="160" />
        <line x1="230" y1="140" x2="240" y2="160" />
        <line x1="160" y1="160" x2="170" y2="180" />
        <line x1="240" y1="160" x2="230" y2="180" />
      </g>
      
      {/* Circuit nodes */}
      <g filter={`url(#${filterId})`}>
        <circle cx="200" cy="100" r="5" fill="#FFFFFF" />
        <circle cx="200" cy="140" r="6" fill="#FFFFFF" />
        <circle cx="170" cy="140" r="5" fill="#FFFFFF" />
        <circle cx="230" cy="140" r="5" fill="#FFFFFF" />
        <circle cx="160" cy="160" r="7" fill="#00D4FF" />
        <circle cx="240" cy="160" r="7" fill="#00D4FF" />
        <circle cx="200" cy="160" r="8" fill="#FFFFFF" />
        <circle cx="170" cy="180" r="5" fill="#FFFFFF" />
        <circle cx="230" cy="180" r="5" fill="#FFFFFF" />
        <circle cx="200" cy="180" r="6" fill="#FFFFFF" />
        <circle cx="200" cy="220" r="5" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

