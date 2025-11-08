"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnhancedTestimonialCard, type EnhancedTestimonial } from "./enhanced-testimonial-card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TestimonialCarouselProps {
  testimonials: EnhancedTestimonial[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

export function TestimonialCarousel({
  testimonials,
  autoRotate = true,
  rotationInterval = 5000,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  // Auto-rotation
  React.useEffect(() => {
    if (!autoRotate || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, isPaused, rotationInterval, testimonials.length]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div className="relative min-h-[550px] md:min-h-[600px] lg:min-h-[650px] overflow-hidden rounded-3xl bg-gradient-to-br from-muted/30 to-background border-2 border-border shadow-2xl">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={
              index === activeIndex
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.95, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={cn(
              index === activeIndex
                ? "relative z-10"
                : "absolute inset-0 z-0"
            )}
          >
            <EnhancedTestimonialCard
              testimonial={testimonial}
              variant="carousel"
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} fill="none" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "bg-muted hover:bg-primary/50"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} fill="none" />
        </Button>
      </div>
    </div>
  );
}

