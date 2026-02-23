import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPost } from "@/lib/cms";
import { generateArticle, generateBreadcrumbs } from "@/lib/seo";
import { ArticleToc, type TocItem } from "@/components/blog";

const TOC_ITEMS: TocItem[] = [
  { href: "#where-time-goes", label: "Where Time Actually Goes" },
  { href: "#architecture-first", label: "The Architecture-First Method" },
  { href: "#dedicated-teams", label: "Dedicated Teams" },
  { href: "#results", label: "What This Means in Practice" },
  { href: "#questions", label: "Questions to Ask Your Vendor" },
  { href: "#mission-critical", label: "Mission-Critical Systems" },
];

const HEADING_IDS = TOC_ITEMS.map((i) => i.href.slice(1));

export const metadata: Metadata = {
  title: "Why Enterprise Software Projects Take Twice as Long as They Should | The Trust Group",
  description:
    "This is what we changed — and why our projects consistently deliver in half the time the industry considers standard.",
  openGraph: {
    title: "Why Enterprise Software Projects Take Twice as Long as They Should | The Trust Group",
    description:
      "This is what we changed — and why our projects consistently deliver in half the time the industry considers standard.",
    type: "article",
  },
};

export default function EnterpriseSoftwareArticlePage() {
  const post = getBlogPost("why-enterprise-software-projects-take-twice-as-long");
  const articleSchema = post
    ? generateArticle({
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        authorName: post.author.name,
        url: "/blog/why-enterprise-software-projects-take-twice-as-long",
      })
    : null;
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: "/" },
    { name: "Insights", url: "/blog" },
    {
      name: "Why Enterprise Software Projects Take Twice as Long as They Should",
      url: "/blog/why-enterprise-software-projects-take-twice-as-long",
    },
  ]);

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="trust-theme min-h-screen bg-[var(--trust-black)] text-[var(--trust-white)]">
        {/* Article hero */}
        <header
          className="mx-auto max-w-[900px] border-b px-6 pt-24 pb-20 lg:px-16 lg:pt-40 lg:pb-20"
          style={{ borderColor: "var(--trust-border)" }}
        >
          <div className="mb-9 flex flex-wrap items-center gap-5">
            <span
              className="font-trust-mono text-[10px] tracking-[0.14em] uppercase border px-3 py-1"
              style={{
                color: "var(--trust-gold)",
                borderColor: "rgba(200,169,110,0.3)",
              }}
            >
              Engineering Insights
            </span>
            <span className="font-trust-mono text-[10px] tracking-[0.1em] text-[var(--trust-muted)]">
              February 2026
            </span>
            <span className="font-trust-mono text-[10px] text-[var(--trust-muted)]">·</span>
            <span className="font-trust-mono text-[10px] tracking-[0.1em] text-[var(--trust-muted)]">
              8 min read
            </span>
          </div>
          <h1 className="font-trust-serif mb-7 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.02em]">
            Why Enterprise Software Projects
            <br />
            Take Twice as Long as They Should —
            <br />
            <em className="text-[var(--trust-gold)]">And How We Fixed It.</em>
          </h1>
          <p
            className="max-w-[680px] border-l-2 pl-6 text-[17px] leading-[1.7]"
            style={{
              color: "var(--trust-muted)",
              borderColor: "var(--trust-gold)",
            }}
          >
            Software delays are almost never caused by the complexity of the problem. They&apos;re
            caused by the process used to solve it. Here&apos;s what we changed — and why our
            projects consistently deliver in half the industry-standard timeline.
          </p>
        </header>

        {/* Two-column layout: body + sidebar */}
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-0 px-6 py-20 lg:grid-cols-[1fr_280px] lg:gap-20 lg:px-16 lg:pb-32">
          <article className="max-w-[680px]">
            <div className="space-y-7 text-base leading-[1.85]" style={{ color: "#cbc8c0" }}>
              <p>
                The Standish Group has been tracking software project outcomes for over two decades.
                Their findings have remained stubbornly consistent: the average enterprise software
                project runs 45% over its original timeline. Nearly one in five is abandoned
                entirely before completion.
              </p>
              <p>
                Most vendors will tell you this is the nature of complex software. That timelines
                are unpredictable. That requirements change. That these things happen.
              </p>
              <p>
                We disagree. After delivering mission-critical systems for enterprise organizations,
                defense clients, and high-growth technology companies, we&apos;ve found that
                software delays are almost never caused by the complexity of the problem.
                They&apos;re caused by the process used to solve it.
              </p>

              <h2
                id="where-time-goes"
                className="font-trust-serif mt-14 mb-5 text-[28px] leading-tight tracking-[-0.01em] text-[var(--trust-white)]"
              >
                Where Time Actually Goes
              </h2>
              <p>
                There&apos;s a widespread misconception about where software development time is
                spent. Most stakeholders imagine engineers sitting at keyboards, writing code. When
                that code takes longer to materialize than expected, the assumption is that the
                technical problem was harder than anticipated.
              </p>
              <p>
                The reality is different. Development — the act of writing production code — is
                rarely where projects derail. The delays accumulate in the phases that precede it.
              </p>
              <p>
                Consider a typical enterprise software engagement at a conventional firm. A client
                comes in with a set of requirements. There are several kickoff meetings. A rough
                architecture is sketched. Development begins. Midway through the first sprint, a
                senior engineer realizes the database schema they chose won&apos;t support a critical
                feature. The design changes. Weeks of work are partially rebuilt. A new integration
                requirement surfaces from a stakeholder who wasn&apos;t in the original meetings.
                The scope shifts. Timelines extend.
              </p>
              <p>
                None of this is caused by the engineering being hard. It&apos;s caused by decisions
                that should have been made at the beginning being deferred until they became
                expensive problems.
              </p>
              <p>The breakdown looks roughly like this in a conventional engagement:</p>

              <div className="my-10 overflow-x-auto">
                <table
                  className="w-full border-collapse font-trust-mono"
                  style={{ borderColor: "var(--trust-border)" }}
                >
                  <thead>
                    <tr>
                      <th
                        className="border-b px-4 py-3 text-left text-[10px] uppercase tracking-[0.12em] text-[var(--trust-muted)]"
                        style={{ borderColor: "var(--trust-border)" }}
                      >
                        Phase
                      </th>
                      <th
                        className="border-b px-4 py-3 text-left text-[10px] uppercase tracking-[0.12em] text-[var(--trust-muted)]"
                        style={{ borderColor: "var(--trust-border)" }}
                      >
                        Conventional
                      </th>
                      <th
                        className="border-b px-4 py-3 text-left text-[10px] uppercase tracking-[0.12em] text-[var(--trust-gold)]"
                        style={{ borderColor: "var(--trust-border)" }}
                      >
                        Trust Group
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "#cbc8c0" }}>
                    <tr>
                      <td
                        className="border-b px-4 py-3.5 text-[12px]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        Discovery &amp; Requirements
                      </td>
                      <td
                        className="border-b px-4 py-3.5 text-[12px]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        1–2 wks (shallow)
                      </td>
                      <td
                        className="border-b px-4 py-3.5 text-[12px] text-[#4caf6e]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        2–3 wks (exhaustive)
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="border-b px-4 py-3.5 text-[12px]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        Architecture &amp; Design
                      </td>
                      <td
                        className="border-b px-4 py-3.5 text-[12px]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        During sprints (ad hoc)
                      </td>
                      <td
                        className="border-b px-4 py-3.5 text-[12px] text-[#4caf6e]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        2–3 wks (pre-code)
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="border-b px-4 py-3.5 text-[12px]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        Development
                      </td>
                      <td
                        className="border-b px-4 py-3.5 text-[12px]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        ~70% of project time
                      </td>
                      <td
                        className="border-b px-4 py-3.5 text-[12px] text-[#4caf6e]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        ~50% of project time
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="border-b px-4 py-3.5 text-[12px]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        Rework &amp; Revision
                      </td>
                      <td
                        className="border-b px-4 py-3.5 text-[12px]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        25–35% of dev time
                      </td>
                      <td
                        className="border-b px-4 py-3.5 text-[12px] text-[#4caf6e]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        Under 8%
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="border-b px-4 py-3.5 text-[12px]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        QA &amp; Launch
                      </td>
                      <td
                        className="border-b px-4 py-3.5 text-[12px]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        Compressed, stressful
                      </td>
                      <td
                        className="border-b px-4 py-3.5 text-[12px] text-[#4caf6e]"
                        style={{ borderColor: "rgba(200,169,110,0.06)" }}
                      >
                        Planned from day one
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>The math is straightforward. Front-loading the thinking compresses everything that follows.</p>

              <h2
                id="architecture-first"
                className="font-trust-serif mt-14 mb-5 text-[28px] leading-tight tracking-[-0.01em] text-[var(--trust-white)]"
              >
                The Architecture-First Method
              </h2>
              <p>
                We operate on a principle borrowed from aerospace and defense engineering:{" "}
                <strong>design the full system before writing production code.</strong>
              </p>
              <p>
                This sounds obvious. In practice, most commercial software teams don&apos;t do it.
                The &quot;agile&quot; philosophy — interpreted loosely by most organizations as
                &quot;figure it out as you go&quot; — has convinced an entire industry that planning
                is overhead. That speed comes from starting immediately. That iteration is free.
              </p>
              <p>
                It isn&apos;t. Iteration at the code level is expensive. Iteration at the design
                level is nearly free.
              </p>
              <p>Our discovery and design phases are intensive by design. They include:</p>

              <h3 className="mt-9 mb-3 text-sm font-semibold uppercase tracking-[0.06em] text-[var(--trust-white)]">
                Technical Discovery (Weeks 1–2)
              </h3>
              <p>
                We conduct stakeholder interviews with everyone whose workflow the system will touch
                — not just the project sponsor. We audit existing infrastructure for integration
                constraints, data residency requirements, and security posture. We map every edge
                case we can identify before a line of code exists.
              </p>
              <p>
                The output is a complete picture of the problem space. Not a requirements document
                that will change six times. A shared, specific understanding of what &quot;done&quot;
                means.
              </p>

              <h3 className="mt-9 mb-3 text-sm font-semibold uppercase tracking-[0.06em] text-[var(--trust-white)]">
                System Design Document (Weeks 2–4)
              </h3>
              <p>
                Before development begins, we produce a full system design document covering: data
                architecture, API contracts, third-party integration points, security model,
                scalability assumptions, and failure modes.
              </p>
              <p>
                This document functions as a contract. When it&apos;s approved by the client, it
                eliminates an entire category of mid-development surprises — the kind that produce
                scope creep, timeline extensions, and the uncomfortable conversations that follow.
              </p>

              <h3 className="mt-9 mb-3 text-sm font-semibold uppercase tracking-[0.06em] text-[var(--trust-white)]">
                Pre-Built QA Criteria
              </h3>
              <p>
                Most teams write tests after they write code. We define success criteria during the
                design phase and build QA frameworks before development begins. This means that
                when a feature is complete, it&apos;s immediately testable against pre-agreed
                standards — not held up while engineers figure out what &quot;working&quot; is
                supposed to look like.
              </p>
              <p>
                The result: rework drops from an industry-average 25–35% of development time to
                under 8% on our engagements.
              </p>

              <hr
                className="my-12 border-t"
                style={{ borderColor: "var(--trust-border)" }}
              />

              <h2
                id="dedicated-teams"
                className="font-trust-serif mt-14 mb-5 text-[28px] leading-tight tracking-[-0.01em] text-[var(--trust-white)]"
              >
                Dedicated Teams Change Everything
              </h2>
              <p>
                Architecture is one half of the equation. The other is focus.
              </p>
              <p>
                Context switching is one of the most underestimated costs in software development.
                Research in cognitive science has consistently shown that switching between complex
                tasks carries a significant mental cost — estimates suggest it can consume 20–40%
                of productive capacity. For engineering work, which requires sustained deep
                concentration, the effect is even more pronounced.
              </p>
              <p>
                Most software firms run their engineers across multiple client projects
                simultaneously. An engineer working on three projects isn&apos;t delivering 33% of
                their capacity to each. They&apos;re delivering something closer to 25% — the rest
                evaporates in the transitions, the catching-up, the mental overhead of
                context-loading.
              </p>
              <p>
                We assign dedicated engineering teams to each engagement. One project. Full focus.
                The implications are significant:
              </p>
              <ul className="my-6 list-disc space-y-2 pl-6" style={{ color: "#cbc8c0" }}>
                <li>
                  Decision cycles that would take days in a distributed team take hours
                </li>
                <li>
                  No &quot;let me get back up to speed&quot; tax at the start of each work session
                </li>
                <li>
                  Problems that surface get solved immediately rather than queued behind other
                  clients&apos; emergencies
                </li>
                <li>
                  The team develops a deep, intuitive familiarity with the system they&apos;re
                  building — which accelerates the later stages of development considerably
                </li>
              </ul>
              <p>
                This is not a luxury we offer premium clients. It&apos;s the standard operating
                model. It&apos;s also one of the primary reasons our timelines look different from
                those of our peers.
              </p>

              <h2
                id="results"
                className="font-trust-serif mt-14 mb-5 text-[28px] leading-tight tracking-[-0.01em] text-[var(--trust-white)]"
              >
                What This Means in Practice
              </h2>
              <p>To be concrete about what this methodology produces:</p>
              <p>
                <strong>Small projects</strong> — a customer-facing application, an internal workflow
                tool, a mobile product — are typically completed in <strong>6–8 weeks</strong>{" "}
                from the start of discovery. The industry standard for comparable scope is 3–4
                months.
              </p>
              <p>
                <strong>Enterprise systems</strong> — multi-integration platforms, healthcare
                management systems, AI-powered analytics infrastructure — are delivered in{" "}
                <strong>3–6 months</strong>. Comparable engagements at conventional firms routinely
                run 9–18 months, with significant rework phases embedded in that timeline.
              </p>
              <p>
                These aren&apos;t optimistic estimates. They&apos;re the outcome of a process
                designed specifically to eliminate the variables that cause delays.
              </p>
              <p>
                We provide a detailed, milestone-by-milestone timeline at the end of the discovery
                phase. Clients know what will be delivered, when, and what it will look like.
                Mid-project surprises don&apos;t disappear entirely — software is still a human
                endeavor — but they&apos;re rare, and they&apos;re handled with processes already in
                place for exactly that scenario.
              </p>

              <h2
                id="questions"
                className="font-trust-serif mt-14 mb-5 text-[28px] leading-tight tracking-[-0.01em] text-[var(--trust-white)]"
              >
                Questions to Ask Your Vendor
              </h2>
              <p>
                If you&apos;re evaluating software development partners for a mission-critical
                project, timeline reliability should be a central criterion. Here are the questions
                that separate disciplined engineering firms from the rest:
              </p>
              <p>
                <strong>
                  &quot;Walk me through your design phase before development begins.&quot;
                </strong>{" "}
                A firm without a rigorous pre-development architecture process will struggle to
                answer this specifically. Vague answers about &quot;sprints&quot; and &quot;agile
                methodology&quot; are not answers.
              </p>
              <p>
                <strong>&quot;How do you handle mid-project scope changes?&quot;</strong> Every firm
                will face them. The question is whether they have a formal process — or whether they
                handle it informally and absorb the cost in timeline slippage.
              </p>
              <p>
                <strong>
                  &quot;How are your engineers allocated across client projects?&quot;
                </strong>{" "}
                If the answer is that engineers work across multiple simultaneous client
                engagements, factor that into your timeline expectations.
              </p>
              <p>
                <strong>
                  &quot;Can you show me the system design document from a previous engagement?&quot;
                </strong>{" "}
                (Under NDA if necessary.) A firm that produces thorough pre-development design
                documents will have them to show. A firm that doesn&apos;t produce them won&apos;t.
              </p>
              <p>
                <strong>
                  &quot;What does your QA process look like, and when does it start?&quot;
                </strong>{" "}
                Quality assurance that begins at the design phase produces fundamentally different
                outcomes than QA that begins after development is complete.
              </p>

              <h2
                id="mission-critical"
                className="font-trust-serif mt-14 mb-5 text-[28px] leading-tight tracking-[-0.01em] text-[var(--trust-white)]"
              >
                A Note on Mission-Critical Systems
              </h2>
              <p>
                Everything above applies to commercial software. For defense, intelligence, and
                other mission-critical applications, the stakes of timeline slippage and quality
                compromise are considerably higher.
              </p>
              <p>
                Our work in defense and intelligence has been built on the same methodology — with
                additional layers of security architecture, compliance verification, and
                redundancy planning layered in from the beginning. The architecture-first approach
                is, frankly, standard in aerospace and defense engineering. It&apos;s where we
                borrowed it from.
              </p>
              <p>
                The gap between defense-grade engineering practices and what the commercial software
                industry considers normal is wider than most clients realize. Closing that gap is
                one of the reasons organizations with high-stakes requirements choose to work with
                us.
              </p>

              <hr
                className="my-12 border-t"
                style={{ borderColor: "var(--trust-border)" }}
              />

              <p>
                If your last software project ran over schedule, it wasn&apos;t bad luck. It was a
                process problem — and process problems have solutions. We&apos;ve spent years
                refining an approach that removes timeline variability as a significant risk factor.
              </p>

              <div
                className="mt-14 border p-10"
                style={{
                  backgroundColor: "var(--trust-slate)",
                  borderColor: "var(--trust-border)",
                }}
              >
                <h3 className="font-trust-serif mb-3 text-[22px] font-normal text-[var(--trust-white)]">
                  Ready to build something that ships on time?
                </h3>
                <p className="mb-6 text-sm text-[var(--trust-muted)]">
                  If you&apos;re evaluating partners for a mission-critical build — whether
                  that&apos;s an enterprise platform, an AI system, or infrastructure your
                  organization depends on — we&apos;d welcome the opportunity to walk you through
                  exactly how we&apos;d approach your project.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[var(--trust-gold)] px-7 py-3.5 font-trust-mono text-[12px] uppercase tracking-[0.08em] text-[var(--trust-black)] no-underline transition-colors hover:bg-[#dfc07e]"
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
                className="mb-5 border-b pb-3 font-trust-mono text-[9px] uppercase tracking-[0.16em] text-[var(--trust-muted)]"
                style={{ borderColor: "var(--trust-border)" }}
              >
                In This Article
              </div>
              <ArticleToc items={TOC_ITEMS} headingIds={HEADING_IDS} />
            </div>

            <div className="mb-12">
              <div
                className="mb-5 border-b pb-3 font-trust-mono text-[9px] uppercase tracking-[0.16em] text-[var(--trust-muted)]"
                style={{ borderColor: "var(--trust-border)" }}
              >
                By The Numbers
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 border-b py-4" style={{ borderColor: "var(--trust-border)" }}>
                  <span className="font-trust-serif text-[28px] text-[var(--trust-white)]">
                    6–8<em className="font-style-normal text-[var(--trust-gold)]">wk</em>
                  </span>
                  <span className="font-trust-mono text-[9px] uppercase tracking-[0.1em] text-[var(--trust-muted)]">
                    Small project delivery
                  </span>
                </div>
                <div className="flex flex-col gap-1 border-b py-4" style={{ borderColor: "var(--trust-border)" }}>
                  <span className="font-trust-serif text-[28px] text-[var(--trust-white)]">
                    &lt;8<em className="font-style-normal text-[var(--trust-gold)]">%</em>
                  </span>
                  <span className="font-trust-mono text-[9px] uppercase tracking-[0.1em] text-[var(--trust-muted)]">
                    Average rework rate
                  </span>
                </div>
                <div className="flex flex-col gap-1 border-b py-4" style={{ borderColor: "var(--trust-border)" }}>
                  <span className="font-trust-serif text-[28px] text-[var(--trust-white)]">
                    45<em className="font-style-normal text-[var(--trust-gold)]">%</em>
                  </span>
                  <span className="font-trust-mono text-[9px] uppercase tracking-[0.1em] text-[var(--trust-muted)]">
                    Industry avg overrun (Standish)
                  </span>
                </div>
                <div className="flex flex-col gap-1 py-4">
                  <span className="font-trust-serif text-[28px] text-[var(--trust-white)]">
                    99.9<em className="font-style-normal text-[var(--trust-gold)]">%</em>
                  </span>
                  <span className="font-trust-mono text-[9px] uppercase tracking-[0.1em] text-[var(--trust-muted)]">
                    Avg uptime SLA achieved
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div
                className="mb-5 border-b pb-3 font-trust-mono text-[9px] uppercase tracking-[0.16em] text-[var(--trust-muted)]"
                style={{ borderColor: "var(--trust-border)" }}
              >
                Published By
              </div>
              <div
                className="border p-5"
                style={{
                  backgroundColor: "var(--trust-slate)",
                  borderColor: "var(--trust-border)",
                }}
              >
                <div className="mb-1 text-[13px] font-semibold text-[var(--trust-white)]">
                  The Trust Group Engineering Team
                </div>
                <div className="text-[12px] leading-[1.5] text-[var(--trust-muted)]">
                  Builders of mission-critical systems for enterprise, defense, and technology
                  organizations worldwide.
                </div>
              </div>
            </div>

            <div>
              <div
                className="mb-5 border-b pb-3 font-trust-mono text-[9px] uppercase tracking-[0.16em] text-[var(--trust-muted)]"
                style={{ borderColor: "var(--trust-border)" }}
              >
                Related Reading
              </div>
              <Link
                href="/blog/defense-grade-engineering"
                className="block border-b py-3 no-underline"
                style={{ borderColor: "var(--trust-border)" }}
              >
                <span className="mb-1.5 block font-trust-mono text-[9px] uppercase tracking-[0.1em] text-[var(--trust-gold)]">
                  Engineering
                </span>
                <span className="text-[13px] leading-snug text-[var(--trust-muted)] transition-colors hover:text-[var(--trust-white)]">
                  What Defense-Grade Engineering Can Teach Commercial Software Teams
                </span>
              </Link>
              <Link
                href="/services"
                className="block border-b py-3 no-underline"
                style={{ borderColor: "var(--trust-border)" }}
              >
                <span className="mb-1.5 block font-trust-mono text-[9px] uppercase tracking-[0.1em] text-[var(--trust-gold)]">
                  Capabilities
                </span>
                <span className="text-[13px] leading-snug text-[var(--trust-muted)] transition-colors hover:text-[var(--trust-white)]">
                  View Full Service Capabilities
                </span>
              </Link>
              <Link
                href="/work"
                className="block py-3 no-underline"
                style={{ borderColor: "var(--trust-border)" }}
              >
                <span className="mb-1.5 block font-trust-mono text-[9px] uppercase tracking-[0.1em] text-[var(--trust-gold)]">
                  Portfolio
                </span>
                <span className="text-[13px] leading-snug text-[var(--trust-muted)] transition-colors hover:text-[var(--trust-white)]">
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
