"use client";

import { Section } from "@/components/ui";
import { AppleCaseStudyCard, type AppleCaseStudy } from "./apple-case-study-card";

// Case studies following Apple template: Client Context → Challenge → Solution → Outcome
const caseStudies: AppleCaseStudy[] = [
  {
    id: "1",
    client: "Mid-sized enterprise operating in a regulated environment",
    challenge: "Legacy systems were unstable under load, creating operational and security risk.",
    solution: "We redesigned the system architecture and deployed a secure, scalable platform.",
    outcome: "Improved system reliability, reduced operational incidents, and enabled future growth.",
  },
  {
    id: "2",
    client: "Financial services organization requiring high availability",
    challenge: "Existing infrastructure could not support increasing transaction volume without performance degradation.",
    solution: "We migrated critical systems to a cloud-native architecture with automated scaling and redundancy.",
    outcome: "System handles peak loads without degradation, maintains 99.9% uptime, and supports planned growth.",
  },
  {
    id: "3",
    client: "Healthcare provider managing patient data across multiple facilities",
    challenge: "Fragmented data systems prevented real-time access to patient information, impacting care coordination.",
    solution: "We integrated disparate systems into a unified platform with secure data access and compliance controls.",
    outcome: "Care teams have real-time access to patient information, improved coordination, and maintained regulatory compliance.",
  },
];

export function SelectedWork() {
  return (
    <Section variant="default" size="default" container={false} className="border-t border-hairline">
      <div className="max-w-6xl mx-auto container-padding-apple section-padding-apple">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-headline mb-4 md:mb-6">
            Selected work
          </h2>
          <p className="text-body text-medium-contrast max-w-2xl mx-auto">
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
