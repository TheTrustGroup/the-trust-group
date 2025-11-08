"use client";

import * as React from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Logo } from "@/components/logo";

interface EnhancedLoadingScreenProps {
  isLoading: boolean;
  progress?: number;
  message?: string;
}

export function EnhancedLoadingScreen({
  isLoading,
  progress,
  message = "Loading your experience...",
}: EnhancedLoadingScreenProps) {
  const [mounted, setMounted] = React.useState(false);
  const progressValue = useMotionValue(progress || 0);
  const smoothProgress = useSpring(progressValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (progress !== undefined) {
      progressValue.set(progress);
    }
  }, [progress, progressValue]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-background via-background to-primary/5 flex flex-col items-center justify-center"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,102,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[shimmer_3s_linear_infinite]" />
          </div>

          {/* Logo Animation with Pulse */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.8,
            }}
            className="mb-12 relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Logo variant="full" size="lg" />
            </motion.div>
            
            {/* Glowing rings around logo */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-primary/20"
                style={{ scale: 1 + i * 0.3 }}
                animate={{
                  scale: [1 + i * 0.3, 1.2 + i * 0.3, 1 + i * 0.3],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Enhanced Spinner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative w-20 h-20 mb-8"
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 border-4 border-primary/10 rounded-full"
            />
            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Inner pulsing dot */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Progress Bar */}
          {progress !== undefined && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "320px" }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-[320px] h-2 bg-muted/50 rounded-full overflow-hidden mb-6 shadow-inner"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden"
                style={{ width: smoothProgress }}
              >
                {/* Shimmer effect on progress bar */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          )}

          {/* Loading Message with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <motion.p
              className="text-base font-medium text-foreground mb-2"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {message}
            </motion.p>
            <div className="flex items-center justify-center gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

