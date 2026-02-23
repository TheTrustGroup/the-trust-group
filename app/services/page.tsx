import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbs } from "@/lib/seo";
import { ServicesSection } from "@/components/services/services-section";

export const metadata: Metadata = generateSEOMetadata({
  title: "Capabilities",
  description: "Defense technology, AI implementation, custom enterprise software, mobile development, cloud infrastructure, and strategic consulting.",
  keywords: ["services", "AI solutions", "software development", "mobile apps", "web development", "cloud solutions", "consulting"],
  url: "/services",
});

// Force dynamic rendering to prevent timeout
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ServicesPage() {
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="min-h-screen pt-4 md:pt-8">
        <ServicesSection />
      </div>
    </>
  );
}

