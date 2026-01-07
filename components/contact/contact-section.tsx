"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { PremiumContactForm } from "./premium-contact-form";
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
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground">
            Let&apos;s Start Your Project
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed mb-8 md:mb-10">
            Have a project in mind? Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
        {/* Left Side - Contact Form */}
        <ScrollAnimation variant="slideInLeft" delay={0.2}>
          <div className="w-full min-w-0 lg:sticky lg:top-8">
            <PremiumContactForm />
          </div>
        </ScrollAnimation>

        {/* Right Side - Social Proof */}
        <ScrollAnimation variant="slideInRight" delay={0.3}>
          <div className="w-full min-w-0 lg:sticky lg:top-8">
            <SocialProof />
          </div>
        </ScrollAnimation>
      </div>
    </AnimatedSection>
  );
}

