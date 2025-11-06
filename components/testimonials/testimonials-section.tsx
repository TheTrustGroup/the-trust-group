"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { TestimonialCarousel } from "./testimonial-carousel";
import { StatsBar } from "./stats-bar";
import { ScrollAnimation } from "@/components/animations";
import { testimonials } from "@/lib/cms-client";

export function TestimonialsSection() {
  return (
    <AnimatedSection
      id="testimonials"
      variant="default"
      size="default"
      animation="fade-in"
      className="bg-gradient-to-b from-background to-muted/20"
    >
      {/* Stats Bar */}
      <div className="mb-16">
        <StatsBar />
      </div>

      {/* Testimonials Section */}
      <ScrollAnimation variant="fadeInUp">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from the businesses we&apos;ve helped transform 
            through innovative technology solutions.
          </p>
        </div>
      </ScrollAnimation>

      {/* Testimonial Carousel */}
      <ScrollAnimation variant="fadeInUp" delay={0.2}>
        <div className="max-w-4xl mx-auto">
          <TestimonialCarousel
            testimonials={testimonials}
            autoRotate={true}
            rotationInterval={6000}
          />
        </div>
      </ScrollAnimation>
    </AnimatedSection>
  );
}

