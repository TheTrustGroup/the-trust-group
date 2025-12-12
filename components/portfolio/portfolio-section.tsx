"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { PremiumProjectCard } from "./premium-project-card";
import { ProjectModal } from "./project-modal";
import { projects, projectCategories } from "@/lib/cms-client";
import { ScrollAnimation } from "@/components/animations";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { Project } from "./project-card";
import { PortfolioFilterLoader } from "./portfolio-filter-loader";

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
        className="relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 40%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 60%, rgba(0, 184, 230, 0.1) 0%, transparent 50%),
                linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, transparent 50%),
                linear-gradient(45deg, rgba(0, 184, 230, 0.05) 0%, transparent 50%)
              `,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(0, 102, 255, 0.03) 1px, transparent 1px),
                linear-gradient(rgba(0, 102, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background/95 to-background pointer-events-none" />

        <div className="relative z-10">
          <ScrollAnimation variant="fadeInUp">
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
          </ScrollAnimation>

          {/* Category Filters with Project Counter */}
          <ScrollAnimation variant="fadeInUp" delay={0.1}>
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {projectCategories.map((category) => {
                  const isActive = activeCategory === category.id;
                  const count = category.id === "all" 
                    ? projects.length 
                    : projects.filter((p) => p.category === category.id).length;
                  
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "px-6 py-2.5 rounded-lg font-medium transition-all duration-300",
                        "border-2 backdrop-blur-sm relative",
                        isActive
                          ? "bg-primary text-primary-foreground border-primary shadow-lg"
                          : "bg-background/80 text-foreground border-border hover:border-primary/50"
                      )}
                    >
                      <span>{category.name}</span>
                      <motion.span
                        initial={false}
                        animate={{ scale: isActive ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                          "ml-2 px-2 py-0.5 rounded-full text-xs",
                          isActive ? "bg-primary-foreground/20" : "bg-muted"
                        )}
                      >
                        {count}
                      </motion.span>
                    </motion.button>
                  );
                })}
              </div>
              
              {/* Active Filter Indicator */}
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-muted-foreground"
              >
                Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
              </motion.div>
            </div>
          </ScrollAnimation>

          {/* Projects Grid with Filtering Animation */}
          <PortfolioFilterLoader isLoading={isFiltering}>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ 
                      opacity: isFiltering ? 0.5 : 1, 
                      scale: isFiltering ? 0.95 : 1,
                      y: 0 
                    }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.05,
                      layout: { duration: 0.3 }
                    }}
                  >
                    <PremiumProjectCard
                      project={project}
                      onViewDetails={handleViewDetails}
                      index={index}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </PortfolioFilterLoader>

          {/* Empty State */}
          <AnimatePresence>
            {filteredProjects.length === 0 && !isFiltering && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-16 px-4"
              >
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
              </motion.div>
            )}
          </AnimatePresence>

          {/* See More Button */}
          <ScrollAnimation variant="fadeInUp" delay={0.3}>
            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="group"
                asChild
              >
                <a href="/#portfolio" aria-label="View all projects in portfolio">
                  See More Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform stroke-current dark:stroke-current" strokeWidth={2} aria-hidden="true" />
                </a>
              </Button>
            </div>
          </ScrollAnimation>
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

