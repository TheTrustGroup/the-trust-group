"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote, Star, CheckCircle2, Calendar, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface EnhancedTestimonial {
  id: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  company: string;
  companySize?: string;
  industry?: string;
  projectType?: string;
  rating: number;
  date?: string;
  verified?: boolean;
  featured?: boolean;
  metrics?: Record<string, string>;
  avatar?: string;
  companyLogo?: string;
}

interface EnhancedTestimonialCardProps {
  testimonial: EnhancedTestimonial;
  variant?: "carousel" | "grid" | "marquee";
  className?: string;
}

export function EnhancedTestimonialCard({
  testimonial,
  variant = "grid",
  className,
}: EnhancedTestimonialCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const [isHovered, setIsHovered] = React.useState(false);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative p-6 md:p-8 lg:p-10 rounded-2xl bg-background border-2 border-border",
        "transition-all duration-300",
        "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10",
        isHovered && "shadow-lg",
        variant === "carousel" && "h-full min-h-[550px] md:min-h-[600px]",
        className
      )}
    >
      {/* Quote Icon with Animation */}
      <motion.div
        className="absolute top-6 right-6 text-primary/10 z-0"
        animate={isHovered ? { scale: 1.15, rotate: 8, opacity: 0.15 } : { scale: 1, rotate: 0, opacity: 0.1 }}
        transition={{ duration: 0.4, type: "spring" }}
      >
        <Quote className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28" />
      </motion.div>

      {/* Verified Badge */}
      {testimonial.verified && (
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/10 border border-success/20">
          <CheckCircle2 className="h-3.5 w-3.5 text-success" />
          <span className="text-xs font-semibold text-success">Verified Client</span>
        </div>
      )}

      {/* Rating */}
      <motion.div 
        className="flex items-center gap-1 mb-6 relative z-10"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        {stars.map((star, index) => (
          <motion.div
            key={star}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05, type: "spring" }}
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            <Star
              className={cn(
                "h-5 w-5 md:h-6 md:w-6 transition-all duration-200",
                star <= testimonial.rating
                  ? "text-warning fill-warning drop-shadow-sm"
                  : "text-muted fill-muted"
              )}
            />
          </motion.div>
        ))}
        <motion.span 
          className="ml-3 text-base font-bold text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {testimonial.rating}.0
        </motion.span>
      </motion.div>

      {/* Quote */}
      <motion.div
        className={cn(
          "text-foreground leading-relaxed mb-8 relative z-10",
          variant === "carousel" ? "text-xl md:text-2xl lg:text-3xl" : "text-base md:text-lg"
        )}
        animate={isHovered ? { x: 3, scale: 1.01 } : { x: 0, scale: 1 }}
        transition={{ duration: 0.3, type: "spring" }}
      >
        <blockquote className={cn(
          "italic font-medium",
          variant === "carousel" && "font-semibold"
        )}>
          &quot;{testimonial.quote}&quot;
        </blockquote>
      </motion.div>

      {/* Metrics */}
      {testimonial.metrics && Object.keys(testimonial.metrics).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0, scale: 1.02 } : { opacity: 0.9, y: 0, scale: 1 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="mb-6 p-5 rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/20 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <TrendingUp className="h-4 w-4 text-primary" />
            </motion.div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Project Results
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(testimonial.metrics).slice(0, 2).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm"
              >
                <div className="font-bold text-lg text-foreground mb-0.5">{value}</div>
                <div className="text-xs text-muted-foreground">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Client Info */}
      <div className="pt-6 border-t border-border space-y-4">
        {/* Top Row: Avatar, Client Details, Company Logo */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <motion.div
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {testimonial.avatar ? (
              <Image
                src={testimonial.avatar}
                alt={testimonial.clientName}
                fill
                sizes="64px"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-foreground font-bold text-lg">
                {testimonial.clientName.charAt(0)}
              </div>
            )}
          </motion.div>

          {/* Client Details */}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-foreground mb-0.5">{testimonial.clientName}</div>
            <div className="text-sm text-muted-foreground truncate">
              {testimonial.clientTitle}
            </div>
            <div className="text-xs text-muted-foreground/80 truncate">
              {testimonial.company}
            </div>
          </div>

          {/* Company Logo */}
          {testimonial.companyLogo ? (
            <motion.div
              className="relative w-12 h-12 md:w-14 md:h-14 rounded-lg bg-muted/50 border border-border flex items-center justify-center overflow-hidden flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={testimonial.companyLogo}
                alt={testimonial.company}
                fill
                sizes="56px"
                className="object-contain p-2"
              />
            </motion.div>
          ) : (
            <motion.div
              className="relative w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs font-bold text-primary">
                {testimonial.company
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </span>
            </motion.div>
          )}
        </div>

        {/* Bottom Row: Project Type, Date, Industry */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            {testimonial.projectType && (
              <span className="inline-block px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20 font-medium">
                {testimonial.projectType}
              </span>
            )}
            {testimonial.industry && (
              <span className="inline-block px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground border border-border">
                {testimonial.industry}
              </span>
            )}
            {testimonial.companySize && (
              <span className="inline-block px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent border border-accent/20">
                {testimonial.companySize}
              </span>
            )}
          </div>

          {/* Date */}
          {testimonial.date && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-shrink-0">
              <Calendar className="h-3.5 w-3.5" />
              <span>{formatDate(testimonial.date)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 opacity-0 blur-2xl -z-10"
        animate={isHovered ? { opacity: 1, scale: 1.05 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Gradient Overlay on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 pointer-events-none"
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Shimmer Effect on Hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        >
          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
        </motion.div>
      )}
    </motion.div>
  );
}

