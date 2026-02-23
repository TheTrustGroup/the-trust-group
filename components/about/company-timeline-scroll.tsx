"use client";

import { useEffect, useRef } from "react";

const timelineEvents = [
  {
    year: "2021 — Founded",
    event: "The Trust Group established in Accra, Ghana",
    detail:
      "Founded with a mandate to bring defense-grade engineering discipline to enterprise software. First engagements in custom software and AI systems.",
  },
  {
    year: "2022",
    event: "First enterprise platform at scale",
    detail:
      "Delivered a multi-tenant SaaS platform that onboarded 500+ enterprise clients in its first year of operation — with a 99.9% uptime SLA maintained continuously since launch.",
  },
  {
    year: "2023",
    event: "Defense & intelligence practice established",
    detail:
      "Expanded into defense technology, building mission-critical systems for clients operating in high-security environments. NDA-protected engagements available for briefing.",
  },
  {
    year: "2024",
    event: "Healthcare and AI expansion",
    detail:
      "Delivered a comprehensive healthcare management platform across 50+ facilities, and launched an AI analytics platform producing a 35% average conversion lift for e-commerce clients.",
  },
  {
    year: "2025 — 2026",
    event: "40+ systems deployed. 12 countries. Growing.",
    detail:
      "Expanded operations across West Africa and internationally. Currently accepting select engagements in defense technology, enterprise AI, and mission-critical software infrastructure.",
  },
];

export function CompanyTimelineScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = container.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            setTimeout(() => el.classList.add("visible"), i * 120);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 lg:px-16 pb-[120px] max-w-[1100px] mx-auto">
      <div className="flex items-center gap-5 mb-14">
        <span className="font-trust-mono text-[10px] text-[var(--trust-gold)] uppercase tracking-[0.18em]">
          Our Journey
        </span>
        <div className="flex-1 h-px bg-[var(--trust-border)] max-w-[80px]" />
      </div>
      <div ref={containerRef} className="relative pl-10">
        <div
          className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--trust-gold)] to-transparent"
          aria-hidden
        />
        {timelineEvents.map((item, i) => (
          <div
            key={i}
            className="timeline-item relative pb-16 pl-12 last:pb-0 opacity-0 -translate-x-5 transition-all duration-[0.6s] ease-out"
          >
            <div
              className="absolute -left-10 top-1.5 w-2 h-2 rounded-full bg-[var(--trust-gold)] border-2 border-[var(--trust-black)] shadow-[0_0_0_1px_var(--trust-gold)]"
              aria-hidden
            />
            <p className="font-trust-mono text-[10px] text-[var(--trust-gold)] uppercase tracking-[0.14em] mb-2.5">
              {item.year}
            </p>
            <h3 className="font-trust-serif text-[20px] text-[var(--trust-white)] mb-2.5 leading-snug">
              {item.event}
            </h3>
            <p className="text-[14px] text-[var(--trust-muted)] leading-[1.7] max-w-[560px]">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
