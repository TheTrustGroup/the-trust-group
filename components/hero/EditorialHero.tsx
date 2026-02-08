import Link from "next/link";

/**
 * Hero with intentional line breaks and vertical rhythm.
 * Max-width constrained; no fluid scaling that causes accidental wraps.
 */
export function EditorialHero() {
  return (
    <section
      className="w-full"
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-[72rem] px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:px-12 lg:pt-24 lg:pb-32">
        <div className="max-w-prose">
          <h1 className="font-serif text-display-3 font-medium text-foreground sm:text-display-2 lg:text-display-1">
            Mission-critical systems.
            <br />
            Built for the long term.
          </h1>
          <p className="mt-8 font-sans text-body-lg text-muted-foreground sm:mt-10">
            We design and build the secure infrastructure and software that
            organizations rely on when it matters most.
          </p>
          <p className="mt-10 sm:mt-12">
            <Link
              href="/services"
              className="font-sans text-body-sm text-foreground no-underline outline-none hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore our capabilities →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
