import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "primary" | "accent";
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, icon: Icon, title, description, variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: "border-2 hover:border-primary transition-colors",
      primary: "border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-colors",
      accent: "border-2 border-accent bg-accent/5 hover:bg-accent/10 transition-colors",
    };

    const iconVariantStyles = {
      default: "bg-primary/10 text-primary",
      primary: "bg-primary text-primary-foreground",
      accent: "bg-accent text-accent-foreground",
    };

    return (
      <Card
        ref={ref}
        className={cn(variantStyles[variant], "h-full", className)}
        {...props}
      >
        <CardHeader>
          {Icon && (
            <div
              className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform hover:scale-110",
                iconVariantStyles[variant]
              )}
            >
              <Icon className="h-6 w-6" />
            </div>
          )}
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };

