"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StandardizedSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  success?: boolean;
}

const StandardizedSelect = React.forwardRef<HTMLSelectElement, StandardizedSelectProps>(
  ({ className, error, success, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          // Base styles
          "flex w-full rounded-md border bg-background px-4 py-2 text-sm",
          "min-h-[44px]",
          "ring-offset-background",
          "transition-all duration-200",
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
          // Focus shadow
          "focus-visible:shadow-sm focus-visible:shadow-primary/20",
          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Select specific
          "appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgOUwzIDZIMTBWOUg2WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=')] bg-no-repeat bg-[length:12px_12px] bg-[right_12px_center] pr-10",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);
StandardizedSelect.displayName = "StandardizedSelect";

export { StandardizedSelect };

