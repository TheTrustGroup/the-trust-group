"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, CheckCircle2 } from "lucide-react";

export function TrustIndicators() {
  const indicators = [
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Clock, text: "Response within 24 hours" },
    { icon: CheckCircle2, text: "500+ projects delivered" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground"
    >
      {indicators.map((indicator, index) => {
        const Icon = indicator.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-center gap-2"
          >
            <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>{indicator.text}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
