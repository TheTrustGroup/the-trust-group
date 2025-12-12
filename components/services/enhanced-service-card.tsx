"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight, Check } from "lucide-react";

export interface EnhancedServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  learnMoreHref?: string;
  variant?: "default" | "primary" | "accent";
}

const EnhancedServiceCard = React.forwardRef<HTMLDivElement, EnhancedServiceCardProps>(
  ({ 
    className, 
    icon: Icon, 
    title, 
    description, 
    features = [],
    learnMoreHref = "#",
    variant = "default",
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const variantStyles = {
      default: "border-2 hover:border-primary transition-all duration-300 hover:shadow-lg",
      primary: "border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:shadow-lg",
      accent: "border-2 border-accent bg-accent/5 hover:bg-accent/10 transition-all duration-300 hover:shadow-lg",
    };

    const iconVariantStyles = {
      default: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
      primary: "bg-primary text-primary-foreground",
      accent: "bg-accent text-accent-foreground",
    };

    return (
      <Card
        ref={ref}
        className={cn(
          variantStyles[variant],
          "h-full group cursor-pointer overflow-hidden transform transition-all duration-300 active:scale-[0.98] md:hover:-translate-y-3 md:hover:shadow-2xl md:hover:shadow-primary/10",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setTimeout(() => setIsHovered(false), 300)}
        data-interactive="true"
        {...props}
      >
        <CardHeader className="relative">
          {Icon && (
            <div
              className={cn(
                "w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300",
                iconVariantStyles[variant],
                isHovered && "scale-110 rotate-3"
              )}
            >
              <Icon className="h-7 w-7 transition-transform duration-300" />
            </div>
          )}
          <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors break-words">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-base leading-relaxed break-words">
            {description}
          </CardDescription>
          
          {/* Features list - shows on hover/touch */}
          {features.length > 0 && (
            <div
              className={cn(
                "space-y-2 transition-all duration-500 ease-in-out overflow-hidden",
                "md:block",
                isHovered ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0 md:max-h-0"
              )}
            >
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-2">Key Capabilities:</p>
                <ul className="space-y-1.5">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                      style={{
                        animationDelay: isHovered ? `${index * 50}ms` : "0ms",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                        transform: isHovered ? "translateX(0)" : "translateX(-10px)",
                        opacity: isHovered ? 1 : 0,
                      }}
                    >
                      <Check className="h-4 w-4 text-primary dark:text-primary mt-0.5 flex-shrink-0 stroke-current" strokeWidth={2} />
                      <span className="break-words">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Learn More Button */}
          <div
            className={cn(
              "pt-2 transition-all duration-300",
              "md:block",
              isHovered ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0 md:opacity-0 md:translate-y-2"
            )}
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full min-h-[44px] touch-manipulation group/btn"
              asChild
            >
              <a href={learnMoreHref} aria-label={`Learn more about ${title}`}>
                Learn More About {title}
                <ArrowRight className="ml-2 h-4 w-4 group-active/btn:translate-x-1 transition-transform stroke-current dark:stroke-current" strokeWidth={2} aria-hidden="true" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
);
EnhancedServiceCard.displayName = "EnhancedServiceCard";

export { EnhancedServiceCard };

