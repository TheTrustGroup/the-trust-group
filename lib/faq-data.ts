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
      "It depends on scope, and we set the timeline in discovery rather than guessing up front. You receive a milestone-by-milestone plan before development begins, and we surface problems as soon as we see them. Our architecture-first approach means more time spent on design and less on rework.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with organizations in commerce and retail, mobility and transportation, enterprise operations, and regulated or defense-adjacent environments. Each engagement is shaped around the client's own security and compliance requirements, agreed in writing before work begins.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies (Next.js, React, TypeScript), mobile development (React Native), AI/ML (Python, TensorFlow), cloud infrastructure (AWS, Azure, Kubernetes), and enterprise databases (PostgreSQL, MongoDB). We choose technologies based on project requirements and long-term maintainability.",
  },
  {
    question: "How do you start a project?",
    answer:
      "We begin with a discovery phase: requirements, constraints, existing systems and architecture planning. You then receive a written proposal covering approach, timeline and milestones.",
  },
  {
    question: "What support do you offer post-launch?",
    answer:
      "Support is agreed per engagement and can include monitoring, incident response, security updates, performance work and ongoing development. Coverage and response times are set out in the support agreement.",
  },
  {
    question: 'What does "mission-critical" mean to you?',
    answer:
      "It means building systems that cannot afford to fail. We account for failure modes at the design stage, test rigorously, and plan monitoring and support before launch. When an organization depends on a system we've built, we don't ship and disappear.",
  },
  {
    question: "Do you work under NDA for sensitive projects?",
    answer:
      "Yes. We can put a mutual NDA in place before the first detailed conversation. If your project involves sensitive infrastructure, proprietary systems or government-adjacent work, details are discussed only under NDA.",
    ctaLink: { href: "/contact", label: "Request a private briefing →" },
  },
];

/** Number of FAQs to show on the homepage condensed block */
export const condensedFAQCount = 5;
