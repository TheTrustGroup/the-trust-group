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
    sm: { icon: "h-10 w-10", text: "text-lg" },
    md: { icon: "h-12 w-12", text: "text-xl" },
    lg: { icon: "h-16 w-16", text: "text-2xl" },
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
          <stop offset="0%" style={{ stopColor: "#0044AA", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#0066FF", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#00B8E6", stopOpacity: 1 }} />
        </linearGradient>
        <filter id={filterId}>
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`${filterId}-shadow`}>
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0066FF" floodOpacity="0.4" />
        </filter>
      </defs>
      
      {/* Outer hexagon - more visible with thicker stroke */}
      <polygon
        points="200,60 280,110 280,210 200,260 120,210 120,110"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="5"
        opacity="0.6"
      />
      
      {/* Main hexagon - full opacity with stronger shadow */}
      <polygon
        points="200,80 260,120 260,200 200,240 140,200 140,120"
        fill={`url(#${gradientId})`}
        opacity="1"
        filter={`url(#${filterId}-shadow)`}
      />
      
      {/* Inner circuit pattern - more visible with thicker lines */}
      <g stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.95">
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
      
      {/* Circuit nodes - larger and more visible */}
      <g filter={`url(#${filterId})`}>
        <circle cx="200" cy="100" r="6" fill="#FFFFFF" opacity="0.95" />
        <circle cx="200" cy="140" r="7" fill="#FFFFFF" opacity="0.95" />
        <circle cx="170" cy="140" r="6" fill="#FFFFFF" opacity="0.95" />
        <circle cx="230" cy="140" r="6" fill="#FFFFFF" opacity="0.95" />
        <circle cx="160" cy="160" r="8" fill="#00B8E6" opacity="1" />
        <circle cx="240" cy="160" r="8" fill="#00B8E6" opacity="1" />
        <circle cx="200" cy="160" r="9" fill="#FFFFFF" opacity="1" />
        <circle cx="170" cy="180" r="6" fill="#FFFFFF" opacity="0.95" />
        <circle cx="230" cy="180" r="6" fill="#FFFFFF" opacity="0.95" />
        <circle cx="200" cy="180" r="7" fill="#FFFFFF" opacity="0.95" />
        <circle cx="200" cy="220" r="6" fill="#FFFFFF" opacity="0.95" />
      </g>
    </svg>
  );
}

