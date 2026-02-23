import Link from "next/link";

const TICKER_ITEMS = [
  { num: "40", suffix: "+", desc: "Systems\nDeployed" },
  { num: "99.9", suffix: "%", desc: "Avg Uptime\nSLA Delivered" },
  { num: "35", suffix: "%", desc: "Avg Conversion\nLift" },
  { num: "6", suffix: "wk", desc: "Avg Small Project\nDelivery" },
  { num: "500", suffix: "+", desc: "Enterprise Clients\nServed" },
  { num: "12", suffix: "", desc: "Countries\nDeployed In" },
  { num: "50", suffix: "%", desc: "Avg Churn\nReduction" },
] as const;

/**
 * Mission-critical hero: light TTG design system — warm cream bg, navy text,
 * Cormorant Garamond serif, pill CTA. Matches live site / footer.
 */
export function MissionCriticalHero() {
  return (
    <section
      className="ttg-section relative min-h-screen grid grid-rows-[1fr_auto] overflow-hidden"
      style={{ background: "var(--ttg-bg)" }}
      aria-label="Introduction"
    >
      {/* Background — subtle grid and gradient (navy-tinted, not gold) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `
              linear-gradient(rgba(26,31,46,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26,31,46,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "trust-gridShift 20s linear infinite",
          }}
        />
        <div
          className="absolute left-0 right-0 h-px z-[2]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(26,31,46,0.12), transparent)",
            animation: "trust-scanDown 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-px top-0 bottom-0"
          style={{
            right: "33.33%",
            background:
              "linear-gradient(to bottom, transparent, rgba(26,31,46,0.06) 30%, rgba(26,31,46,0.06) 70%, transparent)",
            animation: "trust-lineFlicker 7s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-px top-0 bottom-0"
          style={{
            right: "66.66%",
            background:
              "linear-gradient(to bottom, transparent, rgba(26,31,46,0.06) 30%, rgba(26,31,46,0.06) 70%, transparent)",
            animation: "trust-lineFlicker 7s ease-in-out 2s infinite",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none top-1/2 right-[5%] -translate-y-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(26,31,46,0.03) 0%, transparent 70%)",
            animation: "trust-orbPulse 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 30% 50%, transparent 20%, var(--ttg-bg) 80%)",
          }}
        />
      </div>

      {/* Corner brackets — navy */}
      <div
        className="absolute w-6 h-6 border-t border-l border-[var(--ttg-navy)] left-6 lg:left-16"
        style={{ top: "80px" }}
        aria-hidden
      />
      <div
        className="absolute w-6 h-6 border-t border-r border-[var(--ttg-navy)] right-6 lg:right-16"
        style={{ top: "80px" }}
        aria-hidden
      />
      <div
        className="absolute w-6 h-6 border-b border-l border-[var(--ttg-navy)] left-6 lg:left-16"
        style={{ bottom: "60px" }}
        aria-hidden
      />
      <div
        className="absolute w-6 h-6 border-b border-r border-[var(--ttg-navy)] right-6 lg:right-16"
        style={{ bottom: "60px" }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center max-w-[900px] pt-[130px] px-6 lg:pt-40 lg:px-16">
        <div
          className="flex items-center gap-3 mb-10 opacity-0"
          style={{ animation: "trust-fadeUp 1s ease 0.3s forwards" }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full bg-[#4caf6e]"
            style={{
              boxShadow: "0 0 8px rgba(76,175,110,0.6)",
              animation: "trust-statusPulse 3s ease-in-out infinite",
            }}
          />
          <span
            className="text-[10px] uppercase tracking-[0.14em] opacity-0"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--ttg-muted)",
              animation: "trust-fadeUp 1s ease 0.3s forwards",
            }}
          >
            Currently accepting{" "}
            <span style={{ color: "rgba(76,175,110,0.9)" }}>select engagements</span> ·
            Response within 24 hours
          </span>
        </div>

        <p
          className="text-[10px] uppercase tracking-[0.18em] mb-6 opacity-0"
          style={{
            fontFamily: "var(--ttg-font-sans)",
            color: "var(--ttg-muted)",
            animation: "trust-fadeUp 1s ease 0.5s forwards",
          }}
        >
          The Trust Group — Est. 2021
        </p>

        <h1
          className="ttg-serif text-[clamp(50px,6.5vw,88px)] leading-[0.96] tracking-[-0.025em] mb-9 opacity-0"
          style={{
            animation: "trust-fadeUp 1s ease 0.7s forwards",
            color: "var(--ttg-navy)",
          }}
        >
          <span className="block overflow-hidden">We build</span>
          <span className="block overflow-hidden pl-[clamp(60px,8vw,140px)]">
            mission-critical
          </span>
          <span className="block overflow-hidden">
            <em className="italic text-[var(--ttg-navy)]">systems.</em>
          </span>
        </h1>

        <p
          className="max-w-[520px] text-[15px] leading-[1.75] mb-12 opacity-0"
          style={{
            fontFamily: "var(--ttg-font-sans)",
            color: "var(--ttg-muted)",
            animation: "trust-fadeUp 1s ease 0.9s forwards",
          }}
        >
          Engineered for reliability, security, and long-term scale. Trusted by
          enterprise organizations, defense clients, and technology companies
          operating at the highest level.
        </p>

        <div
          className="flex items-center gap-8 opacity-0"
          style={{ animation: "trust-fadeUp 1s ease 1.1s forwards" }}
        >
          <Link
            href="/contact"
            className="ttg-btn-pill"
          >
            Request a Private Briefing
          </Link>
          <Link
            href="/work"
            className="ttg-hero-secondary-link text-[13px] uppercase tracking-[0.1em] no-underline transition-colors flex items-center gap-2"
            style={{
              fontFamily: "var(--ttg-font-sans)",
            }}
          >
            View Our Work
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* Ticker — cream/white strip, navy text */}
      <div
        className="relative z-10 border-t border-[var(--ttg-border)] py-6 px-6 lg:py-8 lg:px-16 flex flex-col md:flex-row md:flex-wrap md:items-center gap-6 md:gap-0 overflow-hidden opacity-0"
        style={{
          animation: "trust-fadeUp 1s ease 1.4s forwards",
          background: "var(--ttg-bg-white)",
        }}
      >
        <span
          className="text-[9px] uppercase tracking-[0.14em] whitespace-nowrap md:mr-10 md:pr-10 md:border-r border-[var(--ttg-border)]"
          style={{
            fontFamily: "var(--ttg-font-sans)",
            color: "var(--ttg-muted)",
          }}
        >
          Proven at Scale
        </span>
        <div className="trust-ticker-wrap flex-1 min-w-0 overflow-hidden">
          <div
            className="flex gap-0 whitespace-nowrap"
            style={{ animation: "trust-tickerRoll 30s linear infinite" }}
          >
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 py-0 px-10 border-r border-[var(--ttg-border)] flex-shrink-0"
              >
                <span
                  className="ttg-serif text-xl leading-none"
                  style={{ color: "var(--ttg-navy)" }}
                >
                  {item.num}
                  <em className="not-italic text-[var(--ttg-navy)]">
                    {item.suffix}
                  </em>
                </span>
                <span
                  className="text-[9px] tracking-[0.1em] uppercase leading-snug"
                  style={{
                    fontFamily: "var(--ttg-font-sans)",
                    color: "var(--ttg-muted)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
