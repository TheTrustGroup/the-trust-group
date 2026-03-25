import type { Metadata } from "next";
import nextDynamic from "next/dynamic";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbs } from "@/lib/seo";
import { PageContentLoader } from "@/components/loading/page-content-loader";

const PrivateBriefingContent = nextDynamic(
  () =>
    import("@/components/briefing/private-briefing-content").then((m) => ({
      default: m.PrivateBriefingContent,
    })),
  { loading: () => <PageContentLoader />, ssr: true }
);

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

