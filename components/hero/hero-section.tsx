"use client";

import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useScrollGlass } from "@/lib/hooks/use-scroll-glass";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const isScrolled = useScrollGlass(50);

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="relative z-10 w-full mx-auto container-padding-apple max-w-3xl section-padding-apple">
        <motion.div
          className={cn(
            "glass-container hero-glass rounded-2xl p-8 md:p-10 lg:p-12 text-center",
            isScrolled && "scrolled"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Primary headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-headline font-semibold text-high-contrast mb-4 md:mb-5"
          >
            We build mission-critical systems organizations can rely on.
          </motion.h1>

          {/* Supporting subline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
            className="text-body-medium text-medium-contrast mb-8 md:mb-10 max-w-2xl mx-auto"
          >
            Engineered for reliability, security, and long-term scale.
          </motion.p>

          {/* Subtle trust indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-medium-contrast mb-8 md:mb-10"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Trusted by enterprise organizations</span>
            </span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Response within 24 hours</span>
            </span>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center"
          >
            <button 
              className="btn-apple btn-apple-primary px-8 md:px-10 py-3.5 md:py-4 min-h-[52px] md:min-h-[56px]"
              onClick={() => smoothScrollTo("contact", 80)}
            >
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
