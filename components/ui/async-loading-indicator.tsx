"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AsyncLoadingIndicatorProps {
  isLoading: boolean;
  message?: string;
  variant?: "overlay" | "inline" | "button";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export function AsyncLoadingIndicator({
  isLoading,
  message,
  variant = "overlay",
  size = "md",
  className,
  children,
}: AsyncLoadingIndicatorProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  if (variant === "button") {
    return (
      <AnimatePresence>
        {isLoading && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={cn("inline-flex items-center gap-2", className)}
          >
            <Loader2 className={cn("animate-spin", sizeClasses[size])} />
            {message && <span className="text-sm">{message}</span>}
          </motion.span>
        )}
      </AnimatePresence>
    );
  }

  if (variant === "inline") {
    return (
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn("flex items-center justify-center gap-3 py-4", className)}
          >
            <Loader2 className={cn("animate-spin text-primary", sizeClasses[size])} />
            {message && <span className="text-sm text-muted-foreground">{message}</span>}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Overlay variant
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
            className
          )}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background border border-border shadow-lg"
          >
            <Loader2 className={cn("animate-spin text-primary", sizeClasses[size])} />
            {message && (
              <p className="text-sm font-medium text-foreground">{message}</p>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook for managing async operations
export function useAsyncOperation<T>() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);
  const [data, setData] = React.useState<T | null>(null);

  const execute = React.useCallback(async (asyncFn: () => Promise<T>) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await asyncFn();
      setData(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("An error occurred");
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = React.useCallback(() => {
    setIsLoading(false);
    setError(null);
    setData(null);
  }, []);

  return { isLoading, error, data, execute, reset };
}

