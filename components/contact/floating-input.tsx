"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: boolean;
  required?: boolean;
  helperText?: string;
}

export function FloatingInput({
  label,
  error,
  success,
  required,
  helperText,
  className,
  value,
  id,
  ...props
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const hasValue = Boolean(value && String(value).trim());
  const shouldFloat = isFocused || hasValue;

  return (
    <div className="relative">
      <div className="relative">
        <input
          id={id}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "peer w-full px-4 pt-6 pb-2 text-base bg-background border rounded-lg",
            "transition-all duration-200 focus:outline-none",
            "placeholder:text-transparent",
            error
              ? "border-error focus:border-error focus:ring-2 focus:ring-error/20"
              : success
              ? "border-success focus:border-success focus:ring-2 focus:ring-success/20"
              : "border-input focus:border-primary focus:ring-2 focus:ring-primary/20",
            className
          )}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={id}
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
        </label>
        {success && !error && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <CheckCircle2 className="h-5 w-5 text-success" />
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <AlertCircle className="h-5 w-5 text-error" />
          </motion.div>
        )}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-sm text-error flex items-center gap-1.5"
        >
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {error}
        </motion.p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}

interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  success?: boolean;
  required?: boolean;
  helperText?: string;
  characterCount?: boolean;
  maxLength?: number;
}

export function FloatingTextarea({
  label,
  error,
  success,
  required,
  helperText,
  characterCount,
  maxLength,
  className,
  value,
  id,
  ...props
}: FloatingTextareaProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const hasValue = Boolean(value && String(value).trim());
  const shouldFloat = isFocused || hasValue;
  const charCount = String(value || "").length;

  return (
    <div className="relative">
      <div className="relative">
        <textarea
          id={id}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={maxLength}
          className={cn(
            "peer w-full px-4 pt-6 pb-2 text-base bg-background border rounded-lg resize-none",
            "transition-all duration-200 focus:outline-none",
            "placeholder:text-transparent min-h-[120px]",
            error
              ? "border-error focus:border-error focus:ring-2 focus:ring-error/20"
              : success
              ? "border-success focus:border-success focus:ring-2 focus:ring-success/20"
              : "border-input focus:border-primary focus:ring-2 focus:ring-primary/20",
            className
          )}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute left-4 transition-all duration-200 pointer-events-none",
            shouldFloat
              ? "top-2 text-xs font-medium"
              : "top-4 text-base",
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
        </label>
        {success && !error && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute right-3 top-3"
          >
            <CheckCircle2 className="h-5 w-5 text-success" />
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute right-3 top-3"
          >
            <AlertCircle className="h-5 w-5 text-error" />
          </motion.div>
        )}
      </div>
      <div className="flex items-center justify-between mt-1.5">
        {error ? (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-error flex items-center gap-1.5"
          >
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            {error}
          </motion.p>
        ) : (
          <>
            {helperText && (
              <p className="text-xs text-muted-foreground">{helperText}</p>
            )}
            {characterCount && maxLength && (
              <p
                className={cn(
                  "text-xs ml-auto",
                  charCount > maxLength * 0.9
                    ? "text-warning"
                    : "text-muted-foreground"
                )}
              >
                {charCount} / {maxLength}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

