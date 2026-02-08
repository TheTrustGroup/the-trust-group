"use client";

import * as React from "react";
import { Section } from "@/components/ui";
import { AppleCaseStudyCard, type AppleCaseStudy } from "./apple-case-study-card";
import { getFeaturedProjects } from "@/lib/cms-client";

// Convert real projects to Apple case study format
function convertProjectToCaseStudy(project: any): AppleCaseStudy {
  // Extract key results/impact from results array
  const resultsSummary = project.results && project.results.length > 0
    ? project.results.slice(0, 2).join(", ")
    : project.description;

  // Create concise solution description
  const solutionText = project.longDescription 
    ? (project.longDescription.length > 150 
        ? project.longDescription.substring(0, 150) + "..." 
        : project.longDescription)
    : project.description;

  return {
    id: project.id,
    client: project.client || "Enterprise client",
    challenge: project.description || "Required a reliable, scalable solution to support business growth.",
    solution: solutionText,
    outcome: resultsSummary,
    industry: project.industry,
    featured: project.featured,
    caseStudyUrl: project.caseStudyUrl,
  };
}

export function SelectedWork() {
  // Memoize featured projects to prevent recalculation on re-renders
  const caseStudies = React.useMemo(() => {
    const featuredProjects = getFeaturedProjects().slice(0, 4);
    return featuredProjects.map(convertProjectToCaseStudy);
  }, []);

  // If no featured projects, show a message or return null
  if (caseStudies.length === 0) {
    return null;
  }

  return (
    <Section id="portfolio" variant="default" size="default" container={false} className="border-t border-hairline">
      <div className="max-w-6xl mx-auto container-padding-apple section-padding-apple">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-headline dark:text-headline mb-4 md:mb-6">
            Selected work
          </h2>
          <p className="text-body text-medium-contrast dark:text-medium-contrast max-w-2xl mx-auto">
            A small sample of systems designed for reliability and scale.
          </p>
        </div>
        
        {/* Case Studies Grid - Mobile-first */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {caseStudies.map((caseStudy, index) => (
            <AppleCaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
