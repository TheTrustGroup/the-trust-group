import type { ServicePageDefinition } from "./types";

export const customSoftware: ServicePageDefinition = {
  slug: "custom-software",
  breadcrumbLabel: "Custom Software Development",
  seo: {
    title: "Custom Software Development",
    description:
      "Tailored software solutions for your business. Enterprise applications, SaaS products, API development, and legacy system modernization from The Trust Group.",
    keywords: ["custom software", "enterprise software", "SaaS development", "API development", "software solutions"],
    url: "/services/custom-software",
  },
  schemaServiceType: "Custom Software Development",
  schemaDescription:
    "We build scalable, secure, and maintainable software solutions designed to meet your unique business requirements.",
  hero: {
    title: "Custom Software Development",
    subtitle: "Tailored Solutions for Your Business",
    description:
      "We build scalable, secure, and maintainable software solutions designed to meet your unique business requirements. From enterprise applications to SaaS products, we deliver excellence.",
    iconName: "Code",
    features: [
      "Enterprise software solutions",
      "SaaS product development",
      "API development & integration",
      "Legacy system modernization",
    ],
  },
  capabilities: {
    title: "What We Offer",
    intro: "Comprehensive custom software development services tailored to your needs",
    cardClassName: "hover:shadow-lg transition-shadow",
    items: [
      {
        title: "Enterprise Software Solutions",
        description:
          "Scalable enterprise applications designed to handle complex business processes and large user bases.",
        features: ["Custom ERP systems", "CRM development", "Business intelligence tools", "Workflow automation"],
      },
      {
        title: "SaaS Product Development",
        description:
          "Cloud-based software-as-a-service solutions that scale with your business and provide recurring revenue streams.",
        features: ["Multi-tenant architecture", "Subscription management", "API-first design", "Scalable infrastructure"],
      },
      {
        title: "API Development & Integration",
        description:
          "Robust APIs and seamless integrations to connect your systems with third-party services and platforms.",
        features: ["RESTful API design", "GraphQL APIs", "Microservices architecture", "Third-party integrations"],
      },
      {
        title: "Legacy System Modernization",
        description:
          "Transform outdated systems into modern, efficient solutions while preserving critical business logic.",
        features: ["System migration", "Code refactoring", "Technology upgrades", "Data migration"],
      },
      {
        title: "Microservices Architecture",
        description:
          "Build scalable, maintainable applications using microservices architecture for better flexibility and performance.",
        features: ["Service decomposition", "Container orchestration", "API gateway", "Service mesh"],
      },
      {
        title: "DevOps & CI/CD Pipelines",
        description:
          "Automated deployment pipelines and infrastructure management for faster, more reliable releases.",
        features: ["CI/CD setup", "Infrastructure automation", "Monitoring & logging", "Security scanning"],
      },
    ],
  },
  process: {
    title: "Our Process",
    description: "A proven methodology for delivering exceptional results",
    steps: [
      {
        title: "Requirements Analysis",
        description:
          "We work closely with you to understand your business needs, technical requirements, and success criteria.",
        duration: "1-2 weeks",
      },
      {
        title: "Architecture Design",
        description:
          "Our architects design a scalable, secure system architecture tailored to your specific requirements.",
        duration: "1-2 weeks",
      },
      {
        title: "Development & Testing",
        description:
          "Agile development process with continuous testing, code reviews, and regular demos to ensure quality.",
        duration: "8-16 weeks",
      },
      {
        title: "Deployment & Support",
        description:
          "Smooth deployment to production with ongoing support, monitoring, and maintenance services.",
        duration: "Ongoing",
      },
    ],
  },
  faqs: [
    {
      question: "What technologies do you use for custom software development?",
      answer:
        "We use modern, industry-standard technologies including React, Node.js, Python, Java, .NET, and cloud platforms like AWS, Azure, and GCP. The technology stack is chosen based on your specific requirements.",
    },
    {
      question: "How long does it take to develop custom software?",
      answer:
        "Timeline depends on project complexity and requirements. Small projects are typically completed in 1-2 months, with some simpler applications completed in weeks. Larger, complex enterprise solutions typically take around 3 months, depending on scope and requirements.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, we offer comprehensive maintenance and support packages including bug fixes, security updates, feature enhancements, and 24/7 monitoring.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Absolutely. We specialize in system integration and can connect your new software with existing ERP, CRM, databases, and third-party services through APIs and integration frameworks.",
    },
  ],
  contact: {
    serviceName: "Custom Software Development",
    prefillService: "Custom Software Development",
  },
};
