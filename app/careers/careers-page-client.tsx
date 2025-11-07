"use client";

import { useState, useMemo } from "react";
import { JobCard, JobFilters } from "@/components/careers";
import type { JobListing, JobDepartment } from "@/data/types";

interface CareersPageClientProps {
  jobs: JobListing[];
  departments: JobDepartment[];
}

export function CareersPageClient({
  jobs,
  departments,
}: CareersPageClientProps) {
  // State for filters
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedExperience, setSelectedExperience] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter jobs
  const filteredJobs = useMemo(() => {
    let filtered = [...jobs];

    // Filter by department
    if (selectedDepartment !== "all") {
      filtered = filtered.filter((job) => job.department === selectedDepartment);
    }

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter((job) => job.type === selectedType);
    }

    // Filter by experience
    if (selectedExperience !== "all") {
      filtered = filtered.filter((job) => job.experience === selectedExperience);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.description.toLowerCase().includes(query) ||
          job.location.toLowerCase().includes(query) ||
          job.department.toLowerCase().includes(query)
      );
    }

    // Sort: featured first, then by posted date (newest first)
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
    });

    return filtered;
  }, [jobs, selectedDepartment, selectedType, selectedExperience, searchQuery]);

  const handleClearFilters = () => {
    setSelectedDepartment("all");
    setSelectedType("all");
    setSelectedExperience("all");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Build the future of technology with us. Explore exciting career
              opportunities at The Trust Group.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Sidebar - Filters */}
            <aside className="lg:sticky lg:top-8 lg:h-fit">
              <div className="rounded-xl border border-border bg-card p-6">
                <JobFilters
                  departments={departments}
                  selectedDepartment={selectedDepartment}
                  selectedType={selectedType}
                  selectedExperience={selectedExperience}
                  searchQuery={searchQuery}
                  onDepartmentChange={setSelectedDepartment}
                  onTypeChange={setSelectedType}
                  onExperienceChange={setSelectedExperience}
                  onSearchChange={setSearchQuery}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </aside>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {filteredJobs.length === 0
                    ? "No jobs found"
                    : filteredJobs.length === 1
                    ? "1 job found"
                    : `${filteredJobs.length} jobs found`}
                </p>
              </div>

              {/* Jobs Grid */}
              {filteredJobs.length > 0 ? (
                <div className="space-y-4">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-border bg-card p-12 text-center">
                  <p className="text-lg font-medium text-muted-foreground">
                    No job listings match your filters.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="mt-4 text-sm text-primary hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

