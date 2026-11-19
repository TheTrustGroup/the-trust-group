import type { ServicePageDefinition } from "./types";

/**
 * Deliberately quiet page: capability-level only, no certifications,
 * clearances, client names or project details. Not indexed; not listed on
 * /services. Linked from the footer only. Detail is shared under NDA.
 */
export const defenseTechnology: ServicePageDefinition = {
  slug: "defense-technology",
  breadcrumbLabel: "Secure & Defense-Adjacent Systems",
  seo: {
    title: "Secure & Defense-Adjacent Systems",
    description:
      "Security-first engineering for organizations in defense-adjacent and regulated environments. Every engagement begins under NDA and is briefed privately.",
    url: "/services/defense-technology",
    noindex: true,
  },
  schemaServiceType: "Secure Systems Engineering",
  schemaDescription:
    "Security-first software and autonomous systems engineering for defense-adjacent and regulated environments.",
  hero: {
    title: "Secure & Defense-Adjacent Systems",
    subtitle: "Discreet engagements",
    description:
      "Software and autonomous systems for organizations where security is a design constraint, not an afterthought. Every engagement begins under NDA, and detail is shared in private briefings only.",
    iconName: "Shield",
    visualUrl: "/images/capabilities/drone-mapping-hud.png",
    features: [
      "Security-first architecture",
      "Edge AI & computer vision",
      "Autonomous & sensing systems",
      "NDA from the first conversation",
    ],
  },
  whySection: {
    title: "How we work in sensitive environments",
    intro: "",
    items: [
      {
        number: "01",
        title: "Security is a design constraint",
        description:
          "Threat modelling happens before the first sprint, not after launch. Access control, audit trails and data handling are decided at the architecture stage.",
      },
      {
        number: "02",
        title: "Need-to-know by default",
        description:
          "Each engagement is staffed with a small team formed for that work. Access to systems and information is limited to the people who need it.",
      },
      {
        number: "03",
        title: "Discretion as standard",
        description:
          "No client names, no public case studies, no public demonstrations. References and specifics are shared in private briefings.",
      },
      {
        number: "04",
        title: "Built for the field",
        description:
          "Systems designed to keep working with limited connectivity, at the edge, where cloud infrastructure does not reach.",
      },
    ],
  },
  capabilities: {
    title: "Areas of capability",
    intro: "Discussed in detail under NDA only.",
    sectionVariant: "muted",
    cardClassName: "border-2 hover:border-primary transition-colors",
    items: [
      {
        title: "Secure Software Systems",
        description:
          "Applications and platforms where access, auditability and data protection are requirements from day one.",
        features: [
          "Threat modelling from the start",
          "Role-based access and audit trails",
          "Encryption at rest and in transit",
          "Hardened deployment pipelines",
        ],
      },
      {
        title: "Perception & Edge AI",
        description:
          "Computer vision and inference that runs on the device, close to the sensor.",
        features: [
          "Detection and tracking models",
          "On-device inference",
          "Sensor data pipelines",
          "Operator dashboards",
        ],
      },
      {
        title: "Autonomous & Sensing Systems",
        description:
          "Software for unmanned platforms and sensing equipment, validated in simulation before the field.",
        features: [
          "Platform and payload integration",
          "Situational-awareness interfaces",
          "Simulation before field testing",
          "Fail-safe behaviour by design",
        ],
      },
    ],
  },
  process: {
    title: "How an engagement runs",
    description: "Every step after the first conversation is covered by NDA.",
    steps: [
      {
        title: "Private briefing & NDA",
        description: "A confidential first conversation; a mutual NDA is signed before any detail is discussed.",
      },
      {
        title: "Requirements & threat model",
        description: "Scope, constraints and security requirements agreed in writing.",
      },
      {
        title: "Build in milestones",
        description: "Delivered milestone by milestone, with problems surfaced early.",
      },
      {
        title: "Handover & support",
        description: "Documentation, training and support terms agreed up front.",
      },
    ],
  },
  faqs: [
    {
      question: "Do you sign an NDA before discussing a project?",
      answer:
        "Yes. We can put a mutual NDA in place before the first detailed conversation. Nothing beyond capability level is discussed until it is signed.",
    },
    {
      question: "Why don't you publish this work?",
      answer:
        "Clients in this space expect discretion. We do not publish names, screenshots or project details. References and specifics are shared in private briefings.",
    },
    {
      question: "How do you handle sensitive information?",
      answer:
        "Access is limited to the people working on the engagement, data stays in the environment agreed with the client, and we follow the security requirements set out in the contract. Our general approach is described on our Security page.",
    },
    {
      question: "Can you work within our security requirements?",
      answer:
        "Yes. We adapt to the client's policies, hosting requirements and review processes, and agree them in writing before work begins.",
    },
  ],
  contact: {
    serviceName: "Secure & Defense-Adjacent Systems",
    prefillService: "Secure & Defense-Adjacent Systems",
  },
};
