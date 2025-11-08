"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { prefersReducedMotion } from "@/lib/animations";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down";
}

export function ParallaxBackground({
  children,
  speed = 0.5,
  className = "",
  direction = "down",
}: ParallaxBackgroundProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const shouldReduceMotion = prefersReducedMotion();
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "down" ? [0, -100 * speed] : [0, 100 * speed]
  );

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          y: y,
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface MultiLayerParallaxProps {
  layers: Array<{
    children: React.ReactNode;
    speed: number;
    className?: string;
  }>;
  className?: string;
}

// Individual parallax layer component
function ParallaxLayer({
  scrollYProgress,
  speed,
  children,
  className = "",
}: {
  scrollYProgress: any;
  speed: number;
  children: React.ReactNode;
  className?: string;
}) {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100 * speed]
  );

  return (
    <motion.div
      style={{
        y: y,
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MultiLayerParallax({ layers, className = "" }: MultiLayerParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const shouldReduceMotion = prefersReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {layers.map((layer, index) => (
          <div key={index} className={layer.className}>
            {layer.children}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {layers.map((layer, index) => (
        <ParallaxLayer
          key={index}
          scrollYProgress={scrollYProgress}
          speed={layer.speed}
          className={layer.className}
        >
          {layer.children}
        </ParallaxLayer>
      ))}
    </div>
  );
}

