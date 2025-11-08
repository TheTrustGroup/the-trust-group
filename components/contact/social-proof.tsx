"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Users, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function SocialProof({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
        >
          <div className="flex items-center gap-3 mb-2">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-2xl font-bold text-foreground">500+</span>
          </div>
          <p className="text-sm text-muted-foreground">Satisfied Clients</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
        >
          <div className="flex items-center gap-3 mb-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-2xl font-bold text-foreground">&lt;24h</span>
          </div>
          <p className="text-sm text-muted-foreground">Avg Response Time</p>
        </motion.div>
      </div>

      {/* Client Logos Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-4 rounded-lg bg-muted/30 border border-border"
      >
        <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <Star className="h-4 w-4 text-primary" />
          Trusted by Industry Leaders
        </p>
        <div className="flex items-center justify-center gap-6 opacity-60">
          {/* Placeholder for client logos */}
          <div className="text-xs text-muted-foreground">
            Client logos would appear here
          </div>
        </div>
      </motion.div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-4 rounded-lg bg-success/10 border border-success/20 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Star className="h-5 w-5 text-success fill-success" />
          <span className="text-lg font-bold text-foreground">4.9/5</span>
        </div>
        <p className="text-sm text-muted-foreground">Average Client Rating</p>
      </motion.div>
    </div>
  );
}

