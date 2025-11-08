"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface StandardizedCheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  error?: boolean;
  label?: string;
}

const StandardizedCheckbox = React.forwardRef<HTMLInputElement, StandardizedCheckboxProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;
    
    return (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="checkbox"
            id={checkboxId}
            className={cn(
              "peer h-4 w-4 shrink-0 rounded-sm border border-input",
              "ring-offset-background",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "transition-all duration-200",
              // Checked state
              "checked:bg-primary checked:border-primary",
              // Error state
              error && "border-error focus-visible:ring-error/50",
              // Hide default checkbox
              "appearance-none",
              className
            )}
            ref={ref}
            {...props}
          />
          <Check
            className={cn(
              "absolute left-0.5 top-0.5 h-3 w-3 text-primary-foreground",
              "opacity-0 peer-checked:opacity-100",
              "transition-opacity duration-200",
              "pointer-events-none"
            )}
          />
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className={cn(
              "text-sm font-medium leading-none",
              "cursor-pointer",
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              error && "text-error"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
StandardizedCheckbox.displayName = "StandardizedCheckbox";

export { StandardizedCheckbox };

