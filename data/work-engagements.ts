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
  { id: "enterprise", label: "Enterprise" },
  { id: "transport", label: "Transportation" },
  { id: "web", label: "Web Platforms" },
];

export const WORK_ENGAGEMENTS: WorkEngagement[] = buildWorkEngagementsFromManifest();
