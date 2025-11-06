"use client";

import { Shield, Sparkles, Users, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Shield,
    title: "Trust",
    description: "Building lasting relationships through transparency, reliability, and integrity in every interaction.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Delivering exceptional quality and exceeding expectations through meticulous attention to detail.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Pushing boundaries and embracing cutting-edge technologies to solve complex challenges.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients and partners to achieve shared success and mutual growth.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
];

export function ValuesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((value, index) => {
        const Icon = value.icon;
        return (
          <div
            key={index}
            className={cn(
              "p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
              value.bgColor,
              value.borderColor
            )}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div
              className={cn(
                "w-14 h-14 rounded-lg flex items-center justify-center mb-4",
                value.bgColor,
                value.color
              )}
            >
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{value.description}</p>
          </div>
        );
      })}
    </div>
  );
}

