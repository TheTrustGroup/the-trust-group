import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbs } from "@/lib/seo";
import { CompanyTimelineScroll } from "@/components/about/company-timeline-scroll";

const principles = [
  {
    number: "01",
    title: "Architecture Before Code",
    body: "Every system we build starts with a full design phase before a line of production code is written. The system design document is the contract. It eliminates surprise and eliminates rework.",
  },
  {
    number: "02",
    title: "Dedicated Focus",
    body: "Our engineers are not split across multiple clients. Each engagement receives a dedicated team with full attention. Focus compounds into speed and quality in ways that distributed teams cannot replicate.",
  },
  {
    number: "03",
    title: "Security by Design",
    body: "Security architecture is not a post-launch audit. It's a design-phase constraint. Every system we build accounts for its threat model before the first sprint begins — including systems that will never face a public network.",
  },
  {
    number: "04",
    title: "Long-Term Thinking",
    body: "We design for the system's fifth year, not its first release. Maintainability, observability, and graceful degradation are engineering requirements — not afterthoughts addressed when problems arise.",
  },
  {
    number: "05",
    title: "Radical Transparency",
    body: "Clients receive milestone-by-milestone timelines before development begins. We surface problems the moment we identify them — not after they've grown into expensive conversations.",
  },
  {
    number: "06",
    title: "Selective Engagement",
    body: "We work with a limited number of organizations at any given time. This is not a limitation — it's the mechanism by which we deliver the quality we promise. We don't stretch. We commit.",
  },
];

const capabilities = [
  { name: "Defense Technology & Intelligence Systems", tag: "Strategic" },
  { name: "AI Solutions & Implementation", tag: "Applied AI" },
  { name: "Custom Enterprise Software", tag: "Core" },
  { name: "Mobile Application Development", tag: "Platforms" },
  { name: "Cloud Infrastructure & DevOps", tag: "Infrastructure" },
  { name: "Legacy System Modernization", tag: "Transformation" },
  { name: "Consulting & Technology Strategy", tag: "Advisory" },
];

const leadership = [
  {
    initials: "TT",
    name: "Founder & CEO",
    role: "Executive Leadership",
    bio: "Founded The Trust Group with a mandate to bring defense-grade engineering standards to enterprise software. Leads strategic direction, key client relationships, and the firm's defense and intelligence practice.",
  },
  {
    initials: "CTO",
    name: "Chief Technology Officer",
    role: "Engineering Leadership",
    bio: "Architect of the firm's engineering methodology. Oversees system design across all engagements, sets technical standards, and leads the architecture review process that drives our delivery performance.",
  },
  {
    initials: "VP",
    name: "VP of Engineering",
    role: "Delivery Leadership",
    bio: "Leads engineering delivery across active engagements. Responsible for team allocation, milestone execution, and the post-launch support infrastructure that keeps client systems at 99.9% uptime.",
  },
];

export const metadata: Metadata = generateSEOMetadata({
  title: "Company",
  description:
    "Built on a single conviction: reliability is not negotiable. Learn about our methodology, principles, and the team behind The Trust Group.",
  keywords: [
    "about",
    "company",
    "leadership",
    "principles",
    "mission",
    "The Trust Group",
  ],
  url: "/about",
});

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function AboutPage() {
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: "/" },
    { name: "Company", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div
        className="ttg-section min-h-screen"
        style={{ background: "var(--ttg-bg)" }}
      >
        {/* Radial gradient overlay — navy tint */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 80% 40%, rgba(26,31,46,0.03) 0%, transparent 60%)",
          }}
          aria-hidden
        />

        {/* Manifesto */}
        <section className="relative pt-[180px] pb-[120px] px-6 lg:px-16 max-w-[1100px] mx-auto">
          <p
            className="text-[10px] uppercase tracking-[0.18em] mb-10 flex items-center gap-4 opacity-0"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--ttg-muted)",
              animation: "trust-fadeUp 1s ease 0.3s forwards",
            }}
          >
            <span
              className="w-8 h-px block"
              style={{ background: "var(--ttg-navy)" }}
            />
            The Trust Group — Company
          </p>
          <h1
            className="ttg-serif text-[clamp(44px,6vw,80px)] leading-none tracking-[-0.025em] mb-16 max-w-[820px] opacity-0"
            style={{
              color: "var(--ttg-navy)",
              animation: "trust-fadeUp 1s ease 0.5s forwards",
            }}
          >
            We were founded on a single
            <br />
            conviction:{" "}
            <em className="italic text-[var(--ttg-navy)]">
              reliability is
              <br />
              not negotiable.
            </em>
          </h1>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[var(--ttg-border)] pt-16 opacity-0"
            style={{ animation: "trust-fadeUp 1s ease 0.7s forwards" }}
          >
            <div className="space-y-5">
              <p
                className="text-[16px] leading-[1.85]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-muted)",
                }}
              >
                The Trust Group was built to fill a gap that most technology
                firms refuse to acknowledge.{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "var(--ttg-navy)" }}
                >
                  Enterprise organizations, defense clients, and high-growth
                  companies don&apos;t just need software — they need systems they
                  can depend on when the stakes are highest.
                </strong>
              </p>
              <p
                className="text-[16px] leading-[1.85]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-muted)",
                }}
              >
                The market is full of firms that can write code. Very few have
                the discipline, the methodology, and the depth of experience to
                build systems that operate reliably at scale — especially in
                environments where failure carries real consequences.
              </p>
              <p
                className="text-[16px] leading-[1.85]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-muted)",
                }}
              >
                We built The Trust Group to be one of those firms.
              </p>
            </div>
            <div className="space-y-5">
              <p
                className="text-[16px] leading-[1.85]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-muted)",
                }}
              >
                Our approach is borrowed, deliberately, from the engineering
                disciplines that have always demanded the highest standards:
                aerospace, defense, critical infrastructure. In those fields, an
                architecture-first methodology, exhaustive pre-development
                planning, and dedicated specialist teams aren&apos;t best
                practices — they&apos;re baseline.
              </p>
              <p
                className="text-[16px] leading-[1.85]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-muted)",
                }}
              >
                <strong
                  className="font-semibold"
                  style={{ color: "var(--ttg-navy)" }}
                >
                  We&apos;ve brought that baseline to enterprise and commercial
                  software.
                </strong>{" "}
                The result is a firm that consistently delivers faster than the
                industry standard, with a rework rate under 8%, and systems that
                hold their SLAs long after launch day.
              </p>
              <p
                className="text-[16px] leading-[1.85]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-muted)",
                }}
              >
                That&apos;s what we mean by reliability. And it&apos;s why
                organizations trust us with their most critical systems.
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="px-6 lg:px-16 pb-[120px] max-w-[1100px] mx-auto">
          <div className="flex items-center gap-5 mb-14">
            <span
              className="text-[10px] uppercase tracking-[0.18em]"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                color: "var(--ttg-muted)",
              }}
            >
              How We Think
            </span>
            <div
              className="flex-1 h-px max-w-[80px]"
              style={{ background: "var(--ttg-border)" }}
            />
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-[var(--ttg-border)]"
            style={{ background: "var(--ttg-border)" }}
          >
            {principles.map((p) => (
              <div
                key={p.number}
                className="bg-[var(--ttg-bg-white)] p-8 md:p-9 lg:p-12 transition-colors duration-300 hover:bg-[var(--ttg-bg)] relative overflow-hidden group"
              >
                <span
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--ttg-navy)] to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[0.4s] ease-out"
                  aria-hidden
                />
                <span
                  className="text-[11px] uppercase tracking-[0.12em] block mb-5"
                  style={{
                    fontFamily: "var(--ttg-font-sans)",
                    color: "var(--ttg-muted)",
                  }}
                >
                  {p.number}
                </span>
                <h3
                  className="ttg-serif text-[22px] mb-4 leading-tight"
                  style={{ color: "var(--ttg-navy)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.75]"
                  style={{
                    fontFamily: "var(--ttg-font-sans)",
                    color: "var(--ttg-muted)",
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <CompanyTimelineScroll />

        {/* Capabilities overview */}
        <section
          className="border-t border-b border-[var(--ttg-border)] py-[100px] px-6 lg:px-16"
          style={{ background: "var(--ttg-bg-white)" }}
        >
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20 items-start">
            <div>
              <h2
                className="ttg-serif text-[40px] leading-[1.1] tracking-[-0.02em] mb-4"
                style={{ color: "var(--ttg-navy)" }}
              >
                What we
                <br />
                <em className="italic text-[var(--ttg-navy)]">build.</em>
              </h2>
              <p
                className="text-[14px] leading-[1.7]"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-muted)",
                }}
              >
                Seven core capability areas. Each staffed with specialists. All
                built on the same architectural discipline.
              </p>
            </div>
            <div className="flex flex-col gap-0">
              {capabilities.map((cap) => (
                <div
                  key={cap.name}
                  className="flex items-center justify-between gap-4 py-5 border-b border-[var(--ttg-border)] transition-colors duration-200 group"
                >
                  <span
                    className="text-[15px] flex-1 min-w-0 transition-colors group-hover:text-[var(--ttg-navy)]"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                    }}
                  >
                    {cap.name}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.08em] shrink-0"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                    }}
                  >
                    {cap.tag}
                  </span>
                  <span
                    className="text-[14px] shrink-0 transition-all duration-200 group-hover:text-[var(--ttg-navy)] group-hover:translate-x-1"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                    }}
                  >
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-[120px] px-6 lg:px-16 max-w-[1100px] mx-auto">
          <div className="flex items-center gap-5 mb-14">
            <span
              className="text-[10px] uppercase tracking-[0.18em]"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                color: "var(--ttg-muted)",
              }}
            >
              Leadership
            </span>
            <div
              className="flex-1 h-px max-w-[80px]"
              style={{ background: "var(--ttg-border)" }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <article
                key={leader.initials}
                className="border border-[var(--ttg-border)] overflow-hidden transition-colors duration-300 hover:border-[var(--ttg-navy-dim)]"
                style={{ background: "var(--ttg-bg-white)" }}
              >
                <div
                  className="h-[180px] flex items-center justify-center relative overflow-hidden"
                  style={{ background: "var(--ttg-bg)" }}
                >
                  <span
                    className="ttg-serif text-[52px] leading-none"
                    style={{ color: "rgba(26,31,46,0.12)" }}
                  >
                    {leader.initials}
                  </span>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 60%, var(--ttg-bg) 100%)",
                    }}
                    aria-hidden
                  />
                </div>
                <div className="p-7 pt-8 pb-8">
                  <h3
                    className="ttg-serif text-[20px] mb-1"
                    style={{ color: "var(--ttg-navy)" }}
                  >
                    {leader.name}
                  </h3>
                  <p
                    className="text-[10px] uppercase tracking-[0.12em] mb-4"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                    }}
                  >
                    {leader.role}
                  </p>
                  <p
                    className="text-[13px] leading-[1.7]"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                    }}
                  >
                    {leader.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="px-6 lg:px-16 pb-[120px] max-w-[1100px] mx-auto">
          <div className="flex items-center gap-5 mb-14">
            <span
              className="text-[10px] uppercase tracking-[0.18em]"
              style={{
                fontFamily: "var(--ttg-font-sans)",
                color: "var(--ttg-muted)",
              }}
            >
              Where We Are
            </span>
            <div
              className="flex-1 h-px max-w-[80px]"
              style={{ background: "var(--ttg-border)" }}
            />
          </div>
          <div
            className="border border-[var(--ttg-border)] p-12 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            style={{ background: "var(--ttg-bg-white)" }}
          >
            <div>
              <h3
                className="ttg-serif text-[28px] mb-5 leading-snug"
                style={{ color: "var(--ttg-navy)" }}
              >
                Headquartered in Accra.
                <br />
                Operating Globally.
              </h3>
              <p
                className="text-[14px] leading-[1.75] mb-7"
                style={{
                  fontFamily: "var(--ttg-font-sans)",
                  color: "var(--ttg-muted)",
                }}
              >
                Our primary operations are based in the Airport Residential Area
                of Accra, Ghana — one of West Africa&apos;s leading technology
                hubs. We operate internationally and regularly engage with
                clients across Africa, Europe, and North America.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3.5 items-start">
                  <span
                    className="text-[10px] uppercase tracking-[0.1em] min-w-[80px] pt-0.5"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                    }}
                  >
                    Address
                  </span>
                  <span
                    className="text-[14px] leading-[1.5]"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                    }}
                  >
                    1, Nortei Abio Street, Airport Residential Area, Accra,
                    Greater Accra
                  </span>
                </div>
                <div className="flex gap-3.5 items-start">
                  <span
                    className="text-[10px] uppercase tracking-[0.1em] min-w-[80px] pt-0.5"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                    }}
                  >
                    Phone
                  </span>
                  <span
                    className="text-[14px] leading-[1.5]"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                    }}
                  >
                    +233 (057) 589-5601
                  </span>
                </div>
                <div className="flex gap-3.5 items-start">
                  <span
                    className="text-[10px] uppercase tracking-[0.1em] min-w-[80px] pt-0.5"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                    }}
                  >
                    Email
                  </span>
                  <a
                    href="mailto:info@thetrustgroupsolutions.com"
                    className="text-[14px] leading-[1.5] transition-colors hover:text-[var(--ttg-navy)]"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                      textDecoration: "none",
                    }}
                  >
                    info@thetrustgroupsolutions.com
                  </a>
                </div>
                <div className="flex gap-3.5 items-start">
                  <span
                    className="text-[10px] uppercase tracking-[0.1em] min-w-[80px] pt-0.5"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                    }}
                  >
                    Hours
                  </span>
                  <span
                    className="text-[14px] leading-[1.5]"
                    style={{
                      fontFamily: "var(--ttg-font-sans)",
                      color: "var(--ttg-muted)",
                    }}
                  >
                    Mon–Fri 9am–6pm GMT · Sat 10am–2pm
                  </span>
                </div>
              </div>
            </div>
            <div
              className="h-[280px] border border-[var(--ttg-border)] flex items-center justify-center"
              style={{ background: "var(--ttg-bg)" }}
            >
              <div className="text-center">
                <div
                  className="w-4 h-4 rounded-full rotate-[-45deg] mx-auto mb-4"
                  style={{
                    background: "var(--ttg-navy)",
                    borderRadius: "50% 50% 50% 0",
                    boxShadow: "0 0 20px rgba(26,31,46,0.15)",
                  }}
                  aria-hidden
                />
                <p
                  className="text-[10px] uppercase tracking-[0.12em]"
                  style={{
                    fontFamily: "var(--ttg-font-sans)",
                    color: "var(--ttg-muted)",
                  }}
                >
                  Airport Residential Area
                  <br />
                  Accra, Ghana
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-[120px] px-6 lg:px-16 text-center border-t border-[var(--ttg-border)]">
          <h2
            className="ttg-serif text-[clamp(36px,5vw,64px)] leading-[1.05] mb-5 tracking-[-0.02em]"
            style={{ color: "var(--ttg-navy)" }}
          >
            Work with a team that
            <br />
            <em className="italic text-[var(--ttg-navy)]">takes it seriously.</em>
          </h2>
          <p
            className="text-[15px] max-w-[480px] mx-auto mb-10 leading-[1.7]"
            style={{
              fontFamily: "var(--ttg-font-sans)",
              color: "var(--ttg-muted)",
            }}
          >
            We work with a select number of organizations at a time. If your
            project demands precision, security, and delivery you can count on —
            let&apos;s talk.
          </p>
          <Link href="/contact" className="ttg-btn-pill">
            Request a Private Briefing →
          </Link>
        </section>
      </div>
    </>
  );
}
