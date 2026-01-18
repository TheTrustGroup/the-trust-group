"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { TypingAnimation } from "./typing-animation";
import { ScrollIndicator } from "./scroll-indicator";
import { ScrollAnimation, ParallaxSection, ParallaxBackground } from "@/components/animations";
// Tree-shake framer-motion imports
import { motion } from "framer-motion";
import { useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Lazy load heavy animation components for better performance
const EnhancedBackground = dynamic(() => import("./enhanced-background").then(mod => ({ default: mod.EnhancedBackground })), { ssr: false });
const NeuralNetwork = dynamic(() => import("./neural-network").then(mod => ({ default: mod.NeuralNetwork })), { ssr: false });
const Floating3DShapes = dynamic(() => import("./3d-elements").then(mod => ({ default: mod.Floating3DShapes })), { ssr: false });
const Floating3DCube = dynamic(() => import("./3d-elements").then(mod => ({ default: mod.Floating3DCube })), { ssr: false });
const Parallax3DLayers = dynamic(() => import("./3d-elements").then(mod => ({ default: mod.Parallax3DLayers })), { ssr: false });

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseXValue = useMotionValue(0);
  const mouseYValue = useMotionValue(0);
  const [showTyping, setShowTyping] = useState(false);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for background layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const midgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  const mouseXRotate = useSpring(useTransform(mouseXValue, [-1, 1], [-20, 20]), {
    stiffness: 150,
    damping: 15,
  });
  const mouseYRotate = useSpring(useTransform(mouseYValue, [-1, 1], [-20, 20]), {
    stiffness: 150,
    damping: 15,
  });
  
  const circle1RotateX = useTransform(mouseYRotate, [-20, 20], [20, -20]);
  const circle1RotateY = useTransform(mouseXRotate, [-20, 20], [-20, 20]);
  const circle2RotateX = useTransform(mouseYRotate, [-20, 20], [-20, 20]);
  const circle2RotateY = useTransform(mouseXRotate, [-20, 20], [20, -20]);
  const gridRotateX = useTransform(mouseYRotate, [-20, 20], [-40, 40]);
  const gridRotateY = useTransform(mouseXRotate, [-20, 20], [-40, 40]);
  const contentRotateX = useTransform(mouseYRotate, [-20, 20], [-10, 10]);
  const contentRotateY = useTransform(mouseXRotate, [-20, 20], [-10, 10]);

  useEffect(() => {
    let rafId: number | null = null;
    let ticking = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking && containerRef.current) {
        ticking = true;
        rafId = window.requestAnimationFrame(() => {
          const rect = containerRef.current?.getBoundingClientRect();
          if (rect) {
            mouseXValue.set((e.clientX - rect.left - rect.width / 2) / rect.width);
            mouseYValue.set((e.clientY - rect.top - rect.height / 2) / rect.height);
          }
          ticking = false;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [mouseXValue, mouseYValue]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-20 pb-24 sm:pb-28 md:pb-32"
      style={{ perspective: "1000px", maxWidth: "100vw", overflowX: "hidden" }}
    >
      {/* Enhanced Animated Background - Parallax Layer - Lazy Loaded */}
      <motion.div style={{ y: backgroundY, willChange: "transform" }}>
        <EnhancedBackground />
      </motion.div>
      
      {/* Neural Network Visualization - Parallax Layer - Lazy Loaded */}
      <motion.div style={{ y: midgroundY, willChange: "transform" }}>
        <NeuralNetwork />
      </motion.div>
      
      {/* 3D Parallax Layers - Lazy Loaded */}
      <Parallax3DLayers />
      
      {/* 3D Floating Shapes - Parallax Layer - Lazy Loaded */}
      <motion.div style={{ y: foregroundY, willChange: "transform" }}>
        <Floating3DShapes />
      </motion.div>
      
      {/* 3D Cube - Lazy Loaded */}
      <Floating3DCube />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/70 z-10" />
      
      {/* Enhanced Geometric Shapes with 3D */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large Circle with 3D effect */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotateZ: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            translateZ: 50,
            rotateX: circle1RotateX,
            rotateY: circle1RotateY,
            transformStyle: "preserve-3d",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotateZ: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            translateZ: 30,
            rotateX: circle2RotateX,
            rotateY: circle2RotateY,
            transformStyle: "preserve-3d",
          }}
        />
        
        {/* 3D Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            translateZ: 100,
            rotateX: gridRotateX,
            rotateY: gridRotateY,
            transformStyle: "preserve-3d",
          }}
        />
      </div>

      {/* Content with 3D Effects */}
      <motion.div
        className="relative z-20 w-full mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 md:py-20 pb-32 sm:pb-36 md:pb-40"
        style={{
          translateZ: 200,
          rotateX: contentRotateX,
          rotateY: contentRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="max-w-5xl mx-auto text-center w-full px-2 xs:px-3 sm:px-4 md:px-6">
          {/* Main Headline - Outcome-focused, authoritative */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-foreground max-w-4xl mx-auto"
          >
            Mission-Critical Systems
            <br />
            <span className="text-primary">Engineered for Reliability</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We design, engineer, and deploy AI systems, enterprise software, and secure infrastructure for organizations that cannot afford failure.
          </motion.p>
          

          {/* Trust Indicators - Clean, muted */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-12 text-sm text-muted-foreground"
          >
            <div className="text-center">
              <div className="text-2xl font-semibold text-foreground mb-1">500+</div>
              <div>Systems Deployed</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-semibold text-foreground mb-1">10+</div>
              <div>Years Experience</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-semibold text-foreground mb-1">100%</div>
              <div>Security Compliance</div>
            </div>
          </motion.div>

          {/* CTAs - Direct and confident */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="px-8 py-6 text-base font-medium"
              onClick={() => smoothScrollTo("contact", 80)}
            >
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-base font-medium"
              onClick={() => smoothScrollTo("portfolio", 80)}
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator targetId="services" />
    </section>
  );
}

