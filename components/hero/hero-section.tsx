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
          {/* Main Headline with Typing Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onAnimationComplete={() => setShowTyping(true)}
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-[1.2] sm:leading-tight px-1 break-words"
            style={{
              transformStyle: "preserve-3d",
              textShadow: "0 0 30px rgba(0, 102, 255, 0.3)",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {showTyping ? (
              <>
                <motion.span
                  className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient inline-block break-words"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    transition: { duration: 0.3 },
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    display: "inline-block",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  <TypingAnimation text="Building Tomorrow's" speed={60} />
                </motion.span>
                <br className="hidden xs:block" />
                <motion.span
                  className="text-foreground inline-block break-words"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: -10,
                    transition: { duration: 0.3 },
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    display: "inline-block",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  <TypingAnimation text="Technology Today" speed={60} />
                </motion.span>
              </>
            ) : (
              <>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient inline-block break-words" style={{ wordBreak: "break-word", overflowWrap: "break-word" }}>
                  Building Tomorrow&apos;s
                </span>
                <br className="hidden xs:block" />
                <span className="text-foreground inline-block break-words" style={{ wordBreak: "break-word", overflowWrap: "break-word" }}>Technology Today</span>
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 sm:mb-4 w-full px-2 mx-auto leading-relaxed break-words"
            style={{ wordBreak: "break-word", overflowWrap: "break-word", maxWidth: "100%" }}
          >
            From commercial applications to defense systems, we deliver AI-powered solutions, enterprise software, and secure technology for organizations that can&apos;t afford to fail.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 w-full px-2 mx-auto leading-relaxed break-words"
            style={{ wordBreak: "break-word", overflowWrap: "break-word", maxWidth: "100%" }}
          >
            A parent company with multiple businesses under its umbrella, delivering excellence in every project
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-2"
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-success mb-1">98%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mb-1">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div className="hidden md:block text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Security Compliance</div>
            </div>
          </motion.div>

          {/* CTAs with 3D hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: -45 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-2"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 20,
                y: -12,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
                rotateY: -5,
                rotateX: -5,
                z: 10,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto min-h-[48px] touch-manipulation group relative overflow-hidden" 
                onClick={() => smoothScrollTo("contact", 80)}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 10px 40px rgba(0, 102, 255, 0.3)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-active:translate-x-2 transition-transform duration-200 stroke-current dark:stroke-current" strokeWidth={2} aria-hidden="true" />
                </span>
              </Button>
            </motion.div>
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                rotateX: 5,
                z: 20,
                y: -12,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
                rotateY: 5,
                rotateX: -5,
                z: 10,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto min-h-[48px] touch-manipulation group relative overflow-hidden backdrop-blur-sm"
                onClick={() => smoothScrollTo("portfolio", 80)}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 10px 40px rgba(0, 102, 255, 0.2)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-active:translate-x-2 transition-transform duration-200 stroke-current dark:stroke-current" strokeWidth={2} aria-hidden="true" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats or Trust Indicators with 3D cards */}
          <motion.div
            initial={{ opacity: 0, rotateX: -45 }}
            animate={{
              opacity: 1,
              rotateX: 0,
            }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 80 }}
            className="mt-12 sm:mt-16 mb-8 sm:mb-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-full px-2 sm:px-4 md:px-6 justify-items-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "100+", label: "Happy Clients" },
              { value: "50+", label: "Team Members" },
              { value: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateX: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  rotateX: 5,
                  z: 30,
                  transition: { duration: 0.2 },
                }}
                className="text-center p-3 sm:p-4 md:p-5 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/20 w-full max-w-full flex flex-col items-center justify-center"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 10px 30px rgba(0, 102, 255, 0.1)",
                  minWidth: 0,
                }}
              >
                <motion.div
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 break-words text-center"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(0, 102, 255, 0.5)",
                      "0 0 20px rgba(0, 102, 255, 0.8)",
                      "0 0 10px rgba(0, 102, 255, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-[10px] xs:text-xs sm:text-sm md:text-base text-muted-foreground leading-snug break-words text-center px-1" style={{ wordBreak: "break-word", overflowWrap: "break-word" }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator targetId="services" />
    </section>
  );
}

