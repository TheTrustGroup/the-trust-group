import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbs } from "@/lib/seo";
import { ServicesSection } from "@/components/services/services-section";
import { services } from "@/lib/cms-client";
import type { Service } from "@/data/types";

/** Order for the Capabilities index: strategic/emerging first, then the rest. */
const CAPABILITIES_ORDER = [
  "defense-technology",
  "robotics-edge-ai",
  "ai-solutions",
  "custom-software",
] as const;

function getCapabilities(): Service[] {
  const lead = CAPABILITIES_ORDER.map((id) => services.find((s) => s.id === id)).filter(
    (s): s is Service => s != null
  );
  const leadIds = new Set<string>(lead.map((s) => s.id));
  const rest = services.filter((s) => !leadIds.has(s.id));
  return [...lead, ...rest];
}

export const metadata: Metadata = generateSEOMetadata({
  title: "Capabilities",
  description: "Defense technology, AI implementation, custom enterprise software, mobile development, cloud infrastructure, and strategic consulting.",
  keywords: ["services", "AI solutions", "software development", "mobile apps", "web development", "cloud solutions", "consulting"],
  url: "/services",
});

export default function ServicesPage() {
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);
  const capabilities = getCapabilities();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ServicesSection
        servicesToShow={capabilities}
        maxItems={capabilities.length}
        lgColumns={4}
        headingLevel="h1"
        title="Capabilities"
        description="Defense technology, AI implementation, custom enterprise software, mobile development, cloud infrastructure, and strategic consulting."
      />
    </>
  );
}
