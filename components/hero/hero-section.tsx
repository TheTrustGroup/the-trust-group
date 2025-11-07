"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedBackground } from "./animated-background";
import { ScrollIndicator } from "./scroll-indicator";
import { ScrollAnimation, ParallaxSection } from "@/components/animations";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { Floating3DShapes, Floating3DCube, Parallax3DLayers } from "./3d-elements";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseXValue = useMotionValue(0);
  const mouseYValue = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseXValue.set((e.clientX - rect.left - rect.width / 2) / rect.width);
        mouseYValue.set((e.clientY - rect.top - rect.height / 2) / rect.height);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseXValue, mouseYValue]);

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

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* 3D Parallax Layers */}
      <Parallax3DLayers />
      
      {/* 3D Floating Shapes */}
      <Floating3DShapes />
      
      {/* 3D Cube */}
      <Floating3DCube />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/80 z-10" />
      
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
        className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 md:py-20"
        style={{
          translateZ: 200,
          rotateX: contentRotateX,
          rotateY: contentRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="max-w-5xl mx-auto text-center px-4">
          {/* Badge with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
              transition: { duration: 0.2 },
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8 backdrop-blur-sm"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 10px 40px rgba(0, 102, 255, 0.2)",
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            </motion.div>
            <span className="text-xs sm:text-sm font-medium text-primary">AI & Software Engineering Powerhouse</span>
          </motion.div>

          {/* Main Headline with 3D text effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30, rotateX: -90 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 80 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{
              transformStyle: "preserve-3d",
              textShadow: "0 0 30px rgba(0, 102, 255, 0.3)",
            }}
          >
            <motion.span
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient inline-block"
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 },
              }}
              style={{
                transformStyle: "preserve-3d",
                display: "inline-block",
              }}
            >
              Building Tomorrow&apos;s
            </motion.span>
            <br />
            <motion.span
              className="text-foreground inline-block"
              whileHover={{
                scale: 1.05,
                rotateY: -10,
                transition: { duration: 0.3 },
              }}
              style={{
                transformStyle: "preserve-3d",
                display: "inline-block",
              }}
            >
              Technology Today
            </motion.span>
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

          {/* CTAs with 3D hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: -45 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 20,
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
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-active:translate-x-2 transition-transform duration-200" aria-hidden="true" />
                </span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                rotateX: 5,
                z: 20,
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
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-active:translate-x-2 transition-transform duration-200" aria-hidden="true" />
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
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0"
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
                className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/20"
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 10px 30px rgba(0, 102, 255, 0.1)",
                }}
              >
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2"
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
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground leading-tight">{stat.label}</div>
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

