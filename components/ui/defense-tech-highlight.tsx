"use client";

import * as React from "react";
import { Shield, Lock, Brain, Radio, BarChart3 } from "lucide-react";
import { ScrollAnimation } from "@/components/animations";
import { AnimatedSection } from "./animated-section";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    icon: Lock,
    name: "Cybersecurity Solutions",
  },
  {
    icon: Brain,
    name: "AI Defense Systems",
  },
  {
    icon: Radio,
    name: "Secure Communications",
  },
  {
    icon: BarChart3,
    name: "Intelligence Analytics",
  },
];

export function DefenseTechHighlight() {
  return (
    <AnimatedSection variant="default" size="default" animation="fade-in" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <ScrollAnimation variant="fadeInUp">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Defense Technology Division
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Trusted by Organizations Operating at the Highest Level
              </h2>
              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Software engineers are central to defense technology. We build secure, 
                mission-critical systems that protect national interests and support 
                defense operations worldwide.
              </p>
              
              {/* Capabilities Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {capabilities.map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
                      </div>
                      <span className="text-sm font-medium text-white">{capability.name}</span>
                    </div>
                  );
                })}
              </div>
              
              {/* CTA */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link href="/services/defense-technology" prefetch={true}>
                    Explore Defense Capabilities
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Visual Element */}
          <ScrollAnimation variant="fadeInUp" delay={0.2}>
            <div className="relative h-64 md:h-96 lg:h-[500px]">
              {/* Abstract Secure Network Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Network Nodes - Simplified for performance */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-primary/60"
                      style={{
                        left: `${25 + (i * 20)}%`,
                        top: `${35 + (i % 2) * 25}%`,
                      }}
                    />
                  ))}
                  
                  {/* Shield Icon Center - Static for performance */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="h-32 w-32 md:h-48 md:w-48 text-primary/20" strokeWidth={1} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </AnimatedSection>
  );
}
