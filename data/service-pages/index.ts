export type {
  ServicePageDefinition,
  CapabilityBlock,
  WhyBlock,
  ComplianceItem,
  ProcessStepDef,
  FaqItemDef,
  CaseStudyCardDef,
} from "./types";
export { defenseTechnology } from "./defense-technology";
export { roboticsEdgeAi } from "./robotics-edge-ai";
export { aiSolutions } from "./ai-solutions";
export { customSoftware } from "./custom-software";
export { mobileApps } from "./mobile-apps";
export { webDevelopment } from "./web-development";
export { cloudSolutions } from "./cloud-solutions";
export { consulting } from "./consulting";

import type { ServicePageDefinition } from "./types";
import { defenseTechnology } from "./defense-technology";
import { roboticsEdgeAi } from "./robotics-edge-ai";
import { aiSolutions } from "./ai-solutions";
import { customSoftware } from "./custom-software";
import { mobileApps } from "./mobile-apps";
import { webDevelopment } from "./web-development";
import { cloudSolutions } from "./cloud-solutions";
import { consulting } from "./consulting";

/** All service detail pages; single source for `/services/[slug]`. */
export const SERVICE_PAGE_DEFINITIONS: ServicePageDefinition[] = [
  defenseTechnology,
  roboticsEdgeAi,
  aiSolutions,
  customSoftware,
  mobileApps,
  webDevelopment,
  cloudSolutions,
  consulting,
];

export function getServicePageBySlug(slug: string): ServicePageDefinition | undefined {
  return SERVICE_PAGE_DEFINITIONS.find((p) => p.slug === slug);
}
