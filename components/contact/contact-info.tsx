"use client";

import { MapPin, Mail, Phone, Clock, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { siteConfig } from "@/lib/cms-client";

const contactInfo = siteConfig.contact;

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* CTA */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
        <h3 className="text-2xl font-bold mb-2 text-foreground">
          Let&apos;s Build Something Amazing Together
        </h3>
        <p className="text-muted-foreground">
          Ready to transform your business? Get in touch and let&apos;s discuss how we can help.
        </p>
      </div>

      {/* Address */}
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
            <address className="text-muted-foreground not-italic leading-relaxed">
              {contactInfo.address.line1}
              <br />
              {contactInfo.address.line2}
              <br />
              {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
              <br />
              {contactInfo.address.country}
            </address>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Email</h4>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-primary hover:text-primary-hover transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Phone</h4>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="text-primary hover:text-primary-hover transition-colors"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
            <div className="text-muted-foreground space-y-1">
              <p>{contactInfo.businessHours.weekdays}</p>
              <p>{contactInfo.businessHours.weekends}</p>
              <p>{contactInfo.businessHours.closed}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-lg"
            asChild
          >
            <a
              href={contactInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-lg"
            asChild
          >
            <a
              href={contactInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-lg"
            asChild
          >
            <a
              href={contactInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Google Maps Embed (Optional) */}
      <div className="pt-4">
        <h4 className="font-semibold text-foreground mb-4">Find Us</h4>
        <div className="rounded-lg overflow-hidden border-2 border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509041!2d-122.4194154846814!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Office Location"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          * Map shows approximate location. Contact us for exact directions.
        </p>
      </div>
    </div>
  );
}

