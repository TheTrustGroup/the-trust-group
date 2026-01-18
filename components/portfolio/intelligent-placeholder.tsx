"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { 
  Brain, 
  Globe, 
  Smartphone, 
  Building2, 
  Code2, 
  Database, 
  Cloud,
  Layers
} from "lucide-react";

interface IntelligentPlaceholderProps {
  title: string;
  category: "ai" | "web" | "mobile" | "enterprise" | "all";
  technologies?: string[];
  className?: string;
}

const categoryConfig = {
  ai: {
    primaryColor: "#0066FF",
    secondaryColor: "#00B8E6",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    icon: Brain,
    pattern: "neural",
    bgGradient: "from-blue-500/20 via-cyan-500/10 to-blue-600/20",
  },
  web: {
    primaryColor: "#00B8E6",
    secondaryColor: "#0066FF",
    gradient: "from-cyan-500 via-blue-500 to-cyan-600",
    icon: Globe,
    pattern: "grid",
    bgGradient: "from-cyan-500/20 via-blue-500/10 to-cyan-600/20",
  },
  mobile: {
    primaryColor: "#10B981",
    secondaryColor: "#059669",
    gradient: "from-green-500 via-emerald-500 to-green-600",
    icon: Smartphone,
    pattern: "app",
    bgGradient: "from-green-500/20 via-emerald-500/10 to-green-600/20",
  },
  enterprise: {
    primaryColor: "#8B5CF6",
    secondaryColor: "#7C3AED",
    gradient: "from-purple-500 via-violet-500 to-purple-600",
    icon: Building2,
    pattern: "dashboard",
    bgGradient: "from-purple-500/20 via-violet-500/10 to-purple-600/20",
  },
  all: {
    primaryColor: "#6B7280",
    secondaryColor: "#4B5563",
    gradient: "from-gray-500 via-gray-600 to-gray-700",
    icon: Code2,
    pattern: "code",
    bgGradient: "from-gray-500/20 via-gray-600/10 to-gray-700/20",
  },
};

const techIcons: Record<string, React.ComponentType<any>> = {
  // Frontend
  React: Code2,
  "React Native": Smartphone,
  "Next.js": Globe,
  Vue: Code2,
  Angular: Code2,
  TypeScript: Code2,
  JavaScript: Code2,
  HTML: Code2,
  CSS: Code2,
  Tailwind: Code2,
  // Backend
  Python: Code2,
  "Node.js": Code2,
  Java: Code2,
  "C#": Code2,
  Go: Code2,
  PHP: Code2,
  Ruby: Code2,
  // Databases
  PostgreSQL: Database,
  MongoDB: Database,
  MySQL: Database,
  Redis: Database,
  Firebase: Database,
  // Cloud & DevOps
  AWS: Cloud,
  Azure: Cloud,
  "Google Cloud": Cloud,
  GCP: Cloud,
  Docker: Layers,
  Kubernetes: Layers,
  Terraform: Layers,
  // AI/ML
  TensorFlow: Brain,
  PyTorch: Brain,
  "Machine Learning": Brain,
  "Deep Learning": Brain,
  // APIs & Services
  "Google Maps API": Globe,
  "REST API": Globe,
  GraphQL: Globe,
  // Mobile
  iOS: Smartphone,
  Android: Smartphone,
  Flutter: Smartphone,
  Swift: Smartphone,
  Kotlin: Smartphone,
};

export function IntelligentPlaceholder({
  title,
  category,
  technologies = [],
  className,
}: IntelligentPlaceholderProps) {
  const config = categoryConfig[category] || categoryConfig.all;
  const Icon = config.icon;
  const titleWords = title.split(" ").slice(0, 3);
  const displayTitle = titleWords.join(" ");

  // Get relevant tech icons (max 4)
  const relevantTechIcons = technologies
    .slice(0, 4)
    .map((tech) => {
      const iconKey = Object.keys(techIcons).find((key) =>
        tech.toLowerCase().includes(key.toLowerCase())
      );
      return iconKey ? { tech, Icon: techIcons[iconKey] } : null;
    })
    .filter((item): item is { tech: string; Icon: React.ComponentType<any> } =>
      item !== null
    );

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden aspect-[16/10]",
        `bg-gradient-to-br ${config.bgGradient}`,
        className
      )}
      style={{ minHeight: "300px" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {config.pattern === "neural" && <NeuralPattern />}
        {config.pattern === "grid" && <GridPattern />}
        {config.pattern === "app" && <AppPattern />}
        {config.pattern === "dashboard" && <DashboardPattern />}
        {config.pattern === "code" && <CodePattern />}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 md:p-8 text-center">
        {/* Main Icon */}
        <div
          className={cn(
            "w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-4 md:mb-6",
            `bg-gradient-to-br ${config.gradient}`,
            "shadow-lg"
          )}
        >
          <Icon className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground stroke-current" strokeWidth={2} />
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-foreground break-words max-w-full px-2">
          {displayTitle}
          {titleWords.length < title.split(" ").length && "..."}
        </h3>

        {/* Technology Icons */}
        {relevantTechIcons.length > 0 && (
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 flex-wrap">
            {relevantTechIcons.map(({ tech, Icon: TechIcon }, index) => (
              <div
                key={index}
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50 shadow-sm"
                title={tech}
              >
                <TechIcon className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground dark:text-foreground/80 stroke-current dark:stroke-current" strokeWidth={2} />
              </div>
            ))}
            {technologies.length > relevantTechIcons.length && (
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50 shadow-sm">
                <span className="text-xs md:text-sm font-semibold text-muted-foreground">
                  +{technologies.length - relevantTechIcons.length}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Category Badge */}
        <div
          className={cn(
            "px-4 py-2 rounded-full text-xs md:text-sm font-semibold",
            "bg-background/80 backdrop-blur-sm border border-border/50",
            "text-foreground shadow-sm"
          )}
        >
          {category === "ai" && "AI Project"}
          {category === "web" && "Web Application"}
          {category === "mobile" && "Mobile App"}
          {category === "enterprise" && "Enterprise Solution"}
          {category === "all" && "Project"}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-foreground/5 blur-xl" />
      <div className="absolute bottom-4 left-4 w-12 h-12 md:w-16 md:16 rounded-full bg-foreground/5 blur-xl" />
    </div>
  );
}

// Pattern Components
function NeuralPattern() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* Neural network nodes */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 150;
        const x = 200 + Math.cos(angle) * radius;
        const y = 200 + Math.sin(angle) * radius;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="8"
            fill="currentColor"
            className="text-primary"
          />
        );
      })}
      {/* Connections */}
      <line x1="200" y1="50" x2="200" y2="200" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
      <line x1="350" y1="200" x2="200" y2="200" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
      <line x1="200" y1="350" x2="200" y2="200" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
      <line x1="50" y1="200" x2="200" y2="200" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
    </svg>
  );
}

function GridPattern() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* Grid lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <React.Fragment key={i}>
          <line
            x1={i * 40}
            y1="0"
            x2={i * 40}
            y2="400"
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent/20"
          />
          <line
            x1="0"
            y1={i * 40}
            x2="400"
            y2={i * 40}
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent/20"
          />
        </React.Fragment>
      ))}
    </svg>
  );
}

function AppPattern() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* App icon grid */}
      {Array.from({ length: 3 }).map((_, row) =>
        Array.from({ length: 3 }).map((_, col) => {
          const x = 100 + col * 100;
          const y = 100 + row * 100;
          return (
            <rect
              key={`${row}-${col}`}
              x={x - 30}
              y={y - 30}
              width="60"
              height="60"
              rx="12"
              fill="currentColor"
              className="text-green-500/20"
            />
          );
        })
      )}
    </svg>
  );
}

function DashboardPattern() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* Chart bars */}
      {Array.from({ length: 6 }).map((_, i) => {
        const x = 50 + i * 50;
        const height = 40 + Math.random() * 100;
        return (
          <rect
            key={i}
            x={x}
            y={200 - height}
            width="30"
            height={height}
            rx="4"
            fill="currentColor"
            className="text-purple-500/20"
          />
        );
      })}
      {/* Line chart */}
      <path
        d="M 50 200 Q 100 150, 150 180 T 250 160 T 350 140"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        className="text-purple-500/20"
      />
    </svg>
  );
}

function CodePattern() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* Code brackets */}
      <path
        d="M 100 100 L 80 200 L 100 300"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        className="text-gray-500/20"
      />
      <path
        d="M 300 100 L 320 200 L 300 300"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        className="text-gray-500/20"
      />
      {/* Code lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={i}
          x1="120"
          y1={120 + i * 40}
          x2={280 - i * 20}
          y2={120 + i * 40}
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-500/20"
        />
      ))}
    </svg>
  );
}
