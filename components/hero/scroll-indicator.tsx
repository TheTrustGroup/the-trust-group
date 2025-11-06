"use client";

import { ChevronDown } from "lucide-react";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  targetId?: string;
}

export function ScrollIndicator({ targetId = "services" }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (targetId) {
      smoothScrollTo(targetId, 80);
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-primary hover:text-primary-hover transition-colors group min-h-[44px] min-w-[44px] touch-manipulation"
      aria-label="Scroll down"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
    >
      <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
        Scroll
      </span>
      <ChevronDown className="h-6 w-6" />
    </motion.button>
  );
}

