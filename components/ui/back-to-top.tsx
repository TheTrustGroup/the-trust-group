"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 300);
    };

    // Check initial scroll position
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // Fallback for browsers that don't support smooth scroll
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={handleClick}
          className="fixed bottom-20 sm:bottom-28 right-4 sm:right-6 z-[1200] rounded-full w-12 h-12 bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center touch-manipulation cursor-pointer"
          style={{
            pointerEvents: "auto",
            WebkitTapHighlightColor: "transparent",
            zIndex: 1200,
            position: "fixed",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 stroke-white" strokeWidth={2.5} fill="none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
