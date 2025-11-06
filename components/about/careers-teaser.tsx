"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, TrendingUp } from "lucide-react";

export function CareersTeaser() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Join Our Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of a team that&apos;s shaping the future of technology. We&apos;re always 
            looking for talented individuals who share our passion for innovation.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <Briefcase className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Open Positions</div>
            </div>
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Remote Friendly</div>
            </div>
          </div>

          <Button size="lg" className="group" asChild>
            <a href="/careers">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

