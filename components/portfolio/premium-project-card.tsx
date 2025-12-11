"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, ArrowRight, Calendar, Users, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeviceMockup, getPlaceholderImage } from "./device-mockups";
import type { Project } from "./project-card";

interface PremiumProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
  index?: number;
}

export function PremiumProjectCard({ project, onViewDetails, index = 0 }: PremiumProjectCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [showOverlay, setShowOverlay] = React.useState(false);

  const categoryColors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    ai: {
      bg: "bg-primary/20", // Increased from /10 to /20 for better contrast
      text: "text-primary", // Using primary color directly for 4.5:1+ contrast
      border: "border-primary/30", // Increased border opacity
      gradient: "from-primary/20 via-primary/10 to-accent/20",
    },
    web: {
      bg: "bg-accent/20", // Increased from /10 to /20 for better contrast
      text: "text-accent", // Using accent color directly
      border: "border-accent/30", // Increased border opacity
      gradient: "from-accent/20 via-accent/10 to-primary/20",
    },
    mobile: {
      bg: "bg-green-600/20", // Using darker green for better contrast
      text: "text-green-700 dark:text-green-400", // Darker text for contrast
      border: "border-green-600/30",
      gradient: "from-green-600/20 via-green-600/10 to-emerald-600/20",
    },
    enterprise: {
      bg: "bg-purple-600/20", // Using darker purple for better contrast
      text: "text-purple-700 dark:text-purple-400", // Darker text for contrast
      border: "border-purple-600/30",
      gradient: "from-purple-600/20 via-purple-600/10 to-pink-600/20",
    },
    all: {
      bg: "bg-muted/20",
      text: "text-muted-foreground",
      border: "border-border",
      gradient: "from-muted/20 via-muted/10 to-muted/20",
    },
  };

  const categoryLabels: Record<string, string> = {
    ai: "AI Project",
    web: "Web App",
    mobile: "Mobile App",
    enterprise: "Enterprise",
    all: "All Projects",
  };

  const colors = categoryColors[project.category] || categoryColors.all;
  const deviceType = project.category === "mobile" ? "phone" : "laptop";
  const imageUrl = project.image || getPlaceholderImage(project.title, project.category);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={cn(
        "group relative rounded-2xl overflow-hidden border-2 bg-background/80 backdrop-blur-sm",
        "transition-all duration-500 cursor-pointer",
        colors.border,
        isHovered && "shadow-2xl shadow-primary/20 scale-[1.02]"
      )}
      onMouseEnter={() => {
        setIsHovered(true);
        setShowOverlay(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setTimeout(() => setShowOverlay(false), 200);
      }}
      onClick={() => onViewDetails?.(project)}
    >
      {/* Animated Gradient Border */}
      <motion.div
        className={cn(
          "absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-r",
          colors.gradient,
          "blur-sm"
        )}
        animate={isHovered ? {
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Device Mockup Area */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-muted/30 to-background/50 p-4 md:p-8">
        <motion.div
          animate={isHovered ? { scale: 1.05, y: -10 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full"
        >
          <DeviceMockup type={deviceType} imageUrl={imageUrl} className="h-full" />
        </motion.div>

        {/* Category Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className={cn(
            "absolute top-6 left-6 px-3 py-1.5 rounded-full text-xs font-semibold border-2 backdrop-blur-md",
            colors.bg,
            colors.text,
            colors.border
          )}
        >
          {categoryLabels[project.category]}
        </motion.div>

        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="absolute top-6 right-6 px-3 py-1.5 rounded-full text-xs font-semibold bg-accent text-accent-foreground border-2 border-accent/30 backdrop-blur-md"
          >
            ⭐ Featured
          </motion.div>
        )}

        {/* Hover Overlay with Details */}
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent",
                "flex flex-col justify-end p-6"
              )}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {project.timeline && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{project.timeline}</span>
                    </div>
                  )}
                  {project.teamSize && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{project.teamSize}</span>
                    </div>
                  )}
                  {project.results && project.results.length > 0 && (
                    <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                      <TrendingUp className="h-3 w-3" />
                      <span>{project.results.length} Key Results</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewDetails?.(project);
                    }}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  {project.caseStudyUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 group/btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.caseStudyUrl, "_blank");
                      }}
                    >
                      Case Study
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors break-words">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground line-clamp-2 leading-relaxed break-words">
            {project.description}
          </p>
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <motion.span
              key={idx}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              className={cn(
                "px-2.5 py-1 text-xs rounded-md font-medium border backdrop-blur-sm",
                "bg-background/80 text-foreground border-border",
                "group-hover:border-primary/30 group-hover:text-primary transition-colors"
              )}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground border border-border">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Quick Stats */}
        {project.results && project.results.length > 0 && (
          <div className="pt-2 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3" />
              <span className="font-medium">Impact: {project.results[0]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Glow Effect */}
      <motion.div
        className={cn(
          "absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10",
          "bg-gradient-to-r",
          colors.gradient
        )}
        animate={isHovered ? {
          opacity: [0.3, 0.6, 0.3],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.article>
  );
}

