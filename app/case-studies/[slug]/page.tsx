import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import type { CaseStudy, CaseStudyConfidentiality } from "@/data/types";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Case Study Not Found" };
  const desc =
    study.confidentiality === "confidential"
      ? "This engagement is not publicly disclosed."
      : study.confidentiality === "limited"
        ? "Details limited due to confidentiality."
        : [study.context, study.outcome].filter(Boolean).join(" ").slice(0, 160);
  return generateSEOMetadata({
    title: study.confidentiality === "confidential" ? "Confidential Engagement" : study.title,
    description: desc,
    url: `/case-studies/${params.slug}`,
  });
}

/** Tier A/B: section block. Typography-first, no cards. */
function SectionBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border/60 pt-10 first:border-t-0 first:pt-0">
      <h2 className="font-serif text-headline-sm font-medium text-foreground">{label}</h2>
      <div className="mt-6 font-sans text-body-lg text-foreground [&>p+p]:mt-6">{children}</div>
    </div>
  );
}

function renderCaseStudyPage(study: CaseStudy) {
  const tier = study.confidentiality;

  // Tier C — Confidential: single statement + CTA only. No operational details.
  if (tier === "confidential") {
    return (
      <>
        <h1 className="font-serif text-display-3 font-medium text-foreground lg:text-display-2">
          Confidential Engagement
        </h1>
        <div className="mt-12 space-y-10 border-t border-border/60 pt-10">
          <p className="font-sans text-body-lg text-foreground max-w-prose">
            This engagement is not publicly disclosed. We work on systems where discretion is
            essential. Additional details may be shared in a private briefing.
          </p>
          <p className="font-sans text-body-sm">
            <Link
              href="/contact"
              className="text-foreground no-underline opacity-90 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Request a Private Briefing →
            </Link>
          </p>
        </div>
      </>
    );
  }

  // Tier B — Limited: Context, Our Role, Result + disclaimer. No hype.
  if (tier === "limited") {
    return (
      <>
        <h1 className="font-serif text-display-3 font-medium text-foreground lg:text-display-2">
          {study.title}
        </h1>
        {(study.client || study.year) && (
          <p className="mt-6 font-sans text-body-sm text-muted-foreground">
            {[study.client, study.year].filter(Boolean).join(" · ")}
          </p>
        )}
        <div className="mt-12 space-y-0">
          {study.context && (
            <SectionBlock label="Context">
              <p>{study.context}</p>
            </SectionBlock>
          )}
          {study.ourRole && (
            <SectionBlock label="Our Role">
              <p>{study.ourRole}</p>
            </SectionBlock>
          )}
          {study.result && (
            <SectionBlock label="Result">
              <p>{study.result}</p>
            </SectionBlock>
          )}
        </div>
        <p className="mt-14 font-sans text-body-sm text-muted-foreground">
          Details limited due to confidentiality.
        </p>
      </>
    );
  }

  // Tier A — Public: full editorial. Context, Challenge, Approach, Outcome. No thumbnails unless symbolic.
  return (
    <>
      <h1 className="font-serif text-display-3 font-medium text-foreground lg:text-display-2">
        {study.title}
      </h1>
      {(study.client || study.year) && (
        <p className="mt-6 font-sans text-body-sm text-muted-foreground">
          {[study.client, study.year].filter(Boolean).join(" · ")}
        </p>
      )}
      <div className="mt-12 space-y-0">
        {study.context && (
          <SectionBlock label="Context">
            <p>{study.context}</p>
          </SectionBlock>
        )}
        {study.challenge && (
          <SectionBlock label="Challenge">
            <p>{study.challenge}</p>
          </SectionBlock>
        )}
        {study.approach && (
          <SectionBlock label="Approach">
            <p>{study.approach}</p>
          </SectionBlock>
        )}
        {study.outcome && (
          <SectionBlock label="Outcome">
            <p>{study.outcome}</p>
          </SectionBlock>
        )}
      </div>
    </>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <article className="min-h-screen w-full">
      <div className="mx-auto max-w-editorial px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-10">
            <Link
              href="/work"
              className="font-sans text-body-sm text-muted-foreground no-underline hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              ← Work
            </Link>
          </p>
          {renderCaseStudyPage(study)}
        </div>
      </div>
    </article>
  );
}
