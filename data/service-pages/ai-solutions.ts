import type { ServicePageDefinition } from "./types";

export const aiSolutions: ServicePageDefinition = {
  slug: "ai-solutions",
  breadcrumbLabel: "AI Solutions",
  seo: {
    title: "AI Solutions & Implementation",
    description:
      "Transform your business with cutting-edge AI solutions. Machine learning, NLP, computer vision, and intelligent automation from The Trust Group.",
    keywords: ["AI", "machine learning", "NLP", "computer vision", "automation"],
    url: "/services/ai-solutions",
  },
  schemaServiceType: "AI Solutions & Implementation",
  schemaDescription:
    "Transform your business with cutting-edge AI solutions. From machine learning models to intelligent automation, we help you harness the power of artificial intelligence.",
  hero: {
    title: "AI Solutions & Implementation",
    subtitle: "Artificial Intelligence Services",
    description:
      "Transform your business with cutting-edge AI solutions. From machine learning models to intelligent automation, we help you harness the power of artificial intelligence.",
    iconName: "Brain",
    features: [
      "Custom ML model development",
      "AI integration & automation",
      "Natural language processing",
      "Computer vision solutions",
    ],
  },
  capabilities: {
    title: "What We Offer",
    intro: "Comprehensive AI solutions tailored to your business needs",
    cardClassName: "border-2 hover:border-primary transition-colors",
    items: [
      {
        title: "Machine Learning Model Development",
        description:
          "Custom ML models tailored to your business needs, from predictive analytics to computer vision solutions.",
        features: [
          "Custom model architecture",
          "Data preprocessing & feature engineering",
          "Model training & optimization",
          "Performance monitoring",
        ],
      },
      {
        title: "AI Integration & Automation",
        description:
          "Seamlessly integrate AI capabilities into your existing systems and automate complex business processes.",
        features: ["API integration", "Workflow automation", "System integration", "Legacy system modernization"],
      },
      {
        title: "Natural Language Processing",
        description:
          "Advanced NLP solutions for chatbots, sentiment analysis, document processing, and language understanding.",
        features: ["Chatbot development", "Sentiment analysis", "Document processing", "Language translation"],
      },
      {
        title: "Computer Vision Solutions",
        description: "Image and video analysis solutions for quality control, object detection, and visual recognition.",
        features: ["Image classification", "Object detection", "Facial recognition", "Video analysis"],
      },
      {
        title: "Predictive Analytics",
        description: "Data-driven insights and forecasting to help you make informed business decisions.",
        features: ["Demand forecasting", "Risk analysis", "Customer behavior prediction", "Trend analysis"],
      },
      {
        title: "AI Strategy & Consulting",
        description: "Strategic guidance to help you identify AI opportunities and build a roadmap for implementation.",
        features: ["AI readiness assessment", "Strategy development", "ROI analysis", "Implementation planning"],
      },
    ],
  },
  process: {
    title: "Our AI Development Process",
    description: "A proven methodology for delivering exceptional AI solutions",
    steps: [
      {
        title: "Discovery & Strategy",
        description:
          "We begin by understanding your business goals, challenges, and data landscape. Our team conducts a comprehensive assessment to identify AI opportunities and develop a strategic roadmap.",
        duration: "1-2 weeks",
      },
      {
        title: "Data Preparation",
        description:
          "We clean, preprocess, and prepare your data for AI model training. This includes data collection, quality assessment, feature engineering, and dataset creation.",
        duration: "2-4 weeks",
      },
      {
        title: "Model Development",
        description:
          "Our data scientists develop and train custom AI models using state-of-the-art algorithms. We iterate and optimize until we achieve the desired performance metrics.",
        duration: "4-8 weeks",
      },
      {
        title: "Integration & Deployment",
        description:
          "We integrate the AI solution into your existing systems and deploy it to production. This includes API development, system integration, and infrastructure setup.",
        duration: "2-4 weeks",
      },
      {
        title: "Monitoring & Optimization",
        description:
          "We continuously monitor model performance, gather feedback, and optimize the solution to ensure it delivers ongoing value and adapts to changing conditions.",
        duration: "Ongoing",
      },
    ],
  },
  techStack: {
    title: "Technologies We Use",
    intro: "Industry-leading tools and frameworks for AI development",
    tags: [
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "scikit-learn",
      "Keras",
      "Hugging Face",
      "LangChain",
      "Pandas",
      "NumPy",
      "Python",
      "AWS SageMaker",
      "Google Cloud AI",
      "Azure ML",
      "Docker",
      "Kubernetes",
    ],
  },
  caseStudies: {
    title: "Success Stories",
    intro: "Real results from our AI implementations",
    items: [
      {
        title: "AI-Powered Customer Analytics Platform",
        description:
          "Built a comprehensive analytics platform that processes millions of customer interactions daily, resulting in a 35% increase in conversion rates.",
        results: ["35% increase in conversion", "50% reduction in churn", "Real-time analytics"],
      },
      {
        title: "Intelligent Document Processing System",
        description:
          "Developed an NLP-powered system that automates document processing, reducing manual work by 80% and improving accuracy.",
        results: ["80% time reduction", "95% accuracy", "Scalable to millions of documents"],
      },
    ],
  },
  pricingBand: {
    title: "Custom Pricing for Every Project",
    intro:
      "Every AI project is unique. We provide custom quotes based on your specific requirements, scope, and timeline. Our pricing is transparent and includes all development, integration, and support services.",
    columns: [
      { title: "Discovery", description: "Free consultation and assessment" },
      { title: "Transparent Pricing", description: "Clear quotes with no hidden fees" },
      { title: "Flexible Terms", description: "Payment plans tailored to your needs" },
    ],
  },
  faqs: [
    {
      question: "What types of AI solutions do you offer?",
      answer:
        "We offer a comprehensive range of AI solutions including machine learning model development, natural language processing, computer vision, predictive analytics, AI integration, and strategic consulting. Our team specializes in custom AI solutions tailored to your specific business needs.",
    },
    {
      question: "How long does it take to develop an AI solution?",
      answer:
        "Timeline depends on project complexity and data requirements. Small projects are typically completed in 1-2 months, with some simpler integrations completed in weeks. Larger, complex custom ML models typically take around 3 months, depending on data preparation, model complexity, and integration requirements.",
    },
    {
      question: "Do I need to have data ready before starting?",
      answer:
        "While having data ready is helpful, it's not always necessary. We can help you identify data sources, collect necessary data, and prepare it for AI model training. Our team will assess your data situation during the discovery phase and guide you through the data preparation process.",
    },
    {
      question: "What technologies do you use for AI development?",
      answer:
        "We use industry-leading technologies including TensorFlow, PyTorch, OpenAI API, scikit-learn, and Hugging Face. We also leverage cloud platforms like AWS SageMaker, Google Cloud AI, and Azure ML for scalable AI solutions. The technology stack is chosen based on your specific requirements.",
    },
    {
      question: "How do you ensure AI model accuracy and performance?",
      answer:
        "We follow rigorous testing and validation processes including cross-validation, A/B testing, and continuous monitoring. Our team uses best practices for model evaluation and optimization to ensure high accuracy and performance. We also provide ongoing monitoring and optimization services.",
    },
    {
      question: "Can you integrate AI into our existing systems?",
      answer:
        "Absolutely! We specialize in integrating AI capabilities into existing systems. Whether you're using legacy systems or modern cloud platforms, we can develop APIs and integration solutions that seamlessly connect AI models with your current infrastructure.",
    },
  ],
  contact: {
    serviceName: "AI Solutions",
    prefillService: "AI Solutions & Implementation",
  },
};
