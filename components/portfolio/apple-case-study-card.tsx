"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export interface AppleCaseStudy {
  id: string;
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  industry?: string; // Optional: for client badge
  featured?: boolean; // Optional: for highlighting
}

interface AppleCaseStudyCardProps {
  caseStudy: AppleCaseStudy;
  className?: string;
  index?: number; // For stagger animation
  onViewDetails?: (caseStudy: AppleCaseStudy) => void;
}

export function AppleCaseStudyCard({ 
  caseStudy, 
  className,
  index = 0,
  onViewDetails 
}: AppleCaseStudyCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const cardRef = React.useRef<HTMLElement>(null);

  // Track mouse position for glow effect
  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] 
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn(
        "card-apple glass-card",
        "h-full flex flex-col",
        "group relative overflow-hidden",
        "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
        "transition-all duration-300 ease-out",
        className
      )}
      role="article"
      aria-label={`Case study: ${caseStudy.client}`}
      tabIndex={onViewDetails ? 0 : undefined}
      onClick={onViewDetails ? () => onViewDetails(caseStudy) : undefined}
      onKeyDown={(e) => {
        if (onViewDetails && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onViewDetails(caseStudy);
        }
      }}
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      {/* Client Badge - Optional, subtle glass */}
      {caseStudy.industry && (
        <div className="absolute top-4 right-4 z-10">
          <div className="glass-subtle px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span className="text-xs font-medium text-medium-contrast uppercase tracking-wider">
              {caseStudy.industry}
            </span>
          </div>
        </div>
      )}

      {/* Featured Badge */}
      {caseStudy.featured && (
        <div className="absolute top-4 left-4 z-10">
          <div className="px-3 py-1.5 bg-primary text-primary-foreground rounded-full shadow-apple">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Featured
            </span>
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="flex flex-col h-full p-6 md:p-8 relative z-0">
        {/* Client Section */}
        <div className="mb-6">
          <p 
            className="text-xs font-semibold text-medium-contrast uppercase tracking-wider mb-2"
            aria-label="Client"
          >
            Client
          </p>
          <h3 className="text-base md:text-lg font-semibold text-high-contrast leading-relaxed">
            {caseStudy.client}
          </h3>
        </div>

        {/* Challenge */}
        <div className="mb-6 pb-6 border-b border-hairline">
          <p 
            className="text-xs font-semibold text-medium-contrast uppercase tracking-wider mb-2"
            aria-label="Challenge"
          >
            Challenge
          </p>
          <p className="text-sm md:text-base text-medium-contrast leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>

        {/* Solution - Highlighted */}
        <div className="mb-6 pb-6 border-b border-hairline">
          <p 
            className="text-xs font-semibold text-medium-contrast uppercase tracking-wider mb-2"
            aria-label="Solution"
          >
            Solution
          </p>
          <p className="text-sm md:text-base text-high-contrast leading-relaxed font-medium">
            {caseStudy.solution}
          </p>
        </div>

        {/* Outcome */}
        <div className="mt-auto">
          <p 
            className="text-xs font-semibold text-medium-contrast uppercase tracking-wider mb-2 flex items-center gap-2"
            aria-label="Results"
          >
            <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" aria-hidden="true" />
            Results
          </p>
          <p className="text-sm md:text-base text-medium-contrast leading-relaxed">
            {caseStudy.outcome}
          </p>
        </div>

        {/* View Details Link - Appears on hover */}
        {onViewDetails && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 8
            }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="mt-6 pt-6 border-t border-hairline"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(caseStudy);
              }}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors min-h-[44px] w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label={`View details for ${caseStudy.client} case study`}
            >
              View details
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Removed decorative gradient glow - clean glass card only */}
    </motion.article>
  );
}
