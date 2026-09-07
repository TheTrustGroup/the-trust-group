import Link from "next/link";
import { TTGSectionHeading } from "@/components/ttg/section-heading";
import {
  ENGAGEMENT_MANIFEST,
  type EngagementManifestEntry,
} from "@/data/engagements.manifest";

interface HomepageCaseStudy {
  id: string;
  client: string;
  industry?: string;
  challenge: string;
  solution: string;
  outcome: string;
}

function homepageSortOrder(a: EngagementManifestEntry, b: EngagementManifestEntry): number {
  const rank = (e: EngagementManifestEntry) =>
    (e.disclosureStatus === "classified" ? 1 : 0) * 2 + (e.featured ? 0 : 1);
  return rank(a) - rank(b);
}

function getHomepageCaseStudies(): HomepageCaseStudy[] {
  return ENGAGEMENT_MANIFEST.filter(
    (entry) => entry.showOnHomepage && entry.homePreview
  )
    .sort(homepageSortOrder)
    .slice(0, 3)
    .map((entry) => {
      const preview = entry.homePreview!;
      return {
        id: entry.id,
        client: preview.client,
        industry: preview.industry ?? entry.industry,
        challenge: preview.challenge,
        solution: preview.solution,
        outcome: preview.outcome,
      };
    });
}

const FIELDS: ReadonlyArray<{
  key: "challenge" | "solution" | "outcome";
  label: string;
}> = [
  { key: "challenge", label: "Challenge" },
  { key: "solution", label: "Solution" },
  { key: "outcome", label: "Outcome" },
];

function CaseStudyCard({ study }: { study: HomepageCaseStudy }) {
  return (
    <article className="ttg-cell flex flex-col p-8 md:p-10">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <span className="ttg-label mb-2">Client</span>
          <h3
            className="ttg-serif text-[26px] leading-[1.1]"
            style={{ color: "var(--ttg-navy)" }}
          >
            {study.client}
          </h3>
        </div>
        {study.industry && (
          <span
            className="shrink-0 border px-2.5 py-1 text-[9px] uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--ttg-muted)",
              borderColor: "var(--ttg-border)",
            }}
          >
            {study.industry}
          </span>
        )}
      </div>

      <dl className="flex flex-1 flex-col gap-6">
        {FIELDS.map(({ key, label }) => (
          <div key={key} className="border-t border-[var(--ttg-border)] pt-5">
            <dt className="ttg-label mb-2">{label}</dt>
            <dd
              className={`ttg-body ${key === "solution" ? "ttg-body--navy" : ""}`}
            >
              {study[key]}
            </dd>
          </div>
        ))}
      </dl>

      <Link
        href="/contact"
        className="ttg-text-link mt-10"
        aria-label={`Request a private briefing about this ${study.industry ?? "engagement"}`}
      >
        Discuss under NDA <span aria-hidden>→</span>
      </Link>
    </article>
  );
}

export function SelectedWork() {
  const studies = getHomepageCaseStudies();
  if (studies.length === 0) return null;

  return (
    <section
      id="portfolio"
      className="ttg-section border-t border-[var(--ttg-border)] py-20 md:py-[120px] px-6 lg:px-16"
      style={{ background: "var(--ttg-bg)" }}
      aria-labelledby="selected-work-heading"
    >
      <TTGSectionHeading
        id="selected-work-heading"
        title="Selected work"
        description="Anonymous summaries only. Client identity, screenshots, and production URLs are not published."
        aside={
          <Link href="/work" className="ttg-text-link">
            View all engagements <span aria-hidden>→</span>
          </Link>
        }
      />

      <div className="ttg-cells grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {studies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}
