"use client";

import { Building2, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const placeholderSubsidiaries = [
  {
    name: "AI Innovations",
    description: "Specialized AI solutions and machine learning services",
    status: "coming-soon",
  },
  {
    name: "Cloud Dynamics",
    description: "Cloud infrastructure and DevOps expertise",
    status: "coming-soon",
  },
  {
    name: "Digital Ventures",
    description: "Web and mobile application development",
    status: "coming-soon",
  },
];

export function EcosystemSection() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Our Ecosystem
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          The Trust Group operates as a parent company, leading innovation across multiple 
          specialized technology ventures. Each subsidiary focuses on specific domains while 
          sharing our core values of trust, excellence, and innovation.
        </p>
      </div>

      {/* Main Company Card */}
      <div className="relative mb-12">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-8 md:p-12 text-center">
          <Building2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h4 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
            The Trust Group
          </h4>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Parent company leading innovation across multiple tech ventures
          </p>
        </div>
      </div>

      {/* Subsidiary Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {placeholderSubsidiaries.map((subsidiary, index) => (
          <div
            key={index}
            className={cn(
              "relative p-6 rounded-xl border-2 transition-all duration-300",
              "bg-background border-border hover:border-primary/50 hover:shadow-lg",
              "group cursor-pointer"
            )}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
            <h5 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
              {subsidiary.name}
            </h5>
            <p className="text-muted-foreground leading-relaxed">
              {subsidiary.description}
            </p>
          </div>
        ))}

        {/* Add New Subsidiary Placeholder */}
        <div
          className={cn(
            "relative p-6 rounded-xl border-2 border-dashed transition-all duration-300",
            "bg-muted/30 border-border hover:border-primary hover:bg-muted/50",
            "group cursor-pointer flex flex-col items-center justify-center min-h-[200px]",
            "text-center"
          )}
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Plus className="h-6 w-6 text-primary" />
          </div>
          <h5 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            Future Venture
          </h5>
          <p className="text-muted-foreground text-sm">
            More innovative companies coming soon
          </p>
        </div>
      </div>

      <div className="text-center pt-8">
        <p className="text-muted-foreground">
          Our ecosystem continues to grow as we expand our technological capabilities and market presence.
        </p>
      </div>
    </div>
  );
}

