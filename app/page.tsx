import { WhyTrustUs } from "@/components/ui";
import { MissionCriticalHero } from "@/components/hero";
import { TrustDynamicsBand } from "@/components/trust-dynamics-band";
import { EditorialSection } from "@/components/EditorialSection";
import { SelectedWork } from "@/components/portfolio/selected-work";
import { ContactCTA } from "@/components/contact/contact-cta";
import { TrustTestimonialsSection } from "@/components/testimonials/TrustTestimonialsSection";

// Homepage stays short: hero → posture → capability → proof → CTA.
// Process and FAQ live on /services and /faq so the first scroll is not diluted.
export default function Home() {
  return (
    <>
      <MissionCriticalHero />
      <TrustDynamicsBand />
      <TrustTestimonialsSection />
      <EditorialSection
        id="what-we-do"
        title="What We Do"
        statements={[
          "We build secure, mission-critical systems for organizations that cannot afford failure.",
          "We design autonomous physical systems and edge AI that operate where cloud infrastructure does not reach.",
          "We design and implement the infrastructure and software that run when it matters most.",
          "We work in defense-adjacent and regulated environments where trust and precision are non-negotiable.",
        ]}
      />
      <SelectedWork />
      <WhyTrustUs />
      <ContactCTA />
    </>
  );
}
