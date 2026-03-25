import type { ServicePageDefinition } from "./types";

export const defenseTechnology: ServicePageDefinition = {
  slug: "defense-technology",
  breadcrumbLabel: "Defense Technology",
  seo: {
    title: "Defense Technology Solutions",
    description:
      "Mission-critical systems for defense and intelligence operations. Secure, compliant, and battle-tested software solutions that protect national interests and support defense operations worldwide.",
    url: "/services/defense-technology",
  },
  schemaServiceType: "Defense Technology Solutions",
  schemaDescription:
    "Mission-critical systems for defense and intelligence operations. Secure, compliant, and battle-tested software solutions.",
  hero: {
    title: "Defense Technology Solutions",
    subtitle: "Mission-Critical Defense Systems",
    description:
      "Building mission-critical software systems that protect national interests and support defense operations. Secure. Compliant. Battle-tested.",
    iconName: "Shield",
    features: [
      "Cybersecurity & Threat Detection",
      "AI-Powered Defense Systems",
      "Secure Communication Platforms",
      "Intelligence Data Analytics",
    ],
  },
  whySection: {
    title: "Why Software Engineers are Central to Defense Tech",
    intro:
      "Modern defense operations depend entirely on sophisticated software systems. From autonomous vehicles to intelligence analysis, software engineers are the architects of national security infrastructure.",
    items: [
      {
        number: "01",
        title: "Cybersecurity & Threat Defense",
        description:
          "Protecting critical infrastructure from cyber threats requires advanced software engineering. We build intrusion detection systems, threat intelligence platforms, and secure communication networks.",
      },
      {
        number: "02",
        title: "AI & Autonomous Systems",
        description:
          "Modern defense relies on AI for autonomous vehicles, predictive analytics, and decision support. Our engineers develop machine learning models for threat detection, target recognition, and mission planning.",
      },
      {
        number: "03",
        title: "Intelligence & Data Analytics",
        description:
          "Processing massive amounts of intelligence data requires sophisticated software. We build analytics platforms that turn raw data into actionable intelligence for decision-makers.",
      },
      {
        number: "04",
        title: "Secure Communications",
        description:
          "Military operations depend on secure, reliable communications. We develop encrypted communication systems, secure messaging platforms, and classified data management solutions.",
      },
    ],
  },
  capabilities: {
    title: "Defense Technology Capabilities",
    intro: "Comprehensive defense solutions tailored to mission-critical requirements",
    sectionVariant: "muted",
    cardClassName: "border-2 hover:border-primary transition-colors",
    items: [
      {
        title: "Cybersecurity Solutions",
        description:
          "Protecting critical infrastructure from cyber threats with advanced intrusion detection systems, threat intelligence platforms, and secure communication networks.",
        features: [
          "Intrusion Detection & Prevention Systems",
          "Threat Intelligence Platforms",
          "Security Information & Event Management (SIEM)",
          "Zero Trust Architecture Implementation",
          "Vulnerability Assessment & Penetration Testing",
          "Security Operations Center (SOC) Development",
        ],
      },
      {
        title: "AI Defense Systems",
        description:
          "Modern defense relies on AI for autonomous vehicles, predictive analytics, and decision support. We develop machine learning models for threat detection, target recognition, and mission planning.",
        features: [
          "Computer Vision for Target Recognition",
          "Predictive Threat Analysis",
          "Autonomous System Integration",
          "Natural Language Processing for Intelligence",
          "Decision Support Systems",
          "Anomaly Detection & Pattern Recognition",
        ],
      },
      {
        title: "Secure Communications",
        description:
          "Military operations depend on secure, reliable communications. We develop encrypted communication systems, secure messaging platforms, and classified data management solutions.",
        features: [
          "End-to-End Encrypted Messaging",
          "Classified Network Infrastructure",
          "Secure Voice & Video Conferencing",
          "Tactical Communication Systems",
          "Command & Control Platforms",
          "Cross-Domain Solutions",
        ],
      },
      {
        title: "Intelligence Analytics",
        description:
          "Processing massive amounts of intelligence data requires sophisticated software. We build analytics platforms that turn raw data into actionable intelligence for decision-makers.",
        features: [
          "Big Data Processing & Analysis",
          "Intelligence Fusion Platforms",
          "Geospatial Intelligence (GEOINT) Systems",
          "Signals Intelligence (SIGINT) Processing",
          "Open Source Intelligence (OSINT) Collection",
          "Predictive Analytics & Forecasting",
        ],
      },
      {
        title: "Mission Planning & Operations",
        description:
          "Comprehensive software solutions for mission planning, logistics management, training simulations, and operational dashboards.",
        features: [
          "Mission Planning Software",
          "Logistics & Supply Chain Management",
          "Training & Simulation Systems",
          "Asset Tracking & Management",
          "Operational Dashboards",
          "After-Action Review Systems",
        ],
      },
      {
        title: "Secure Cloud Infrastructure",
        description:
          "Government cloud deployment, classified cloud infrastructure, and secure DevSecOps pipelines for defense operations.",
        features: [
          "Government Cloud (GovCloud) Deployment",
          "Classified Cloud Infrastructure",
          "Impact Level 4/5/6 Compliance",
          "Hybrid Cloud Architecture",
          "Disaster Recovery & Business Continuity",
          "Secure DevSecOps Pipelines",
        ],
      },
    ],
  },
  compliance: {
    title: "Compliance & Security Standards",
    intro:
      "We adhere to the highest security standards and maintain certifications required for defense contracting.",
    items: [
      {
        title: "FedRAMP",
        description: "Federal Risk and Authorization Management Program compliance for cloud services",
      },
      {
        title: "NIST 800-171",
        description: "Protecting Controlled Unclassified Information (CUI) in non-federal systems",
      },
      {
        title: "CMMC",
        description: "Cybersecurity Maturity Model Certification for defense contractors",
      },
      {
        title: "ITAR",
        description: "International Traffic in Arms Regulations compliance",
      },
      {
        title: "ISO 27001",
        description: "Information Security Management System certification",
      },
      {
        title: "SOC 2 Type II",
        description: "Service Organization Control for security, availability, and confidentiality",
      },
    ],
  },
  process: {
    title: "Our Defense Technology Development Process",
    description: "A proven methodology for delivering secure, mission-critical systems",
    steps: [
      {
        title: "Requirements & Security Assessment",
        description:
          "We begin with a comprehensive security assessment and requirements analysis. Our team evaluates security clearance needs, compliance requirements, and mission-critical specifications.",
        duration: "2-3 weeks",
      },
      {
        title: "Architecture & Design",
        description:
          "We design secure, scalable architectures that meet defense standards. This includes security architecture, threat modeling, and compliance planning.",
        duration: "3-4 weeks",
      },
      {
        title: "Secure Development",
        description:
          "Our engineers develop mission-critical systems following secure coding practices, security testing, and continuous security monitoring throughout development.",
        duration: "8-16 weeks",
      },
      {
        title: "Security Testing & Validation",
        description:
          "Rigorous security testing including penetration testing, vulnerability assessments, and compliance validation to ensure systems meet defense standards.",
        duration: "2-4 weeks",
      },
      {
        title: "Deployment & Support",
        description:
          "Secure deployment to classified environments with ongoing 24/7 mission support, security monitoring, and continuous compliance validation.",
        duration: "Ongoing",
      },
    ],
  },
  techStack: {
    title: "Technologies We Use",
    intro: "Industry-leading tools and frameworks for defense technology development",
    tags: [
      "Secure Cloud Platforms",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Ansible",
      "Python",
      "Java",
      "C++",
      "Rust",
      "Go",
      "TensorFlow",
      "PyTorch",
      "Elasticsearch",
      "Kafka",
      "PostgreSQL",
      "AWS GovCloud",
      "Azure Government",
      "Google Cloud Platform",
      "Red Hat",
      "Splunk",
    ],
  },
  classifiedNote: {
    title: "Classified Projects",
    body:
      "Many of our defense projects are classified. The examples shown represent our unclassified work. For specific capabilities inquiries, please contact our defense division directly.",
    ctaLabel: "Contact Defense Division",
    ctaHref: "/contact",
  },
  faqs: [
    {
      question: "What security clearances do your team members hold?",
      answer:
        "Our team includes engineers with various security clearances appropriate for defense contracting. We work with clients to ensure all team members meet clearance requirements for specific projects. For highly classified work, we can provide team members with the necessary clearances.",
    },
    {
      question: "What compliance standards do you meet?",
      answer:
        "We adhere to multiple defense and security compliance standards including FedRAMP, NIST 800-171, CMMC, ITAR, ISO 27001, and SOC 2 Type II. Our compliance team ensures all systems meet or exceed required standards.",
    },
    {
      question: "Can you work with classified information?",
      answer:
        "Yes, we have experience working with classified systems and can provide team members with appropriate security clearances. We follow strict protocols for handling classified information and can work in secure facilities as required.",
    },
    {
      question: "What types of defense systems have you built?",
      answer:
        "We've developed systems for cybersecurity, threat detection, secure communications, intelligence analytics, mission planning, and autonomous systems. Many of our defense projects are classified, but we can discuss our capabilities and approach during a secure consultation.",
    },
    {
      question: "How do you ensure system security and reliability?",
      answer:
        "We follow defense-grade security practices including secure coding standards, continuous security testing, threat modeling, penetration testing, and rigorous validation. All systems undergo comprehensive security audits before deployment.",
    },
    {
      question: "What is your approach to mission-critical systems?",
      answer:
        "We design for reliability, security, and performance from the ground up. Our systems include redundancy, failover capabilities, continuous monitoring, and 24/7 support. We understand that defense systems must operate flawlessly under all conditions.",
    },
  ],
  contact: {
    serviceName: "Defense Technology",
    prefillService: "Defense Technology",
  },
};
