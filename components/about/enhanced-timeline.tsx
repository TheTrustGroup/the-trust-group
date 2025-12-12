"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Rocket, 
  Users, 
  Award, 
  TrendingUp, 
  Globe, 
  Sparkles,
  Building2,
  Code2
} from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface EnhancedTimelineProps {
  events: TimelineEvent[];
  title?: string;
}

const defaultIcon = Building2;

export function EnhancedTimeline({ events, title = "Our Journey" }: EnhancedTimelineProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return (
    <div ref={containerRef} className="relative py-16 md:py-24">
      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones that shaped our growth and success
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

          {/* Events */}
          <div className="space-y-12 md:space-y-16">
            {events.map((event, index) => {
              const Icon = event.icon || defaultIcon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={cn(
                    "relative flex items-center gap-6 md:gap-8",
                    "md:flex-row",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className={cn(
                        "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center",
                        "bg-background border-4 border-primary shadow-lg",
                        "backdrop-blur-sm"
                      )}
                    >
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary dark:text-primary stroke-current" strokeWidth={2} />
                    </motion.div>
                    {/* Pulsing Ring */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0.8 }}
                      whileInView={{ scale: 2, opacity: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2 
                      }}
                      className="absolute inset-0 rounded-full border-2 border-primary"
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                    className={cn(
                      "flex-1 p-6 md:p-8 rounded-2xl border-2",
                      "bg-background/80 backdrop-blur-sm",
                      "border-primary/20 hover:border-primary/40",
                      "shadow-lg hover:shadow-xl",
                      "transition-all duration-300",
                      "md:max-w-[45%]",
                      isEven ? "md:mr-auto" : "md:ml-auto"
                    )}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl md:text-3xl font-bold text-primary">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

