import { getJobListings, getJobDepartments } from "@/lib/cms";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { CareersPageClient } from "./careers-page-client";

export const metadata: Metadata = generateMetadata({
  title: "Careers",
  description: "Join The Trust Group and build the future of technology. Explore exciting career opportunities in AI, software development, and more.",
  keywords: ["careers", "jobs", "hiring", "employment", "software engineering", "AI"],
});

export default function CareersPage() {
  const { jobs, departments } = getJobListings();

  return <CareersPageClient jobs={jobs} departments={departments} />;
}

