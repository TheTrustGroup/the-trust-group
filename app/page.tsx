import { WhyTrustUs } from "@/components/ui";
import { HeroSection } from "@/components/hero";
import { ServicesSection } from "@/components/services";
import dynamic from "next/dynamic";
import { ProcessSectionSimplified } from "@/components/ui/process-section-simplified";
import { FAQSectionCondensed } from "@/components/ui/faq-section-condensed";

import { SelectedWork } from "@/components/portfolio";

// Lazy load heavy sections below the fold
const TestimonialsSectionLazy = dynamic(() => import("@/components/testimonials").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="min-h-[400px]" />
});
const ContactSectionLazy = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="min-h-[400px]" />
});

export default function Home() {
  return (
    <>
      {/* 1. Hero Section - Value proposition + Primary CTA */}
      <HeroSection />

      {/* 2. Services Section - What we offer (3 featured) */}
      <ServicesSection maxItems={3} />

      {/* 3. Selected Work - Proof of capability */}
      <SelectedWork />

      {/* 4. Why Trust Us - Consolidated trust indicators */}
      <WhyTrustUs />

      {/* 5. Contact - Primary conversion point */}
      <ContactSectionLazy />

      {/* Below fold - Supporting content */}
      
      {/* 6. Process - Simplified version */}
      <ProcessSectionSimplified />

      {/* 7. FAQ - Condensed (4-5 questions) */}
      <FAQSectionCondensed />

      {/* 8. Testimonials - Full gallery (lazy loaded) */}
      <TestimonialsSectionLazy />
    </>
  );
}

