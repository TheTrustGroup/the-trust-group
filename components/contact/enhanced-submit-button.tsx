"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnhancedSubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting: boolean;
  isSuccess?: boolean;
  children?: React.ReactNode;
}

export function EnhancedSubmitButton({
  isSubmitting,
  isSuccess = false,
  disabled = false,
  children = "Send Message",
  className,
  ...props
}: EnhancedSubmitButtonProps) {
  const isInteractive = !disabled && !isSubmitting && !isSuccess;
  
  return (
    <motion.div
      whileHover={isInteractive ? {
        scale: 1.02,
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
      } : {}}
      whileTap={isInteractive ? {
        scale: 0.98,
        transition: { duration: 0.1 }
      } : {}}
      className="inline-block"
    >
      <button
        type="submit"
        disabled={isSubmitting || isSuccess || disabled}
        className={cn(
          "btn-apple btn-apple-primary",
          "min-h-[52px] px-8 md:px-10",
          "flex items-center justify-center gap-2",
          "transition-all duration-200",
          // Disabled state
          (disabled || isSubmitting || isSuccess) && "opacity-60 cursor-not-allowed",
          // Success state
          isSuccess && "bg-success hover:bg-success",
          className
        )}
        aria-label={isSubmitting ? "Sending message" : isSuccess ? "Message sent successfully" : "Submit contact form"}
        {...props}
      >
      <AnimatePresence mode="wait">
        {isSubmitting ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            <span>Sending...</span>
          </motion.div>
        ) : isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            <span>Sent!</span>
          </motion.div>
        ) : (
          <motion.div
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <span>{children}</span>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Send className="h-5 w-5" aria-hidden="true" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </button>
    </motion.div>
  );
}
