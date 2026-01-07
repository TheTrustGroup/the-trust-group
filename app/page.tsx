import { Section, AnimatedSection } from "@/components/ui";
import { HeroSection, TechStack } from "@/components/hero";
import { ServicesSection } from "@/components/services";
import { AboutSection } from "@/components/about";
import { TechnologiesSection } from "@/components/technologies";
import { PortfolioSection } from "@/components/portfolio";
import { TestimonialsSection } from "@/components/testimonials";
import { ContactSection } from "@/components/contact";
import { ScrollAnimation } from "@/components/animations";
import { CTAScrollButton } from "@/components/cta-button";
import { CheckCircle2 } from "lucide-react";
import dynamic from "next/dynamic";

// Lazy load heavy sections below the fold
const TechnologiesSectionLazy = dynamic(() => import("@/components/technologies").then(mod => ({ default: mod.TechnologiesSection })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>
});
const PortfolioSectionLazy = dynamic(() => import("@/components/portfolio").then(mod => ({ default: mod.PortfolioSection })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>
});
const AboutSectionLazy = dynamic(() => import("@/components/about").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>
});
const TestimonialsSectionLazy = dynamic(() => import("@/components/testimonials").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>
});
const ContactSectionLazy = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>
});

export default function Home() {
  const values = [
    "Innovation-driven solutions",
    "Client-focused approach",
    "Cutting-edge technology",
    "Proven track record",
    "Scalable architectures",
    "24/7 support & maintenance",
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Services Section */}
      <ServicesSection />

      {/* Technologies Section - Lazy loaded */}
      <TechnologiesSectionLazy />

      {/* Portfolio Section - Lazy loaded */}
      <PortfolioSectionLazy />

      {/* About Section - Lazy loaded */}
      <AboutSectionLazy />

      {/* Testimonials Section - Lazy loaded */}
      <TestimonialsSectionLazy />

      {/* Why Choose Us Section */}
      <AnimatedSection variant="muted" size="default" animation="fade-in">
        <ScrollAnimation variant="fadeInUp">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl text-foreground">
                Why Choose The Trust Group
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                We combine technical expertise with business acumen to deliver exceptional results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary dark:text-primary flex-shrink-0 mt-1 stroke-current" strokeWidth={2} fill="currentColor" />
                  <p className="text-base md:text-lg text-foreground break-words">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </AnimatedSection>

      {/* CTA Section */}
      <Section 
        variant="primary" 
        size="default"
        className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground"
      >
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl text-primary-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90">
            Let&apos;s discuss how our AI and software engineering solutions can drive your success.
          </p>
          <CTAScrollButton />
        </div>
      </Section>

      {/* Contact Section - Lazy loaded */}
      <ContactSectionLazy />
    </>
  );
}

