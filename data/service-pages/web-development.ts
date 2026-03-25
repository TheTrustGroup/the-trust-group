import type { ServicePageDefinition } from "./types";

export const webDevelopment: ServicePageDefinition = {
  slug: "web-development",
  breadcrumbLabel: "Web Development",
  seo: {
    title: "Web Development",
    description:
      "Modern websites and web applications with responsive design, performance optimization, and SEO. Built by The Trust Group.",
    url: "/services/web-development",
  },
  schemaServiceType: "Web Development",
  schemaDescription:
    "Modern, responsive websites and web applications that combine stunning design with cutting-edge functionality. From sophisticated corporate sites to complex e-commerce platforms.",
  hero: {
    title: "Web Development",
    subtitle: "Modern Websites & Web Applications",
    description:
      "Modern, responsive websites and web applications that combine stunning design with cutting-edge functionality. From sophisticated corporate sites to complex e-commerce platforms.",
    iconName: "Globe",
    features: [
      "Sophisticated website development",
      "E-commerce solutions",
      "Web application development",
      "Progressive Web Apps",
    ],
  },
  capabilities: {
    title: "What We Offer",
    intro: "Comprehensive web development services for all your digital needs",
    cardClassName: "hover:shadow-lg transition-shadow",
    items: [
      {
        title: "Sophisticated Website Development",
        description:
          "Modern, responsive websites that combine stunning design with cutting-edge functionality and optimal performance.",
        features: ["Responsive design", "Modern frameworks", "Performance optimization", "SEO-friendly"],
      },
      {
        title: "E-commerce Solutions",
        description:
          "Full-featured online stores with secure payment processing, inventory management, and customer portals.",
        features: ["Shopping cart systems", "Payment integration", "Inventory management", "Order tracking"],
      },
      {
        title: "Web Application Development",
        description:
          "Complex web applications with advanced features, real-time capabilities, and scalable architectures.",
        features: [
          "Single Page Applications",
          "Real-time features",
          "User authentication",
          "Data visualization",
        ],
      },
      {
        title: "Progressive Web Apps",
        description: "Web applications that work like native apps with offline capabilities and push notifications.",
        features: ["Offline functionality", "Push notifications", "App-like experience", "Install prompts"],
      },
      {
        title: "Performance Optimization",
        description:
          "Optimize your website for speed, SEO, and user experience to maximize conversions and engagement.",
        features: ["Page speed optimization", "Core Web Vitals", "Image optimization", "Caching strategies"],
      },
      {
        title: "SEO & Accessibility",
        description:
          "Ensure your website is discoverable by search engines and accessible to all users, including those with disabilities.",
        features: ["SEO optimization", "WCAG compliance", "Semantic HTML", "Structured data"],
      },
    ],
  },
  process: {
    title: "Our Process",
    description: "A proven methodology for delivering exceptional results",
    steps: [
      {
        title: "Planning & Strategy",
        description:
          "We analyze your goals, target audience, and requirements to create a comprehensive web development strategy.",
        duration: "1-2 weeks",
      },
      {
        title: "Design & Prototyping",
        description:
          "Our designers create beautiful, user-friendly designs and interactive prototypes for your approval.",
        duration: "2-3 weeks",
      },
      {
        title: "Development & Testing",
        description:
          "Agile development with continuous testing, quality assurance, and regular client reviews.",
        duration: "3–8 weeks (small) · 8–20 weeks (enterprise)",
      },
      {
        title: "Launch & Optimization",
        description:
          "Smooth deployment, performance monitoring, and ongoing optimization to ensure your website performs at its best.",
        duration: "Ongoing",
      },
    ],
  },
  faqs: [
    {
      question: "What web technologies do you use?",
      answer:
        "We use modern technologies including React, Next.js, Vue.js, Node.js, and various CMS platforms. The technology stack is chosen based on your specific needs and requirements.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Timeline depends on complexity. Small projects are typically completed in 1-2 months, with some simpler sites completed in weeks. Larger, complex web applications typically take around 3 months, depending on requirements and complexity.",
    },
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes, we offer maintenance packages including security updates, content updates, performance monitoring, and technical support.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. All our websites are fully responsive and optimized for mobile, tablet, and desktop devices to ensure the best user experience across all platforms.",
    },
  ],
  contact: {
    serviceName: "Web Development",
    prefillService: "Web Development",
  },
};
