"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export function KonamiCode() {
  const [sequence, setSequence] = React.useState<string[]>([]);
  const [isUnlocked, setIsUnlocked] = React.useState(false);
  const { showToast } = useToast();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSequence((prev) => {
        const newSequence = [...prev, e.code].slice(-KONAMI_CODE.length);
        
        if (newSequence.length === KONAMI_CODE.length) {
          const isMatch = newSequence.every((key, index) => key === KONAMI_CODE[index]);
          if (isMatch && !isUnlocked) {
            setIsUnlocked(true);
            showToast({
              type: "success",
              title: "🎉 Easter Egg Unlocked!",
              message: "You found our secret! Welcome to the club.",
            });
          }
        }
        
        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isUnlocked, showToast]);

  return (
    <AnimatePresence>
      {isUnlocked && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setIsUnlocked(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative bg-background rounded-2xl shadow-2xl p-8 max-w-md w-full border-2 border-primary"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setIsUnlocked(false)}
            >
              <X className="h-5 w-5" />
            </Button>
            
            <div className="text-center space-y-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
              </motion.div>
              
              <h2 className="text-3xl font-bold text-foreground">
                🎉 You Found Us!
              </h2>
              
              <p className="text-muted-foreground">
                Congratulations! You&apos;ve unlocked our secret easter egg. 
                You must be a developer (or just really curious)!
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Want to work with a team that adds fun touches like this? 
                  <br />
                  <a href="/contact" className="text-primary hover:underline font-semibold">
                    Let&apos;s talk!
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

