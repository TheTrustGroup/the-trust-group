import { WhyTrustUs } from "@/components/ui";
import { MissionCriticalHero } from "@/components/hero";
import { EditorialSection } from "@/components/EditorialSection";
import { MotionReveal } from "@/components/motion";
import dynamic from "next/dynamic";
import { ProcessSectionSimplified } from "@/components/ui/process-section-simplified";
import { FAQSectionCondensed } from "@/components/ui/faq-section-condensed";

const ContactSectionLazy = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="min-h-[400px]" aria-label="Loading contact form" />,
  ssr: false,
});

const TrustTestimonialsSectionLazy = dynamic(
  () =>
    import("@/components/testimonials/TrustTestimonialsSection").then((m) => ({
      default: m.TrustTestimonialsSection,
    })),
  {
    loading: () => <div className="min-h-[320px]" aria-label="Loading testimonials" />,
    ssr: true,
  }
);

const SelectedWorkLazy = dynamic(
  () => import("@/components/portfolio").then((m) => ({ default: m.SelectedWork })),
  {
    loading: () => <div className="min-h-[480px]" aria-label="Loading selected work" />,
    ssr: true,
  }
);

export default function Home() {
  return (
    <>
      {/* 1. Hero — Mission-critical systems (circuit grid, ticker, CTAs) */}
      <MissionCriticalHero />

      {/* 2. Client Testimonials — Matches provided HTML design */}
      <TrustTestimonialsSectionLazy />

      {/* 2. Editorial content block - What we do (entrance motion, once on view) */}
      <MotionReveal>
        <EditorialSection
          id="what-we-do"
          title="What We Do"
          statements={[
            "We build secure, mission-critical systems for organizations that cannot afford failure.",
            "We design and implement the infrastructure and software that run when it matters most.",
            "We work in defense-adjacent and regulated environments where trust and precision are non-negotiable.",
            "We deploy autonomous physical systems and edge AI that operate in environments where cloud infrastructure does not reach.",
          ]}
        />
      </MotionReveal>

      {/* 3. Selected Work - Proof of capability */}
      <SelectedWorkLazy />

      {/* 4. Why Trust Us - Consolidated trust indicators */}
      <WhyTrustUs />

      {/* 5. Contact - Primary conversion point */}
      <ContactSectionLazy />

      {/* Below fold - Supporting content */}
      
      {/* 6. Process - Simplified version */}
      <ProcessSectionSimplified />

      {/* 7. FAQ - Condensed (4-5 questions) */}
      <FAQSectionCondensed />
    </>
  );
}

