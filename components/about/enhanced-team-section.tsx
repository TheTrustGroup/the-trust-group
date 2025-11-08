"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
}

interface EnhancedTeamSectionProps {
  members: TeamMember[];
  title?: string;
}

// Generate avatar URL from UI Avatars
function getAvatarUrl(name: string): string {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&size=200&background=0066FF&color=ffffff&bold=true`;
}

export function EnhancedTeamSection({ 
  members, 
  title = "Our Team" 
}: EnhancedTeamSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the talented individuals driving innovation at The Trust Group
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={cn(
                  "relative p-6 rounded-2xl border-2 bg-background/80 backdrop-blur-sm",
                  "border-border hover:border-primary/40",
                  "transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                )}
              >
                {/* Avatar */}
                  <div className="relative mb-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getAvatarUrl(member.name)}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {/* Status indicator */}
                  <div className="absolute bottom-2 right-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-green-500 border-2 border-background" />
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.expertise.slice(0, 2).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.expertise.length > 2 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                      +{member.expertise.length - 2}
                    </span>
                  )}
                </div>


                {/* Glow effect */}
                <div className="absolute -inset-0.5 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

