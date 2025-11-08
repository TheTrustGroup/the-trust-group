"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DeviceMockupProps {
  type: "laptop" | "phone" | "tablet";
  imageUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

export function DeviceMockup({ type, imageUrl, className, children }: DeviceMockupProps) {
  if (type === "laptop") {
    return <LaptopMockup imageUrl={imageUrl} className={className}>{children}</LaptopMockup>;
  }
  if (type === "phone") {
    return <PhoneMockup imageUrl={imageUrl} className={className}>{children}</PhoneMockup>;
  }
  return <TabletMockup imageUrl={imageUrl} className={className}>{children}</TabletMockup>;
}

function LaptopMockup({ imageUrl, className, children }: Omit<DeviceMockupProps, "type">) {
  return (
    <div className={cn("relative", className)}>
      {/* Laptop Frame */}
      <div className="relative mx-auto" style={{ width: "100%", maxWidth: "600px" }}>
        {/* Screen */}
        <div className="relative bg-gray-900 rounded-t-lg p-2 shadow-2xl" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute inset-2 rounded overflow-hidden bg-white">
            {/* Screen Content */}
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Project screenshot"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 flex items-center justify-center">
                {children || (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary to-accent opacity-50" />
                    <div className="h-2 w-32 mx-auto mb-2 rounded bg-primary/20" />
                    <div className="h-2 w-24 mx-auto rounded bg-primary/10" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Keyboard Base */}
        <div className="relative bg-gray-800 rounded-b-lg" style={{ height: "20px", marginTop: "-1px" }}>
          <div className="absolute inset-x-0 top-0 h-1 bg-gray-700 rounded-b-lg" />
        </div>
      </div>
    </div>
  );
}

function PhoneMockup({ imageUrl, className, children }: Omit<DeviceMockupProps, "type">) {
  return (
    <div className={cn("relative", className)}>
      {/* Phone Frame */}
      <div className="relative mx-auto" style={{ width: "100%", maxWidth: "300px" }}>
        {/* Screen */}
        <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl" style={{ paddingBottom: "200%" }}>
          <div className="absolute inset-2 rounded-[2rem] overflow-hidden bg-white">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />
            
            {/* Screen Content */}
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Project screenshot"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 flex items-center justify-center">
                {children || (
                  <div className="text-center p-6">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary to-accent opacity-50" />
                    <div className="h-2 w-20 mx-auto mb-2 rounded bg-primary/20" />
                    <div className="h-2 w-16 mx-auto rounded bg-primary/10" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full" />
      </div>
    </div>
  );
}

function TabletMockup({ imageUrl, className, children }: Omit<DeviceMockupProps, "type">) {
  return (
    <div className={cn("relative", className)}>
      {/* Tablet Frame */}
      <div className="relative mx-auto" style={{ width: "100%", maxWidth: "500px" }}>
        {/* Screen */}
        <div className="relative bg-gray-900 rounded-xl p-2 shadow-2xl" style={{ paddingBottom: "133.33%" }}>
          <div className="absolute inset-2 rounded-lg overflow-hidden bg-white">
            {/* Screen Content */}
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Project screenshot"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 flex items-center justify-center">
                {children || (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary to-accent opacity-50" />
                    <div className="h-2 w-32 mx-auto mb-2 rounded bg-primary/20" />
                    <div className="h-2 w-24 mx-auto rounded bg-primary/10" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper to generate placeholder image URL based on project
export function getPlaceholderImage(title: string, category: string): string {
  const colors = {
    ai: "0066FF/FFFFFF",
    web: "00B8E6/FFFFFF",
    mobile: "10B981/FFFFFF",
    enterprise: "8B5CF6/FFFFFF",
  };
  const color = colors[category as keyof typeof colors] || "0066FF/FFFFFF";
  const text = encodeURIComponent(title.substring(0, 20));
  return `https://via.placeholder.com/1200x800/${color}?text=${text}`;
}

