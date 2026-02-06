"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { PremiumContactForm } from "./premium-contact-form";
import { SocialProof } from "./social-proof";
import { ScrollAnimation } from "@/components/animations";
import { SectionHeader } from "@/components/ui/section-header";

export function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      variant="default"
      size="default"
      animation="slide-up"
      className="bg-background border-t border-hairline"
    >
      <SectionHeader
        title="Start a Conversation"
        description="Share your requirements and we'll respond within 24 hours."
      />

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

