"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MotionLink } from "@/components/motion";
import { HeaderMobileNav } from "@/components/header-mobile-nav";

const navLinks = [
  { label: "Capabilities", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Company", href: "/about" },
  { label: "Insights", href: "/blog" },
] as const;

/**
 * Header: trust variant on home (fixed, scrolled state, pill CTA); default editorial elsewhere.
 */
const TRUST_PATHS = [
  "/",
  "/work",
  "/about",
  "/contact",
  "/briefing",
  "/blog/why-enterprise-software-projects-take-twice-as-long",
  "/blog/defense-grade-engineering",
] as const;

/** Paths where the nav CTA pill is hidden (page is the CTA). */
const HIDE_NAV_CTA_PATHS = ["/contact", "/briefing"] as const;

export function Header() {
  const pathname = usePathname();
  const isTrust = TRUST_PATHS.includes(pathname as (typeof TRUST_PATHS)[number]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isTrust) return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isTrust]);

  if (isTrust) {
    return (
      <nav
        role="navigation"
        aria-label="Main"
        className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-8 lg:px-16 py-7 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-[var(--ttg-bg-white)] border-b border-[var(--ttg-border)] backdrop-blur-[24px] py-5 shadow-[0_2px_24px_rgba(26,31,46,0.07)]"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="ttg-serif text-[17px] text-[var(--ttg-navy)] no-underline tracking-[0.01em] uppercase"
          aria-label="The Trust Group — Home"
        >
          THE TRUST GROUP
        </Link>
        <ul className="hidden md:flex gap-9 list-none">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-[12px] uppercase tracking-[0.1em] no-underline transition-colors ${
                  pathname === href ? "text-[var(--ttg-navy)]" : "text-[var(--ttg-muted)]"
                } hover:text-[var(--ttg-navy)]`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {!HIDE_NAV_CTA_PATHS.includes(pathname as (typeof HIDE_NAV_CTA_PATHS)[number]) && (
          <Link
            href="/contact"
            className="ttg-btn-pill hidden md:inline-flex"
          >
            Private Briefing →
          </Link>
        )}
        <HeaderMobileNav />
      </nav>
    );
  }

  return (
    <header className="w-full border-b border-border/40" role="banner">
      <div className="mx-auto flex h-20 w-full max-w-editorial items-center justify-between gap-6 px-4 sm:px-6 lg:px-12">
        <Link
          href="/"
          className="font-serif text-headline-sm font-medium uppercase tracking-[0.2em] text-foreground no-underline outline-none focus-visible:ring-0 focus-visible:underline focus-visible:underline-offset-2 whitespace-nowrap shrink-0"
          aria-label="The Trust Group — Home"
        >
          THE TRUST GROUP
        </Link>
        <nav
          className="hidden md:flex items-center gap-8 xl:gap-10 shrink-0"
          aria-label="Main"
        >
          {navLinks.slice(0, 3).map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-sans text-body-sm text-muted-foreground no-underline whitespace-nowrap hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block shrink-0">
          <MotionLink
            href="/contact"
            className="font-sans text-body-sm text-muted-foreground no-underline whitespace-nowrap hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0"
          >
            Private Briefing →
          </MotionLink>
        </div>
        <HeaderMobileNav />
      </div>
    </header>
  );
}
