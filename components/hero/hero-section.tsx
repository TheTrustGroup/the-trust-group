"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedBackground } from "./animated-background";
import { ScrollIndicator } from "./scroll-indicator";
import { ScrollAnimation, ParallaxSection } from "@/components/animations";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/80" />
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circle */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8"
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">AI & Software Engineering Powerhouse</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Building Tomorrow&apos;s
            </span>
            <br />
            <span className="text-foreground">Technology Today</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground mb-3 sm:mb-4 max-w-3xl mx-auto px-4 sm:px-0"
          >
            Transforming businesses through cutting-edge AI solutions and innovative software engineering
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0"
          >
            A parent company with multiple businesses under its umbrella, delivering excellence in every project
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto min-h-[48px] touch-manipulation group" 
              onClick={() => smoothScrollTo("contact", 80)}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-active:translate-x-2 transition-transform duration-200" aria-hidden="true" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto min-h-[48px] touch-manipulation group"
              onClick={() => smoothScrollTo("portfolio", 80)}
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-active:translate-x-2 transition-transform duration-200" aria-hidden="true" />
            </Button>
          </motion.div>

          {/* Stats or Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0"
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "100+", label: "Happy Clients" },
              { value: "50+", label: "Team Members" },
              { value: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator targetId="services" />
    </section>
  );
}

