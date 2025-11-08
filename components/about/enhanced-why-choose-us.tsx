"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Rocket, 
  Code2, 
  Heart,
  Shield,
  TrendingUp,
  Zap,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";

const advantages = [
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Your success is our priority. We listen, understand, and deliver solutions tailored to your unique needs.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and frameworks to build future-proof solutions that scale.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "500+ successful projects, 100+ satisfied clients, and a decade of excellence in technology solutions.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: TrendingUp,
    title: "Competitive Advantages",
    description: "We deliver faster time-to-market, cost-effective solutions, and measurable business impact.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: Zap,
    title: "Agile Methodology",
    description: "Rapid iteration, continuous delivery, and adaptive planning ensure your project stays on track.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every project is measured by outcomes. We focus on delivering tangible business value.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
];

export function EnhancedWhyChooseUs() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(0, 184, 230, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Your Trusted Technology Partner
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical expertise, business acumen, and a client-first mindset to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={cn(
                  "p-6 md:p-8 rounded-2xl border-2 transition-all duration-300",
                  "bg-background/80 backdrop-blur-sm",
                  advantage.borderColor,
                  "hover:shadow-xl group cursor-pointer"
                )}
              >
                <motion.div
                  className={cn(
                    "w-16 h-16 rounded-xl flex items-center justify-center mb-4",
                    advantage.bgColor,
                    advantage.color
                  )}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

