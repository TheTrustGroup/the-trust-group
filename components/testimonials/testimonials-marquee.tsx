"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { EnhancedTestimonialCard, type EnhancedTestimonial } from "./enhanced-testimonial-card";

interface TestimonialsMarqueeProps {
  testimonials: EnhancedTestimonial[];
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
}

export function TestimonialsMarquee({
  testimonials,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
}: TestimonialsMarqueeProps) {
  const [isPaused, setIsPaused] = React.useState(false);
  
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div
      className="relative overflow-hidden py-8"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? "-50%" : "0%",
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{
          width: "fit-content",
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex-shrink-0 w-[350px] md:w-[400px] max-w-[90vw]"
          >
            <EnhancedTestimonialCard
              testimonial={testimonial}
              variant="marquee"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

