"use client";

import { MapPin, Mail, Phone, Clock } from "lucide-react";
import dynamic from "next/dynamic";

// Lazy load map - heavy component
const InteractiveMap = dynamic(() => import("@/components/ui/interactive-map").then(mod => ({ default: mod.InteractiveMap })), {
  loading: () => <div className="h-[400px] md:h-[500px] bg-muted/30 rounded-lg flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>,
  ssr: false
});

import { siteConfig } from "@/lib/cms-client";

const contactInfo = siteConfig.contact;

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Address */}
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="h-6 w-6 text-primary stroke-current" strokeWidth={2} fill="none" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
            <address className="text-muted-foreground not-italic leading-relaxed break-words">
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
            <Mail className="h-6 w-6 text-primary stroke-current" strokeWidth={2} fill="none" />
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
            <Phone className="h-6 w-6 text-primary stroke-current" strokeWidth={2} fill="none" />
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
            <Clock className="h-6 w-6 text-primary stroke-current" strokeWidth={2} fill="none" />
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

      {/* Interactive Map */}
      <div className="pt-4">
        <h4 className="font-semibold text-foreground mb-4">Find Us</h4>
        <InteractiveMap />
      </div>
    </div>
  );
}

