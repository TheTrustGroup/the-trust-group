"use client";

import * as React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  company: string;
  companyLogo?: string;
  rating: number;
  featured?: boolean;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive?: boolean;
}

export function TestimonialCard({ testimonial, isActive = false }: TestimonialCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div
      className={cn(
        "relative p-8 md:p-10 rounded-2xl bg-background border-2 border-border",
        "transition-all duration-500",
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"
      )}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 left-6 text-primary/20">
        <Quote className="h-12 w-12" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-6">
        {stars.map((star) => (
          <Star
            key={star}
            className={cn(
              "h-5 w-5 transition-colors",
              star <= testimonial.rating
                ? "text-warning fill-warning"
                : "text-muted-foreground/50 dark:text-muted-foreground/70 fill-none dark:fill-muted-foreground/20"
            )}
          />
        ))}
        <span className="ml-2 text-sm font-medium text-muted-foreground">
          {testimonial.rating}/5
        </span>
      </div>

      {/* Quote */}
      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 pl-8 font-medium not-italic">
        &quot;{testimonial.quote}&quot;
      </blockquote>

      {/* Client Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-border">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-foreground font-bold text-lg">
          {testimonial.clientName.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-foreground">{testimonial.clientName}</div>
          <div className="text-sm text-muted-foreground">
            {testimonial.clientTitle} at {testimonial.company}
          </div>
        </div>
        {testimonial.companyLogo && (
          <div className="relative w-16 h-16 rounded-lg bg-muted flex items-center justify-center overflow-hidden aspect-square">
            <Image
              src={testimonial.companyLogo}
              alt={testimonial.company}
              fill
              onError={(e) => {
                // Hide image and show company initial on error
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const container = target.parentElement;
                if (container && !container.querySelector(".fallback-initial")) {
                  const fallback = document.createElement("div");
                  fallback.className = "fallback-initial absolute inset-0 flex items-center justify-center text-muted-foreground font-bold text-lg";
                  fallback.textContent = testimonial.company.charAt(0).toUpperCase();
                  container.appendChild(fallback);
                }
              }}
              sizes="64px"
              className="object-contain p-2"
              width={64}
              height={64}
            />
          </div>
        )}
      </div>
    </div>
  );
}

