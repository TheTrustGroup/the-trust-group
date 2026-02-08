import Link from "next/link";

const currentYear = new Date().getFullYear();

/**
 * Editorial footer — ralphlauren.com-inspired restraint.
 * Server-rendered. No clutter, no social icons, no CTA.
 */
export function EditorialFooter() {
  return (
    <footer
      className="w-full border-t border-border/40"
      role="contentinfo"
    >
      <div className="mx-auto max-w-editorial px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <div className="max-w-3xl space-y-8">
          <div>
            <Link
              href="/"
              className="font-serif text-headline-sm font-medium uppercase tracking-[0.2em] text-foreground no-underline outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0 whitespace-nowrap"
              aria-label="The Trust Group — Home"
            >
              THE TRUST GROUP
            </Link>
            <p className="mt-3 font-sans text-body-sm text-muted-foreground">
              Advanced Engineering · Secure Systems
            </p>
          </div>
          <p className="font-sans text-body-xs text-muted-foreground">
            © {currentYear} Trust Group Solutions
          </p>
          <p className="font-sans text-body-xs text-muted-foreground">
            Private · Confidential · Trusted
          </p>
        </div>
      </div>
    </footer>
  );
}
