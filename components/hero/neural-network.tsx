"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Node {
  x: number;
  y: number;
  layer: number;
  connections: number[];
}

export function NeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && !isMobile) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  // Create neural network nodes
  const layers = 4;
  const nodesPerLayer = isMobile ? [3, 4, 4, 2] : [4, 6, 6, 3];
  const nodes: Node[] = [];

  nodesPerLayer.forEach((count, layerIndex) => {
    for (let i = 0; i < count; i++) {
      const x = ((layerIndex + 1) / (layers + 1)) * 100;
      const y = ((i + 1) / (count + 1)) * 100;
      nodes.push({
        x,
        y,
        layer: layerIndex,
        connections: [],
      });
    }
  });

  // Connect nodes between layers
  nodes.forEach((node, index) => {
    if (node.layer < layers - 1) {
      const nextLayerNodes = nodes.filter((n) => n.layer === node.layer + 1);
      nextLayerNodes.forEach((nextNode) => {
        node.connections.push(nodes.indexOf(nextNode));
      });
    }
  });

  const pulseX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), {
    stiffness: 50,
    damping: 20,
  });
  const pulseY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), {
    stiffness: 50,
    damping: 20,
  });

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
    >
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00B8E6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Connections */}
        {nodes.map((node, index) =>
          node.connections.map((targetIndex) => {
            const target = nodes[targetIndex];
            return (
              <motion.line
                key={`${index}-${targetIndex}`}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke="url(#neuralGradient)"
                strokeWidth="0.1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  pathLength: { duration: 1, delay: index * 0.05 },
                  opacity: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            );
          })
        )}

        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.circle
            key={index}
            cx={node.x}
            cy={node.y}
            r={node.layer === 0 || node.layer === layers - 1 ? "1.5" : "1"}
            fill="#0066FF"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut",
              },
              opacity: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </svg>
    </div>
  );
}

