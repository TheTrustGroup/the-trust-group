"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnhancedProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export function EnhancedProgressIndicator({
  currentStep,
  totalSteps,
  stepLabels,
}: EnhancedProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1;
        const isCompleted = step < currentStep;
        const isCurrent = step === currentStep;
        const isUpcoming = step > currentStep;

        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center flex-1">
              {/* Step Circle */}
              <motion.div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  "border-2 transition-all duration-300",
                  isCompleted && "bg-primary border-primary text-primary-foreground",
                  isCurrent && "bg-primary border-primary text-primary-foreground scale-110",
                  isUpcoming && "bg-background border-border text-muted-foreground"
                )}
                animate={{
                  scale: isCurrent ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                {isCompleted ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-semibold">{step}</span>
                )}
              </motion.div>
              
              {/* Step Label */}
              <motion.p
                className={cn(
                  "mt-2 text-xs font-medium text-center max-w-[80px]",
                  isCurrent && "text-primary",
                  isCompleted && "text-foreground",
                  isUpcoming && "text-muted-foreground"
                )}
                animate={{
                  opacity: isCurrent ? 1 : 0.6,
                }}
              >
                {stepLabels[index]}
              </motion.p>
            </div>

            {/* Connector Line */}
            {index < totalSteps - 1 && (
              <div className="flex-1 h-0.5 mx-2 relative">
                <div className="absolute inset-0 bg-border" />
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isCompleted ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
