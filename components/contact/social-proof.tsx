"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Users, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function SocialProof({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-5 sm:space-y-6", className)}>
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 transition-all duration-200 hover:border-primary/30 hover:shadow-sm"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="text-xl sm:text-2xl font-bold text-foreground">500+</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Satisfied Clients</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 transition-all duration-200 hover:border-primary/30 hover:shadow-sm"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="text-xl sm:text-2xl font-bold text-foreground">&lt;24h</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Avg Response Time</p>
        </motion.div>
      </div>

      {/* Client Logos Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-4 sm:p-5 rounded-xl bg-muted/30 border border-border/50 transition-all duration-200 hover:border-border hover:shadow-sm"
      >
        <p className="text-xs sm:text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
          Trusted by Industry Leaders
        </p>
        <div className="flex items-center justify-center gap-6 opacity-60">
          {/* Placeholder for client logos */}
          <div className="text-xs text-muted-foreground">
            Client logos would appear here
          </div>
        </div>
      </motion.div>
    </div>
  );
}

