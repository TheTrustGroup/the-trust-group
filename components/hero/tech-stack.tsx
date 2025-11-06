"use client";

import { 
  Brain, 
  Cloud, 
  Smartphone, 
  Globe,
  Database,
  Zap,
  Shield,
  Code2
} from "lucide-react";
import { useEffect, useState } from "react";
import { StaggerGrid, StaggerItem } from "@/components/animations";

const techCategories = [
  {
    icon: Brain,
    label: "AI & Machine Learning",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Cloud,
    label: "Cloud Solutions",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: Smartphone,
    label: "Mobile Development",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Globe,
    label: "Web Applications",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: Database,
    label: "Data Engineering",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Zap,
    label: "Performance Optimization",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: Shield,
    label: "Security & Compliance",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Code2,
    label: "Custom Development",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
];

export function TechStack() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("tech-stack");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technologies We Master
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge tools and platforms powering innovative solutions
          </p>
        </div>
        
        <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6" staggerDelay={0.05}>
          {techCategories.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <StaggerItem key={index}>
                <div
                  className={`
                    flex flex-col items-center justify-center p-4 md:p-6 rounded-lg border-2
                    ${tech.bgColor} ${tech.borderColor}
                    transition-all duration-300 hover:scale-110 hover:shadow-lg
                  `}
                >
                  <Icon className={`h-8 w-8 md:h-10 md:w-10 mb-3 ${tech.color} transition-transform hover:scale-125`} />
                  <span className="text-xs md:text-sm font-medium text-center text-foreground">
                    {tech.label}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        {/* Additional Tech Badges */}
        <StaggerGrid className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4" staggerDelay={0.03}>
          {[
            "Python", "TypeScript", "React", "Next.js", "Node.js",
            "AWS", "Azure", "Docker", "Kubernetes", "TensorFlow",
            "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"
          ].map((tech, index) => (
            <StaggerItem key={index}>
              <div
                className={`
                  px-4 py-2 rounded-full bg-background border border-border
                  text-sm font-medium text-foreground
                  transition-all duration-300 hover:border-primary hover:text-primary
                `}
              >
                {tech}
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

