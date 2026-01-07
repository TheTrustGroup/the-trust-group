"use client";

import * as React from "react";
import { siteConfig } from "@/lib/cms-client";

const contactInfo = siteConfig.contact;

export function InteractiveMap() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const address = `${contactInfo.address.line1}, ${contactInfo.address.city}, ${contactInfo.address.country}`;
  
  // Use Google Maps embed with API key if available, otherwise use the provided embed URL
  const mapUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}&zoom=15`
    : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7341637958434!2d-0.19098092524126528!3d5.606228794374666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9baaf6841db9%3A0xb1a31d524321abd7!2sTurquaz%20Residence!5e0!3m2!1sen!2sgh!4v1765439397174!5m2!1sen!2sgh`;

  React.useEffect(() => {
    // Set a timeout to show the map even if onLoad doesn't fire (for cross-origin iframes)
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    
    // ✅ GOOD - Cleanup timeout
    return () => clearTimeout(timeout);

    return () => clearTimeout(timeout);
  }, []);

  const handleMapLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative rounded-lg overflow-hidden border-2 border-border bg-muted/30 h-[400px] md:h-[500px]">
      {/* Google Maps Embed (works with or without API key) */}
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`w-full h-full transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleMapLoad}
        title="Office Location - The Trust Group"
      />
      
      {/* Loading overlay - only show briefly */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm z-10">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mb-4" />
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
}
