"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, LayoutList, Film, MoveHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ScrollAnimation } from "@/components/animations";
import { TestimonialCarousel } from "./testimonial-carousel";
import { TestimonialsGrid } from "./testimonials-grid";
import { TestimonialsMarquee } from "./testimonials-marquee";
import { VideoTestimonialPlaceholder } from "./video-testimonial-placeholder";
import { StatsBar } from "./stats-bar";
import { testimonials } from "@/lib/cms-client";
import { cn } from "@/lib/utils";
import type { EnhancedTestimonial } from "./enhanced-testimonial-card";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { TrendingUp } from "lucide-react";

type ViewMode = "carousel" | "grid" | "marquee" | "video";

export function EnhancedTestimonialsSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("carousel");
  
  // Convert testimonials to enhanced format
  const enhancedTestimonials: EnhancedTestimonial[] = testimonials.map((t) => ({
    id: t.id,
    quote: t.quote,
    clientName: t.clientName,
    clientTitle: t.clientTitle,
    company: t.company,
    companySize: (t as any).companySize,
    industry: (t as any).industry,
    projectType: (t as any).projectType,
    rating: t.rating,
    date: (t as any).date,
    verified: (t as any).verified ?? true,
    featured: t.featured,
    metrics: (t as any).metrics,
    avatar: (t as any).avatar,
    companyLogo: t.companyLogo,
  }));

  const featuredTestimonials = enhancedTestimonials.filter((t) => t.featured);
  const videoTestimonials = enhancedTestimonials.slice(0, 3); // First 3 for video placeholders

  const viewModes: Array<{ mode: ViewMode; icon: React.ElementType; label: string }> = [
    { mode: "carousel", icon: LayoutList, label: "Carousel" },
    { mode: "grid", icon: LayoutGrid, label: "Grid" },
    { mode: "marquee", icon: MoveHorizontal, label: "Marquee" },
    { mode: "video", icon: Film, label: "Video" },
  ];

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

      {/* Header */}
      <ScrollAnimation variant="fadeInUp">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Don&apos;t just take our word for it. Hear from the businesses we&apos;ve helped transform 
            through innovative technology solutions.
          </p>

          {/* View Mode Selector */}
          <div className="flex items-center justify-center gap-2 p-1 bg-muted/50 rounded-lg inline-flex">
            {viewModes.map(({ mode, icon: Icon, label }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200",
                  "text-sm font-medium",
                  viewMode === mode
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                aria-label={`Switch to ${label} view`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Testimonials Display */}
      <ScrollAnimation variant="fadeInUp" delay={0.2}>
        <AnimatePresence mode="wait">
          {viewMode === "carousel" && (
            <motion.div
              key="carousel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <TestimonialCarousel
                testimonials={featuredTestimonials}
                autoRotate={true}
                rotationInterval={6000}
              />
            </motion.div>
          )}

          {viewMode === "grid" && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialsGrid
                testimonials={enhancedTestimonials}
                columns={3}
              />
            </motion.div>
          )}

          {viewMode === "marquee" && (
            <motion.div
              key="marquee"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialsMarquee
                testimonials={enhancedTestimonials}
                direction="left"
                speed={50}
                pauseOnHover={true}
              />
            </motion.div>
          )}

          {viewMode === "video" && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {videoTestimonials.map((testimonial) => (
                <VideoTestimonialPlaceholder
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation variant="fadeInUp" delay={0.4}>
        <div className="mt-16 md:mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-3xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary/15 via-accent/10 to-primary/15 border-2 border-primary/30 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,102,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[shimmer_3s_linear_infinite]" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <TrendingUp className="h-8 w-8 text-primary" strokeWidth={2} fill="none" />
                </motion.div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
                Join Our Happy Clients
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your business with innovative technology solutions? 
                Let&apos;s discuss how we can help you achieve your goals and join hundreds of satisfied clients.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-primary-hover"
                  onClick={() => smoothScrollTo("contact", 80)}
                >
                  Get Started Today
                </Button>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
          </motion.div>
        </div>
      </ScrollAnimation>
    </AnimatedSection>
  );
}

