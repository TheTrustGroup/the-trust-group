"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lockBodyScroll, forceUnlockScroll } from "@/lib/utils/scroll-lock";

const NAV_ITEMS = [
  { label: "Capabilities", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Company", href: "/about" },
  { label: "Insights", href: "/blog" },
] as const;

const CTA_HREF = "/contact";
const CTA_LABEL = "Private Briefing →";

/**
 * TTG Nav — design-system nav matching live site (Cormorant + Jost, navy pill CTA).
 * Fixed, scroll shadow, mobile hamburger with scroll lock. Requires app/ttg-design.css.
 */
export function TTGNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const unlockRef = React.useRef<(() => void) | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    forceUnlockScroll();
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!mobileOpen) {
      unlockRef.current?.();
      unlockRef.current = null;
      return;
    }
    const raf = requestAnimationFrame(() => {
      unlockRef.current = lockBodyScroll();
    });
    return () => {
      cancelAnimationFrame(raf);
      unlockRef.current?.();
      unlockRef.current = null;
    };
  }, [mobileOpen]);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMobileOpen(false);
        forceUnlockScroll();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMobile = React.useCallback(() => {
    setMobileOpen(false);
    forceUnlockScroll();
  }, []);

  return (
    <header>
      <nav
        className={`ttg-nav ${scrolled ? "scrolled" : ""}`}
        id="ttgNav"
        aria-label="Main navigation"
      >
        <Link href="/" className="ttg-nav__logo">
          The Trust Group
        </Link>

        <ul className="ttg-nav__links" role="list">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? "active" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={CTA_HREF} className="ttg-nav__cta">
          {CTA_LABEL}
        </Link>

        <button
          type="button"
          className={`ttg-nav__hamburger ${mobileOpen ? "open" : ""}`}
          id="ttgHamburger"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`ttg-nav__mobile ${mobileOpen ? "open" : ""}`}
        id="ttgMobile"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {NAV_ITEMS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? "active" : undefined}
            onClick={closeMobile}
          >
            {label}
          </Link>
        ))}
        <Link href={CTA_HREF} className="mob-cta" onClick={closeMobile}>
          {CTA_LABEL}
        </Link>
      </div>

      <div className="ttg-nav-spacer" aria-hidden />
    </header>
  );
}
