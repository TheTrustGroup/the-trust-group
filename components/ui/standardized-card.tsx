"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { designTokens } from "@/lib/design-tokens";

const cardVariants = cva(
  // Base card styles
  "rounded-xl border bg-card text-card-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: [
          "border-border shadow-md",
          "hover:shadow-lg hover:border-primary/20",
        ],
        elevated: [
          "border-border shadow-lg",
          "hover:shadow-xl hover:border-primary/30",
          "hover:-translate-y-1",
        ],
        interactive: [
          "border-border shadow-md cursor-pointer",
          "hover:shadow-xl hover:border-primary/30",
          "hover:-translate-y-2 active:translate-y-0",
          "focus-visible:ring-primary/50",
        ],
        outlined: [
          "border-2 border-border shadow-sm",
          "hover:border-primary hover:shadow-md",
        ],
        ghost: [
          "border-transparent shadow-none",
          "hover:bg-muted/50 hover:shadow-sm",
        ],
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

export interface StandardizedCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: VariantProps<typeof cardVariants>["variant"];
  padding?: VariantProps<typeof cardVariants>["padding"];
  as?: "div" | "article" | "section";
  withAnimation?: boolean;
}

const StandardizedCard = React.forwardRef<HTMLDivElement, StandardizedCardProps>(
  ({ className, variant, padding, as: Component = "div", withAnimation = false, children, ...props }, ref) => {
    const baseClasses = cn(cardVariants({ variant, padding, className }));

    if (withAnimation) {
      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className={baseClasses}
          id={props.id}
          role={props.role}
          aria-label={props["aria-label"]}
          aria-labelledby={props["aria-labelledby"]}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <Component ref={ref} className={baseClasses} {...props}>
        {children}
      </Component>
    );
  }
);
StandardizedCard.displayName = "StandardizedCard";

export { StandardizedCard, cardVariants };

