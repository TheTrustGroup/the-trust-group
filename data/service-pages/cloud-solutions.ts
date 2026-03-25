import type { ServicePageDefinition } from "./types";

export const cloudSolutions: ServicePageDefinition = {
  slug: "cloud-solutions",
  breadcrumbLabel: "Cloud Solutions",
  seo: {
    title: "Cloud Solutions",
    description:
      "Cloud migration, deployment, and management on AWS, Azure, and GCP. Infrastructure, security, and optimization from The Trust Group.",
    url: "/services/cloud-solutions",
  },
  schemaServiceType: "Cloud Solutions",
  schemaDescription:
    "Comprehensive cloud infrastructure and deployment services across AWS, Azure, and GCP. We help you migrate, optimize, and manage your cloud infrastructure for maximum efficiency.",
  hero: {
    title: "Cloud Solutions",
    subtitle: "Scalable Cloud Infrastructure",
    description:
      "Comprehensive cloud infrastructure and deployment services across AWS, Azure, and GCP. We help you migrate, optimize, and manage your cloud infrastructure for maximum efficiency.",
    iconName: "Cloud",
    features: [
      "AWS deployment & management",
      "Azure cloud services",
      "Google Cloud Platform (GCP)",
      "Cloud migration & strategy",
    ],
  },
  capabilities: {
    title: "What We Offer",
    intro: "Comprehensive cloud solutions across all major platforms",
    cardClassName: "hover:shadow-lg transition-shadow",
    items: [
      {
        title: "AWS Deployment & Management",
        description:
          "Comprehensive Amazon Web Services solutions including EC2, S3, Lambda, and more for scalable cloud infrastructure.",
        features: ["EC2 & ECS", "S3 & CloudFront", "Lambda functions", "RDS databases"],
      },
      {
        title: "Azure Cloud Services",
        description:
          "Microsoft Azure solutions for enterprise applications, data analytics, and hybrid cloud deployments.",
        features: ["Azure App Service", "Azure Functions", "Azure SQL", "Azure DevOps"],
      },
      {
        title: "Google Cloud Platform",
        description:
          "GCP solutions leveraging Google's infrastructure for machine learning, data analytics, and scalable applications.",
        features: ["Compute Engine", "Cloud Functions", "BigQuery", "Cloud Storage"],
      },
      {
        title: "Cloud Migration & Strategy",
        description:
          "Seamless migration of on-premises systems to the cloud with minimal downtime and maximum efficiency.",
        features: ["Migration planning", "Data migration", "Application migration", "Post-migration support"],
      },
      {
        title: "Infrastructure as Code",
        description:
          "Automated infrastructure provisioning and management using Terraform, CloudFormation, and Ansible.",
        features: ["Terraform", "CloudFormation", "Ansible", "Infrastructure automation"],
      },
      {
        title: "Cloud Security & Compliance",
        description:
          "Comprehensive security measures and compliance frameworks to protect your cloud infrastructure and data.",
        features: ["Security audits", "Compliance frameworks", "Identity management", "Encryption"],
      },
    ],
  },
  process: {
    title: "Our Process",
    description: "A proven methodology for delivering exceptional results",
    steps: [
      {
        title: "Cloud Assessment",
        description:
          "We evaluate your current infrastructure, identify cloud opportunities, and recommend the best cloud strategy.",
        duration: "1-2 weeks",
      },
      {
        title: "Architecture Design",
        description:
          "Design a scalable, secure cloud architecture tailored to your business requirements and budget.",
        duration: "2-3 weeks",
      },
      {
        title: "Migration & Deployment",
        description:
          "Careful migration of applications and data to the cloud with minimal disruption to your business operations.",
        duration: "4-12 weeks",
      },
      {
        title: "Optimization & Support",
        description:
          "Ongoing optimization, monitoring, and support to ensure your cloud infrastructure performs at its best.",
        duration: "Ongoing",
      },
    ],
  },
  faqs: [
    {
      question: "Which cloud platform should I choose?",
      answer:
        "The best platform depends on your specific needs. AWS offers the broadest services, Azure integrates well with Microsoft products, and GCP excels at data analytics and ML. We'll help you choose the right platform.",
    },
    {
      question: "How long does cloud migration take?",
      answer:
        "Timeline depends on infrastructure complexity and migration scope. Small projects are typically completed in 1-2 months, with some simpler migrations completed in weeks. Larger, complex enterprise migrations typically take around 3 months, depending on system complexity and requirements.",
    },
    {
      question: "How much does cloud migration cost?",
      answer:
        "Costs vary based on infrastructure size and complexity. We provide detailed cost estimates during the assessment phase, including migration costs and ongoing cloud expenses.",
    },
    {
      question: "Will there be downtime during migration?",
      answer:
        "We plan migrations to minimize downtime. Most migrations can be done with minimal or zero downtime using blue-green deployments and gradual cutover strategies.",
    },
    {
      question: "Do you provide cloud support and monitoring?",
      answer:
        "Yes, we offer 24/7 cloud monitoring, support, and optimization services to ensure your infrastructure runs smoothly and cost-effectively.",
    },
  ],
  contact: {
    serviceName: "Cloud Solutions",
    prefillService: "Cloud Solutions",
  },
};
