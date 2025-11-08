"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShimmerSkeletonProps {
  className?: string;
  variant?: "default" | "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "wave" | "shimmer";
}

export function ShimmerSkeleton({
  className,
  variant = "default",
  width,
  height,
  animation = "shimmer",
}: ShimmerSkeletonProps) {
  const baseClasses = "relative overflow-hidden bg-muted rounded";
  
  const variantClasses = {
    default: "rounded-md",
    text: "rounded",
    circular: "rounded-full",
    rectangular: "rounded-none",
  };

  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-pulse",
    shimmer: "",
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      style={{ width, height }}
      aria-hidden="true"
    >
      {animation === "shimmer" && (
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
      {animation === "wave" && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-wave" />
      )}
    </div>
  );
}

// Pre-built skeleton components
export function TextSkeleton({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <ShimmerSkeleton
          key={i}
          variant="text"
          height="1rem"
          width={i === lines - 1 ? "75%" : "100%"}
          animation="shimmer"
        />
      ))}
    </div>
  );
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border-2 border-border bg-background p-6 space-y-4", className)}>
      <ShimmerSkeleton variant="rectangular" height="2rem" width="60%" animation="shimmer" />
      <TextSkeleton lines={3} />
      <ShimmerSkeleton variant="rectangular" height="12rem" width="100%" animation="shimmer" />
    </div>
  );
}

export function ImageSkeleton({ className }: { className?: string }) {
  return (
    <ShimmerSkeleton
      variant="rectangular"
      height="100%"
      width="100%"
      className={cn("rounded-lg", className)}
      animation="shimmer"
    />
  );
}

export function AvatarSkeleton({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <ShimmerSkeleton
      variant="circular"
      width={size}
      height={size}
      className={className}
      animation="shimmer"
    />
  );
}

export function ButtonSkeleton({ className }: { className?: string }) {
  return (
    <ShimmerSkeleton
      variant="rectangular"
      height="2.5rem"
      width="8rem"
      className={cn("rounded-md", className)}
      animation="shimmer"
    />
  );
}

// Grid skeleton for lists
export function GridSkeleton({
  columns = 3,
  rows = 2,
  className,
}: {
  columns?: number;
  rows?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-6",
        `grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns}`,
        className
      )}
    >
      {Array.from({ length: columns * rows }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
