"use client";

import * as React from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { PremiumProjectCard } from "./premium-project-card";
import dynamic from "next/dynamic";

// Lazy load modal - only loads when opened
const ProjectModal = dynamic(() => import("./project-modal").then(mod => ({ default: mod.ProjectModal })), {
  ssr: false
});
import { projects, projectCategories } from "@/lib/cms-client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { Project } from "./project-card";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [filteredProjects, setFilteredProjects] = React.useState<Project[]>(projects);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isFiltering, setIsFiltering] = React.useState(false);

  React.useEffect(() => {
    setIsFiltering(true);
    // Smooth transition for filtering
    const timer = setTimeout(() => {
      if (activeCategory === "all") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter((project) => project.category === activeCategory)
        );
      }
      setIsFiltering(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]); // projects is a prop, not needed in deps

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // ✅ GOOD - Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setSelectedProject(null);
      timeoutRef.current = null;
    }, 300);
  };

  // ✅ GOOD - Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <AnimatedSection
        id="portfolio"
        variant="muted"
        size="default"
        animation="slide-up"
        className="relative overflow-hidden"
      >

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              Case Studies
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Systems we&apos;ve engineered and deployed for organizations that require reliability and precision.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {projectCategories.map((category) => {
                const isActive = activeCategory === category.id;
                const count = category.id === "all" 
                  ? projects.length 
                  : projects.filter((p) => p.category === category.id).length;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                      "border",
                      isActive
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:border-primary/50"
                    )}
                  >
                    <span>{category.name}</span>
                    <span className={cn(
                      "ml-2 px-2 py-0.5 rounded text-xs",
                      isActive ? "bg-primary-foreground/20" : "bg-muted"
                    )}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
            
            {/* Active Filter Indicator */}
            <div className="text-sm text-muted-foreground">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {filteredProjects.map((project, index) => (
              <div key={project.id}>
                <PremiumProjectCard
                  project={project}
                  onViewDetails={handleViewDetails}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && !isFiltering && (
            <div className="text-center py-16 px-4">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No projects found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn&apos;t find any projects in this category. Try selecting a different filter.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setActiveCategory("all")}
                  >
                    View All Projects
                  </Button>
                </div>
            </div>
          )}

          {/* See More Button */}
          <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="group"
                asChild
              >
                <a href="/#portfolio" className="smooth-scroll" aria-label="View all projects in portfolio">
                  See More Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform stroke-current dark:stroke-current" strokeWidth={2} aria-hidden="true" />
                </a>
              </Button>
            </div>
        </div>
      </AnimatedSection>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

