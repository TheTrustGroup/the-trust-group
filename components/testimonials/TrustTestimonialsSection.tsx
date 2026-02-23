/**
 * Testimonials section — TTG design system: warm cream bg, navy text, Cormorant + Jost.
 */

const FEATURED = {
  quote:
    '"What separated The Trust Group from every other vendor we evaluated was the depth of their pre-development process. By the time a line of production code was written, we felt complete confidence in the architecture. The system launched on time, under budget, and has operated at 99.9% uptime for eighteen months. That\'s not a coincidence — it\'s the result of how they work."',
  name: "Chief Technology Officer",
  role: "VP Engineering",
  company: "Fortune 500 Enterprise — Workflow Automation Platform",
  metrics: [
    { value: "99.9", suffix: "%", label: "Uptime — 18 months post-launch" },
    { value: "On Time", suffix: ".", label: "Delivered to original schedule" },
    { value: "500", suffix: "+", label: "Enterprise clients onboarded" },
  ],
};

const CARDS = [
  {
    quote:
      '"We approached The Trust Group after two failed vendor relationships. The difference was immediate. They asked questions no one had asked before — about our infrastructure constraints, our failure tolerance, our five-year roadmap. The platform they delivered has become the operational backbone of our entire network."',
    name: "Director of Digital Operations",
    role: "Operations Leadership",
    company: "Healthcare Network — 50+ Facilities",
  },
  {
    quote:
      '"I\'ve worked with engineering teams across three continents. The Trust Group operates at a level of technical discipline that is genuinely rare. The AI analytics platform they built for us processes millions of events daily without missing a beat. The 35% lift in conversion rates was a consequence of the quality of the system — not a lucky outcome."',
    name: "Head of Growth & Analytics",
    role: "Commercial Leadership",
    company: "E-Commerce Leader — AI Analytics Platform",
  },
  {
    quote:
      '"Timeline was our primary concern — we\'d been told by other firms that our product would take 8–10 months. The Trust Group delivered in under 7 weeks. Not a prototype. The production system. What they do before development even starts changes everything."',
    name: "Co-Founder & CEO",
    role: "Founding Team",
    company: "Transportation Startup — West Africa",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className="text-xs"
          style={{ color: "var(--ttg-navy)" }}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function TrustTestimonialsSection() {
  return (
    <section
      className="ttg-section border-t border-[var(--ttg-border)] py-20 md:py-[120px] px-6 lg:px-16 relative"
      style={{ background: "var(--ttg-bg)" }}
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="sr-only">
        Client Testimonials
      </h2>

      <div
        className="text-[10px] uppercase tracking-[0.18em] mb-16 flex items-center gap-4"
        style={{
          fontFamily: "var(--ttg-font-sans)",
          color: "var(--ttg-muted)",
        }}
        aria-hidden
      >
        <span>Client Testimonials</span>
        <span
          className="flex-1 h-px max-w-[120px]"
          style={{ background: "var(--ttg-border)" }}
        />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px border border-[var(--ttg-border)]"
        style={{ background: "var(--ttg-border)" }}
      >
        {/* Featured — full width, 2 columns */}
        <div
          className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-16 items-center p-8 md:p-16 border-b border-[var(--ttg-border)]"
          style={{ background: "var(--ttg-bg-white)" }}
        >
          <div>
            <StarRating />
            <span
              className="ttg-serif text-[80px] leading-[0.6] block mb-6"
              style={{ color: "rgba(26,31,46,0.08)" }}
              aria-hidden
            >
              &ldquo;
            </span>
            <p
              className="text-[20px] leading-[1.6] mb-0 italic"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                color: "var(--ttg-navy)",
                marginBottom: "36px",
              }}
            >
              {FEATURED.quote}
            </p>
            <div
              className="flex flex-col gap-1 pt-6 border-t border-[var(--ttg-border)]"
            >
              <span
                className="text-[13px] font-semibold tracking-[0.01em]"
                style={{ color: "var(--ttg-navy)" }}
              >
                {FEATURED.name}
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-muted)",
                }}
              >
                {FEATURED.role}
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-navy)",
                }}
              >
                {FEATURED.company}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-5">
            {FEATURED.metrics.map((m, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 py-5 border-b border-[var(--ttg-border)] last:border-b-0"
              >
                <span
                  className="ttg-serif text-4xl leading-none"
                  style={{ color: "var(--ttg-navy)" }}
                >
                  {m.value}
                  <em className="not-italic text-[var(--ttg-navy)]">
                    {m.suffix}
                  </em>
                </span>
                <span
                  className="text-[9px] uppercase tracking-[0.12em]"
                  style={{
                    fontFamily: "var(--ttg-font-sans)",
                    color: "var(--ttg-muted)",
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Standard cards */}
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="p-8 md:p-10 transition-colors duration-300 hover:bg-[var(--ttg-bg)]"
            style={{ background: "var(--ttg-bg-white)" }}
          >
            <StarRating />
            <span
              className="ttg-serif text-[80px] leading-[0.6] block mb-6"
              style={{ color: "rgba(26,31,46,0.08)" }}
              aria-hidden
            >
              &ldquo;
            </span>
            <p
              className="text-[15px] leading-[1.75] mb-9 italic"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                color: "var(--ttg-navy)",
              }}
            >
              {card.quote}
            </p>
            <div className="flex flex-col gap-1 pt-6 border-t border-[var(--ttg-border)]">
              <span
                className="text-[13px] font-semibold tracking-[0.01em]"
                style={{ color: "var(--ttg-navy)" }}
              >
                {card.name}
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-muted)",
                }}
              >
                {card.role}
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-navy)",
                }}
              >
                {card.company}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
