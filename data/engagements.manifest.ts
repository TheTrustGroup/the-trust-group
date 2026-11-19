/**
 * Single source of truth for /work engagements and homepage "Selected work".
 *
 * Disclosure posture (site-wide): client identity, production URLs, and
 * screenshots are not published. Public copy is anonymous industry context
 * only. Details are shared under NDA via Private Briefing.
 *
 * disclosureStatus:
 * - limited: anonymous summary may be shown; no URL, screenshot, or name.
 * - classified: NDA-only summary; minimal public copy.
 * - pipeline: active delivery; no implied completion; no product names.
 *
 * "live" is retained in the type for backwards compatibility but must not
 * publish URLs or client identity.
 */

export type WorkCategory =
  | "defense"
  | "ai"
  | "enterprise"
  | "health"
  | "transport"
  | "web";

export type CardSize = "wide" | "narrow" | "half" | "full" | "third";

export interface WorkMetric {
  value: string;
  label: string;
}

export interface WorkEngagement {
  id: string;
  index: string;
  category: WorkCategory[];
  size: CardSize;
  featured?: boolean;
  classified?: boolean;
  pipeline?: boolean;
  caseStudySlug?: string;
  liveUrl?: string;
  previewImage?: string;
  industry: string;
  title: string;
  description: string;
  tags: string[];
  techStack?: string[];
  metrics?: WorkMetric[];
  ndaCtaText?: string;
}

export type DisclosureStatus = "live" | "limited" | "classified" | "pipeline";

export interface EngagementManifestEntry {
  id: string;
  index: string;
  category: WorkCategory[];
  size: CardSize;
  featured?: boolean;
  disclosureStatus: DisclosureStatus;
  industry: string;
  title: string;
  description: string;
  tags: string[];
  techStack?: string[];
  metrics?: WorkMetric[];
  /** @deprecated Public case studies are not published under the confidential posture. */
  caseStudySlug?: string;
  /** @deprecated Production URLs are not published. */
  liveUrl?: string;
  ndaCtaText?: string;
  showOnHomepage?: boolean;
  homePreview?: {
    /** Anonymous client context only — never a brand name. */
    client: string;
    industry?: string;
    challenge: string;
    solution: string;
    outcome: string;
    previewImage?: string;
  };
  /** @deprecated Screenshots are not published. */
  previewImage?: string;
}

export const ENGAGEMENT_MANIFEST: EngagementManifestEntry[] = [
  {
    id: "01",
    index: "01",
    category: ["web", "enterprise"],
    size: "wide",
    featured: true,
    disclosureStatus: "limited",
    industry: "Retail commerce",
    title: "Brand storefront and staff operations",
    description:
      "Customer-facing commerce and authenticated inventory / POS for a retail brand. Client identity and production URLs are not published.",
    tags: ["Confidential", "Retail", "Web"],
    techStack: ["Next.js", "React", "TypeScript"],
    ndaCtaText: "Request Briefing Under NDA",
    showOnHomepage: true,
    homePreview: {
      client: "Retail brand (confidential)",
      industry: "Retail",
      challenge:
        "Needed a premium public storefront and a separate staff workspace for inventory and POS.",
      solution:
        "Production commerce site plus an authenticated warehouse application on a shared web stack.",
      outcome:
        "Shipped and operated in production. Client identity and URLs withheld by agreement.",
    },
  },
  {
    id: "02",
    index: "02",
    category: ["web", "enterprise"],
    size: "half",
    disclosureStatus: "limited",
    industry: "Commerce operations",
    title: "Inventory and POS under demand spikes",
    description:
      "Staff tooling for inventory and point-of-sale built for reliability when traffic spikes. Client identity withheld.",
    tags: ["Confidential", "Operations"],
    techStack: ["Next.js", "React", "TypeScript"],
    ndaCtaText: "Request Briefing Under NDA",
    showOnHomepage: true,
    homePreview: {
      client: "Commerce operations (confidential)",
      industry: "Operations",
      challenge:
        "Drop-style retail needed staff tooling for inventory and POS that stays dependable when demand spikes.",
      solution:
        "Authenticated warehouse application for inventory, POS, and operational workflows.",
      outcome:
        "In production for day-to-day operations. Details available under NDA.",
    },
  },
  {
    id: "03",
    index: "03",
    category: ["transport"],
    size: "half",
    disclosureStatus: "limited",
    industry: "Mobility, West Africa",
    title: "Regional ride-booking stack",
    description:
      "Mobile booking, real-time tracking, and local pricing for a regional mobility operator. Client identity withheld.",
    tags: ["Confidential", "Mobility"],
    techStack: ["React Native", "Node.js"],
    ndaCtaText: "Request Briefing Under NDA",
    showOnHomepage: true,
    homePreview: {
      client: "Mobility operator, West Africa (confidential)",
      industry: "Mobility",
      challenge:
        "Needed a production ride-booking stack with maps, tiers, and transparent local pricing.",
      solution:
        "Mobile apps and backend for real-time matching, history, and region-native payment flows.",
      outcome:
        "Shipped to production. Scope and client identity shared under NDA only.",
    },
  },
];

export function buildWorkEngagementsFromManifest(): WorkEngagement[] {
  return ENGAGEMENT_MANIFEST.map((e) => {
    const classified = e.disclosureStatus === "classified";
    const pipeline = e.disclosureStatus === "pipeline";

    let tags = [...e.tags];
    if (pipeline && !tags.some((t) => t.toLowerCase().includes("deliver"))) {
      tags = ["In delivery", ...tags.filter((t) => t !== "Featured")];
    }

    return {
      id: e.id,
      index: e.index,
      category: e.category,
      size: e.size,
      featured: e.featured,
      classified,
      pipeline,
      // Confidential posture: never expose case-study routes, live URLs, or screenshots.
      caseStudySlug: undefined,
      liveUrl: undefined,
      previewImage: undefined,
      industry: e.industry,
      title: e.title,
      description: e.description,
      tags,
      techStack: e.techStack,
      metrics: undefined,
      ndaCtaText: e.ndaCtaText ?? "Request Briefing Under NDA",
    } satisfies WorkEngagement;
  });
}
