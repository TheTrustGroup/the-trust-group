"use client";

import * as React from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { CaseStudyCard, projectToCaseStudy, type CaseStudy } from "./case-study-card";
import dynamic from "next/dynamic";

// Lazy load modal - only loads when opened
const ProjectModal = dynamic(() => import("./project-modal").then(mod => ({ default: mod.ProjectModal })), {
  ssr: false
});
import { projects, projectCategories } from "@/lib/cms-client";
import { cn } from "@/lib/utils";
import type { Project } from "./project-card";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [filteredProjects, setFilteredProjects] = React.useState<Project[]>(projects);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isFiltering, setIsFiltering] = React.useState(false);

  // Transform projects to case studies
  const caseStudies = React.useMemo(() => {
    return filteredProjects.map(projectToCaseStudy);
  }, [filteredProjects]);

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
  }, [activeCategory]);

  const handleViewDetails = (caseStudy: CaseStudy) => {
    const project = projects.find((p) => p.id === caseStudy.id);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
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
        variant="default"
        size="default"
        animation="slide-up"
        className="relative overflow-hidden"
      >
        <div className="relative z-10 container-padding-apple section-padding-apple">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-high-contrast">
              Case Studies
            </h2>
            <p className="text-base md:text-lg text-medium-contrast max-w-2xl mx-auto">
              Results, not process noise.
            </p>
          </div>

          {/* Category Filters - Minimal, Apple-style */}
          {projectCategories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
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
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px]",
                      "border border-hairline",
                      isActive
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-medium-contrast hover:text-high-contrast hover:border-primary/30"
                    )}
                  >
                    {category.name}
                    {count > 0 && (
                      <span className={cn(
                        "ml-2 px-2 py-0.5 rounded-full text-xs",
                        isActive ? "bg-primary-foreground/20" : "bg-muted/50"
                      )}>
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Case Studies Grid - Mobile-first */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-apple mb-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                caseStudy={caseStudy}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* Empty State */}
          {caseStudies.length === 0 && !isFiltering && (
            <div className="text-center py-16 px-4">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-high-contrast mb-2">
                  No case studies found
                </h3>
                <p className="text-medium-contrast mb-6">
                  Try selecting a different category.
                </p>
                <button
                  className="btn-apple"
                  onClick={() => setActiveCategory("all")}
                >
                  View All Case Studies
                </button>
              </div>
            </div>
          )}
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

