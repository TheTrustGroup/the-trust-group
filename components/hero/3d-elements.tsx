"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { Code2, Cpu, Zap, Network, LucideIcon } from "lucide-react";

interface FloatingShapeProps {
  icon: LucideIcon;
  position: { x: string; y: string; z: number };
  rotation: { x: number; y: number; z: number };
  delay: number;
  size: number;
  index: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function FloatingShape({ icon: Icon, position, rotation, delay, size, index, mouseX, mouseY }: FloatingShapeProps) {
  const rotateX = useSpring(
    useTransform(mouseY, [-1, 1], [rotation.x - 30, rotation.x + 30]),
    { stiffness: 50, damping: 10 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [rotation.y - 30, rotation.y + 30]),
    { stiffness: 50, damping: 10 }
  );

  return (
    <motion.div
      className="absolute"
      style={{
        left: position.x,
        top: position.y,
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        rotateZ: rotation.z,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -20, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay },
        y: {
          duration: 4 + index,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <div
        className="relative"
        style={{
          width: size,
          height: size,
          transform: `translateZ(${position.z}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-2xl backdrop-blur-sm border border-primary/20 shadow-2xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-10 w-10 text-primary dark:text-primary stroke-current" strokeWidth={2} />
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl -z-10" />
      </div>
    </motion.div>
  );
}

export function Floating3DShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
        mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const shapes = [
    {
      icon: Code2,
      position: { x: "10%", y: "20%", z: 0 },
      rotation: { x: 15, y: 25, z: 0 },
      delay: 0,
      size: 80,
    },
    {
      icon: Cpu,
      position: { x: "85%", y: "30%", z: 50 },
      rotation: { x: -20, y: -15, z: 10 },
      delay: 0.2,
      size: 100,
    },
    {
      icon: Zap,
      position: { x: "15%", y: "70%", z: 30 },
      rotation: { x: 10, y: -20, z: -15 },
      delay: 0.4,
      size: 90,
    },
    {
      icon: Network,
      position: { x: "80%", y: "75%", z: 20 },
      rotation: { x: -15, y: 25, z: 5 },
      delay: 0.6,
      size: 85,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-5"
      style={{ perspective: "1000px" }}
    >
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          icon={shape.icon}
          position={shape.position}
          rotation={shape.rotation}
          delay={shape.delay}
          size={shape.size}
          index={index}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </div>
  );
}

export function Floating3DCube() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cubeRef.current) {
        const rect = cubeRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
        mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [15, -15]), {
    stiffness: 100,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), {
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.div
      ref={cubeRef}
      className="absolute top-1/2 right-1/4 w-32 h-32"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      animate={{
        rotateZ: [0, 360],
      }}
      transition={{
        rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
      }}
    >
      {/* 3D Cube */}
      <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
        {/* Front face */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg border border-primary/40 backdrop-blur-sm"
          style={{
            transform: "translateZ(64px)",
            boxShadow: "0 0 30px rgba(0, 102, 255, 0.3)",
          }}
        />
        {/* Back face */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-accent/30 to-primary/30 rounded-lg border border-accent/40 backdrop-blur-sm"
          style={{
            transform: "translateZ(-64px) rotateY(180deg)",
            boxShadow: "0 0 30px rgba(0, 102, 255, 0.3)",
          }}
        />
        {/* Right face */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-primary/30 backdrop-blur-sm"
          style={{
            transform: "rotateY(90deg) translateZ(64px)",
            boxShadow: "0 0 30px rgba(0, 102, 255, 0.2)",
          }}
        />
        {/* Left face */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg border border-accent/30 backdrop-blur-sm"
          style={{
            transform: "rotateY(-90deg) translateZ(64px)",
            boxShadow: "0 0 30px rgba(0, 102, 255, 0.2)",
          }}
        />
        {/* Top face */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-primary/25 to-accent/25 rounded-lg border border-primary/35 backdrop-blur-sm"
          style={{
            transform: "rotateX(90deg) translateZ(64px)",
            boxShadow: "0 0 30px rgba(0, 102, 255, 0.25)",
          }}
        />
        {/* Bottom face */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-accent/25 to-primary/25 rounded-lg border border-accent/35 backdrop-blur-sm"
          style={{
            transform: "rotateX(-90deg) translateZ(64px)",
            boxShadow: "0 0 30px rgba(0, 102, 255, 0.25)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function Parallax3DLayers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<Array<HTMLDivElement | null>>([]);
  const gradientElementsRef = useRef<Array<HTMLElement | null>>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const rafIdRef = useRef<number | null>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    // Optimized scroll handler using RAF and direct DOM manipulation
    const handleScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        rafIdRef.current = window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Directly update transforms without React state
          // Use translate3d for GPU acceleration (better than translateY)
          layersRef.current.forEach((layerEl, index) => {
            if (layerEl) {
              const speed = [0.3, 0.5, 0.7][index] || 0.5;
              const yPos = -(scrollY * speed);
              const zDepth = [50, 100, 150][index];
              // ✅ GOOD - Use translate3d for GPU acceleration
              layerEl.style.transform = `translate3d(0, ${yPos}px, ${zDepth}px)`;
            }
          });
          
          tickingRef.current = false;
        });
      }
    };

    // Optimized mouse handler with throttling
    let mouseRafId: number | null = null;
    let mouseTicking = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseTicking && containerRef.current) {
        mouseTicking = true;
        mouseRafId = window.requestAnimationFrame(() => {
          if (containerRef.current) {
            // ✅ GOOD - Batch read layout properties first
            const rect = containerRef.current.getBoundingClientRect();
            const mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
            const mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
            
            mousePositionRef.current = { x: mouseX, y: mouseY };
            
            // ✅ GOOD - Batch calculate all values
            const x = 50 + mouseX * 20;
            const y = 50 + mouseY * 20;
            const backgroundValue = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 102, 255, 0.1) 0%, transparent 70%)`;
            
            // ✅ GOOD - Batch write all styles (no reads in loop)
            gradientElementsRef.current.forEach((gradientEl) => {
              if (gradientEl) {
                gradientEl.style.background = backgroundValue;
              }
            });
          }
          mouseTicking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
      if (mouseRafId !== null) {
        window.cancelAnimationFrame(mouseRafId);
      }
    };
  }, []);

  const layers = [
    { depth: 50, speed: 0.3, opacity: 0.1 },
    { depth: 100, speed: 0.5, opacity: 0.15 },
    { depth: 150, speed: 0.7, opacity: 0.2 },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ perspective: "1200px" }}
    >
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          ref={(el) => {
            layersRef.current[index] = el;
            // ✅ GOOD - Cache gradient elements to avoid querySelector in loops
            if (el) {
              gradientElementsRef.current[index] = el.querySelector('.parallax-gradient') as HTMLElement;
            }
          }}
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            opacity: layer.opacity,
            willChange: "transform",
            // Force GPU acceleration
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          animate={{
            rotateX: mousePositionRef.current.y * 5,
            rotateY: mousePositionRef.current.x * 5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        >
          <div
            className="absolute inset-0 parallax-gradient"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.1) 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

