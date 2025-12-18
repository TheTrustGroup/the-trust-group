"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Sparkles, 
  Code2, 
  Palette, 
  Zap, 
  Award, 
  TrendingUp,
  Globe,
  Rocket,
  CheckCircle2,
  Server,
  Database
} from "lucide-react";

interface FounderSectionProps {
  className?: string;
}

// Professional office space image
const FOUNDER_IMAGE_URL = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop&auto=format&q=80";

const expertise = [
  {
    icon: Palette,
    title: "Digital Creative Director",
    description: "Crafting visionary digital experiences that blend artistry with strategic thinking",
  },
  {
    icon: Code2,
    title: "UX Strategist",
    description: "Designing intuitive user journeys that drive engagement and business results",
  },
  {
    icon: Zap,
    title: "Senior Frontend Engineer",
    description: "Building world-class applications with cutting-edge technologies and best practices",
  },
  {
    icon: Server,
    title: "Backend Engineering Expert",
    description: "Architecting robust, scalable server-side solutions and APIs that power enterprise applications",
  },
];

const achievements = [
  "Led design and development of 500+ successful digital projects",
  "Transformed user experiences for Fortune 500 companies",
  "Pioneered innovative UX patterns adopted industry-wide",
  "Built scalable frontend and backend architectures serving millions of users",
  "Architected high-performance APIs and microservices for enterprise applications",
  "Mentored and led high-performing design and engineering teams",
];

const technologies = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", 
  "Framer Motion", "Three.js", "WebGL", "Design Systems",
  "Node.js", "PostgreSQL", "MongoDB", "Redis", 
  "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs"
];

export function FounderSection({ className }: FounderSectionProps) {
  const founderName = "Emmanuel A.";
  
  return (
    <section className={cn("py-20 md:py-32 relative overflow-hidden", className)}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Visionary Leadership
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Meet the Visionary Behind
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The Trust Group
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A world-class digital creative director, UX strategist, senior frontend engineer, and backend engineering expert 
            who transforms ideas into extraordinary digital experiences that drive business success.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Founder Profile Card - Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Card */}
              <div className="relative p-8 rounded-3xl border-2 border-border bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Glow Effect */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                
                {/* Office Space Image */}
                <div className="relative mb-6">
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary/60 transition-colors duration-300 shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={FOUNDER_IMAGE_URL}
                      alt="Professional office space - The Trust Group"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to another office space image if primary fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop&auto=format&q=80";
                      }}
                    />
                    {/* Animated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute bottom-4 right-1/2 translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-background border-2 border-primary/30 shadow-lg">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-semibold text-foreground">Available</span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {founderName}
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-3">Founder & CEO</p>
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">World-Class Expert</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">10+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Expertise & Achievements - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 order-1 lg:order-2 space-y-8"
          >
            {/* Four Core Expertise Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl border-2 border-border bg-background/60 backdrop-blur-sm hover:border-primary/40 hover:bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      {/* Icon */}
                      <div className="relative mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-7 w-7 text-primary stroke-current" strokeWidth={2} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative p-8 rounded-2xl border-2 border-border bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary stroke-current" strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold text-foreground">Notable Achievements</h4>
              </div>
              
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 stroke-current" strokeWidth={2} fill="currentColor" />
                    <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative p-6 rounded-2xl border-2 border-border bg-background/60 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-5 w-5 text-primary stroke-current" strokeWidth={2} />
                <h4 className="text-lg font-bold text-foreground">Core Technologies</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-sm font-medium text-primary hover:bg-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <Globe className="h-5 w-5 text-primary stroke-current" strokeWidth={2} />
            <p className="text-sm md:text-base text-muted-foreground">
              <span className="font-semibold text-foreground">Ready to work together?</span>{" "}
              Let&apos;s create something extraordinary.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
