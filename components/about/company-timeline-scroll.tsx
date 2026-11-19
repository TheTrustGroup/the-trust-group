"use client";

import { useEffect, useRef } from "react";

const timelineEvents = [
  {
    year: "What we believe",
    event: "Reliability is not negotiable",
    detail:
      "The Trust Group was built in Accra to bring disciplined engineering to software that cannot afford to fail.",
  },
  {
    year: "How we work",
    event: "Architecture first, under NDA",
    detail:
      "Every engagement starts with design and a written plan. Client identity and detail stay confidential by default.",
  },
  {
    year: "What we build",
    event: "Software, AI and autonomous systems",
    detail:
      "Secure platforms, AI systems, and autonomous and edge systems for organizations in regulated and demanding environments.",
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
    <section className="px-6 lg:px-16 pb-[120px] max-w-[1100px] mx-auto ttg-section">
      <div className="flex items-center gap-5 mb-14">
        <span
          className="text-[10px] uppercase tracking-[0.18em]"
          style={{
            fontFamily: "var(--ttg-font-sans)",
            color: "var(--ttg-muted)",
          }}
        >
          How we got here
        </span>
        <div
          className="flex-1 h-px max-w-[80px]"
          style={{ background: "var(--ttg-border)" }}
        />
      </div>
      <div ref={containerRef} className="relative pl-10">
        <div
          className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--ttg-navy)] to-transparent"
          aria-hidden
        />
        {timelineEvents.map((item, i) => (
          <div
            key={i}
            className="timeline-item relative pb-16 pl-12 last:pb-0 opacity-0 -translate-x-5 transition-all duration-[0.6s] ease-out"
          >
            <div
              className="absolute -left-10 top-1.5 w-2 h-2 rounded-full border-2 shadow-[0_0_0_1px_var(--ttg-navy)]"
              style={{
                background: "var(--ttg-navy)",
                borderColor: "var(--ttg-bg)",
              }}
              aria-hidden
            />
            <p
              className="text-[10px] uppercase tracking-[0.14em] mb-2.5"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                color: "var(--ttg-muted)",
              }}
            >
              {item.year}
            </p>
            <h3
              className="ttg-serif text-[20px] mb-2.5 leading-snug"
              style={{ color: "var(--ttg-navy)" }}
            >
              {item.event}
            </h3>
            <p
              className="text-[14px] leading-[1.7] max-w-[560px]"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                color: "var(--ttg-muted)",
              }}
            >
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
