"use client";

import { AnimatedCounter } from "./animated-counter";
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation";
import { 
  Briefcase, 
  Users, 
  Calendar, 
  Award,
  TrendingUp,
  Code2
} from "lucide-react";

const statistics = [
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Calendar,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Code2,
    value: 50,
    suffix: "+",
    label: "Team Members",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: "%",
    label: "Success Rate",
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

export function StatisticsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
      {statistics.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="text-center group"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div
              className={`${stat.bgColor} ${stat.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}
            >
              <Icon className="h-8 w-8 md:h-10 md:w-10" />
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

