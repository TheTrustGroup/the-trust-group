import {
  buildWorkEngagementsFromManifest,
  type CardSize,
  type WorkCategory,
  type WorkEngagement,
  type WorkMetric,
} from "./engagements.manifest";

export type { CardSize, WorkCategory, WorkEngagement, WorkMetric };

export const WORK_FILTERS: { id: string; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "defense", label: "Defense & Intelligence" },
  { id: "ai", label: "AI Systems" },
  { id: "enterprise", label: "Enterprise SaaS" },
  { id: "health", label: "Healthcare" },
  { id: "transport", label: "Transportation" },
  { id: "web", label: "Web Platforms" },
];

export const WORK_ENGAGEMENTS: WorkEngagement[] = buildWorkEngagementsFromManifest();
