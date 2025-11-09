import { getJobListings, getJobDepartments } from "@/lib/cms";
import { generateMetadata, generateBreadcrumbs } from "@/lib/seo";
import type { Metadata } from "next";
import { CareersPageClient } from "./careers-page-client";

export const metadata: Metadata = generateMetadata({
  title: "Careers",
  description: "Join The Trust Group and build the future of technology. Explore exciting career opportunities in AI, software development, and more.",
  keywords: ["careers", "jobs", "hiring", "employment", "software engineering", "AI"],
  url: "/careers",
});

// Force dynamic rendering to prevent timeout
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CareersPage() {
  const { jobs, departments } = getJobListings();
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: "/" },
    { name: "Careers", url: "/careers" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <CareersPageClient jobs={jobs} departments={departments} />
    </>
  );
}

