"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { Project } from "./project-card";

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  outcome: string[];
  category?: string;
  year?: string;
}

/**
 * Transform Project data into CaseStudy format
 * Extracts: client context, problem, solution, outcome
 * Follows Apple-style: concise, outcome-driven, no fluff
 */
export function projectToCaseStudy(project: Project): CaseStudy {
  // Problem: Use description, limit to 1-2 concise lines (max 120 chars)
  let problem = project.description.trim();
  if (problem.length > 120) {
    // Try to cut at sentence boundary
    const sentences = problem.split(/[.!?]+/);
    if (sentences.length > 1) {
      problem = sentences.slice(0, 2).join(". ").trim() + ".";
    } else {
      problem = problem.substring(0, 117) + "...";
    }
  }

  // Solution: Extract from longDescription or create concise version (max 80 chars)
  let solution = "";
  if (project.longDescription) {
    // Get first sentence, remove action verbs, make concise
    const firstSentence = project.longDescription.split(/[.!?]+/)[0].trim();
    solution = firstSentence
      .replace(/^(Built|Developed|Created|Engineered|Designed|Implemented|Delivered)\s+/i, "")
      .replace(/^(a|an|the)\s+/i, "")
      .trim();
    
    // Capitalize first letter
    if (solution.length > 0) {
      solution = solution.charAt(0).toUpperCase() + solution.slice(1);
    }
    
    // Ensure it ends with period
    if (!solution.endsWith(".") && !solution.endsWith("...")) {
      solution += ".";
    }
    
    // Limit length
    if (solution.length > 80) {
      solution = solution.substring(0, 77) + "...";
    }
  } else {
    // Fallback: create concise solution from title
    solution = `Delivered ${project.title.toLowerCase()}.`;
  }

  return {
    id: project.id,
    title: project.title,
    client: project.client || "Client",
    problem: problem,
    solution: solution,
    outcome: project.results || [],
    category: project.category,
    year: project.year,
  };
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onViewDetails?: (caseStudy: CaseStudy) => void;
}

export function CaseStudyCard({ caseStudy, onViewDetails }: CaseStudyCardProps) {
  return (
    <article
      className={cn(
        "card-apple glass-card",
        "group cursor-pointer h-full flex flex-col",
        "transition-all duration-200"
      )}
      onClick={() => onViewDetails?.(caseStudy)}
    >
      {/* Client Context - 1 line */}
      <div className="mb-3">
        <p className="text-xs font-medium text-medium-contrast uppercase tracking-wider">
          {caseStudy.client}
          {caseStudy.year && ` • ${caseStudy.year}`}
        </p>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-high-contrast mb-4 leading-tight">
        {caseStudy.title}
      </h3>

      {/* Problem - 1-2 concise lines */}
      <div className="mb-4 pb-4 border-b border-hairline">
        <p className="text-sm text-medium-contrast leading-relaxed">
          {caseStudy.problem}
        </p>
      </div>

      {/* Solution - 1 line */}
      <div className="mb-4">
        <p className="text-sm font-medium text-high-contrast leading-relaxed">
          {caseStudy.solution}
        </p>
      </div>

      {/* Outcome - Measurable or concrete impact */}
      <div className="space-y-2.5 mb-4 flex-grow">
        {caseStudy.outcome.slice(0, 3).map((result, index) => (
          <div key={index} className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-sm text-medium-contrast flex-1 leading-relaxed">
              {result}
            </p>
          </div>
        ))}
        {caseStudy.outcome.length > 3 && (
          <p className="text-xs text-medium-contrast pl-4">
            +{caseStudy.outcome.length - 3} more results
          </p>
        )}
      </div>

      {/* View Details Link */}
      <div className="pt-4 border-t border-hairline mt-auto">
        <button
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group/link min-h-[44px]"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails?.(caseStudy);
          }}
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </button>
      </div>
    </article>
  );
}
