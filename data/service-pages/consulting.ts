import type { ServicePageDefinition } from "./types";

export const consulting: ServicePageDefinition = {
  slug: "consulting",
  breadcrumbLabel: "Consulting & Strategy",
  seo: {
    title: "Consulting & Strategy",
    description:
      "Strategic technology consulting, architecture guidance, due diligence, and digital transformation advisory from The Trust Group.",
    url: "/services/consulting",
  },
  schemaServiceType: "Consulting & Strategy",
  schemaDescription:
    "Strategic technology consulting to guide critical decisions and transformations. We provide independent, expert guidance on technology strategy, architecture, and digital transformation initiatives.",
  hero: {
    title: "Consulting & Strategy",
    subtitle: "Strategic Technology Guidance",
    description:
      "Strategic technology consulting to guide critical decisions and transformations. We provide independent, expert guidance on technology strategy, architecture, and digital transformation initiatives.",
    iconName: "TrendingUp",
    features: [
      "Technology strategy & planning",
      "Digital transformation advisory",
      "Technical due diligence",
      "Architecture strategy & design",
    ],
  },
  capabilities: {
    title: "What We Offer",
    intro:
      "Independent strategic guidance for technology decisions, transformations, and investments",
    cardClassName: "hover:shadow-lg transition-shadow",
    items: [
      {
        title: "Technology Strategy & Planning",
        description:
          "Develop comprehensive technology strategies aligned with business objectives. We assess current state, identify opportunities, and create actionable roadmaps.",
        features: [
          "Current state assessment",
          "Strategic roadmap development",
          "Technology portfolio analysis",
          "Investment prioritization",
        ],
      },
      {
        title: "Digital Transformation Advisory",
        description:
          "Guide organizations through complex digital transformation initiatives. We help navigate change management, process optimization, and technology adoption.",
        features: [
          "Transformation planning",
          "Change management strategy",
          "Process optimization",
          "Organizational readiness assessment",
        ],
      },
      {
        title: "Technical Due Diligence",
        description:
          "Comprehensive technical assessments for M&A, investments, and strategic partnerships. Evaluate technology assets, risks, and opportunities.",
        features: [
          "Code quality assessment",
          "Security & compliance review",
          "Scalability analysis",
          "Technical debt evaluation",
        ],
      },
      {
        title: "Architecture Strategy & Design",
        description:
          "Define system architecture strategies that support business goals. We design scalable, secure architectures before implementation begins.",
        features: [
          "Architecture strategy",
          "Technology selection guidance",
          "Integration planning",
          "Migration strategy",
        ],
      },
      {
        title: "Innovation & Ideation",
        description:
          "Facilitate strategic workshops to identify technology opportunities and develop innovation roadmaps aligned with market trends.",
        features: [
          "Innovation workshops",
          "Technology trend analysis",
          "Competitive assessment",
          "Opportunity identification",
        ],
      },
      {
        title: "Technology Governance",
        description:
          "Establish frameworks for technology decision-making, standards, and governance processes to ensure consistent execution.",
        features: [
          "Governance framework design",
          "Decision-making processes",
          "Standards definition",
          "Vendor evaluation",
        ],
      },
    ],
  },
  process: {
    title: "Our Process",
    description: "A proven methodology for delivering exceptional results",
    steps: [
      {
        title: "Discovery & Assessment",
        description:
          "We conduct a comprehensive assessment of your current state, challenges, and opportunities.",
        duration: "1-2 weeks",
      },
      {
        title: "Strategy Development",
        description:
          "Our experts develop a tailored strategy and roadmap aligned with your business objectives.",
        duration: "2-4 weeks",
      },
      {
        title: "Implementation Planning",
        description: "Detailed implementation plans with timelines, resources, and success metrics.",
        duration: "1-2 weeks",
      },
      {
        title: "Ongoing Support",
        description:
          "Continuous guidance and support throughout implementation to ensure successful execution.",
        duration: "Ongoing",
      },
    ],
  },
  faqs: [
    {
      question: "What types of consulting services do you offer?",
      answer:
        "We provide strategic technology consulting focused on planning and decision-making rather than implementation. Services include technology strategy, digital transformation advisory, technical due diligence, architecture strategy, innovation workshops, and technology governance.",
    },
    {
      question: "How long does a consulting engagement typically last?",
      answer:
        "Consulting engagements are typically short to medium-term, ranging from 1-2 weeks for assessments to 1-3 months for comprehensive strategy development. We focus on delivering actionable insights and roadmaps rather than long-term implementation partnerships.",
    },
    {
      question: "Do you work with specific industries?",
      answer:
        "We work across industries including healthcare, finance, retail, manufacturing, and technology. Our consultants have experience in diverse sectors and can adapt to your industry's specific requirements.",
    },
    {
      question: "Can you help with technology selection?",
      answer:
        "Absolutely. We provide unbiased technology recommendations based on your requirements, budget, and long-term goals, helping you make informed decisions.",
    },
  ],
  contact: {
    serviceName: "Consulting & Strategy",
    prefillService: "Consulting & Strategy",
  },
};
