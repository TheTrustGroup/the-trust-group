"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { PremiumContactForm } from "./premium-contact-form";
import { ContactInfo } from "./contact-info";
import { SocialProof } from "./social-proof";
import { ScrollAnimation } from "@/components/animations";

export function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      variant="muted"
      size="default"
      animation="slide-up"
      className="bg-gradient-to-b from-muted/30 to-background"
    >
      <ScrollAnimation variant="fadeInUp">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Let&apos;s Start Your Project
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Have a project in mind? Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Left Side - Contact Form */}
        <ScrollAnimation variant="slideInLeft" delay={0.2}>
          <div className="w-full min-w-0">
            <PremiumContactForm />
          </div>
        </ScrollAnimation>

        {/* Right Side - Contact Information & Social Proof */}
        <ScrollAnimation variant="slideInRight" delay={0.3}>
          <div className="w-full min-w-0 space-y-8">
            <SocialProof />
            <ContactInfo />
          </div>
        </ScrollAnimation>
      </div>
    </AnimatedSection>
  );
}

