"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "./project-card";
import { IntelligentPlaceholder } from "./intelligent-placeholder";
import { lockBodyScroll } from "@/lib/utils/scroll-lock";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [imageError, setImageError] = React.useState(false);

  React.useEffect(() => {
    // Reset error state when project changes
    if (project) {
      setImageError(false);
    }
  }, [project]);

  React.useEffect(() => {
    if (isOpen) {
      // ✅ GOOD - Use optimized scroll lock utility (handles iOS and layout shift)
      const unlock = lockBodyScroll();
      
      return () => {
        unlock();
      };
    }
  }, [isOpen]);

  if (!project || !isOpen) return null;

  const categoryLabels: Record<string, string> = {
    ai: "AI Project",
    web: "Web App",
    mobile: "Mobile App",
    enterprise: "Enterprise",
    all: "All Projects",
  };

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center p-4",
        "bg-background/80 backdrop-blur-sm",
        "transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      style={{ zIndex: "var(--z-modal)" }}
      onClick={onClose}
    >
      <div
        className={cn(
          "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto",
          "bg-background rounded-2xl border-2 border-border shadow-2xl",
          "transform transition-all duration-300",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          style={{ zIndex: "var(--z-popover)" }}
          aria-label="Close modal"
        >
          <X className="h-5 w-5 stroke-current dark:stroke-current" strokeWidth={2} />
        </button>

        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
              loading="lazy"
            />
          ) : (
            <IntelligentPlaceholder
              title={project.title}
              category={project.category}
              technologies={project.technologies}
              className="w-full h-full"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                {categoryLabels[project.category]}
              </span>
              {project.featured && (
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/20">
                  Featured
                </span>
              )}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {project.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Meta Information */}
          {(project.client || project.year) && (
            <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-lg bg-muted">
              {project.client && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Client</p>
                  <p className="font-semibold text-foreground">{project.client}</p>
                </div>
              )}
              {project.year && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Year</p>
                  <p className="font-semibold text-foreground">{project.year}</p>
                </div>
              )}
            </div>
          )}

          {/* Long Description */}
          {project.longDescription && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-foreground">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Key Results</h3>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success dark:text-success mt-0.5 flex-shrink-0 stroke-current" strokeWidth={2} fill="currentColor" />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA — text link only; no button. Every case study link resolves to a real page. */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className="font-sans text-body-sm text-foreground no-underline opacity-90 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 self-start"
                onClick={onClose}
              >
                Read full case study →
              </Link>
            )}
            <button
              type="button"
              onClick={onClose}
              className="font-sans text-body-sm text-muted-foreground no-underline opacity-90 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 self-start"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

