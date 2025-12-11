"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export type ProficiencyLevel = "expert" | "advanced" | "proficient";

interface TechnologyCardProps {
  name: string;
  category: string;
  proficiency: ProficiencyLevel;
  icon?: React.ReactNode;
  description?: string;
}

const proficiencyConfig = {
  expert: {
    label: "Expert",
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/30",
    level: 100,
  },
  advanced: {
    label: "Advanced",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    level: 85,
  },
  proficient: {
    label: "Proficient",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    level: 70,
  },
};

export function TechnologyCard({
  name,
  category,
  proficiency,
  icon,
  description,
}: TechnologyCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const config = proficiencyConfig[proficiency];

  return (
    <div
      className={cn(
        "relative group p-6 rounded-xl border-2 bg-background transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1 cursor-pointer",
        config.borderColor,
        isHovered && "border-opacity-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon/Logo Area */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 flex items-center justify-center">
          {icon || (
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-foreground font-bold text-lg group-hover:scale-110 transition-transform">
              {name.split(' ').map(n => n.charAt(0)).join('').slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        <div
          className={cn(
            "px-2 py-1 rounded-md text-xs font-semibold transition-opacity",
            config.bgColor,
            config.color,
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          {config.label}
        </div>
      </div>

      {/* Technology Name */}
      <div className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors" role="heading" aria-level={3}>
        {name}
      </div>

      {/* Category Badge */}
      <p className="text-sm text-muted-foreground mb-3">{category}</p>

      {/* Proficiency Bar - Shows on Hover */}
      <div
        className={cn(
          "space-y-2 transition-all duration-300 overflow-hidden",
          isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Proficiency</span>
          <span className={cn("font-semibold", config.color)}>{config.level}%</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500 ease-out",
              config.bgColor,
              config.borderColor.replace("border", "bg")
            )}
            style={{
              width: isHovered ? `${config.level}%` : "0%",
            }}
          />
        </div>
        {description && (
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>

      {/* Hover Indicator */}
      <div
        className={cn(
          "absolute top-2 right-2 w-2 h-2 rounded-full transition-all duration-300",
          config.bgColor,
          isHovered && "scale-150"
        )}
      />
    </div>
  );
}

