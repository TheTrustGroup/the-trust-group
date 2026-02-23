/**
 * Canonical FAQ entries for the site. Used by the full FAQ section and condensed homepage block.
 */

export interface FAQEntry {
  question: string;
  answer: string;
  /** Optional CTA link rendered after the answer (e.g. "Request a private briefing") */
  ctaLink?: { href: string; label: string };
}

export const faqEntries: FAQEntry[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "We deliver faster than the industry standard — by design. Small projects are typically completed in 6–8 weeks. Larger enterprise systems range from 3–6 months, depending on scope and integration complexity. This is possible because of our architecture-first methodology: we invest heavily in the discovery and design phases to eliminate ambiguity before a single line of production code is written. The result is fewer revisions, zero wasted cycles, and delivery timelines that consistently beat industry benchmarks by 40–50%. A detailed, milestone-by-milestone timeline is provided during the discovery phase.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve defense and intelligence, healthcare, financial services, e-commerce, real estate, transportation, hospitality, and enterprise SaaS. Solutions are tailored to meet industry-specific compliance standards — including HIPAA, SOC 2, and defense-grade security frameworks.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies (Next.js, React, TypeScript), mobile development (React Native), AI/ML (Python, TensorFlow), cloud infrastructure (AWS, Azure, Kubernetes), and enterprise databases (PostgreSQL, MongoDB). We choose technologies based on project requirements and long-term maintainability.",
  },
  {
    question: "How do you start a project?",
    answer:
      "We begin with a technical discovery phase where we assess your requirements, constraints, and existing infrastructure. This includes stakeholder interviews, technical audits, and architecture planning. We then provide a detailed proposal with approach, timeline, and resource allocation. Most clients receive their proposal within 5 business days of the initial briefing.",
  },
  {
    question: "What support do you offer post-launch?",
    answer:
      "We provide comprehensive post-launch support including 24/7 monitoring, incident response, security updates, performance optimization, and capacity management. For mission-critical systems, we offer dedicated on-call engineering support and maintenance agreements tailored to your needs.",
  },
  {
    question: 'What does "mission-critical" mean to you?',
    answer:
      "It means we build systems that cannot afford to fail. Our engineering standards account for failure modes before they occur — through redundant architecture, rigorous testing protocols, and post-launch monitoring that runs 24/7. When an organization's operations depend on a system we've built, we take that responsibility seriously. We don't ship and disappear.",
  },
  {
    question: "Do you work under NDA for classified or sensitive projects?",
    answer:
      "Yes. A significant portion of our defense and intelligence work is conducted under non-disclosure agreements. If your project involves sensitive infrastructure, proprietary systems, or government-adjacent work, we are fully equipped to operate within those confidentiality requirements.",
    ctaLink: { href: "/contact", label: "Request a private briefing →" },
  },
];

/** Number of FAQs to show on the homepage condensed block */
export const condensedFAQCount = 5;
