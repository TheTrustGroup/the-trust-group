import { notFound } from "next/navigation";
import { getJobListing, getJobListings } from "@/lib/cms";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { MapPin, Clock, Briefcase, TrendingUp, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/careers/job-card";

interface JobPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const { jobs } = getJobListings();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const job = getJobListing(params.slug);

  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  return generateSEOMetadata({
    title: `${job.title} - Careers`,
    description: job.description,
    keywords: [job.title, job.department, job.type, "careers", "jobs"],
  });
}

export default function JobPage({ params }: JobPageProps) {
  const job = getJobListing(params.slug);

  if (!job) {
    notFound();
  }

  const { jobs } = getJobListings();
  const postedDate = new Date(job.postedAt);
  const formattedDate = postedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get related jobs (same department, excluding current job)
  const relatedJobs = jobs
    .filter((j) => j.department === job.department && j.id !== job.id)
    .slice(0, 3);

  const formatSalary = () => {
    if (!job.salary) return null;
    const { min, max, currency = "USD", period = "yearly" } = job.salary;
    const formatNumber = (num: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }).format(num);
    };

    if (min && max) {
      const periodLabel = period === "yearly" ? "per year" : period === "monthly" ? "per month" : "per hour";
      return `${formatNumber(min)} - ${formatNumber(max)} ${periodLabel}`;
    } else if (min) {
      const periodLabel = period === "yearly" ? "per year" : period === "monthly" ? "per month" : "per hour";
      return `${formatNumber(min)}+ ${periodLabel}`;
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

  const getExperienceLabel = (experience: string) => {
    const labels: Record<string, string> = {
      entry: "Entry Level",
      mid: "Mid Level",
      senior: "Senior",
      lead: "Lead",
    };
    return labels[experience] || experience;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <section className="border-b py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/careers">
            <Button variant="ghost" size="sm" className="gap-2">
              ← Back to Careers
            </Button>
          </Link>
        </div>
      </section>

      {/* Job Details */}
      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <header className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {job.featured && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    <TrendingUp className="h-4 w-4" />
                    Featured
                  </span>
                )}
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium capitalize ${getTypeColor(job.type)}`}
                >
                  {job.type.replace("-", " ")}
                </span>
                <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground capitalize">
                  {getExperienceLabel(job.experience)}
                </span>
              </div>

              <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                {job.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span className="capitalize">{job.department.replace("-", " ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <time dateTime={job.postedAt}>Posted {formattedDate}</time>
                </div>
              </div>

              {/* Salary */}
              {formatSalary() && (
                <div className="mt-4 text-lg font-semibold text-foreground">
                  {formatSalary()}
                </div>
              )}
            </header>

            {/* Description */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Job Description</h2>
              <p className="leading-7 text-muted-foreground">{job.description}</p>
            </div>

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">Responsibilities</h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {job.requirements && job.requirements.length > 0 && (
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">Requirements</h2>
                <ul className="space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">Benefits</h2>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Apply Section */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 text-2xl font-bold">Apply for this Position</h2>
              <p className="mb-6 text-muted-foreground">
                Interested in this role? We&apos;d love to hear from you!
              </p>
              <div className="flex flex-wrap gap-4">
                {job.applicationUrl ? (
                  <Button asChild size="lg" className="gap-2">
                    <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer" aria-label="Apply Now (Opens in new window)">
                      Apply Now
                      <ExternalLink className="h-4 w-4" aria-label="Opens in new window" />
                    </a>
                  </Button>
                ) : job.applicationEmail ? (
                  <Button asChild size="lg" className="gap-2">
                    <a href={`mailto:${job.applicationEmail}?subject=Application for ${job.title}`}>
                      Apply via Email
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <Button asChild size="lg" className="gap-2">
                    <a href="/contact">
                      Contact Us
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Jobs */}
      {relatedJobs.length > 0 && (
        <section className="border-t bg-muted/30 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Other Open Positions</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedJobs.map((relatedJob) => (
                  <JobCard key={relatedJob.id} job={relatedJob} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

