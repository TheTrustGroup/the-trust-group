"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { designTokens } from "@/lib/design-tokens";

export interface StandardizedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
}

const StandardizedInput = React.forwardRef<HTMLInputElement, StandardizedInputProps>(
  ({ className, type, error, success, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Base styles
          "flex w-full rounded-md border bg-background px-4 py-2 text-sm",
          "min-h-[44px]",
          "ring-offset-background",
          "transition-all duration-200",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          // Focus states
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          // Hover states
          "hover:border-primary/50",
          // Error states
          error && [
            "border-error focus-visible:border-error",
            "focus-visible:ring-error/50",
          ],
          // Success states
          success && [
            "border-success focus-visible:border-success",
            "focus-visible:ring-success/50",
          ],
          // Default border
          !error && !success && "border-input focus-visible:border-primary",
          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
StandardizedInput.displayName = "StandardizedInput";

export { StandardizedInput };

