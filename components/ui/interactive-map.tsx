"use client";

import * as React from "react";
import { MapPin, ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/cms-client";
import { cn } from "@/lib/utils";

const contactInfo = siteConfig.contact;

export function InteractiveMap() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const address = `${contactInfo.address.line1}, ${contactInfo.address.city}, ${contactInfo.address.country}`;
  
  // Use Google Maps embed with API key if available, otherwise use the provided embed URL
  const mapUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}&zoom=15`
    : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7341637958434!2d-0.19098092524126528!3d5.606228794374666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9baaf6841db9%3A0xb1a31d524321abd7!2sTurquaz%20Residence!5e0!3m2!1sen!2sgh!4v1765439397174!5m2!1sen!2sgh`;

  const handleMapError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  const handleMapLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  // Fallback: Direct link to Google Maps
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="relative rounded-lg overflow-hidden border-2 border-border bg-muted/30 h-[400px] md:h-[500px]">
      {!hasError ? (
        <>
          {/* Google Maps Embed (works with or without API key) */}
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
            onLoad={handleMapLoad}
            onError={handleMapError}
            title="Office Location - The Trust Group"
          />
          
          {/* Loading overlay */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm z-10">
              <div className="text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mb-4" />
                <p className="text-sm text-muted-foreground">Loading map...</p>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Error fallback: Show error message */
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-muted/50 to-muted/30 p-8 z-10">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary stroke-current" strokeWidth={2} fill="none" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Map Loading Error
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              We couldn&apos;t load the map, but you can still find us using the link below.
            </p>
            <Button
              asChild
              variant="default"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a 
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-4 w-4 mr-2 stroke-current" strokeWidth={2} fill="none" />
                View on Google Maps
                <ExternalLink className="h-4 w-4 ml-2 stroke-current" strokeWidth={2} fill="none" />
              </a>
            </Button>
          </div>
        </div>
      )}

      {/* Address overlay card - positioned to avoid overlap */}
      <div className="absolute top-4 left-4 right-4 md:left-auto md:right-4 md:top-4 md:w-80 z-20">
        <div className="bg-background/95 backdrop-blur-md rounded-lg p-4 shadow-lg border border-border">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 text-primary stroke-current" strokeWidth={2} />
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
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="h-3.5 w-3.5 mr-2 stroke-current" strokeWidth={2} />
              Open in Google Maps
              <ExternalLink className="h-3.5 w-3.5 ml-2 stroke-current" strokeWidth={2} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
