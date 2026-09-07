import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import type { CaseStudy } from "@/data/types";

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
    title:
      study.confidentiality === "confidential"
        ? "Confidential Engagement"
        : study.title,
    description: desc,
    url: `/case-studies/${params.slug}`,
  });
}

function SectionBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-[var(--ttg-border)] pt-10 first:border-t-0 first:pt-0">
      <h2
        className="ttg-serif text-[clamp(22px,2.5vw,28px)] leading-[1.15]"
        style={{ color: "var(--ttg-navy)" }}
      >
        {label}
      </h2>
      <div className="ttg-body mt-6 [&>p+p]:mt-6">{children}</div>
    </div>
  );
}

function renderCaseStudyPage(study: CaseStudy) {
  const tier = study.confidentiality;

  if (tier === "confidential") {
    return (
      <>
        <h1
          className="ttg-serif text-[clamp(36px,5vw,64px)] leading-[1.02] tracking-[-0.02em]"
          style={{ color: "var(--ttg-navy)" }}
        >
          Confidential Engagement
        </h1>
        <div className="mt-12 space-y-10 border-t border-[var(--ttg-border)] pt-10">
          <p className="ttg-body max-w-[65ch] text-[17px]">
            This engagement is not publicly disclosed. We work on systems where
            discretion is essential. Additional details may be shared in a
            private briefing.
          </p>
          <Link href="/contact" className="ttg-text-link">
            Request a Private Briefing <span aria-hidden>→</span>
          </Link>
        </div>
      </>
    );
  }

  if (tier === "limited") {
    return (
      <>
        <h1
          className="ttg-serif text-[clamp(36px,5vw,64px)] leading-[1.02] tracking-[-0.02em]"
          style={{ color: "var(--ttg-navy)" }}
        >
          {study.title}
        </h1>
        {(study.client || study.year) && (
          <p className="ttg-label mt-6">
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
        <p className="ttg-body mt-14 text-[13px]">
          Details limited due to confidentiality.
        </p>
      </>
    );
  }

  return (
    <>
      <h1
        className="ttg-serif text-[clamp(36px,5vw,64px)] leading-[1.02] tracking-[-0.02em]"
        style={{ color: "var(--ttg-navy)" }}
      >
        {study.title}
      </h1>
      {(study.client || study.year) && (
        <p className="ttg-label mt-6">
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
    <article
      className="min-h-screen w-full"
      style={{ background: "var(--ttg-bg)" }}
    >
      <div className="mx-auto max-w-[720px] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="mb-10">
          <Link href="/work" className="ttg-text-link">
            ← Work
          </Link>
        </p>
        {renderCaseStudyPage(study)}
      </div>
    </article>
  );
}
