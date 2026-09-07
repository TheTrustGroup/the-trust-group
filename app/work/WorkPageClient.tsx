"use client";

import * as React from "react";
import Link from "next/link";
import {
  WORK_ENGAGEMENTS,
  WORK_FILTERS,
  type WorkEngagement,
  type WorkCategory,
} from "@/data/work-engagements";
import "./work-page.css";

const WORK_CATEGORY_ALL = "all";

function matchesFilter(engagement: WorkEngagement, filter: string): boolean {
  if (filter === WORK_CATEGORY_ALL) return true;
  return engagement.category.includes(filter as WorkCategory);
}

export function WorkPageClient() {
  const [filter, setFilter] = React.useState(WORK_CATEGORY_ALL);

  const filteredEngagements = React.useMemo(
    () => WORK_ENGAGEMENTS.filter((e) => matchesFilter(e, filter)),
    [filter]
  );

  return (
    <div className="work-page relative min-h-screen">
      <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden px-6 pb-16 lg:px-[60px] lg:pb-20 pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 31, 46, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26, 31, 46, 0.04) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
          }}
        />

        <p
          className="work-hero-eyebrow mb-7 text-[11px] uppercase tracking-[0.14em]"
          style={{
            color: "var(--work-accent)",
            fontFamily: "var(--ttg-font-sans)",
          }}
        >
          Our Work
        </p>
        <h1
          className="work-hero-title mb-8 text-[clamp(44px,6vw,80px)] leading-[0.95] tracking-tight max-w-[900px]"
          style={{
            fontFamily: "var(--ttg-font-serif)",
            color: "var(--work-text)",
          }}
        >
          Engagements we do not
          <br />
          <em className="italic" style={{ color: "var(--work-accent)" }}>
            publish by name.
          </em>
        </h1>

        <p
          className="work-hero-meta max-w-2xl text-sm leading-[1.7]"
          style={{
            fontFamily: "var(--ttg-font-sans)",
            color: "var(--work-muted)",
          }}
        >
          Anonymous industry summaries only. Client identity, screenshots, and
          production URLs are withheld. Architecture, metrics, and references
          are shared under NDA in a private briefing.
        </p>
      </section>

      <div className="work-hero-filter border-b border-[var(--work-border)] px-0 sm:px-6 lg:px-[60px]">
        <div className="work-filter-bar flex overflow-x-auto px-6 sm:px-0">
          {WORK_FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className="whitespace-nowrap border-b-2 px-4 py-5 pb-[18px] text-[11px] uppercase tracking-[0.1em] transition-colors -mb-px sm:px-6"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                color: filter === id ? "var(--work-accent)" : "var(--work-muted)",
                borderColor:
                  filter === id ? "var(--work-accent)" : "transparent",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <section className="px-6 py-16 lg:px-[60px] lg:py-24">
        <ul className="m-0 list-none border-t border-[var(--work-border)] p-0">
          {filteredEngagements.map((eng) => (
            <WorkRow key={eng.id} engagement={eng} />
          ))}
        </ul>
        {filteredEngagements.length === 0 && (
          <p
            className="py-16 text-sm"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--work-muted)",
            }}
          >
            No engagements in this category are listed publicly.
          </p>
        )}
      </section>

      <section
        className="flex flex-col gap-10 border-t border-[var(--work-border)] px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-[60px] lg:py-[100px]"
        style={{ borderColor: "var(--work-border)" }}
      >
        <div>
          <h2
            className="mb-4 text-[clamp(32px,4vw,52px)] leading-[1.05]"
            style={{
              fontFamily: "var(--ttg-font-serif)",
              color: "var(--work-text)",
            }}
          >
            Need detail on past work?
          </h2>
          <p
            className="max-w-[480px] text-sm leading-[1.7]"
            style={{ color: "var(--work-muted)" }}
          >
            We share references, architecture notes, and outcomes under mutual
            NDA — not on a public portfolio.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <Link href="/contact" className="ttg-btn-pill">
            Request a Private Briefing
          </Link>
          <Link
            href="/services"
            className="text-[11px] uppercase tracking-wider transition-colors hover:opacity-90"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--work-muted)",
            }}
          >
            View All Capabilities →
          </Link>
        </div>
      </section>
    </div>
  );
}

function WorkRow({ engagement }: { engagement: WorkEngagement }) {
  const {
    index,
    classified,
    industry,
    title,
    description,
    tags,
    ndaCtaText,
    pipeline,
  } = engagement;

  return (
    <li
      className="grid grid-cols-1 gap-6 border-b border-[var(--work-border)] py-10 md:grid-cols-12 md:gap-8 md:py-12"
    >
      <div className="md:col-span-2">
        <span
          className="text-[10px] tracking-[0.1em]"
          style={{
            fontFamily: "var(--ttg-font-sans)",
            color: "var(--work-muted)",
          }}
        >
          {index}
        </span>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border px-2.5 py-1 text-[9px] uppercase tracking-[0.1em]"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                borderColor:
                  tag === "Classified"
                    ? "rgba(26, 31, 46, 0.2)"
                    : "var(--work-border)",
                color: "var(--work-muted)",
                background: "var(--work-tag-bg)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="md:col-span-7">
        <p
          className="mb-2 text-[10px] uppercase tracking-[0.14em]"
          style={{
            fontFamily: "var(--ttg-font-sans)",
            color: "var(--work-accent)",
          }}
        >
          {industry}
        </p>
        <h2
          className="mb-4 text-[clamp(22px,2.5vw,32px)] leading-[1.1]"
          style={{
            fontFamily: "var(--ttg-font-serif)",
            color: "var(--work-text)",
          }}
        >
          {title}
        </h2>
        <p
          className="text-[14px] leading-[1.7] max-w-[560px]"
          style={{ color: "var(--work-muted)" }}
        >
          {description}
        </p>
        {classified && (
          <p
            className="mt-4 text-[11px] uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--work-muted)",
            }}
          >
            Details available under NDA only
          </p>
        )}
        {pipeline && !classified && (
          <p
            className="mt-4 text-[11px] uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--work-muted)",
            }}
          >
            Active delivery — not a completed case study
          </p>
        )}
      </div>

      <div className="md:col-span-3 md:flex md:items-start md:justify-end">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] transition-opacity hover:opacity-70"
          style={{
            fontFamily: "var(--ttg-font-sans)",
            color: "var(--work-accent)",
          }}
        >
          {ndaCtaText ?? "Request Briefing Under NDA"}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </li>
  );
}
