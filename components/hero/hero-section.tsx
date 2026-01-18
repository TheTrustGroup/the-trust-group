"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20 pb-24 sm:pb-28 md:pb-32">
      {/* Structural background pattern - minimal, engineered */}
      <div className="absolute inset-0 opacity-[0.008] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, currentColor 0.5px, transparent 0.5px),
              linear-gradient(currentColor 0.5px, transparent 0.5px)
            `,
            backgroundSize: "96px 96px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center">
          {/* Headline - Clear, authoritative */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-12 md:mb-16 leading-[1.1] text-foreground tracking-tight"
          >
            Mission-Critical Systems
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-muted-foreground leading-tight block mt-2">
              Engineered for <span className="text-primary/60">Reliability</span>
            </span>
          </motion.h1>

          {/* Subheadline - Direct, outcome-focused */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light"
          >
            We design, engineer, and deploy AI systems, enterprise software, and secure infrastructure for organizations that cannot afford failure.
          </motion.p>

          {/* Trust Indicators - Minimal, muted */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-12 sm:gap-16 mb-12 md:mb-16"
          >
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2 tracking-tight">500+</div>
              <div className="text-sm text-muted-foreground">Systems Deployed</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2 tracking-tight">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2 tracking-tight">100%</div>
              <div className="text-sm text-muted-foreground">Security Compliance</div>
            </div>
          </motion.div>

          {/* CTA - Calm, confident, enterprise-appropriate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-base font-medium border hover:bg-background/50 transition-colors"
              onClick={() => smoothScrollTo("contact", 80)}
            >
              Discuss Your Requirements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
