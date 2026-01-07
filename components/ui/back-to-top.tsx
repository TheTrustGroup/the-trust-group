"use client";

import * as React from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { smoothScrollToTop } from "@/lib/smooth-scroll";

export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  React.useEffect(() => {
    let ticking = false;
    let rafId: number | null = null;

    const toggleVisibility = () => {
      if (!ticking) {
        ticking = true;
        rafId = window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsVisible(scrollY > 300);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const scrollToTop = React.useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    smoothScrollToTop("smooth");
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-20 sm:bottom-28 right-4 sm:right-6"
          style={{ 
            zIndex: "var(--z-fixed)",
            pointerEvents: "auto",
          }}
        >
          <Button
            type="button"
            size="icon"
            className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 bg-primary text-primary-foreground group touch-manipulation cursor-pointer"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-200 stroke-current dark:stroke-current" strokeWidth={2} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

