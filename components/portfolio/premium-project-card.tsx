"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeviceMockup } from "./device-mockups";
import type { Project } from "./project-card";

interface PremiumProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
  index?: number;
}

export function PremiumProjectCard({ project, onViewDetails, index = 0 }: PremiumProjectCardProps) {

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
  const imageUrl = project.image;

  return (
    <article
      className={cn(
        "group relative rounded-lg overflow-hidden border bg-background/50",
        "transition-all duration-200 cursor-pointer hover:border-primary/40 hover:shadow-md",
        colors.border
      )}
      onClick={() => onViewDetails?.(project)}
    >

      {/* Device Mockup Area */}
      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-muted/30 p-4 md:p-8">
        <DeviceMockup 
          type={deviceType} 
          imageUrl={imageUrl} 
          className="h-full"
          placeholderTitle={!imageUrl ? project.title : undefined}
          placeholderCategory={!imageUrl ? project.category : undefined}
          placeholderTechnologies={!imageUrl ? project.technologies : undefined}
        />

        {/* Category Badge */}
        <div
          className={cn(
            "absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-medium border",
            colors.bg,
            colors.text,
            colors.border
          )}
        >
          {categoryLabels[project.category]}
        </div>
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
            <span
              key={idx}
              className={cn(
                "px-2.5 py-1 text-xs rounded-md font-medium border",
                "bg-background/80 text-foreground border-border"
              )}
            >
              {tech}
            </span>
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
              <span className="font-medium">Impact: {project.results[0]}</span>
            </div>
          </div>
        )}

        {/* View Details Button */}
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails?.(project);
            }}
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}

