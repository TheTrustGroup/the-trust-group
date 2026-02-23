"use client";

import * as React from "react";
import Link from "next/link";
import {
  WORK_ENGAGEMENTS,
  WORK_FILTERS,
  WORK_STAT_ROW,
  type WorkEngagement,
  type WorkCategory,
} from "@/data/work-engagements";
import "./work-page.css";

const WORK_CATEGORY_ALL = "all";

function getCardSizeClass(size: WorkEngagement["size"]): string {
  switch (size) {
    case "wide":
      return "lg:col-span-8";
    case "narrow":
      return "lg:col-span-4";
    case "half":
      return "lg:col-span-6";
    case "full":
      return "col-span-12";
    case "third":
      return "lg:col-span-4";
    default:
      return "col-span-12";
  }
}

function matchesFilter(engagement: WorkEngagement, filter: string): boolean {
  if (filter === WORK_CATEGORY_ALL) return true;
  return engagement.category.includes(filter as WorkCategory);
}

export function WorkPageClient() {
  const [filter, setFilter] = React.useState(WORK_CATEGORY_ALL);
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const ringRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      requestAnimationFrame(() => {
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
      });
    };
    const media = window.matchMedia("(pointer: fine) and (min-width: 901px)");
    const prevCursor = document.body.style.cursor;
    const applyCursor = () => {
      document.body.style.cursor = media.matches ? "none" : prevCursor;
    };
    applyCursor();
    media.addEventListener("change", applyCursor);
    window.addEventListener("mousemove", onMove);
    return () => {
      media.removeEventListener("change", applyCursor);
      window.removeEventListener("mousemove", onMove);
      document.body.style.cursor = prevCursor;
    };
  }, []);

  const cardRefs = React.useRef<Map<string, HTMLDivElement>>(new Map());

  const filteredEngagements = React.useMemo(
    () => WORK_ENGAGEMENTS.filter((e) => matchesFilter(e, filter)),
    [filter]
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement;
            const ids = filteredEngagements.map((e) => e.id);
            const delay = ids.indexOf(el.dataset.workId ?? "") * 80;
            setTimeout(() => el.classList.add("work-card-visible"), Math.max(0, delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    filteredEngagements.forEach((eng) => {
      const el = cardRefs.current.get(eng.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [filter, filteredEngagements]);

  return (
    <div className="work-page relative min-h-screen" style={{ cursor: "none" }}>
      <div
        ref={cursorRef}
        className="work-cursor fixed z-[9999] h-2 w-2 rounded-full transition-transform duration-100 ease-out"
        style={{
          background: "var(--work-gold)",
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="work-cursor-ring fixed z-[9998] h-9 w-9 rounded-full border border-[rgba(200,169,110,0.4)] transition-all duration-150 ease-out"
        style={{ transform: "translate(-50%, -50%)" }}
        aria-hidden
      />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-20 lg:px-[60px] lg:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            backgroundImage: `linear-gradient(rgba(200, 169, 110, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200, 169, 110, 0.04) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
          }}
        />
        <div
          className="absolute right-6 top-36 hidden text-[11px] uppercase tracking-[0.1em] lg:block"
          style={{
            color: "var(--work-muted)",
            writingMode: "vertical-rl",
            fontFamily: "var(--font-work-mono), monospace",
          }}
        >
          Selected Engagements — 2021–2026
        </div>

        <p
          className="work-hero-eyebrow mb-7 text-[11px] uppercase tracking-[0.14em]"
          style={{
            color: "var(--work-gold)",
            fontFamily: "var(--font-work-mono), monospace",
          }}
        >
          Our Work
        </p>
        <h1
          className="work-hero-title mb-10 font-serif text-[clamp(52px,7vw,96px)] leading-[0.95] tracking-tight"
          style={{
            fontFamily: "var(--font-work-serif), serif",
          }}
        >
          Systems built for
          <br />
          <em className="italic" style={{ color: "var(--work-gold)" }}>
            permanence.
          </em>
        </h1>

        <div
          className="work-hero-meta flex flex-wrap items-end gap-10 lg:gap-[60px]"
          style={{
            fontFamily: "var(--font-work-mono), monospace",
          }}
        >
          <div className="flex flex-col gap-1">
            <span
              className="text-[36px] leading-none"
              style={{
                fontFamily: "var(--font-work-serif), serif",
                color: "var(--work-white)",
              }}
            >
              40+
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.1em]"
              style={{ color: "var(--work-muted)" }}
            >
              Systems Deployed
            </span>
          </div>
          <div
            className="h-10 w-px shrink-0"
            style={{ background: "var(--work-border)" }}
          />
          <div className="flex flex-col gap-1">
            <span
              className="text-[36px] leading-none"
              style={{
                fontFamily: "var(--font-work-serif), serif",
                color: "var(--work-white)",
              }}
            >
              12
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.1em]"
              style={{ color: "var(--work-muted)" }}
            >
              Countries
            </span>
          </div>
          <div
            className="h-10 w-px shrink-0"
            style={{ background: "var(--work-border)" }}
          />
          <div className="flex flex-col gap-1">
            <span
              className="text-[36px] leading-none"
              style={{
                fontFamily: "var(--font-work-serif), serif",
                color: "var(--work-white)",
              }}
            >
              99.9%
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.1em]"
              style={{ color: "var(--work-muted)" }}
            >
              Avg Uptime SLA
            </span>
          </div>
          <div
            className="h-10 w-px shrink-0"
            style={{ background: "var(--work-border)" }}
          />
          <p
            className="max-w-[380px] text-sm leading-[1.7]"
            style={{ color: "var(--work-muted)" }}
          >
            A curated selection of engagements across defense, enterprise, and
            emerging technology sectors. Some details remain classified.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div
        className="work-hero-filter border-b border-[var(--work-border)] px-6 lg:px-[60px]"
      >
        <div className="flex overflow-x-auto">
          {WORK_FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className="whitespace-nowrap border-b-2 px-6 py-5 pb-[18px] text-[11px] uppercase tracking-[0.1em] transition-colors -mb-px"
              style={{
                fontFamily: "var(--font-work-mono), monospace",
                color: filter === id ? "var(--work-gold)" : "var(--work-muted)",
                borderColor:
                  filter === id ? "var(--work-gold)" : "transparent",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio grid */}
      <section className="px-6 py-20 lg:px-[60px] lg:py-[120px]">
        <div className="grid grid-cols-12 gap-6">
          {/* Stat row */}
          <div
            className="col-span-12 flex flex-wrap items-center justify-center gap-10 border-y border-[var(--work-border)] py-10 lg:gap-20"
            style={{ background: "transparent", borderColor: "var(--work-border)" }}
          >
            {WORK_STAT_ROW.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="mb-2 text-[52px] leading-none"
                  style={{
                    fontFamily: "var(--font-work-serif), serif",
                    color: "var(--work-white)",
                  }}
                >
                  {stat.value}
                  <span style={{ color: "var(--work-gold)" }}>
                    {stat.suffix}
                  </span>
                </div>
                <div
                  className="text-[10px] uppercase tracking-[0.12em]"
                  style={{
                    fontFamily: "var(--font-work-mono), monospace",
                    color: "var(--work-muted)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {filteredEngagements.map((eng) => (
            <WorkCard
              key={eng.id}
              engagement={eng}
              ref={(el) => {
                if (el) cardRefs.current.set(eng.id, el);
              }}
              visible={matchesFilter(eng, filter)}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="flex flex-col gap-10 border-t border-[var(--work-border)] px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-[60px] lg:py-[120px]"
        style={{ borderColor: "var(--work-border)" }}
      >
        <div>
          <h2
            className="mb-4 text-[clamp(36px,4vw,60px)] leading-[1.05]"
            style={{
              fontFamily: "var(--font-work-serif), serif",
              color: "var(--work-white)",
            }}
          >
            Ready to build something
            <br />
            <em className="italic" style={{ color: "var(--work-gold)" }}>
              that lasts?
            </em>
          </h2>
          <p
            className="max-w-[440px] text-sm leading-[1.7]"
            style={{ color: "var(--work-muted)" }}
          >
            We work with a select number of organizations at a time. If your
            project demands precision, security, and speed — let&apos;s talk.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <Link
            href="/contact"
            className="inline-block px-10 py-[18px] text-xs uppercase tracking-wider transition-colors"
            style={{
              fontFamily: "var(--font-work-mono), monospace",
              background: "var(--work-gold)",
              color: "var(--work-black)",
            }}
          >
            Request a Private Briefing
          </Link>
          <Link
            href="/services"
            className="text-[11px] uppercase tracking-wider transition-colors hover:opacity-90"
            style={{
              fontFamily: "var(--font-work-mono), monospace",
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

const WorkCard = React.forwardRef<
  HTMLDivElement,
  {
    engagement: WorkEngagement;
    visible: boolean;
  }
>(function WorkCard({ engagement, visible }, ref) {
  const {
    id,
    index,
    size,
    featured,
    classified,
    industry,
    title,
    description,
    tags,
    techStack,
    metrics,
    ndaCtaText,
  } = engagement;

  const sizeClass = getCardSizeClass(size);
  const dataCategory = engagement.category.join(" ");

  return (
    <div
      ref={ref}
      data-category={dataCategory}
      data-work-id={id}
      className={`work-card ${sizeClass} col-span-12 overflow-hidden rounded border transition-all duration-300 ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-20 scale-[0.98] pointer-events-none"
      } work-card opacity-0 translate-y-8`}
      style={{
        background: classified
          ? undefined
          : featured
            ? "linear-gradient(135deg, #141210 0%, #1a1712 100%)"
            : "var(--work-slate)",
        borderColor: "var(--work-border)",
      }}
    >
      <div
        className={`flex h-full flex-col p-10 ${
          classified
            ? "bg-[repeating-linear-gradient(-45deg,var(--work-slate),var(--work-slate)_10px,rgba(255,80,80,0.02)_10px,rgba(255,80,80,0.02)_20px)]"
            : ""
        }`}
      >
        <div className="mb-8 flex items-start justify-between gap-4">
          <span
            className="text-[10px] tracking-[0.1em]"
            style={{
              fontFamily: "var(--font-work-mono), monospace",
              color: "var(--work-muted)",
            }}
          >
            {index}
          </span>
          <div className="flex flex-wrap justify-end gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border px-2.5 py-1 text-[9px] uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-work-mono), monospace",
                  ...(tag === "Classified"
                    ? {
                        borderColor: "rgba(255, 80, 80, 0.3)",
                        color: "rgba(255, 120, 120, 0.8)",
                        background: "rgba(255, 80, 80, 0.05)",
                      }
                    : tag === "Featured"
                      ? {
                          borderColor: "rgba(200, 169, 110, 0.4)",
                          color: "var(--work-gold)",
                          background: "var(--work-tag-bg)",
                        }
                      : {
                          borderColor: "var(--work-border)",
                          color: "var(--work-muted)",
                          background: "var(--work-tag-bg)",
                        }),
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p
          className="mb-3 text-[10px] uppercase tracking-[0.14em]"
          style={{
            fontFamily: "var(--font-work-mono), monospace",
            color: "var(--work-gold)",
          }}
        >
          {industry}
        </p>
        <h2
          className={`mb-4 font-serif leading-[1.1] ${featured ? "text-[clamp(28px,3.5vw,48px)]" : "text-[clamp(22px,2.5vw,32px)]"}`}
          style={{
            fontFamily: "var(--font-work-serif), serif",
            color: "var(--work-white)",
          }}
        >
          {title}
        </h2>

        {classified && (
          <div
            className="mb-6 flex items-center gap-2.5 border px-3.5 py-2.5"
            style={{
              background: "rgba(255, 80, 80, 0.06)",
              borderColor: "rgba(255, 80, 80, 0.15)",
            }}
          >
            <div
              className="h-1.5 w-1.5 rounded-full bg-[rgba(255,100,100,0.8)] animate-pulse"
              style={{ animation: "work-pulse 2s ease infinite" }}
            />
            <span
              className="text-[10px] uppercase tracking-[0.12em]"
              style={{
                fontFamily: "var(--font-work-mono), monospace",
                color: "rgba(255, 120, 120, 0.8)",
              }}
            >
              {id === "07" ? "NDA Required" : "Details available under NDA only"}
            </span>
          </div>
        )}

        <p
          className="mb-8 flex-1 text-[13px] leading-[1.7]"
          style={{ color: "var(--work-muted)" }}
        >
          {description}
        </p>

        {techStack && techStack.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="border px-2.5 py-1 text-[10px]"
                style={{
                  fontFamily: "var(--font-work-mono), monospace",
                  color: "var(--work-muted)",
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {metrics && metrics.length > 0 && (
          <div
            className="flex flex-wrap gap-6 border-t pt-6"
            style={{ borderColor: "var(--work-border)" }}
          >
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-0.5">
                <span
                  className="text-[22px] leading-none"
                  style={{
                    fontFamily: "var(--font-work-serif), serif",
                    color: "var(--work-white)",
                  }}
                >
                  {m.value}
                </span>
                <span
                  className="text-[9px] uppercase tracking-[0.1em]"
                  style={{
                    fontFamily: "var(--font-work-mono), monospace",
                    color: "var(--work-muted)",
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {ndaCtaText && (
          <Link
            href="/contact"
            className="mt-auto inline-flex items-center gap-2.5 self-start border px-5 py-3 text-[11px] tracking-wider transition-colors hover:bg-[rgba(200,169,110,0.08)]"
            style={{
              fontFamily: "var(--font-work-mono), monospace",
              color: "var(--work-gold)",
              borderColor: "rgba(200, 169, 110, 0.3)",
            }}
          >
            {ndaCtaText}
            <span aria-hidden>→</span>
          </Link>
        )}
      </div>
    </div>
  );
});
