"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { StatisticsSection } from "./statistics-section";
import { ValuesGrid } from "./values-grid";
import { EcosystemSection } from "./ecosystem-section";
import { ScrollAnimation } from "@/components/animations";
import { 
  Target, 
  Eye, 
  Lightbulb,
  CheckCircle2
} from "lucide-react";

const whyChooseUs = [
  {
    icon: CheckCircle2,
    title: "Trustworthiness",
    description: "Proven track record of delivering on promises with transparency and integrity.",
  },
  {
    icon: CheckCircle2,
    title: "Expertise",
    description: "Deep technical knowledge across AI, software engineering, and cloud technologies.",
  },
  {
    icon: CheckCircle2,
    title: "Innovation",
    description: "Cutting-edge solutions that keep your business ahead of the competition.",
  },
];

export function AboutSection() {
  return (
    <>
      {/* Main About Section */}
      <AnimatedSection 
        id="about" 
        variant="default" 
        size="default" 
        animation="fade-in"
        className="bg-gradient-to-b from-muted/30 to-background"
      >
        <ScrollAnimation variant="fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left: Content */}
            <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Building Tomorrow&apos;s Technology Today
              </h2>
            </div>

            {/* Our Story */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Our Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Trust Group is a parent company leading innovation across multiple tech ventures. 
                We specialize in AI solutions, custom software development, and sophisticated digital 
                experiences that transform businesses and drive growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a portfolio of specialized companies under our umbrella, we bring together 
                diverse expertise to deliver comprehensive technology solutions. Our ecosystem 
                approach allows us to provide end-to-end services while maintaining deep specialization 
                in each domain.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-bold text-foreground">Our Mission</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses through innovative technology solutions that drive 
                  growth, efficiency, and competitive advantage.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="h-6 w-6 text-accent" />
                  <h4 className="text-xl font-bold text-foreground">Our Vision</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted technology partner, recognized for excellence, 
                  innovation, and transformative impact across industries.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual/Stats */}
          <div className="relative">
            {/* Abstract Tech Visual */}
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
              {/* Geometric Shapes */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/30 rounded-lg rotate-45 blur-xl" />
              </div>
              
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px"
                }}
              />

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                <Lightbulb className="h-24 w-24 text-primary mb-6 animate-float" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Innovation at Scale
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Transforming ideas into reality through cutting-edge technology
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              By The Numbers
            </h3>
            <p className="text-lg text-muted-foreground">
              Our track record speaks for itself
            </p>
          </div>
          <StatisticsSection />
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Clients Choose Us
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine trustworthiness, expertise, and innovation to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border-2 border-border bg-background hover:border-primary transition-all duration-300 hover:shadow-lg"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        </ScrollAnimation>

        {/* Team Values */}
        <ScrollAnimation variant="fadeInUp" delay={0.4}>
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Core Values
              </h3>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <ValuesGrid />
          </div>
        </ScrollAnimation>
      </AnimatedSection>

      {/* Ecosystem Section */}
      <AnimatedSection 
        variant="muted" 
        size="default" 
        animation="slide-up"
        className="bg-gradient-to-b from-background to-muted/30"
      >
        <EcosystemSection />
      </AnimatedSection>
    </>
  );
}

