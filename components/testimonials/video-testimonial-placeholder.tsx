"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { EnhancedTestimonial } from "./enhanced-testimonial-card";

interface VideoTestimonialPlaceholderProps {
  testimonial: EnhancedTestimonial;
  className?: string;
}

export function VideoTestimonialPlaceholder({
  testimonial,
  className,
}: VideoTestimonialPlaceholderProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/15 to-primary/20 border-2 border-border",
        "group cursor-pointer shadow-lg hover:shadow-2xl",
        className
      )}
    >
      {/* Video Placeholder Background with Pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,102,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:30px_30px]" />
        </div>
        <div className="text-center relative z-10">
          <motion.div
            animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="w-24 h-24 rounded-full bg-primary/95 backdrop-blur-md flex items-center justify-center mb-4 mx-auto shadow-2xl border-4 border-primary-foreground/20"
          >
            <Play className="h-12 w-12 text-primary-foreground ml-1" strokeWidth={2} fill="currentColor" />
          </motion.div>
          <p className="text-sm font-semibold text-foreground/90 uppercase tracking-wider">Video Testimonial</p>
        </div>
      </div>

      {/* Overlay with Testimonial Info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <div className="text-white">
          <div className="flex items-center gap-2 mb-2">
            <Video className="h-4 w-4" strokeWidth={2} fill="none" />
            <span className="text-xs font-semibold uppercase tracking-wider">Video Review</span>
          </div>
          <h3 className="text-lg font-bold mb-1">{testimonial.clientName}</h3>
          <p className="text-sm text-white/80 mb-2">
            {testimonial.clientTitle} at {testimonial.company}
          </p>
          <p className="text-sm text-white/90 line-clamp-2">
            &quot;{testimonial.quote.substring(0, 120)}...&quot;
          </p>
        </div>
      </div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <Button
          size="lg"
          className="rounded-full shadow-lg"
          onClick={() => {
            // Placeholder for video modal/player
            // TODO: Implement video modal/player
          }}
        >
          <Play className="h-5 w-5 mr-2" strokeWidth={2} fill="currentColor" />
          Watch Video
        </Button>
      </motion.div>
    </motion.div>
  );
}

