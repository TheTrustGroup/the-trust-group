"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  // Base badge styles
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: [
          "border-transparent bg-primary text-primary-foreground",
          "hover:bg-primary-hover",
        ],
        secondary: [
          "border-transparent bg-secondary text-secondary-foreground",
          "hover:bg-secondary-hover",
        ],
        outline: [
          "text-foreground border-border",
          "hover:bg-muted",
        ],
        success: [
          "border-transparent bg-success text-success-foreground",
          "hover:bg-success/90",
        ],
        warning: [
          "border-transparent bg-warning text-warning-foreground",
          "hover:bg-warning/90",
        ],
        error: [
          "border-transparent bg-error text-error-foreground",
          "hover:bg-error/90",
        ],
        accent: [
          "border-transparent bg-accent text-accent-foreground",
          "hover:bg-accent-hover",
        ],
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-xs px-2.5 py-0.5",
        lg: "text-sm px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface StandardizedBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: VariantProps<typeof badgeVariants>["variant"];
  size?: VariantProps<typeof badgeVariants>["size"];
  asChild?: boolean;
}

const StandardizedBadge = React.forwardRef<HTMLDivElement, StandardizedBadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
StandardizedBadge.displayName = "StandardizedBadge";

export { StandardizedBadge, badgeVariants };

