import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbs } from "@/lib/seo";
import { PrivateBriefingContent } from "@/components/briefing/private-briefing-content";

export const metadata: Metadata = generateSEOMetadata({
  title: "Private Briefing",
  description: "Request a confidential, no-obligation briefing to discuss your project. Response within 24 hours. NDA available.",
  keywords: ["contact", "get in touch", "The Trust Group", "software development contact", "AI solutions contact"],
  url: "/contact",
});

// Force dynamic rendering to prevent timeout
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ContactPage() {
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: "/" },
    { name: "Private Briefing", url: "/contact" },
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

