"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Capabilities", href: "/services" },
  { label: "Work", href: "/#portfolio" },
  { label: "Company", href: "/about" },
] as const;

export function HeaderMobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden flex items-center justify-center w-10 h-10 text-foreground hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[var(--z-modal-backdrop)] md:hidden"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <nav
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background border-l border-border/40 shadow-lg z-[var(--z-modal)] md:hidden flex flex-col pt-24 px-6 pb-8"
            aria-label="Main"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-sans text-body-lg text-foreground no-underline py-2 border-b border-border/40 last:border-0"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="font-sans text-body-lg text-foreground no-underline py-2"
                onClick={() => setOpen(false)}
              >
                Private Briefing →
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
