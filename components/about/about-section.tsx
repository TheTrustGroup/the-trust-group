"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { StatisticsSection } from "./statistics-section";
import { ValuesGrid } from "./values-grid";
import { EcosystemSection } from "./ecosystem-section";
import { EnhancedTimeline } from "./enhanced-timeline";
import { FounderSection } from "./founder-section";
import { EnhancedWhyChooseUs } from "./enhanced-why-choose-us";
import { ScrollAnimation } from "@/components/animations";
import { 
  Target, 
  Eye, 
  Lightbulb,
  Rocket,
  Building2,
  Users,
  Award
} from "lucide-react";

const timelineEvents = [
  {
    year: "2014",
    title: "Company Founded",
    description: "The Trust Group was established with a vision to transform businesses through innovative technology solutions.",
    icon: Building2,
  },
  {
    year: "2017",
    title: "First Major Client",
    description: "Secured our first enterprise client and delivered a groundbreaking AI-powered analytics platform.",
    icon: Rocket,
  },
  {
    year: "2019",
    title: "Team Expansion",
    description: "Grew to 25+ team members and expanded our expertise across AI, cloud, and mobile development.",
    icon: Users,
  },
  {
    year: "2021",
    title: "Industry Recognition",
    description: "Received multiple industry awards for innovation and excellence in software development.",
    icon: Award,
  },
  {
    year: "2024",
    title: "Ecosystem Growth",
    description: "Launched multiple subsidiary companies and reached 500+ successful projects milestone.",
    icon: Lightbulb,
  },
];


export function AboutSection() {
  return (
    <>
      {/* Main About Section */}
      <AnimatedSection 
        id="about" 
        variant="default" 
        size="default" 
        animation="fade-in"
        className="bg-background border-t border-hairline"
      >
        <ScrollAnimation variant="fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left: Content */}
            <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-high-contrast break-words">
                About
              </h2>
            </div>

            {/* What We Do */}
            <div className="space-y-4">
              <p className="text-base md:text-lg text-medium-contrast break-words">
                We help organizations build systems that cannot fail. 
                Designed for reliability. Built to support mission-critical operations.
              </p>
            </div>

            {/* Mission & Vision removed - marketing fluff, doesn't clarify what we do */}
          </div>

          {/* Decorative visual removed - doesn't clarify what company does */}
        </div>

        {/* Statistics Section - builds credibility */}
        <div className="mb-16">
          <StatisticsSection />
        </div>
        </ScrollAnimation>

        {/* Removed: Timeline, Values, Why Choose Us, Founder, Ecosystem - redundant or don't guide user forward */}
      </AnimatedSection>
    </>
  );
}

