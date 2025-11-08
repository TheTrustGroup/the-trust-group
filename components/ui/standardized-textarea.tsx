"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StandardizedTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  success?: boolean;
}

const StandardizedTextarea = React.forwardRef<HTMLTextAreaElement, StandardizedTextareaProps>(
  ({ className, error, success, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          // Base styles
          "flex min-h-[80px] w-full rounded-md border bg-background px-4 py-2 text-sm",
          "ring-offset-background",
          "transition-all duration-200",
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
          // Focus shadow
          "focus-visible:shadow-sm focus-visible:shadow-primary/20",
          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Resize
          "resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
StandardizedTextarea.displayName = "StandardizedTextarea";

export { StandardizedTextarea };

