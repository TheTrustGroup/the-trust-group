import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "primary" | "secondary";
  size?: "sm" | "default" | "lg";
  container?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      container = true,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: "bg-background",
      muted: "bg-muted",
      primary: "bg-primary/5",
      secondary: "bg-secondary/5",
    };

    const sizeStyles = {
      sm: "py-8 md:py-12 lg:py-16",
      default: "py-12 md:py-16 lg:py-20",
      lg: "py-16 md:py-24 lg:py-32",
    };

    const content = container ? (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    ) : (
      children
    );

    return (
      <section
        ref={ref}
        className={cn(
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {content}
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };

