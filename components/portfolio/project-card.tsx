"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "ai" | "web" | "mobile" | "enterprise" | "all";
  technologies: string[];
  image?: string;
  featured?: boolean;
  caseStudyUrl?: string;
  longDescription?: string;
  client?: string;
  year?: string;
  timeline?: string;
  teamSize?: string;
  results?: string[];
}

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const categoryColors: Record<string, string> = {
    ai: "bg-primary/20 text-primary border-primary/30", // Improved contrast
    web: "bg-accent/20 text-accent border-accent/30", // Improved contrast
    mobile: "bg-green-600/20 text-green-700 dark:text-green-400 border-green-600/30", // Improved contrast
    enterprise: "bg-purple-600/20 text-purple-700 dark:text-purple-400 border-purple-600/30", // Improved contrast
    all: "bg-muted/20 text-muted-foreground border-border",
  };

  const categoryLabels: Record<string, string> = {
    ai: "AI Project",
    web: "Web App",
    mobile: "Mobile App",
    enterprise: "Enterprise",
    all: "All Projects",
  };

  return (
    <article
      className={cn(
        "group relative rounded-xl overflow-hidden border-2 bg-background",
        "transition-all duration-300 md:hover:shadow-xl md:hover:-translate-y-2 md:hover:scale-[1.02]",
        "cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
        "active:scale-[0.98] touch-manipulation",
        categoryColors[project.category].split(" ")[2] // border color
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails?.(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onViewDetails?.(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      data-interactive="true"
    >
      {/* Image/Mockup Area */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
            <div className="text-6xl font-bold text-primary/20">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Overlay on Hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent",
            "transition-opacity duration-300 flex items-end p-6",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="w-full">
            <Button
              size="sm"
              variant="secondary"
              className="w-full group/btn"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails?.(project);
              }}
            >
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Category Badge */}
        <div
          className={cn(
            "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border-2 backdrop-blur-sm",
            categoryColors[project.category]
          )}
        >
          {categoryLabels[project.category]}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground border-2 border-accent/30 backdrop-blur-sm">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground border border-border"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground border border-border">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Case Study Link */}
        {project.caseStudyUrl && (
          <a
            href={project.caseStudyUrl}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors group/link"
          >
            View Case Study
            <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </article>
  );
}

