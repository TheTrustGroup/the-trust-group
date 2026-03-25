import type { Metadata } from "next";
import nextDynamic from "next/dynamic";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbs } from "@/lib/seo";
import { PageContentLoader } from "@/components/loading/page-content-loader";
import { services } from "@/lib/cms-client";
import type { Service } from "@/data/types";

const ServicesSection = nextDynamic(
  () =>
    import("@/components/services/services-section").then((m) => ({
      default: m.ServicesSection,
    })),
  { loading: () => <PageContentLoader />, ssr: true }
);

const CAPABILITIES_HERO_IDS = [
  "defense-technology",
  "robotics-edge-ai",
  "ai-solutions",
  "custom-software",
] as const;

function getCapabilitiesHeroServices(): Service[] {
  return CAPABILITIES_HERO_IDS.map((id) => services.find((s) => s.id === id)).filter(
    (s): s is Service => s != null
  );
}

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
        <ServicesSection
          servicesToShow={getCapabilitiesHeroServices()}
          maxItems={4}
          lgColumns={4}
        />
      </div>
    </>
  );
}

