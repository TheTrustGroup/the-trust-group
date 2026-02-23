/**
 * Our Work page — selected engagements. Used by app/work.
 * Categories align with filter: defense, ai, enterprise, health, transport.
 */

export type WorkCategory = "defense" | "ai" | "enterprise" | "health" | "transport";

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
  industry: string;
  title: string;
  description: string;
  tags: string[];
  techStack?: string[];
  metrics?: WorkMetric[];
  ndaCtaText?: string;
}

export interface WorkStatRowItem {
  value: string;
  suffix?: string;
  label: string;
}

export const WORK_FILTERS: { id: string; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "defense", label: "Defense & Intelligence" },
  { id: "ai", label: "AI Systems" },
  { id: "enterprise", label: "Enterprise SaaS" },
  { id: "health", label: "Healthcare" },
  { id: "transport", label: "Transportation" },
];

export const WORK_STAT_ROW: WorkStatRowItem[] = [
  { value: "35", suffix: "%", label: "Avg Conversion Lift" },
  { value: "50", suffix: "%", label: "Avg Churn Reduction" },
  { value: "500", suffix: "+", label: "Enterprise Clients Served" },
  { value: "6", suffix: "wks", label: "Avg Small Project Delivery" },
];

export const WORK_ENGAGEMENTS: WorkEngagement[] = [
  {
    id: "01",
    index: "01",
    category: ["ai", "enterprise"],
    size: "wide",
    featured: true,
    industry: "E-Commerce Intelligence Platform",
    title: "Behavioral Analytics Engine for a Market-Leading Retailer",
    description:
      "An enterprise AI platform processing millions of daily customer interactions to surface actionable commercial insights in real time. Built on a custom ML pipeline with sub-200ms inference latency, deployed across distributed cloud infrastructure with zero-downtime architecture.",
    tags: ["Featured", "AI / ML", "E-Commerce"],
    techStack: ["Python", "TensorFlow", "AWS SageMaker", "Kafka", "PostgreSQL"],
    metrics: [
      { value: "35%", label: "Conversion Increase" },
      { value: "50%", label: "Churn Reduction" },
      { value: "<200ms", label: "Inference Latency" },
    ],
  },
  {
    id: "02",
    index: "02",
    category: ["enterprise"],
    size: "narrow",
    industry: "Fortune 500 — Workflow Automation",
    title: "Enterprise SaaS Platform Serving 500+ Companies",
    description:
      "A full-scale workflow automation and business intelligence platform with real-time collaboration, advanced analytics, and a 99.9% uptime SLA — serving companies across three continents.",
    tags: ["Enterprise SaaS"],
    metrics: [
      { value: "500+", label: "Enterprise Clients" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
  },
  {
    id: "03",
    index: "03",
    category: ["defense"],
    size: "half",
    classified: true,
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
    classified: true,
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
    industry: "Healthcare Network — 50+ Facilities",
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
  },
  {
    id: "06",
    index: "06",
    category: ["transport"],
    size: "narrow",
    industry: "Transportation — Ghana Market",
    title: "Ride-Hailing Platform Built for West Africa",
    description:
      "A modern ride-hailing application designed specifically for the Ghanaian market — with real-time GPS tracking, multiple ride tiers, and payment infrastructure adapted for local conditions. Built to scale regionally.",
    tags: ["Mobile", "Transport"],
    techStack: ["React Native", "Node.js", "Google Maps API"],
    metrics: [
      { value: "Real-time", label: "GPS Tracking" },
      { value: "2", label: "Ride Tiers" },
    ],
  },
  {
    id: "07",
    index: "07",
    category: ["defense", "ai"],
    size: "third",
    classified: true,
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
    industry: "Financial Services — AI Transformation",
    title: "Enterprise AI Adoption Roadmap",
    description:
      "End-to-end AI strategy and implementation for a regional financial institution — from model selection and data governance to deployment and team enablement.",
    tags: ["AI Strategy"],
    metrics: [{ value: "4 wks", label: "Delivery Time" }],
  },
  {
    id: "09",
    index: "09",
    category: ["enterprise"],
    size: "third",
    industry: "Real Estate — Legacy to Cloud",
    title: "Legacy System Modernization at Scale",
    description:
      "Migration of a decade-old monolithic property management system to a cloud-native microservices architecture — with zero downtime and full data integrity.",
    tags: ["Modernization"],
    metrics: [
      { value: "0", label: "Downtime Hours" },
      { value: "Kubernetes", label: "Infrastructure" },
    ],
  },
];
