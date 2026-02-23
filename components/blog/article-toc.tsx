"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export interface TocItem {
  href: string;
  label: string;
}

interface ArticleTocProps {
  items: TocItem[];
  headingIds: string[];
}

/**
 * Sidebar TOC with active section highlighting via IntersectionObserver.
 */
export function ArticleToc({ items, headingIds }: ArticleTocProps) {
  const [activeId, setActiveId] = useState<string | null>(headingIds[0] ?? null);

  useEffect(() => {
    if (headingIds.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActiveId(e.target.id);
            break;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    headingIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headingIds]);

  return (
    <ul className="toc list-none flex flex-col gap-0.5 p-0" role="navigation" aria-label="In this article">
      {items.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`text-[11px] block py-1.5 pl-3 border-l-2 border-transparent tracking-[0.04em] no-underline transition-colors duration-200 leading-snug
              text-[var(--ttg-muted)] hover:text-[var(--ttg-navy)] hover:border-[var(--ttg-navy)]
              ${activeId === href.slice(1) ? "text-[var(--ttg-navy)] border-[var(--ttg-navy)]" : ""}`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
