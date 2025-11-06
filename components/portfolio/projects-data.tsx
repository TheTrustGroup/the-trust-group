import type { Project } from "./project-card";

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "ai", name: "AI Projects" },
  { id: "web", name: "Web Apps" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "enterprise", name: "Enterprise" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Customer Analytics Platform",
    description: "Advanced machine learning platform that analyzes customer behavior patterns and provides actionable insights for e-commerce businesses.",
    category: "ai",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS", "Docker"],
    featured: true,
    caseStudyUrl: "/portfolio/ai-customer-analytics",
    longDescription: "Built a comprehensive AI-powered analytics platform that processes millions of customer interactions daily. The system uses advanced machine learning models to predict customer behavior, optimize pricing strategies, and improve conversion rates.",
    client: "E-Commerce Leader",
    year: "2024",
    results: [
      "35% increase in conversion rates",
      "50% reduction in customer churn",
      "Real-time analytics with <100ms latency",
      "Processes 10M+ events daily"
    ],
  },
  {
    id: "2",
    title: "Enterprise SaaS Management Platform",
    description: "Comprehensive SaaS platform for managing enterprise workflows, team collaboration, and business intelligence with real-time analytics.",
    category: "enterprise",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Azure", "Kubernetes"],
    featured: true,
    caseStudyUrl: "/portfolio/enterprise-saas",
    longDescription: "Developed a scalable enterprise SaaS platform serving 500+ companies. Features include advanced workflow automation, real-time collaboration tools, and comprehensive business intelligence dashboards.",
    client: "Fortune 500 Company",
    year: "2024",
    results: [
      "500+ enterprise clients onboarded",
      "99.9% uptime SLA achieved",
      "50% reduction in operational costs",
      "Scalable to 1M+ users"
    ],
  },
  {
    id: "3",
    title: "Cross-Platform Mobile Banking App",
    description: "Secure, feature-rich mobile banking application with biometric authentication, real-time transactions, and AI-powered fraud detection.",
    category: "mobile",
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "AWS", "TensorFlow"],
    featured: false,
    caseStudyUrl: "/portfolio/mobile-banking",
    longDescription: "Created a secure mobile banking application for iOS and Android with advanced security features. Includes real-time transaction processing, biometric authentication, and AI-powered fraud detection.",
    client: "Regional Bank",
    year: "2023",
    results: [
      "100K+ active users",
      "4.8/5 app store rating",
      "Zero security breaches",
      "99.5% transaction success rate"
    ],
  },
  {
    id: "4",
    title: "E-Commerce Platform with AI Recommendations",
    description: "Modern e-commerce platform with personalized AI product recommendations, advanced search, and seamless checkout experience.",
    category: "web",
    technologies: ["Next.js", "React", "Python", "PostgreSQL", "Redis", "OpenAI API"],
    featured: false,
    caseStudyUrl: "/portfolio/ecommerce-ai",
    longDescription: "Built a high-performance e-commerce platform with AI-powered product recommendations. Features include advanced search functionality, personalized shopping experiences, and seamless payment integration.",
    client: "Retail Chain",
    year: "2023",
    results: [
      "40% increase in average order value",
      "60% improvement in search relevance",
      "2x faster page load times",
      "25% increase in customer retention"
    ],
  },
];

