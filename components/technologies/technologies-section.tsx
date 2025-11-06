"use client";

import * as React from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { TechnologyCard } from "./technology-card";
import { technologyCategories, technologies } from "@/lib/cms-client";
import * as Icons from "lucide-react";
import type { Technology } from "@/data/types";
import { ScrollAnimation, StaggerGrid, StaggerItem } from "@/components/animations";
import { cn } from "@/lib/utils";

// Helper to get icon component by name
function getIconComponent(iconName: string): React.ComponentType<any> {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<any>>)[iconName];
  return IconComponent || Icons.Layers; // Fallback to Layers icon
}

export function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [filteredTechnologies, setFilteredTechnologies] = React.useState<Technology[]>(technologies);

  React.useEffect(() => {
    // Small delay for smooth transition
    const timer = setTimeout(() => {
      if (activeCategory === "all") {
        setFilteredTechnologies(technologies);
      } else {
        setFilteredTechnologies(
          technologies.filter((tech) => tech.category === activeCategory)
        );
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <AnimatedSection
      id="technologies"
      variant="default"
      size="default"
      animation="slide-up"
      className="bg-gradient-to-b from-background to-muted/20"
    >
      <ScrollAnimation variant="fadeInUp">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technologies We Master
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the entire technology stack, from AI and machine learning 
            to cloud infrastructure and modern development frameworks.
          </p>
        </div>
      </ScrollAnimation>

      {/* Category Filters */}
      <ScrollAnimation variant="fadeInUp" delay={0.1}>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
        {technologyCategories.map((category) => {
          const Icon = getIconComponent(category.icon);
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                "border-2 hover:scale-105",
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-background text-foreground border-border hover:border-primary/50"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{category.name}</span>
            </button>
          );
        })}
        </div>
      </ScrollAnimation>

      {/* Technologies Grid */}
      <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6" staggerDelay={0.05}>
        {filteredTechnologies.map((tech, index) => (
          <StaggerItem key={`${tech.name}-${index}`}>
            <TechnologyCard
              name={tech.name}
              category={
                technologyCategories.find((c) => c.id === tech.category)?.name || tech.category
              }
              proficiency={tech.proficiency}
              description={tech.description}
            />
          </StaggerItem>
        ))}
      </StaggerGrid>

      {/* Stats Footer */}
      <div className="mt-16 pt-8 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {technologies.length}+
            </div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {technologyCategories.length - 1}
            </div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {technologies.filter((t) => t.proficiency === "expert").length}+
            </div>
            <div className="text-sm text-muted-foreground">Expert Level</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              100%
            </div>
            <div className="text-sm text-muted-foreground">Coverage</div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

