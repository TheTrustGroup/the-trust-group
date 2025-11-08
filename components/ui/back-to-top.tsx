"use client";

import * as React from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { throttle } from "@/lib/smooth-scroll";

export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  React.useEffect(() => {
    const toggleVisibility = throttle(() => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 100);

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-24 right-6 z-30"
        >
          <Button
            size="icon"
            className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 bg-primary text-primary-foreground group"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-200" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

