import Link from "next/link";

/**
 * Trust Dynamics — the autonomous systems division of The Trust Group.
 * Capability-level only: problem spaces, no product names, no deployments.
 * Sea is intentionally not shown yet.
 */
const DOMAINS = [
  {
    index: "01",
    title: "Land",
    body: "Ground robots and edge vision for inspection, logistics and site monitoring, where distances are long and conditions are hard.",
  },
  {
    index: "02",
    title: "Air",
    body: "Drones for aerial sensing, mapping and infrastructure inspection, with decisions made on board rather than in the cloud.",
  },
] as const;

export function TrustDynamicsBand() {
  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:py-[120px] lg:px-16"
      style={{ background: "var(--ttg-navy)" }}
      aria-labelledby="trust-dynamics-heading"
    >
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div>
          <p
            className="mb-10 text-[10px] uppercase tracking-[0.18em]"
            style={{ fontFamily: "var(--ttg-font-sans)", color: "#c8a96e" }}
          >
            A division of The Trust Group
          </p>
          <h2 id="trust-dynamics-heading" className="m-0">
            {/* Phones: compact master lockup (tagline aligned under the wordmark). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/trust-dynamics-compact-dark.png"
              alt="Trust Dynamics: Autonomy, Engineered"
              width={1598}
              height={504}
              className="block h-auto w-[300px] max-w-full sm:hidden"
            />
            {/* Tablet and desktop: horizontal lockup. Tagline as live text so it
                matches the master lockup and stays crisp at every size. */}
            <span className="relative hidden sm:block sm:w-[380px] lg:w-[440px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/trust-dynamics-wordmark-dark.svg"
                alt="Trust Dynamics"
                width={1400}
                height={309}
                className="block h-auto w-full"
              />
              <span
                className="absolute m-0 whitespace-nowrap text-[13px] uppercase leading-none tracking-[0.11em] lg:text-[15px]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "#d4b67c",
                  left: "26.43%",
                  top: "62%",
                }}
              >
                Autonomy, Engineered
              </span>
            </span>
          </h2>
          <p
            className="mt-10 max-w-[440px] text-[15px] leading-[1.8]"
            style={{ fontFamily: "var(--ttg-font-sans)", color: "rgba(255,255,255,0.72)" }}
          >
            Our autonomous systems division. Robotics, drones and edge AI for work
            that is too remote, too large or too risky to do by hand, designed
            for the conditions they will actually face.
          </p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">
            <Link
              href="/contact"
              className="inline-block text-[12px] uppercase tracking-[0.1em] no-underline"
              style={{ fontFamily: "var(--ttg-font-sans)", color: "#c8a96e" }}
            >
              Briefings by request <span aria-hidden>→</span>
            </Link>
            <Link
              href="/blog/physical-ai-explained"
              className="inline-block text-[12px] uppercase tracking-[0.1em] no-underline"
              style={{ fontFamily: "var(--ttg-font-sans)", color: "rgba(255,255,255,0.72)" }}
            >
              Read: Physical AI, Explained <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div
          className="grid grid-cols-1 self-end sm:grid-cols-2"
          style={{ borderTop: "1px solid rgba(200,169,110,0.28)" }}
        >
          {DOMAINS.map((d, i) => (
            <div
              key={d.title}
              className={`py-10 sm:pr-10 ${i > 0 ? "sm:border-l sm:pl-10" : ""} ${
                i > 0 ? "border-t sm:border-t-0" : ""
              }`}
              style={{ borderColor: "rgba(200,169,110,0.28)" }}
            >
              <span
                className="block text-[11px] tracking-[0.18em]"
                style={{ fontFamily: "var(--ttg-font-sans)", color: "rgba(200,169,110,0.8)" }}
                aria-hidden
              >
                {d.index}
              </span>
              <h3
                className="ttg-serif mt-6 text-[34px] leading-[1.05]"
                style={{ color: "#ffffff" }}
              >
                {d.title}
              </h3>
              <p
                className="mt-5 text-[14px] leading-[1.75]"
                style={{ fontFamily: "var(--ttg-font-sans)", color: "rgba(255,255,255,0.66)" }}
              >
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
