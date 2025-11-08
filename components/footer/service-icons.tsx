"use client";

import * as React from "react";
import { Brain, Code, Smartphone, Globe, Cloud, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceIconProps {
  name: string;
  className?: string;
}

const serviceIconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "AI Solutions & Implementation": Brain,
  "Custom Software Development": Code,
  "Mobile App Development": Smartphone,
  "Web Development": Globe,
  "Cloud Solutions": Cloud,
  "Consulting & Strategy": Lightbulb,
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = serviceIconMap[name] || Code;
  
  return (
    <Icon
      className={cn(
        "h-4 w-4 text-primary flex-shrink-0 transition-transform duration-200",
        "group-hover:scale-110 stroke-current",
        className
      )}
      strokeWidth={2}
      fill="none"
    />
  );
}

