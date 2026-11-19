import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbs } from "@/lib/seo";
import { ServicesSection } from "@/components/services/services-section";
import { services } from "@/lib/cms-client";
import type { Service } from "@/data/types";

/** Not listed on the Capabilities index; reachable from the footer only. */
const HIDDEN_FROM_INDEX = new Set<string>(["defense-technology"]);

/** Order for the Capabilities index: strategic/emerging first, then the rest. */
const CAPABILITIES_ORDER = [
  "robotics-edge-ai",
  "ai-solutions",
  "custom-software",
] as const;

function getCapabilities(): Service[] {
  const lead = CAPABILITIES_ORDER.map((id) => services.find((s) => s.id === id)).filter(
    (s): s is Service => s != null
  );
  const leadIds = new Set<string>(lead.map((s) => s.id));
  const rest = services.filter((s) => !leadIds.has(s.id) && !HIDDEN_FROM_INDEX.has(s.id));
  return [...lead, ...rest];
}

export const metadata: Metadata = generateSEOMetadata({
  title: "Capabilities",
  description: "Robotics and edge AI, AI implementation, custom enterprise software, web and mobile development, cloud infrastructure, and strategic consulting.",
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
        showBriefingTile
        headingLevel="h1"
        title="Capabilities"
        description="Robotics and edge AI, AI implementation, custom enterprise software, web and mobile development, cloud infrastructure, and strategic consulting."
      />
    </>
  );
}
