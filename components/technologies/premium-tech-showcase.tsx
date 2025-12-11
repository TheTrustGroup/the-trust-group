"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TechLogo } from "./tech-logos";
import { technologyCategories, technologies } from "@/lib/cms-client";
import type { Technology } from "@/data/types";
import * as Icons from "lucide-react";
import { X } from "lucide-react";

function getIconComponent(iconName: string): React.ComponentType<any> {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<any>>)[iconName];
  return IconComponent || Icons.Layers;
}

interface TechItemProps {
  tech: Technology;
  index: number;
  onSelect: (tech: Technology) => void;
}

function TechItem({ tech, index, onSelect }: TechItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const itemRef = React.useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const proficiencyLevels = {
    expert: { level: 100, color: "from-green-500 to-emerald-500" },
    advanced: { level: 85, color: "from-blue-500 to-cyan-500" },
    proficient: { level: 70, color: "from-purple-500 to-pink-500" },
  };

  const level = proficiencyLevels[tech.proficiency as keyof typeof proficiencyLevels] || proficiencyLevels.advanced;

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(tech)}
      className="relative cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative"
      >
        {/* Hexagonal Card */}
        <div
          className={cn(
            "relative p-6 rounded-2xl backdrop-blur-xl bg-background/80 border-2",
            "transition-all duration-500 group",
            isHovered
              ? "border-primary/50 shadow-2xl shadow-primary/20 scale-105"
              : "border-border/50 shadow-lg"
          )}
        >
          {/* Animated gradient border */}
          <motion.div
            className={cn(
              "absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              "bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-sm"
            )}
            animate={isHovered ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          />

          {/* Floating Logo */}
          <motion.div
            className="flex items-center justify-center mb-4 h-20"
            animate={isHovered ? {
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0],
            } : {
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-16 h-16 relative">
              <TechLogo name={tech.name} className="w-full h-full" />
              {/* Glow effect */}
              <motion.div
                className={cn(
                  "absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity",
                  "bg-gradient-to-br",
                  level.color
                )}
                animate={isHovered ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Tech Name - Using div instead of h4 to avoid heading hierarchy issues in grid */}
          <div className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-center break-words" role="heading" aria-level={3}>
            {tech.name}
          </div>

          {/* Proficiency Indicator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Expertise</span>
              <span className={cn(
                "font-semibold",
                tech.proficiency === "expert" && "text-green-500",
                tech.proficiency === "advanced" && "text-blue-500",
                tech.proficiency === "proficient" && "text-purple-500"
              )}>
                {level.level}%
              </span>
            </div>
            
            {/* Animated Skill Bar */}
            <div className="w-full h-2 bg-muted/50 rounded-full overflow-hidden">
              <motion.div
                className={cn(
                  "h-full rounded-full bg-gradient-to-r",
                  level.color
                )}
                initial={{ width: 0 }}
                animate={{ width: isHovered ? `${level.level}%` : "0%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Description on hover */}
          {tech.description && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="text-xs text-muted-foreground mt-3 overflow-hidden"
            >
              {tech.description}
            </motion.p>
          )}

          {/* Proficiency Badge */}
          <motion.div
            className={cn(
              "absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-semibold",
              tech.proficiency === "expert" && "bg-green-500/20 text-green-500 border border-green-500/30",
              tech.proficiency === "advanced" && "bg-blue-500/20 text-blue-500 border border-blue-500/30",
              tech.proficiency === "proficient" && "bg-purple-500/20 text-purple-500 border border-purple-500/30"
            )}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isHovered ? 1 : 0.8,
              opacity: isHovered ? 1 : 0.6,
            }}
          >
            {tech.proficiency === "expert" && "⭐"}
            {tech.proficiency === "advanced" && "▲"}
            {tech.proficiency === "proficient" && "●"}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface TechDetailModalProps {
  tech: Technology | null;
  onClose: () => void;
}

function TechDetailModal({ tech, onClose }: TechDetailModalProps) {
  if (!tech) return null;

  const proficiencyLevels = {
    expert: { level: 100, color: "from-green-500 to-emerald-500", label: "Expert" },
    advanced: { level: 85, color: "from-blue-500 to-cyan-500", label: "Advanced" },
    proficient: { level: 70, color: "from-purple-500 to-pink-500", label: "Proficient" },
  };

  const level = proficiencyLevels[tech.proficiency as keyof typeof proficiencyLevels] || proficiencyLevels.advanced;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-md w-full p-8 rounded-2xl bg-background border-2 border-primary/20 shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-24 h-24">
              <TechLogo name={tech.name} className="w-full h-full" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{tech.name}</h3>
              <p className="text-muted-foreground">{tech.description}</p>
            </div>

            <div className="w-full space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">Proficiency Level</span>
                <span className={cn(
                  "text-lg font-bold",
                  tech.proficiency === "expert" && "text-green-500",
                  tech.proficiency === "advanced" && "text-blue-500",
                  tech.proficiency === "proficient" && "text-purple-500"
                )}>
                  {level.label} ({level.level}%)
                </span>
              </div>
              
              <div className="w-full h-3 bg-muted/50 rounded-full overflow-hidden">
                <motion.div
                  className={cn(
                    "h-full rounded-full bg-gradient-to-r",
                    level.color
                  )}
                  initial={{ width: 0 }}
                  animate={{ width: `${level.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function PremiumTechShowcase() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [filteredTechnologies, setFilteredTechnologies] = React.useState<Technology[]>(technologies);
  const [selectedTech, setSelectedTech] = React.useState<Technology | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (activeCategory === "all") {
        setFilteredTechnologies(technologies);
      } else {
        setFilteredTechnologies(
          technologies.filter((tech) => tech.category === activeCategory)
        );
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div className="relative">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {technologyCategories.map((category) => {
          const Icon = getIconComponent(category.icon);
          const isActive = activeCategory === category.id;
          return (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                "border-2 backdrop-blur-sm",
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-background/80 text-foreground border-border hover:border-primary/50"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{category.name}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Technologies Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredTechnologies.map((tech, index) => (
            <TechItem
              key={`${tech.name}-${activeCategory}`}
              tech={tech}
              index={index}
              onSelect={setSelectedTech}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Modal */}
      <TechDetailModal tech={selectedTech} onClose={() => setSelectedTech(null)} />
    </div>
  );
}

