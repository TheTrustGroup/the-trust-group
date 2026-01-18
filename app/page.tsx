import { Section } from "@/components/ui";
import { HeroSection } from "@/components/hero";
import { ServicesSection } from "@/components/services";
import { CTAScrollButton } from "@/components/cta-button";
import dynamic from "next/dynamic";
import { ValuePropositionSection } from "@/components/ui/value-proposition-section";
import { ProcessSection } from "@/components/ui/process-section";
import { FAQSection } from "@/components/ui/faq-section";

// Lazy load heavy sections below the fold
const TechnologiesSectionLazy = dynamic(() => import("@/components/technologies").then(mod => ({ default: mod.TechnologiesSection })), {
  loading: () => <div className="min-h-[400px]" />
});
const PortfolioSectionLazy = dynamic(() => import("@/components/portfolio").then(mod => ({ default: mod.PortfolioSection })), {
  loading: () => <div className="min-h-[400px]" />
});
const AboutSectionLazy = dynamic(() => import("@/components/about").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="min-h-[400px]" />
});
const TestimonialsSectionLazy = dynamic(() => import("@/components/testimonials").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="min-h-[400px]" />
});
const ContactSectionLazy = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="min-h-[400px]" />
});
const DefenseTechHighlightLazy = dynamic(() => import("@/components/ui/defense-tech-highlight").then(mod => ({ default: mod.DefenseTechHighlight })), {
  loading: () => <div className="min-h-[300px]" />
});
const TechStackLazy = dynamic(() => import("@/components/hero").then(mod => ({ default: mod.TechStack })), {
  loading: () => <div className="min-h-[200px]" />
});

export default function Home() {
  // Outcome-focused capabilities that communicate authority and precision
  const capabilities = [
    {
      title: "Mission-Critical Systems",
      description: "We build systems that cannot fail. From defense applications to enterprise platforms, reliability is engineered into every component.",
    },
    {
      title: "AI-Powered Intelligence",
      description: "Deploy machine learning models and AI systems that deliver measurable business outcomes, not just technical demonstrations.",
    },
    {
      title: "Secure by Design",
      description: "Security and compliance are foundational, not afterthoughts. Every system meets enterprise-grade security standards.",
    },
    {
      title: "Scalable Architecture",
      description: "Systems designed to grow with your organization. Architecture decisions made for long-term performance and maintainability.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Defense Tech Highlight Section - Lazy loaded */}
      <DefenseTechHighlightLazy />

      {/* Services Section */}
      <ServicesSection />

      {/* Value Proposition Section */}
      <ValuePropositionSection />

      {/* Tech Stack Section - Lazy loaded */}
      <TechStackLazy />

      {/* Technologies Section - Lazy loaded */}
      <TechnologiesSectionLazy />

      {/* Portfolio Section - Lazy loaded */}
      <PortfolioSectionLazy />

      {/* Process Section */}
      <ProcessSection />

      {/* About Section - Lazy loaded */}
      <AboutSectionLazy />

      {/* Testimonials Section - Lazy loaded */}
      <TestimonialsSectionLazy />

      {/* Capabilities Section - Outcome-focused, engineering-led */}
      <Section variant="default" size="default">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              How We Build
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Engineering principles and systematic approaches that ensure reliable, scalable, and secure systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-6 md:p-8 rounded-lg border border-border bg-background/50 hover:bg-background/80 hover:border-primary/30 transition-all duration-200">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  {capability.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section - Outcome-focused, not generic */}
      <Section 
        variant="primary" 
        size="default"
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      >
        <div className="max-w-3xl mx-auto text-center px-4 py-16 md:py-24">
          <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Discuss Your System Requirements
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            We design, engineer, and deploy mission-critical systems for organizations that cannot afford failure.
          </p>
          <CTAScrollButton />
        </div>
      </Section>

      {/* Contact Section - Lazy loaded */}
      <ContactSectionLazy />
    </>
  );
}

