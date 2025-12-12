"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NotificationBadgeProps {
  message: string;
  href?: string;
  onDismiss?: () => void;
  className?: string;
}

export function NotificationBadge({
  message,
  href,
  onDismiss,
  className,
}: NotificationBadgeProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex items-center justify-between gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm",
        className
      )}
    >
      <span className="text-foreground/90">{message}</span>
      {onDismiss && (
        <button
          onClick={handleDismiss}
          className="p-1 rounded hover:bg-primary/20 transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4 stroke-current dark:stroke-current" strokeWidth={2} />
        </button>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

