import type { Metadata } from "next";
import Link from "next/link";
import { generateArticle, generateBreadcrumbs } from "@/lib/seo";
import { ArticleToc, type TocItem } from "@/components/blog";

const TOC_ITEMS: TocItem[] = [
  { href: "#the-gap", label: "Understanding the Gap" },
  { href: "#three-principles", label: "Three Principles Worth Borrowing" },
  { href: "#outcomes", label: "What Happens When You Close the Gap" },
  { href: "#questions", label: "Questions for Your Vendor" },
  { href: "#closing", label: "The Real Competitive Advantage" },
];

const HEADING_IDS = TOC_ITEMS.map((i) => i.href.slice(1));

const ARTICLE_SLUG = "defense-grade-engineering";
const ARTICLE_TITLE = "What Defense-Grade Engineering Can Teach Commercial Software Teams";
const ARTICLE_DESCRIPTION =
  "The practices standard in aerospace and defense engineering — redundancy, failure-mode analysis, security-first architecture — are treated as optional in commercial software. Here's what that gap costs you, and what the alternative looks like.";
const PUBLISHED = "2026-02-01";
const READ_TIME = "9";

export const metadata: Metadata = {
  title: `${ARTICLE_TITLE} | The Trust Group`,
  description: ARTICLE_DESCRIPTION,
  openGraph: {
    title: `${ARTICLE_TITLE} | The Trust Group`,
    description: ARTICLE_DESCRIPTION,
    type: "article",
  },
};

export default function DefenseGradeEngineeringArticlePage() {
  const articleSchema = generateArticle({
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    authorName: "The Trust Group Engineering Team",
    url: `/blog/${ARTICLE_SLUG}`,
  });
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: "/" },
    { name: "Insights", url: "/blog" },
    { name: ARTICLE_TITLE, url: `/blog/${ARTICLE_SLUG}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="ttg-section min-h-screen bg-[var(--ttg-bg)] text-[var(--ttg-navy)]">
        {/* Article hero */}
        <header
          className="relative overflow-hidden border-b px-6 pt-24 pb-0 lg:px-16 lg:pt-40"
          style={{
            background: "var(--ttg-bg-white)",
            borderColor: "var(--ttg-border)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(26,31,46,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(26,31,46,0.06) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-[860px] pb-20">
            <div className="mb-9 flex flex-wrap items-center gap-4">
              <span
                className="border px-3 py-1 ttg-mono text-[10px] uppercase tracking-[0.14em]"
                style={{
                  color: "var(--ttg-navy)",
                  borderColor: "rgba(26,31,46,0.2)",
                }}
              >
                Engineering Insights
              </span>
              <span
                className="border px-3 py-1 ttg-mono text-[10px] uppercase tracking-[0.14em]"
                style={{
                  color: "rgba(255,110,110,0.8)",
                  borderColor: "rgba(255,80,80,0.3)",
                  backgroundColor: "rgba(255,80,80,0.08)",
                }}
              >
                Defense Technology
              </span>
              <span className="ttg-mono text-[10px] tracking-[0.1em] text-[var(--ttg-muted)]">
                February 2026
              </span>
              <span className="ttg-mono text-[10px] text-[var(--ttg-muted)]">·</span>
              <span className="ttg-mono text-[10px] tracking-[0.1em] text-[var(--ttg-muted)]">
                {READ_TIME} min read
              </span>
            </div>
            <h1 className="ttg-serif mb-7 text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
              What Defense-Grade Engineering
              <br />
              Can Teach <em className="text-[var(--ttg-navy)]">Commercial Software Teams</em>
            </h1>
            <p
              className="max-w-[680px] border-l-2 pl-6 text-[17px] leading-[1.7]"
              style={{
                color: "var(--ttg-muted)",
                borderColor: "var(--ttg-navy)",
              }}
            >
              The practices standard in aerospace and defense engineering — redundancy, failure-mode
              analysis, security-first architecture — are treated as optional in commercial
              software. Here&apos;s what that gap costs you, and what the alternative looks like.
            </p>
          </div>
        </header>

        {/* Two-column layout: body + sidebar */}
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-0 px-6 py-20 lg:grid-cols-[1fr_280px] lg:gap-20 lg:px-16 lg:pb-32">
          <article className="max-w-[680px]">
            <div className="space-y-7 text-base leading-[1.85]" style={{ color: "var(--ttg-muted)" }}>
              <p>
                In 1996, the Ariane 5 rocket exploded 37 seconds after launch. The cause was a
                software error — a 64-bit floating point number had been incorrectly converted to a
                16-bit signed integer. The failure mode had been identified and documented during
                development. It had been deliberately left unaddressed because the same code had
                worked on its predecessor, Ariane 4.
              </p>
              <p>The cost: $370 million and a decade of development time.</p>
              <p>
                Defense and aerospace engineers study failures like this with religious intensity.
                They build processes specifically designed to prevent them — processes that treat
                every assumption as a liability and every failure mode as a responsibility. They
                document, verify, simulate, and audit. They design for the worst case, not the
                average case.
              </p>
              <p>
                Commercial software rarely does any of this. And that gap — between how defense-grade
                systems are built and how most enterprise software is built — is wider than most
                technology leaders realize.
              </p>

              <div
                className="my-12 border-l-2 py-1 pl-7"
                style={{ borderColor: "var(--ttg-navy)" }}
              >
                <p className="ttg-serif m-0 text-[22px] italic leading-[1.45] text-[var(--ttg-navy)]">
                  &quot;The gap between defense-grade engineering and what the commercial software
                  industry considers standard is not a matter of resources. It&apos;s a matter of
                  philosophy.&quot;
                </p>
              </div>

              <h2
                id="the-gap"
                className="ttg-serif mt-14 mb-5 text-[28px] leading-tight tracking-[-0.01em] text-[var(--ttg-navy)]"
              >
                Understanding the Gap
              </h2>
              <p>
                This isn&apos;t a critique of commercial software teams. It&apos;s a structural
                observation. Defense and aerospace engineering evolved under conditions that demand
                perfection: systems that fail kill people, destroy assets worth billions, or
                compromise national security. The engineering culture that developed in response to
                those stakes is categorically different from one that evolved in an environment
                where &quot;ship fast and fix later&quot; is a viable strategy.
              </p>
              <p>
                The problem is that &quot;ship fast and fix later&quot; stops being viable the moment
                your software becomes genuinely critical to operations. Healthcare platforms that
                manage patient records. Financial systems processing billions in transactions.
                Enterprise infrastructure that hundreds of thousands of users depend on daily. These
                systems carry stakes that are closer to aerospace than to a consumer app — but
                they&apos;re often built like consumer apps.
              </p>

              {/* Comparison block */}
              <div
                className="my-9 grid grid-cols-1 gap-px border md:grid-cols-2"
                style={{ backgroundColor: "var(--ttg-border)", borderColor: "var(--ttg-border)" }}
              >
                <div
                  className="p-7"
                  style={{ backgroundColor: "rgba(255,80,80,0.03)" }}
                >
                  <p
                    className="mb-4 border-b pb-3 ttg-mono text-[10px] uppercase tracking-[0.12em]"
                    style={{
                      borderColor: "var(--ttg-border)",
                      color: "rgba(255,110,110,0.8)",
                    }}
                  >
                    Typical Commercial Approach
                  </p>
                  <ul className="flex list-none flex-col gap-2.5">
                    {[
                      "Security reviewed post-development",
                      "Failure modes identified after launch",
                      'Documentation updated "when there\'s time"',
                      "Testing begins after feature completion",
                      "Architecture evolves informally during sprints",
                      "Redundancy added after first outage",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-[13px] leading-[1.5] text-[var(--ttg-muted)]"
                      >
                        <span style={{ color: "rgba(255,110,110,0.8)" }}>✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="p-7"
                  style={{ backgroundColor: "rgba(76,175,110,0.03)" }}
                >
                  <p
                    className="mb-4 border-b pb-3 ttg-mono text-[10px] uppercase tracking-[0.12em] text-[#4caf6e]"
                    style={{ borderColor: "var(--ttg-border)" }}
                  >
                    Defense-Grade Approach
                  </p>
                  <ul className="flex list-none flex-col gap-2.5">
                    {[
                      "Security is a design-phase constraint",
                      "Failure modes mapped before first sprint",
                      "Documentation produced alongside code",
                      "Test criteria defined during system design",
                      "Architecture formally agreed before development",
                      "Redundancy designed in from the beginning",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-[13px] leading-[1.5] text-[var(--ttg-muted)]"
                      >
                        <span className="text-[#4caf6e]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h2
                id="three-principles"
                className="ttg-serif mt-14 mb-5 text-[28px] leading-tight tracking-[-0.01em] text-[var(--ttg-navy)]"
              >
                Three Principles Worth Borrowing
              </h2>
              <p>
                We&apos;ve spent years applying defense engineering discipline to commercial
                software projects. These are the three principles that create the most meaningful
                difference in outcomes — and that most commercial teams don&apos;t practice.
              </p>

              <div
                className="relative my-9 border p-9"
                style={{
                  backgroundColor: "var(--ttg-bg-white)",
                  borderColor: "var(--ttg-border)",
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: "var(--ttg-navy)" }}
                />
                <span className="mb-2 block ttg-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ttg-navy)]">
                  Principle 01
                </span>
                <h4 className="ttg-serif mb-2.5 text-[18px] text-[var(--ttg-navy)]">
                  Failure Mode Mapping Before Development
                </h4>
                <p className="m-0 text-[14px] leading-[1.75] text-[var(--ttg-muted)]">
                  In defense engineering, a Failure Modes and Effects Analysis (FMEA) is performed
                  before a system is built. Every component is analyzed for the ways it could fail,
                  and the downstream effects of that failure are mapped. This isn&apos;t done out of
                  pessimism — it&apos;s done because identifying failure modes at the design stage
                  costs almost nothing. Discovering them in production can cost everything.
                </p>
              </div>
              <p>
                In commercial software, failure mode analysis — when it happens at all — typically
                occurs in retrospective. After the outage. After the data breach. After the
                performance degradation that cascaded into a service interruption.
              </p>
              <p>
                The discipline of asking &quot;how does this fail?&quot; before writing a line of
                code is one of the highest-leverage changes a commercial engineering team can make.
                It changes architecture decisions, infrastructure choices, and monitoring strategy
                before they&apos;re locked in.
              </p>

              <div
                className="relative my-9 border p-9"
                style={{
                  backgroundColor: "var(--ttg-bg-white)",
                  borderColor: "var(--ttg-border)",
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: "var(--ttg-navy)" }}
                />
                <span className="mb-2 block ttg-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ttg-navy)]">
                  Principle 02
                </span>
                <h4 className="ttg-serif mb-2.5 text-[18px] text-[var(--ttg-navy)]">
                  Security as Architecture, Not Audit
                </h4>
                <p className="m-0 text-[14px] leading-[1.75] text-[var(--ttg-muted)]">
                  In defense systems, security is not a feature. It&apos;s a constraint that shapes
                  the entire architecture from the beginning. Access control models, encryption
                  requirements, network segmentation, and audit logging are defined during system
                  design — before a single line of application code exists.
                </p>
              </div>
              <p>
                Commercial software almost universally treats security as a post-development
                concern. Security audits happen before launch. Penetration tests are scheduled.
                Compliance frameworks are mapped to an existing codebase. The result is security
                that is bolted on rather than built in — and that creates a fundamentally different
                risk profile.
              </p>
              <p>
                When security requirements are defined during architecture, they change the design.
                When they&apos;re applied after development, they create friction against an
                existing design that was never built for them. The difference in resilience between
                the two approaches is significant.
              </p>

              <div
                className="relative my-9 border p-9"
                style={{
                  backgroundColor: "var(--ttg-bg-white)",
                  borderColor: "var(--ttg-border)",
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: "var(--ttg-navy)" }}
                />
                <span className="mb-2 block ttg-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ttg-navy)]">
                  Principle 03
                </span>
                <h4 className="ttg-serif mb-2.5 text-[18px] text-[var(--ttg-navy)]">
                  Documentation as Engineering Artifact
                </h4>
                <p className="m-0 text-[14px] leading-[1.75] text-[var(--ttg-muted)]">
                  In defense engineering, documentation is not optional or deferred. System design
                  documents, architecture decision records, interface specifications, and test
                  protocols are produced as first-class engineering artifacts — with the same rigor
                  applied to code. They are reviewed, versioned, and maintained.
                </p>
              </div>
              <p>
                In commercial software, documentation is typically the first casualty of timeline
                pressure. The result is systems where institutional knowledge lives in the heads of
                the engineers who built them — and evaporates when those engineers move on. More
                consequentially, undocumented systems are unmaintainable systems. When a component
                fails at 2am three years after launch, the team responsible for fixing it is
                operating without a map.
              </p>
              <p>
                The investment in thorough documentation during the build phase pays compounding
                returns across the operational life of a system. It also dramatically shortens the
                time-to-resolution for every incident that follows.
              </p>

              <hr className="my-12 border-t" style={{ borderColor: "var(--ttg-border)" }} />

              <h2
                id="outcomes"
                className="ttg-serif mt-14 mb-5 text-[28px] leading-tight tracking-[-0.01em] text-[var(--ttg-navy)]"
              >
                What Happens When You Close the Gap
              </h2>
              <p>These are not theoretical improvements. They produce measurable outcomes in real systems:</p>
              <p>
                <strong>Incident frequency drops.</strong> Systems designed with failure modes
                mapped and security built in produce dramatically fewer production incidents than
                systems built without those disciplines. The uptime numbers reflect this directly —
                our consistent 99.9% SLA performance is a consequence of design choices made
                before development, not heroic incident response after.
              </p>
              <p>
                <strong>Mean time to resolution decreases.</strong> When incidents do occur,
                documented systems with well-defined architecture resolve faster. The diagnosis
                phase — which consumes the majority of incident response time in undocumented
                systems — is compressed from hours to minutes when the team has accurate system
                documentation to work from.
              </p>
              <p>
                <strong>Long-term maintenance costs fall sharply.</strong> The majority of
                software&apos;s total cost of ownership is incurred post-launch — in maintenance,
                feature extension, and incident management. Systems built with long-term operability
                as a design constraint consistently perform better on this dimension than those
                built purely for initial delivery speed.
              </p>

              <div
                className="my-12 border-l-2 py-1 pl-7"
                style={{ borderColor: "var(--ttg-navy)" }}
              >
                <p className="ttg-serif m-0 text-[22px] italic leading-[1.45] text-[var(--ttg-navy)]">
                  &quot;The majority of software&apos;s total cost of ownership is incurred
                  post-launch. Defense-grade design discipline is the single most effective lever
                  for reducing it.&quot;
                </p>
              </div>

              <h2
                id="questions"
                className="ttg-serif mt-14 mb-5 text-[28px] leading-tight tracking-[-0.01em] text-[var(--ttg-navy)]"
              >
                Questions to Assess Your Vendor&apos;s Engineering Standards
              </h2>
              <p>
                If you&apos;re evaluating a software development partner for a system with genuine
                operational stakes, these questions will quickly reveal how seriously they apply
                engineering discipline:
              </p>
              <p>
                <strong>
                  &quot;Do you produce a system design document before development begins? Can I see
                  one?&quot;
                </strong>{" "}
                A firm that doesn&apos;t produce pre-development architecture documents either
                doesn&apos;t have them or hasn&apos;t built the discipline that produces them. Ask
                to see an example under NDA.
              </p>
              <p>
                <strong>&quot;How do you conduct failure mode analysis? When in the process?&quot;</strong>{" "}
                The answer should be: during the design phase, before development begins. If the
                answer references retrospectives or post-launch monitoring, the failure mode
                analysis is happening too late.
              </p>
              <p>
                <strong>
                  &quot;Where does security architecture sit in your development process?&quot;
                </strong>{" "}
                The answer should be: it&apos;s defined during system design as a constraint. Not:
                &quot;we conduct a security review before launch.&quot;
              </p>
              <p>
                <strong>
                  &quot;What does your documentation standard look like? What do you hand over at
                  project close?&quot;
                </strong>{" "}
                A firm with genuine documentation discipline can answer this specifically and show
                examples. A firm that treats documentation as an afterthought will give you a vague
                answer about wikis and inline comments.
              </p>

              <h2
                id="closing"
                className="ttg-serif mt-14 mb-5 text-[28px] leading-tight tracking-[-0.01em] text-[var(--ttg-navy)]"
              >
                The Real Competitive Advantage
              </h2>
              <p>
                Organizations that build their critical systems to defense-grade engineering
                standards don&apos;t just get better uptime numbers. They get systems they can
                actually depend on — systems that become durable business infrastructure rather than
                fragile technical debt.
              </p>
              <p>
                In a market where most enterprise software is built to the lowest viable standard,
                this is a meaningful competitive differentiation. Your technology infrastructure is
                either a constraint on what you can do or a force multiplier for it. The
                engineering philosophy used to build it is one of the primary determinants of which
                it becomes.
              </p>
              <p>
                We built The Trust Group specifically to close this gap — to bring the discipline
                that has always been standard in the highest-stakes engineering environments to
                organizations that need that level of reliability without the overhead of a defense
                contractor.
              </p>

              <div
                className="mt-14 border p-10"
                style={{
                  backgroundColor: "var(--ttg-bg-white)",
                  borderColor: "var(--ttg-border)",
                }}
              >
                <h3 className="ttg-serif mb-3 text-[22px] font-normal text-[var(--ttg-navy)]">
                  Build it the right way, the first time.
                </h3>
                <p className="mb-6 text-sm leading-[1.6] text-[var(--ttg-muted)]">
                  If your system carries genuine operational stakes, we&apos;d welcome the
                  opportunity to walk you through how a defense-grade engineering approach would
                  change the way it&apos;s designed — and what that means for its long-term
                  performance.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[var(--ttg-navy)] px-7 py-3.5 ttg-mono text-[12px] uppercase tracking-[0.08em] text-white no-underline transition-colors hover:bg-[var(--ttg-navy-dim)]"
                >
                  Request a Private Briefing →
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="sticky top-[100px] hidden lg:block">
            <div className="mb-12">
              <div
                className="mb-5 border-b pb-3 ttg-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ttg-muted)]"
                style={{ borderColor: "var(--ttg-border)" }}
              >
                In This Article
              </div>
              <ArticleToc items={TOC_ITEMS} headingIds={HEADING_IDS} />
            </div>

            <div className="mb-12">
              <div
                className="mb-5 border-b pb-3 ttg-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ttg-muted)]"
                style={{ borderColor: "var(--ttg-border)" }}
              >
                The Stakes
              </div>
              <div className="flex flex-col gap-1">
                <div
                  className="flex flex-col gap-1 border-b py-4"
                  style={{ borderColor: "var(--ttg-border)" }}
                >
                  <span className="ttg-serif text-[28px] text-[var(--ttg-navy)]">
                    $370<em className="font-style-normal text-[var(--ttg-navy)]">M</em>
                  </span>
                  <span className="ttg-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ttg-muted)]">
                    Ariane 5 loss — one software error
                  </span>
                </div>
                <div
                  className="flex flex-col gap-1 border-b py-4"
                  style={{ borderColor: "var(--ttg-border)" }}
                >
                  <span className="ttg-serif text-[28px] text-[var(--ttg-navy)]">
                    &lt;8<em className="font-style-normal text-[var(--ttg-navy)]">%</em>
                  </span>
                  <span className="ttg-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ttg-muted)]">
                    Our rework rate vs 25–35% industry avg
                  </span>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <span className="ttg-serif text-[28px] text-[var(--ttg-navy)]">
                    99.9<em className="font-style-normal text-[var(--ttg-navy)]">%</em>
                  </span>
                  <span className="ttg-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ttg-muted)]">
                    Uptime SLA — maintained continuously
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div
                className="mb-5 border-b pb-3 ttg-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ttg-muted)]"
                style={{ borderColor: "var(--ttg-border)" }}
              >
                Related Reading
              </div>
              <Link
                href="/blog/why-enterprise-software-projects-take-twice-as-long"
                className="block border-b py-3 no-underline"
                style={{ borderColor: "var(--ttg-border)" }}
              >
                <span className="mb-1.5 block ttg-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ttg-navy)]">
                  Engineering
                </span>
                <span className="text-[13px] leading-snug text-[var(--ttg-muted)] transition-colors hover:text-[var(--ttg-navy)]">
                  Why Enterprise Projects Take Twice as Long as They Should
                </span>
              </Link>
              <Link
                href="/services/defense-technology"
                className="block border-b py-3 no-underline"
                style={{ borderColor: "var(--ttg-border)" }}
              >
                <span className="mb-1.5 block ttg-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ttg-navy)]">
                  Capability
                </span>
                <span className="text-[13px] leading-snug text-[var(--ttg-muted)] transition-colors hover:text-[var(--ttg-navy)]">
                  Defense Technology &amp; Intelligence Systems
                </span>
              </Link>
              <Link
                href="/work"
                className="block py-3 no-underline"
                style={{ borderColor: "var(--ttg-border)" }}
              >
                <span className="mb-1.5 block ttg-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ttg-navy)]">
                  Portfolio
                </span>
                <span className="text-[13px] leading-snug text-[var(--ttg-muted)] transition-colors hover:text-[var(--ttg-navy)]">
                  Selected Work &amp; Case Studies
                </span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
