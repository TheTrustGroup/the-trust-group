import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbs } from "@/lib/seo";
import { PrivateBriefingContent } from "@/components/briefing/private-briefing-content";

export const metadata: Metadata = generateSEOMetadata({
  title: "Private Briefing",
  description:
    "Request a confidential, no-obligation private briefing. We'll discuss your requirements, constraints, and objectives and respond within 24 hours.",
  keywords: [
    "private briefing",
    "discovery call",
    "consultation",
    "The Trust Group",
    "confidential",
    "NDA",
  ],
  url: "/briefing",
});

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function BriefingPage() {
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: "/" },
    { name: "Private Briefing", url: "/briefing" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PrivateBriefingContent />
    </>
  );
}
