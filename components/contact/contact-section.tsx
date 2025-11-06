"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
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
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let&apos;s Start Your Project
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Side - Contact Form */}
        <ScrollAnimation variant="slideInLeft" delay={0.2}>
          <div>
            <ContactForm />
          </div>
        </ScrollAnimation>

        {/* Right Side - Contact Information */}
        <ScrollAnimation variant="slideInRight" delay={0.3}>
          <div>
            <ContactInfo />
          </div>
        </ScrollAnimation>
      </div>
    </AnimatedSection>
  );
}

