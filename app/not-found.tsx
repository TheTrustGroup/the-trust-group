import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="ttg-section min-h-[70vh] flex flex-col justify-center px-6 lg:px-16 py-32"
      style={{ background: "var(--ttg-bg)" }}
      aria-labelledby="not-found-heading"
    >
      <p
        className="text-[10px] uppercase tracking-[0.18em] mb-6"
        style={{ fontFamily: "var(--ttg-font-sans)", color: "var(--ttg-muted)" }}
      >
        Error 404
      </p>
      <h1
        id="not-found-heading"
        className="ttg-serif text-[clamp(40px,5vw,72px)] leading-[1] tracking-[-0.02em] mb-6"
        style={{ color: "var(--ttg-navy)" }}
      >
        This page does not exist.
      </h1>
      <p
        className="text-[15px] leading-[1.75] max-w-[520px] mb-12"
        style={{ fontFamily: "var(--ttg-font-sans)", color: "var(--ttg-muted)" }}
      >
        The address may have changed, or the page has been retired. Everything
        else is a click away.
      </p>
      <div className="flex flex-wrap items-center gap-8">
        <Link href="/" className="ttg-btn-pill">
          Return home
        </Link>
        <Link
          href="/contact"
          className="text-[13px] uppercase tracking-[0.1em]"
          style={{ fontFamily: "var(--ttg-font-sans)", color: "var(--ttg-navy)" }}
        >
          Request a Private Briefing →
        </Link>
      </div>
    </section>
  );
}
