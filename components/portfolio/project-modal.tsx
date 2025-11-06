"use client";

import * as React from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "./project-card";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
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
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        "bg-background/80 backdrop-blur-sm",
        "transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
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
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image */}
        <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
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
            <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
              <div className="text-8xl font-bold text-primary/20">
                {project.title.charAt(0)}
              </div>
            </div>
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
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
            {project.caseStudyUrl && (
              <Button
                size="lg"
                className="flex-1 group"
                asChild
              >
                <a href={project.caseStudyUrl}>
                  View Full Case Study
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            )}
            <Button
              size="lg"
              variant="outline"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

