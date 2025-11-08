"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { EnhancedTestimonialCard, type EnhancedTestimonial } from "./enhanced-testimonial-card";
import { cn } from "@/lib/utils";

interface TestimonialsGridProps {
  testimonials: EnhancedTestimonial[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function TestimonialsGrid({
  testimonials,
  columns = 3,
  className,
}: TestimonialsGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid grid-cols-1 gap-6 md:gap-8", gridCols[columns], className)}>
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <EnhancedTestimonialCard
            testimonial={testimonial}
            variant="grid"
          />
        </motion.div>
      ))}
    </div>
  );
}

