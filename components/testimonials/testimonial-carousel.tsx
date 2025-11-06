"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "./testimonial-card";
import { cn } from "@/lib/utils";
import type { Testimonial } from "./testimonial-card";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
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
      <div className="relative h-[450px] md:h-[500px] overflow-hidden rounded-2xl">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            isActive={index === activeIndex}
          />
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
          <ChevronLeft className="h-5 w-5" />
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
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

