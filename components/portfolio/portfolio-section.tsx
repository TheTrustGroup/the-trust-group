"use client";

import * as React from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { projects, projectCategories } from "@/lib/cms-client";
import { ScrollAnimation, StaggerGrid, StaggerItem } from "@/components/animations";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { Project } from "./project-card";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [filteredProjects, setFilteredProjects] = React.useState<Project[]>(projects);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    // Smooth transition for filtering
    const timer = setTimeout(() => {
      if (activeCategory === "all") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter((project) => project.category === activeCategory)
        );
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <AnimatedSection
        id="portfolio"
        variant="muted"
        size="default"
        animation="slide-up"
        className="bg-gradient-to-b from-muted/30 to-background"
      >
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of innovative solutions across AI, web development, 
            mobile apps, and enterprise systems.
          </p>
        </div>

        {/* Category Filters */}
        <ScrollAnimation variant="fadeInUp" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-lg font-medium transition-all duration-300",
                    "border-2 hover:scale-105",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-background text-foreground border-border hover:border-primary/50"
                  )}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </ScrollAnimation>

        {/* Projects Grid */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard
                project={project}
                onViewDetails={handleViewDetails}
              />
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* See More Button */}
        <ScrollAnimation variant="fadeInUp" delay={0.3}>
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="group"
              asChild
            >
              <a href="/portfolio">
                See More Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </ScrollAnimation>
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

