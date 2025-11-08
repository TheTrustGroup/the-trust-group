"use client";

import * as React from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/cms-client";
import { cn } from "@/lib/utils";

const contactInfo = siteConfig.contact;

export function InteractiveMap() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const address = `${contactInfo.address.line1}, ${contactInfo.address.city}, ${contactInfo.address.country}`;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&q=${encodeURIComponent(address)}&zoom=15`;

  return (
    <div className="relative rounded-lg overflow-hidden border-2 border-border bg-muted/30 h-[400px] md:h-[500px]">
      {/* Live Google Maps */}
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={cn(
          "w-full h-full transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
        title="Office Location - The Trust Group"
      />
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mb-4" />
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}

      {/* Address overlay card */}
      <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80">
        <div className="bg-background/95 backdrop-blur-md rounded-lg p-4 shadow-lg border border-border">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-foreground mb-1 text-sm">Our Office</h4>
              <address className="text-xs text-muted-foreground not-italic leading-relaxed break-words">
                {contactInfo.address.line1}
                <br />
                {contactInfo.address.line2}
                <br />
                {contactInfo.address.city}, {contactInfo.address.state}
              </address>
            </div>
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full mt-3"
          >
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="h-3.5 w-3.5 mr-2" />
              Open in Google Maps
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

