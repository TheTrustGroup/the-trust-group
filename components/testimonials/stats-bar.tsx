"use client";

import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation";
import { AnimatedCounter } from "@/components/about/animated-counter";
import { Briefcase, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Enterprise Clients",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Industry Awards",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function StatsBar() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/10"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="text-center"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div
              className={`${stat.bgColor} ${stat.color} w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}
            >
              <Icon className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2} fill="none" />
            </div>
            <div className={`text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                duration={2000}
                isVisible={isVisible}
              />
            </div>
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

