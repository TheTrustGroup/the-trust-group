"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { designTokens } from "@/lib/design-tokens";

const buttonVariants = cva(
  // Base styles with consistent hover/active/focus states
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96] touch-manipulation min-h-[44px] relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: [
          "bg-primary text-primary-foreground",
          "hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20",
          "focus-visible:ring-primary/50",
          "active:bg-primary-dark",
        ],
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary-hover hover:shadow-lg",
          "focus-visible:ring-secondary/50",
          "active:bg-secondary-dark",
        ],
        outline: [
          "border-2 border-primary bg-transparent text-primary",
          "hover:bg-primary hover:text-primary-foreground hover:shadow-md",
          "focus-visible:ring-primary/50",
          "active:bg-primary/90",
        ],
        ghost: [
          "hover:bg-muted hover:text-foreground hover:shadow-sm",
          "focus-visible:ring-muted/50",
          "active:bg-muted/80",
        ],
        link: [
          "text-primary underline-offset-4 p-0 h-auto min-h-0",
          "hover:underline hover:text-primary-hover",
          "focus-visible:ring-primary/50 focus-visible:ring-offset-1",
          "active:text-primary-dark",
        ],
        destructive: [
          "bg-error text-error-foreground",
          "hover:bg-error/90 hover:shadow-lg hover:shadow-error/20",
          "focus-visible:ring-error/50",
          "active:bg-error/80",
        ],
        success: [
          "bg-success text-success-foreground",
          "hover:bg-success/90 hover:shadow-lg hover:shadow-success/20",
          "focus-visible:ring-success/50",
          "active:bg-success/80",
        ],
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface StandardizedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  asChild?: boolean;
  withAnimation?: boolean;
}

const StandardizedButton = React.forwardRef<HTMLButtonElement, StandardizedButtonProps>(
  ({ className, variant, size, asChild = false, withAnimation = true, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const baseClasses = cn(buttonVariants({ variant, size, className }), "button-ripple");

    if (withAnimation && !asChild) {
      return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Comp className={baseClasses} ref={ref} {...props} />
        </motion.div>
      );
    }

    return <Comp className={baseClasses} ref={ref} {...props} />;
  }
);
StandardizedButton.displayName = "StandardizedButton";

export { StandardizedButton, buttonVariants };

