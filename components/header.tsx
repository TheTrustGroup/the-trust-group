import Link from "next/link";
import { MotionLink } from "@/components/motion";
import { HeaderMobileNav } from "@/components/header-mobile-nav";

/**
 * Luxury editorial header — single row, nav never wraps.
 * Desktop: logo + nav + CTA. Mobile: logo + menu (rest in drawer).
 */
const navLinks = [
  { label: "Capabilities", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Company", href: "/about" },
] as const;

export function Header() {
  return (
    <header
      className="w-full border-b border-border/40"
      role="banner"
    >
      <div className="mx-auto flex h-20 w-full max-w-editorial items-center justify-between gap-6 px-4 sm:px-6 lg:px-12">
        {/* Logo — horizontal only, never stacked */}
        <Link
          href="/"
          className="font-serif text-headline-sm font-medium uppercase tracking-[0.2em] text-foreground no-underline outline-none focus-visible:ring-0 focus-visible:underline focus-visible:underline-offset-2 whitespace-nowrap shrink-0"
          aria-label="The Trust Group — Home"
        >
          THE TRUST GROUP
        </Link>

        {/* Desktop nav — single row, never wrap */}
        <nav
          className="hidden md:flex items-center gap-8 xl:gap-10 shrink-0"
          aria-label="Main"
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-sans text-body-sm text-muted-foreground no-underline whitespace-nowrap hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <MotionLink
            href="/contact"
            className="font-sans text-body-sm text-muted-foreground no-underline whitespace-nowrap hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0"
          >
            Private Briefing →
          </MotionLink>
        </div>

        {/* Mobile: menu button (nav links in drawer) */}
        <HeaderMobileNav />
      </div>
    </header>
  );
}
