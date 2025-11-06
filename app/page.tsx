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

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Why Choose Us Section */}
      <AnimatedSection variant="muted" size="default" animation="fade-in">
        <ScrollAnimation variant="fadeInUp">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-foreground">
                Why Choose The Trust Group
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine technical expertise with business acumen to deliver exceptional results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{value}</p>
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
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-primary-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how our AI and software engineering solutions can drive your success.
          </p>
          <CTAScrollButton />
        </div>
      </Section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

