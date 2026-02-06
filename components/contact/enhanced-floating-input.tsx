"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

interface EnhancedFloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: boolean;
  required?: boolean;
  helperText?: string;
  suggestion?: string; // Helpful suggestion when error occurs
  showSuccessMessage?: boolean; // Show "Looks good!" message
}

export function EnhancedFloatingInput({
  label,
  error,
  success,
  required,
  helperText,
  suggestion,
  showSuccessMessage = false,
  className,
  value,
  id,
  type,
  name,
  ...props
}: EnhancedFloatingInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasInteracted, setHasInteracted] = React.useState(false);
  const hasValue = Boolean(value && String(value).trim());
  const shouldFloat = isFocused || hasValue;
  const errorId = id ? `${id}-error` : undefined;
  const helperId = id && helperText ? `${id}-helper` : undefined;
  const suggestionId = id && suggestion ? `${id}-suggestion` : undefined;

  const handleFocus = () => {
    setIsFocused(true);
    setHasInteracted(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getAutocomplete = (): string | undefined => {
    if (type === "email") return "email";
    if (type === "tel") return "tel";
    if (name === "name" || name === "full-name") return "name";
    if (name === "company" || name === "organization") return "organization";
    if (name === "phone" || name === "tel") return "tel";
    return undefined;
  };

  return (
    <div className="relative">
      <motion.div
        className="relative"
        animate={{
          scale: error && hasInteracted ? [1, 1.02, 1] : 1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            "peer w-full px-4 pt-6 pb-3 text-base bg-background border rounded-xl",
            "transition-all duration-200 focus:outline-none",
            "placeholder:text-transparent",
            // Hover state
            "hover:border-primary/50",
            // Error state
            error
              ? "border-error focus:border-error focus:ring-2 focus:ring-error/20 shadow-error/10"
              : success
              ? "border-success focus:border-success focus:ring-2 focus:ring-success/20 shadow-success/10"
              : "border-input focus:border-primary focus:ring-2 focus:ring-primary/20",
            // Focus glow effect
            isFocused && !error && !success && "shadow-lg shadow-primary/10",
            className
          )}
          placeholder=" "
          required={required}
          autoComplete={getAutocomplete()}
          aria-describedby={error ? errorId : suggestion ? suggestionId : helperId}
          aria-invalid={error ? true : undefined}
          aria-required={required}
          {...props}
        />
        
        {/* Floating Label */}
        <motion.label
          htmlFor={id}
          animate={{
            y: shouldFloat ? 0 : 0,
            scale: shouldFloat ? 0.85 : 1,
          }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className={cn(
            "absolute left-4 transition-all duration-200 pointer-events-none",
            shouldFloat
              ? "top-2 text-xs font-medium"
              : "top-1/2 -translate-y-1/2 text-base",
            error
              ? "text-error"
              : success
              ? "text-success"
              : shouldFloat
              ? "text-foreground"
              : "text-muted-foreground peer-focus:text-primary"
          )}
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </motion.label>

        {/* Success Icon */}
        <AnimatePresence>
          {success && !error && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <CheckCircle2 className="h-5 w-5 text-success" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Icon */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <AlertCircle className="h-5 w-5 text-error" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Success Message */}
      <AnimatePresence>
        {success && showSuccessMessage && !error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="mt-1.5 text-sm text-success flex items-center gap-1.5"
          >
            <CheckCircle2 className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            Looks good!
          </motion.p>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="mt-1.5 space-y-1"
          >
            <p
              id={errorId}
              role="alert"
              className="text-sm text-error flex items-center gap-1.5"
            >
              <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              {error}
            </p>
            {suggestion && (
              <motion.p
                id={suggestionId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xs text-muted-foreground flex items-center gap-1.5 pl-5"
              >
                <Info className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                {suggestion}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Helper Text */}
      {helperText && !error && (
        <p id={helperId} className="mt-1.5 text-xs text-muted-foreground">
          {helperText}
        </p>
      )}
    </div>
  );
}
