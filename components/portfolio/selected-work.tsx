"use client";

import * as React from "react";
import { Section } from "@/components/ui";
import { AppleCaseStudyCard, type AppleCaseStudy } from "./apple-case-study-card";
import { ENGAGEMENT_MANIFEST } from "@/data/engagements.manifest";

function homepageSortOrder(
  a: (typeof ENGAGEMENT_MANIFEST)[number],
  b: (typeof ENGAGEMENT_MANIFEST)[number]
): number {
  const rank = (e: (typeof ENGAGEMENT_MANIFEST)[number]) =>
    (e.disclosureStatus === "live" ? 0 : 1) * 2 + (e.featured ? 0 : 1);
  return rank(a) - rank(b);
}

function getHomepageCaseStudies(): AppleCaseStudy[] {
  return ENGAGEMENT_MANIFEST.filter(
    (entry) => entry.showOnHomepage && entry.homePreview
  )
    .sort(homepageSortOrder)
    .slice(0, 4)
    .map((entry) => ({
      id: entry.id,
      client: entry.homePreview!.client,
      challenge: entry.homePreview!.challenge,
      solution: entry.homePreview!.solution,
      outcome: entry.homePreview!.outcome,
      industry: entry.homePreview!.industry ?? entry.industry,
      featured: entry.featured,
      previewImage:
        entry.homePreview!.previewImage ?? entry.previewImage,
      caseStudyUrl: entry.caseStudySlug
        ? `/case-studies/${entry.caseStudySlug}`
        : entry.liveUrl,
    }));
}

export function SelectedWork() {
  const caseStudies = React.useMemo(() => {
    return getHomepageCaseStudies();
  }, []);

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
