"use client";

import * as React from "react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, LayoutList, Film, MoveHorizontal, Search, Filter, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ScrollAnimation } from "@/components/animations";
import { TestimonialCarousel } from "./testimonial-carousel";
import { TestimonialsGrid } from "./testimonials-grid";
import { TestimonialsMarquee } from "./testimonials-marquee";
import { VideoTestimonialPlaceholder } from "./video-testimonial-placeholder";
import { StatsBar } from "./stats-bar";
import { testimonials } from "@/lib/cms-client";
import { cn } from "@/lib/utils";
import type { EnhancedTestimonial } from "./enhanced-testimonial-card";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { TrendingUp } from "lucide-react";

type ViewMode = "carousel" | "grid" | "marquee" | "video";

export function EnhancedTestimonialsSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("carousel");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedProjectType, setSelectedProjectType] = useState<string | null>(null);
  const [selectedCompanySize, setSelectedCompanySize] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Convert testimonials to enhanced format
  const enhancedTestimonials: EnhancedTestimonial[] = testimonials.map((t) => ({
    id: t.id,
    quote: t.quote,
    clientName: t.clientName,
    clientTitle: t.clientTitle,
    company: t.company,
    companySize: (t as any).companySize,
    industry: (t as any).industry,
    projectType: (t as any).projectType,
    rating: t.rating,
    date: (t as any).date,
    verified: (t as any).verified ?? true,
    featured: t.featured,
    metrics: (t as any).metrics,
    avatar: (t as any).avatar,
    companyLogo: t.companyLogo,
  }));

  // Get unique filter options
  const industries = useMemo(() => {
    const unique = Array.from(new Set(enhancedTestimonials.map(t => t.industry).filter(Boolean)));
    return unique.sort();
  }, [enhancedTestimonials]);

  const projectTypes = useMemo(() => {
    const unique = Array.from(new Set(enhancedTestimonials.map(t => t.projectType).filter(Boolean)));
    return unique.sort();
  }, [enhancedTestimonials]);

  const companySizes = useMemo(() => {
    const unique = Array.from(new Set(enhancedTestimonials.map(t => t.companySize).filter(Boolean)));
    return unique.sort();
  }, [enhancedTestimonials]);

  // Filter testimonials
  const filteredTestimonials = useMemo(() => {
    return enhancedTestimonials.filter((t) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          t.quote.toLowerCase().includes(query) ||
          t.clientName.toLowerCase().includes(query) ||
          t.company.toLowerCase().includes(query) ||
          t.clientTitle.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Industry filter
      if (selectedIndustry && t.industry !== selectedIndustry) return false;

      // Project type filter
      if (selectedProjectType && t.projectType !== selectedProjectType) return false;

      // Company size filter
      if (selectedCompanySize && t.companySize !== selectedCompanySize) return false;

      return true;
    });
  }, [enhancedTestimonials, searchQuery, selectedIndustry, selectedProjectType, selectedCompanySize]);

  const featuredTestimonials = filteredTestimonials.filter((t) => t.featured);
  const videoTestimonials = filteredTestimonials.slice(0, 3); // First 3 for video placeholders

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedIndustry(null);
    setSelectedProjectType(null);
    setSelectedCompanySize(null);
  };

  const hasActiveFilters = searchQuery || selectedIndustry || selectedProjectType || selectedCompanySize;

  const viewModes: Array<{ mode: ViewMode; icon: React.ElementType; label: string }> = [
    { mode: "carousel", icon: LayoutList, label: "Carousel" },
    { mode: "grid", icon: LayoutGrid, label: "Grid" },
    { mode: "marquee", icon: MoveHorizontal, label: "Marquee" },
    { mode: "video", icon: Film, label: "Video" },
  ];

  return (
    <AnimatedSection
      id="testimonials"
      variant="default"
      size="default"
      animation="fade-in"
      className="bg-gradient-to-b from-background to-muted/20"
    >
      {/* Stats Bar */}
      <div className="mb-16">
        <StatsBar />
      </div>

      {/* Header */}
      <ScrollAnimation variant="fadeInUp">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Don&apos;t just take our word for it. Hear from the businesses we&apos;ve helped transform 
            through innovative technology solutions.
          </p>

          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 w-full max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search testimonials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-11"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "gap-2",
                showFilters && "bg-primary/10 border-primary/30"
              )}
            >
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filters</span>
              {hasActiveFilters && (
                <span className="ml-1 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {[selectedIndustry, selectedProjectType, selectedCompanySize].filter(Boolean).length}
                </span>
              )}
            </Button>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="gap-2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
                <span className="hidden sm:inline">Clear</span>
              </Button>
            )}
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl mx-auto mb-8 overflow-hidden"
              >
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Industry Filter */}
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block">
                        Industry
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {industries.map((industry) => (
                          <button
                            key={industry}
                            onClick={() => setSelectedIndustry(
                              selectedIndustry === industry ? null : industry
                            )}
                            className={cn(
                              "px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                              "border-2",
                              selectedIndustry === industry
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-background text-foreground border-border hover:border-primary/50"
                            )}
                          >
                            {industry}
                            {selectedIndustry === industry && (
                              <Check className="inline-block ml-1.5 h-3.5 w-3.5" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Type Filter */}
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block">
                        Project Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => setSelectedProjectType(
                              selectedProjectType === type ? null : type
                            )}
                            className={cn(
                              "px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                              "border-2",
                              selectedProjectType === type
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-background text-foreground border-border hover:border-primary/50"
                            )}
                          >
                            {type}
                            {selectedProjectType === type && (
                              <Check className="inline-block ml-1.5 h-3.5 w-3.5" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Company Size Filter */}
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block">
                        Company Size
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {companySizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedCompanySize(
                              selectedCompanySize === size ? null : size
                            )}
                            className={cn(
                              "px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                              "border-2",
                              selectedCompanySize === size
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-background text-foreground border-border hover:border-primary/50"
                            )}
                          >
                            {size}
                            {selectedCompanySize === size && (
                              <Check className="inline-block ml-1.5 h-3.5 w-3.5" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Count */}
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-6"
            >
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredTestimonials.length}</span> of {enhancedTestimonials.length} testimonials
              </p>
            </motion.div>
          )}

          {/* View Mode Selector */}
          <div className="inline-flex items-center justify-center gap-2 p-1 bg-muted/50 rounded-lg">
            {viewModes.map(({ mode, icon: Icon, label }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200",
                  "text-sm font-medium",
                  viewMode === mode
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                aria-label={`Switch to ${label} view`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Testimonials Display */}
      <ScrollAnimation variant="fadeInUp" delay={0.2}>
        <AnimatePresence mode="wait">
          {viewMode === "carousel" && (
            <motion.div
              key="carousel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              {filteredTestimonials.length > 0 ? (
                <TestimonialCarousel
                  testimonials={featuredTestimonials.length > 0 ? featuredTestimonials : filteredTestimonials}
                  autoRotate={true}
                  rotationInterval={6000}
                />
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground mb-4">No testimonials match your filters.</p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              )}
            </motion.div>
          )}

          {viewMode === "grid" && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredTestimonials.length > 0 ? (
                <TestimonialsGrid
                  testimonials={filteredTestimonials}
                  columns={3}
                />
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground mb-4">No testimonials match your filters.</p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              )}
            </motion.div>
          )}

          {viewMode === "marquee" && (
            <motion.div
              key="marquee"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredTestimonials.length > 0 ? (
                <TestimonialsMarquee
                  testimonials={filteredTestimonials}
                  direction="left"
                  speed={50}
                  pauseOnHover={true}
                />
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground mb-4">No testimonials match your filters.</p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              )}
            </motion.div>
          )}

          {viewMode === "video" && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredTestimonials.length > 0 ? (
                filteredTestimonials.slice(0, 3).map((testimonial) => (
                  <VideoTestimonialPlaceholder
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <p className="text-lg text-muted-foreground mb-4">No testimonials match your filters.</p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation variant="fadeInUp" delay={0.4}>
        <div className="mt-16 md:mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-3xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary/15 via-accent/10 to-primary/15 border-2 border-primary/30 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,102,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[shimmer_3s_linear_infinite]" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <TrendingUp className="h-8 w-8 text-primary" strokeWidth={2} fill="none" />
                </motion.div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
                Join Our Happy Clients
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your business with innovative technology solutions? 
                Let&apos;s discuss how we can help you achieve your goals and join hundreds of satisfied clients.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-primary-hover"
                  onClick={() => smoothScrollTo("contact", 80)}
                >
                  Get Started Today
                </Button>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
          </motion.div>
        </div>
      </ScrollAnimation>
    </AnimatedSection>
  );
}

