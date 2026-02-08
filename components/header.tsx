import Link from "next/link";
import { MotionLink } from "@/components/motion";

/**
 * Luxury editorial header — ralphlauren.com-inspired.
 * Server Component. No sticky, no motion. Private, confident, restrained.
 */
const navLinks = [
  { label: "Capabilities", href: "/services" },
  { label: "Work", href: "/#portfolio" },
  { label: "Company", href: "/about" },
] as const;

export function Header() {
  return (
    <header
      className="w-full border-b border-border/40"
      role="banner"
    >
      <div className="mx-auto flex w-full max-w-editorial items-center justify-between gap-12 px-6 py-10 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-serif text-headline-sm font-medium uppercase tracking-[0.2em] text-foreground no-underline outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0"
          aria-label="The Trust Group — Home"
        >
          The Trust Group
        </Link>
        <nav
          className="flex items-center gap-10"
          aria-label="Main"
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-sans text-body-sm text-muted-foreground no-underline outline-none hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0"
            >
              {label}
            </Link>
          ))}
        </nav>
        <MotionLink
          href="/contact"
          className="font-sans text-body-sm text-muted-foreground no-underline outline-none hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0"
        >
          Private Briefing →
        </MotionLink>
      </div>
    </header>
  );
}
