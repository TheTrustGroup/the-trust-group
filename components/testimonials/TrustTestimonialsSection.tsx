/**
 * Testimonials section matching the provided HTML: label, featured (full-width 2-col), then 3 cards.
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
        <span key={i} className="text-[var(--trust-gold)] text-xs" aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

export function TrustTestimonialsSection() {
  return (
    <section
      className="trust-theme border-t border-[var(--trust-border)] py-20 md:py-[120px] px-6 lg:px-16 relative"
      style={{ background: "var(--trust-black)" }}
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="sr-only">
        Client Testimonials
      </h2>

      <div
        className="font-trust-mono text-[10px] text-[var(--trust-gold)] uppercase tracking-[0.18em] mb-16 flex items-center gap-4"
        aria-hidden
      >
        <span>Client Testimonials</span>
        <span
          className="flex-1 h-px max-w-[120px]"
          style={{ background: "var(--trust-border)" }}
        />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px border border-[var(--trust-border)]"
        style={{ background: "var(--trust-border)" }}
      >
        {/* Featured — full width, 2 columns */}
        <div
          className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-16 items-center p-8 md:p-16 border-b border-[var(--trust-border)]"
          style={{ background: "var(--trust-slate)" }}
        >
          <div>
            <StarRating />
            <span
              className="font-trust-serif text-[80px] leading-[0.6] block mb-6"
              style={{ color: "rgba(200,169,110,0.2)" }}
              aria-hidden
            >
              &ldquo;
            </span>
            <p
              className="font-trust-sans text-[20px] leading-[1.6] text-[var(--trust-cream)] mb-0 italic"
              style={{ marginBottom: "36px" }}
            >
              {FEATURED.quote}
            </p>
            <div
              className="flex flex-col gap-1 pt-6 border-t border-[var(--trust-border)]"
            >
              <span className="text-[13px] font-semibold text-[var(--trust-white)] tracking-[0.01em]">
                {FEATURED.name}
              </span>
              <span className="font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.08em] uppercase">
                {FEATURED.role}
              </span>
              <span className="font-trust-mono text-[10px] text-[var(--trust-gold)] tracking-[0.08em] uppercase">
                {FEATURED.company}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-5">
            {FEATURED.metrics.map((m, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 py-5 border-b border-[var(--trust-border)] last:border-b-0"
              >
                <span className="font-trust-serif text-4xl text-[var(--trust-white)] leading-none">
                  {m.value}
                  <em className="not-italic text-[var(--trust-gold)]">{m.suffix}</em>
                </span>
                <span className="font-trust-mono text-[9px] text-[var(--trust-muted)] tracking-[0.12em] uppercase">
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
            className="p-8 md:p-10 transition-colors duration-300 hover:bg-[var(--trust-slate)]"
            style={{ background: "var(--trust-black)" }}
          >
            <StarRating />
            <span
              className="font-trust-serif text-[80px] leading-[0.6] block mb-6"
              style={{ color: "rgba(200,169,110,0.2)" }}
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="font-trust-sans text-[15px] leading-[1.75] text-[var(--trust-cream)] mb-9 italic">
              {card.quote}
            </p>
            <div className="flex flex-col gap-1 pt-6 border-t border-[var(--trust-border)]">
              <span className="text-[13px] font-semibold text-[var(--trust-white)] tracking-[0.01em]">
                {card.name}
              </span>
              <span className="font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.08em] uppercase">
                {card.role}
              </span>
              <span className="font-trust-mono text-[10px] text-[var(--trust-gold)] tracking-[0.08em] uppercase">
                {card.company}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
