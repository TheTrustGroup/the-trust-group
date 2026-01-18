"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { ServiceIllustration } from "./service-illustrations";
import Link from "next/link";

export interface PremiumServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  serviceId: string;
  title: string;
  description: string;
  features?: string[];
  learnMoreHref?: string;
  variant?: "default" | "primary" | "accent";
}

export const PremiumServiceCard = React.forwardRef<HTMLDivElement, PremiumServiceCardProps>(
  ({ 
    className, 
    serviceId,
    title, 
    description, 
    features = [],
    learnMoreHref = "#",
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
          "relative h-full transition-all duration-200",
          "border",
          currentVariant.border,
          "group cursor-pointer hover:border-primary/40 hover:shadow-md",
          className
        )}
      >
        <CardHeader className="pb-4">
          {/* Illustration */}
          <div className="mb-6 flex items-center justify-center h-32">
            <ServiceIllustration serviceId={serviceId} className="w-full h-full" />
          </div>

          <CardTitle className="text-xl md:text-2xl mb-3 break-words">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <CardDescription className="text-base leading-relaxed break-words">
            {description}
          </CardDescription>

          {/* Expandable Details Section */}
          {features.length > 0 && (
            <div className="space-y-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-between w-full text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <span>View Details</span>
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
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
                <div className="pt-2 border-t border-border/50">
                  <p className="text-sm font-medium text-foreground mb-3">Key Capabilities:</p>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-primary/70 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Learn More Button */}
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              asChild
            >
              <Link href={learnMoreHref} aria-label={`Learn more about ${title}`}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
);
PremiumServiceCard.displayName = "PremiumServiceCard";
