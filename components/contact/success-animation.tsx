"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
}

export function SuccessAnimation() {
  const [particles, setParticles] = React.useState<ConfettiParticle[]>([]);

  React.useEffect(() => {
    const colors = ["#0066FF", "#00B8E6", "#00D4FF", "#FF6B6B", "#4ECDC4", "#FFE66D"];
    const newParticles: ConfettiParticle[] = [];

    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
      {/* Confetti Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ x: `${particle.x}%`, y: "-10%", rotate: 0, opacity: 1 }}
          animate={{
            y: "110%",
            rotate: 360,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: particle.delay,
            ease: "easeOut",
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: particle.color }}
        />
      ))}

      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.3,
        }}
        className="relative z-10"
      >
        <div className="w-24 h-24 rounded-full bg-success/20 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <CheckCircle2 className="w-16 h-16 text-success" />
          </motion.div>
        </div>
      </motion.div>

      {/* Ripple Effect */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.3 + i * 0.2,
            repeat: 0,
          }}
          className="absolute w-24 h-24 rounded-full border-2 border-success"
        />
      ))}
    </div>
  );
}

