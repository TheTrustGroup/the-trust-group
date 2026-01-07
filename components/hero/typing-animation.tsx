"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingAnimation({
  text,
  speed = 50,
  className = "",
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  // Reset when text prop changes
  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
  }, [text]);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          // Only update if text hasn't changed
          if (prev.length < text.length) {
            return text.slice(0, prev.length + 1);
          }
          return prev;
        });
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete && displayedText.length === text.length && displayedText.length > 0) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, speed, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-full bg-primary ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
}

