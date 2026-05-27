/**
 * Single source of truth for /work engagements and homepage "Selected work".
 * disclosureStatus:
 * - live: production URL may be shown (client-approved).
 * - limited: narrative + on-site case study when present; no public product URL.
 * - classified: NDA-only summary.
 * - pipeline: in delivery; no live URL; no implied completion date.
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
  /** Public case study slug (must exist in data/case-studies.json). */
  caseStudySlug?: string;
  /** HTTPS URL when disclosureStatus is "live". */
  liveUrl?: string;
  ndaCtaText?: string;
  /** When true, eligible for homepage Selected work (max 4 applied in lib). */
  showOnHomepage?: boolean;
  /** Short copy for homepage cards; required when showOnHomepage is true. */
  homePreview?: {
    client: string;
    industry?: string;
    challenge: string;
    solution: string;
    outcome: string;
    previewImage?: string;
  };
  /** Screenshot path under /public for work grid and case studies (live/limited). */
  previewImage?: string;
}

export const ENGAGEMENT_MANIFEST: EngagementManifestEntry[] = [
  {
    id: "01",
    index: "01",
    category: ["ai", "enterprise"],
    size: "wide",
    featured: true,
    disclosureStatus: "limited",
    industry: "E-Commerce Intelligence Platform",
    title: "Behavioral Analytics Engine for a Market-Leading Retailer",
    description:
      "Enterprise AI platform for high-volume customer interactions and commercial insights in real time. Custom ML pipeline on distributed cloud infrastructure; client metrics are not published on this site.",
    tags: ["Featured", "AI / ML", "E-Commerce"],
    techStack: ["Python", "TensorFlow", "AWS SageMaker", "Kafka", "PostgreSQL"],
    caseStudySlug: "ai-customer-analytics",
  },
  {
    id: "02",
    index: "02",
    category: ["enterprise"],
    size: "narrow",
    disclosureStatus: "limited",
    industry: "Enterprise, Workflow Automation",
    title: "Enterprise SaaS Platform",
    description:
      "Workflow automation and business intelligence platform with real-time collaboration and analytics. Scale and uptime targets set with the client; details in the limited case study.",
    tags: ["Enterprise SaaS"],
    caseStudySlug: "enterprise-saas",
  },
  {
    id: "03",
    index: "03",
    category: ["defense"],
    size: "half",
    disclosureStatus: "classified",
    industry: "Defense & Intelligence",
    title: "AI-Powered Threat Detection System",
    description:
      "A mission-critical intelligence platform deployed in support of defense operations. System architecture, client identity, and operational details are restricted. Engagement scope includes real-time data fusion, anomaly detection, and secure communication infrastructure.",
    tags: ["Classified", "Defense"],
    ndaCtaText: "Request Briefing Under NDA",
  },
  {
    id: "04",
    index: "04",
    category: ["defense"],
    size: "half",
    disclosureStatus: "classified",
    industry: "Intelligence Operations",
    title: "Secure Communications & Mission Planning Software",
    description:
      "End-to-end encrypted communications platform and mission coordination system designed for high-security environments. Built to military-grade compliance standards with zero data residency on third-party infrastructure.",
    tags: ["Classified", "Intelligence"],
    ndaCtaText: "Request Briefing Under NDA",
  },
  {
    id: "05",
    index: "05",
    category: ["health"],
    size: "wide",
    disclosureStatus: "limited",
    industry: "Healthcare Network, 50+ Facilities",
    title: "Comprehensive Healthcare Management Platform",
    description:
      "A full-featured clinical operations system covering patient records, telemedicine, appointment scheduling, and executive analytics. Designed for multi-site deployments with strict HIPAA compliance and HL7 FHIR integration. Rolled out across 50+ healthcare facilities within a single deployment cycle.",
    tags: ["Healthcare", "Platform"],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "FHIR API"],
    metrics: [
      { value: "50+", label: "Facilities Onboarded" },
      { value: "90%", label: "Scheduling Time Saved" },
      { value: "HIPAA", label: "Compliant" },
    ],
    caseStudySlug: "healthcare-management",
  },
  {
    id: "06",
    index: "06",
    category: ["transport"],
    size: "narrow",
    disclosureStatus: "limited",
    industry: "Transportation, Ghana Market",
    title: "Ride-Hailing Platform Built for West Africa",
    description:
      "A modern ride-hailing application designed specifically for the Ghanaian market, with real-time GPS tracking, multiple ride tiers, and payment infrastructure adapted for local conditions. Built to scale regionally.",
    tags: ["Mobile", "Transport"],
    techStack: ["React Native", "Node.js", "Google Maps API"],
    metrics: [
      { value: "Real-time", label: "GPS Tracking" },
      { value: "2", label: "Ride Tiers" },
    ],
    caseStudySlug: "velora",
    homePreview: {
      client: "Transportation startup, West Africa",
      industry: "Mobility",
      challenge: "Regional operators needed a production ride-booking stack with maps, tiers, and transparent local pricing.",
      solution: "Mobile apps and backend for real-time matching, history, and GHS-native flows.",
      outcome: "Shipped production system with live tracking, ride tiers, and map-based booking.",
    },
  },
  {
    id: "07",
    index: "07",
    category: ["defense", "ai"],
    size: "third",
    disclosureStatus: "classified",
    industry: "Autonomous Systems",
    title: "Autonomous Systems Integration",
    description:
      "Integration of autonomous decision-making systems for a government-adjacent client. Scope and outcomes are restricted.",
    tags: ["Classified"],
    ndaCtaText: "Request Briefing",
  },
  {
    id: "08",
    index: "08",
    category: ["ai"],
    size: "third",
    disclosureStatus: "limited",
    industry: "Financial Services, AI Transformation",
    title: "Enterprise AI Adoption Roadmap",
    description:
      "End-to-end AI strategy and implementation for a regional financial institution, from model selection and data governance to deployment and team enablement.",
    tags: ["AI Strategy"],
    metrics: [{ value: "4 wks", label: "Delivery Time" }],
  },
  {
    id: "09",
    index: "09",
    category: ["enterprise"],
    size: "third",
    disclosureStatus: "limited",
    industry: "Real Estate, Legacy to Cloud",
    title: "Legacy System Modernization at Scale",
    description:
      "Migration of a decade-old monolithic property management system to a cloud-native microservices architecture, with zero downtime and full data integrity.",
    tags: ["Modernization"],
    metrics: [
      { value: "0", label: "Downtime Hours" },
      { value: "Kubernetes", label: "Infrastructure" },
    ],
    caseStudySlug: "real-estate-platform",
  },
  {
    id: "11",
    index: "11",
    category: ["web"],
    size: "half",
    disclosureStatus: "live",
    industry: "Retail, Youth Apparel",
    title: "Extreme Dept Kidz: Brand Storefront",
    description:
      "Premium youth streetwear storefront with editorial merchandising, fast catalog delivery, and mobile-first shopping.",
    tags: ["Live", "Web", "E-Commerce"],
    techStack: ["Next.js", "React", "TypeScript"],
    caseStudySlug: "extreme-dept-kidz",
    liveUrl: "https://extremedeptkidz.com",
    previewImage: "/images/projects/extreme-dept-kidz-storefront-desktop.png",
    showOnHomepage: true,
    homePreview: {
      client: "Extreme Dept Kidz",
      industry: "Retail",
      challenge: "The brand needed a premium public storefront that matched its positioning and stayed fast on mobile.",
      solution: "Production commerce site with responsive catalog, seasonal campaigns, and performance-focused delivery.",
      outcome: "Live at extremedeptkidz.com for customer-facing sales.",
    },
  },
  {
    id: "16",
    index: "16",
    category: ["web", "enterprise"],
    size: "half",
    disclosureStatus: "live",
    industry: "Retail Operations",
    title: "Extreme Dept Kidz: Inventory & POS",
    description:
      "Warehouse management and point-of-sale workspace for store staff: inventory, POS flows, and multi-location operations.",
    tags: ["Live", "Operations", "Web"],
    techStack: ["Next.js", "React", "TypeScript"],
    caseStudySlug: "extreme-dept-kidz",
    liveUrl: "https://warehouse.extremedeptkidz.com",
    previewImage: "/images/projects/extreme-dept-kidz-warehouse-pos.png",
    showOnHomepage: true,
    homePreview: {
      client: "Extreme Dept Kidz",
      industry: "Retail operations",
      challenge: "Staff needed a secure workspace for inventory and POS separate from the public storefront.",
      solution: "Authenticated warehouse app for inventory management and point-of-sale tied to the brand stack.",
      outcome: "Live staff workspace at warehouse.extremedeptkidz.com.",
      previewImage: "/images/projects/extreme-dept-kidz-warehouse-pos.png",
    },
  },
  {
    id: "12",
    index: "12",
    category: ["web", "enterprise"],
    size: "third",
    disclosureStatus: "live",
    industry: "Music & Streetwear",
    title: "Hunnid Official: Inventory & POS",
    description:
      "Warehouse management and point-of-sale for releases and in-store operations, built for reliability under drop traffic.",
    tags: ["Live", "Operations", "Web"],
    techStack: ["Next.js", "React", "TypeScript"],
    caseStudySlug: "hunnid-official",
    liveUrl: "https://warehouse.hunnidofficial.com",
    previewImage: "/images/projects/hunnid-warehouse-pos.png",
    showOnHomepage: true,
    homePreview: {
      client: "Hunnid Official",
      industry: "Commerce operations",
      challenge: "Drop-style retail needed staff tooling for inventory and POS that stays dependable when demand spikes.",
      solution: "Authenticated warehouse app for inventory, POS, and operational workflows.",
      outcome: "Live staff workspace at warehouse.hunnidofficial.com.",
      previewImage: "/images/projects/hunnid-warehouse-pos.png",
    },
  },
  {
    id: "13",
    index: "13",
    category: ["enterprise", "ai"],
    size: "third",
    disclosureStatus: "pipeline",
    industry: "Logistics & Operations",
    title: "FuelAxis (In Delivery)",
    description:
      "Logistics and operational workflow platform in active build. Scope and milestones are shared under NDA; not listed as a completed case study.",
    tags: ["In delivery", "Platform"],
  },
  {
    id: "14",
    index: "14",
    category: ["transport"],
    size: "third",
    disclosureStatus: "pipeline",
    industry: "Mobility Programs",
    title: "RideWM (In Delivery)",
    description:
      "Regional mobility and booking program in the pipeline. Separate from our shipped Velora engagement; details and launch timing are not public yet.",
    tags: ["In delivery", "Mobility"],
  },
  {
    id: "15",
    index: "15",
    category: ["web", "enterprise"],
    size: "wide",
    disclosureStatus: "pipeline",
    industry: "Resorts & Hospitality",
    title: "Resort Web Apps (In Delivery)",
    description:
      "Upcoming guest-facing and operations-adjacent web applications for resort properties. Scope, branding, and launch timing vary by property; we list this as active delivery, not a finished case study.",
    tags: ["In delivery", "Hospitality", "Web"],
  },
];

export function buildWorkEngagementsFromManifest(): WorkEngagement[] {
  return ENGAGEMENT_MANIFEST.map((e) => {
    const classified = e.disclosureStatus === "classified";
    const pipeline = e.disclosureStatus === "pipeline";
    const liveUrl =
      e.disclosureStatus === "live" && e.liveUrl?.startsWith("https://") ? e.liveUrl : undefined;

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
      caseStudySlug: e.caseStudySlug,
      liveUrl,
      previewImage: e.previewImage,
      industry: e.industry,
      title: e.title,
      description: e.description,
      tags,
      techStack: e.techStack,
      metrics: e.metrics,
      ndaCtaText: classified ? e.ndaCtaText ?? "Request Briefing Under NDA" : e.ndaCtaText,
    } satisfies WorkEngagement;
  });
}
