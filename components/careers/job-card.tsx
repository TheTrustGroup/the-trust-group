"use client";

import Link from "next/link";
import { MapPin, Clock, Briefcase, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { JobListing } from "@/data/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface JobCardProps {
  job: JobListing;
}

export function JobCard({ job }: JobCardProps) {
  const postedDate = new Date(job.postedAt);
  const formattedDate = postedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formatSalary = () => {
    if (!job.salary) return null;
    const { min, max, currency = "USD", period = "yearly" } = job.salary;
    const formatNumber = (num: number) => {
      if (num >= 1000) {
        return `$${(num / 1000).toFixed(0)}k`;
      }
      return `$${num.toFixed(0)}`;
    };

    if (min && max) {
      return `${formatNumber(min)} - ${formatNumber(max)}/${period === "yearly" ? "yr" : period === "monthly" ? "mo" : "hr"}`;
    } else if (min) {
      return `${formatNumber(min)}+/${period === "yearly" ? "yr" : period === "monthly" ? "mo" : "hr"}`;
    }
    return null;
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      "full-time": "bg-primary/10 text-primary",
      "part-time": "bg-accent/10 text-accent",
      contract: "bg-warning/10 text-warning",
      internship: "bg-success/10 text-success",
      remote: "bg-primary/10 text-primary",
    };
    return colors[type] || "bg-muted text-muted-foreground";
  };

  const getExperienceColor = (experience: string) => {
    const labels: Record<string, string> = {
      entry: "Entry Level",
      mid: "Mid Level",
      senior: "Senior",
      lead: "Lead",
    };
    return labels[experience] || experience;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10",
        job.featured && "border-primary/50 bg-primary/5"
      )}
    >
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              {job.featured && (
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  <TrendingUp className="h-3 w-3" />
                  Featured
                </span>
              )}
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
                  getTypeColor(job.type)
                )}
              >
                {job.type.replace("-", " ")}
              </span>
            </div>
            <Link href={`/careers/${job.slug}`}>
              <h3 className="mb-2 text-xl font-bold leading-tight text-foreground transition-colors hover:text-primary">
                {job.title}
              </h3>
            </Link>
          </div>
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Briefcase className="h-4 w-4" />
            <span className="capitalize">{getExperienceColor(job.experience)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <time dateTime={job.postedAt}>{formattedDate}</time>
          </div>
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {job.description}
        </p>

        {/* Salary */}
        {formatSalary() && (
          <div className="text-sm font-semibold text-foreground">
            {formatSalary()}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 pt-2">
          <span className="text-xs text-muted-foreground capitalize">
            {job.department.replace("-", " ")}
          </span>
          <Link href={`/careers/${job.slug}`}>
            <Button variant="outline" size="sm" className="gap-2">
              View Details
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

