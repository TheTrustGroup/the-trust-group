import fs from "fs";
import path from "path";
import type { CaseStudy, CaseStudyConfidentiality } from "@/data/types";

let cache: CaseStudy[] | null = null;

const VALID_CONFIDENTIALITY: CaseStudyConfidentiality[] = ["public", "limited", "confidential"];

function loadCaseStudies(): CaseStudy[] {
  if (cache) return cache;
  const filePath = path.join(process.cwd(), "data", "case-studies.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = JSON.parse(raw) as CaseStudy[];
  // Enforce confidentiality on load: future case studies cannot be added without it.
  parsed.forEach((c, i) => {
    if (!c.confidentiality || !VALID_CONFIDENTIALITY.includes(c.confidentiality)) {
      throw new Error(
        `Case study "${c.slug}" (index ${i}) must have confidentiality: "public" | "limited" | "confidential". Human review recommended.`
      );
    }
  });
  cache = parsed;
  return cache;
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return loadCaseStudies().find((c) => c.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return loadCaseStudies().map((c) => c.slug);
}
