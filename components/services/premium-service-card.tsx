"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";

export interface PremiumServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  serviceId: string;
  href: string;
  title: string;
  description: string;
  features?: string[];
  variant?: "default" | "primary" | "accent";
}

export const PremiumServiceCard = React.forwardRef<HTMLDivElement, PremiumServiceCardProps>(
  ({ 
    className, 
    serviceId: _serviceId,
    href,
    title, 
    description, 
    features = [],
    variant = "default",
  }, ref) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const variantStyles = {
      default: {
        border: "border-border",
        hoverBorder: "hover:border-primary/40",
      },
      primary: {
        border: "border-primary/30",
        hoverBorder: "hover:border-primary/50",
      },
      accent: {
        border: "border-accent/30",
        hoverBorder: "hover:border-accent/50",
      },
    };

    const currentVariant = variantStyles[variant];

    return (
      <Card
        ref={ref}
        className={cn(
          "relative h-full glass-card",
          "group cursor-pointer",
          "transition-all duration-300",
          "hover:shadow-lg hover:-translate-y-1",
          className
        )}
      >
        <Link
          href={href}
          prefetch
          className="absolute inset-0 z-[1] rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label={`${title} — view capability`}
        />
        <CardHeader className="relative z-[2] pb-4 card-padding-apple pointer-events-none">
          <CardTitle className="text-lg md:text-xl mb-3 break-words text-high-contrast">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-[2] space-y-4 card-padding-apple pt-0 pointer-events-none">
          <CardDescription className="text-sm md:text-base break-words text-medium-contrast">
            {description}
          </CardDescription>

          {features.length > 0 && (
            <div className="space-y-3">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(!isExpanded);
                }}
                className="pointer-events-auto relative z-[3] flex items-center justify-between w-full text-sm font-medium text-primary hover:text-primary/80 transition-colors min-h-[44px] text-left"
              >
                <span>View Details</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200 shrink-0",
                    isExpanded && "rotate-180"
                  )}
                  strokeWidth={2}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="pt-2 border-t border-hairline">
                  <p className="text-sm font-medium text-high-contrast mb-3">Key Capabilities:</p>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-medium-contrast"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
);
PremiumServiceCard.displayName = "PremiumServiceCard";
