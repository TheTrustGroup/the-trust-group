import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbs } from "@/lib/seo";
import { ServicesSection } from "@/components/services/services-section";

export const metadata: Metadata = generateSEOMetadata({
  title: "Services",
  description: "Comprehensive technology solutions from The Trust Group. AI solutions, custom software development, mobile apps, web development, cloud solutions, and consulting services.",
  keywords: ["services", "AI solutions", "software development", "mobile apps", "web development", "cloud solutions", "consulting"],
  url: "/services",
});

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

