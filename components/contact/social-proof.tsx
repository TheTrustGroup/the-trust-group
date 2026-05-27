"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function SocialProof({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-5 sm:space-y-6", className)}>
      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="text-sm sm:text-base font-semibold text-foreground">
              Response within 24 hours
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            For new inquiries on business days.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 sm:p-5 rounded-xl bg-muted/30 border border-border/50"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <FileCheck className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="text-sm sm:text-base font-semibold text-foreground">
              Verifiable work
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Live URLs and case studies are listed on{" "}
            <a href="/work" className="underline underline-offset-2 hover:text-foreground">
              /work
            </a>
            . Classified engagements stay summary-only.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
