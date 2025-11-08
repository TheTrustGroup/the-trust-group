"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BudgetSliderProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const budgetRanges = [
  { label: "Under $50K", value: "under-50k", min: 0, max: 50000 },
  { label: "$50K - $100K", value: "50k-100k", min: 50000, max: 100000 },
  { label: "$100K - $250K", value: "100k-250k", min: 100000, max: 250000 },
  { label: "$250K - $500K", value: "250k-500k", min: 250000, max: 500000 },
  { label: "$500K+", value: "500k-plus", min: 500000, max: 1000000 },
  { label: "Not sure yet", value: "not-sure", min: 0, max: 0 },
];

export function BudgetSlider({ value, onChange, className }: BudgetSliderProps) {
  const [localValue, setLocalValue] = React.useState(value || "not-sure");

  const handleChange = (newValue: string) => {
    setLocalValue(newValue);
    onChange(newValue);
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M+`;
    if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`;
    return `$${amount}`;
  };

  return (
    <div className={cn("space-y-4", className)}>
      <label className="block text-sm font-medium text-foreground">
        Budget Range <span className="text-muted-foreground text-xs">(Optional)</span>
      </label>
      
      <div className="space-y-3">
        {budgetRanges.map((range) => (
          <motion.button
            key={range.value}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleChange(range.value)}
            className={cn(
              "w-full p-4 rounded-lg border-2 transition-all duration-200 text-left",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              localValue === range.value
                ? "border-primary bg-primary/10 shadow-md"
                : "border-input hover:border-primary/50 bg-background"
            )}
          >
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "font-medium",
                  localValue === range.value ? "text-primary" : "text-foreground"
                )}
              >
                {range.label}
              </span>
              {localValue === range.value && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-primary-foreground"
                  />
                </motion.div>
              )}
            </div>
            {range.min > 0 && range.max > 0 && (
              <div className="mt-2">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: localValue === range.value ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

