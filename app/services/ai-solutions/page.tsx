"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { Section } from "@/components/ui/section";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceContactForm } from "@/components/services/service-contact-form";
import { TechnologiesSection } from "@/components/technologies";
import { Brain, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const whatWeOffer = [
  {
    title: "Machine Learning Model Development",
    description: "Custom ML models tailored to your business needs, from predictive analytics to computer vision solutions.",
    features: ["Custom model architecture", "Data preprocessing & feature engineering", "Model training & optimization", "Performance monitoring"],
  },
  {
    title: "AI Integration & Automation",
    description: "Seamlessly integrate AI capabilities into your existing systems and automate complex business processes.",
    features: ["API integration", "Workflow automation", "System integration", "Legacy system modernization"],
  },
  {
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for chatbots, sentiment analysis, document processing, and language understanding.",
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
];

const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "We begin by understanding your business goals, challenges, and data landscape. Our team conducts a comprehensive assessment to identify AI opportunities and develop a strategic roadmap.",
    duration: "1-2 weeks",
  },
  {
    title: "Data Preparation",
    description: "We clean, preprocess, and prepare your data for AI model training. This includes data collection, quality assessment, feature engineering, and dataset creation.",
    duration: "2-4 weeks",
  },
  {
    title: "Model Development",
    description: "Our data scientists develop and train custom AI models using state-of-the-art algorithms. We iterate and optimize until we achieve the desired performance metrics.",
    duration: "4-8 weeks",
  },
  {
    title: "Integration & Deployment",
    description: "We integrate the AI solution into your existing systems and deploy it to production. This includes API development, system integration, and infrastructure setup.",
    duration: "2-4 weeks",
  },
  {
    title: "Monitoring & Optimization",
    description: "We continuously monitor model performance, gather feedback, and optimize the solution to ensure it delivers ongoing value and adapts to changing conditions.",
    duration: "Ongoing",
  },
];

const technologies = [
  "TensorFlow", "PyTorch", "OpenAI API", "scikit-learn", "Keras",
  "Hugging Face", "LangChain", "Pandas", "NumPy", "Python",
  "AWS SageMaker", "Google Cloud AI", "Azure ML", "Docker", "Kubernetes"
];

const caseStudies = [
  {
    title: "AI-Powered Customer Analytics Platform",
    description: "Built a comprehensive analytics platform that processes millions of customer interactions daily, resulting in a 35% increase in conversion rates.",
    results: ["35% increase in conversion", "50% reduction in churn", "Real-time analytics"],
  },
  {
    title: "Intelligent Document Processing System",
    description: "Developed an NLP-powered system that automates document processing, reducing manual work by 80% and improving accuracy.",
    results: ["80% time reduction", "95% accuracy", "Scalable to millions of documents"],
  },
];

const faqs = [
  {
    question: "What types of AI solutions do you offer?",
    answer: "We offer a comprehensive range of AI solutions including machine learning model development, natural language processing, computer vision, predictive analytics, AI integration, and strategic consulting. Our team specializes in custom AI solutions tailored to your specific business needs.",
  },
  {
    question: "How long does it take to develop an AI solution?",
    answer: "The timeline varies depending on the complexity of the project. Simple AI integrations can take 4-6 weeks, while complex custom ML models may take 12-16 weeks. We provide detailed timelines during the discovery phase and keep you updated throughout the development process.",
  },
  {
    question: "Do I need to have data ready before starting?",
    answer: "While having data ready is helpful, it's not always necessary. We can help you identify data sources, collect necessary data, and prepare it for AI model training. Our team will assess your data situation during the discovery phase and guide you through the data preparation process.",
  },
  {
    question: "What technologies do you use for AI development?",
    answer: "We use industry-leading technologies including TensorFlow, PyTorch, OpenAI API, scikit-learn, and Hugging Face. We also leverage cloud platforms like AWS SageMaker, Google Cloud AI, and Azure ML for scalable AI solutions. The technology stack is chosen based on your specific requirements.",
  },
  {
    question: "How do you ensure AI model accuracy and performance?",
    answer: "We follow rigorous testing and validation processes including cross-validation, A/B testing, and continuous monitoring. Our team uses best practices for model evaluation and optimization to ensure high accuracy and performance. We also provide ongoing monitoring and optimization services.",
  },
  {
    question: "Can you integrate AI into our existing systems?",
    answer: "Absolutely! We specialize in integrating AI capabilities into existing systems. Whether you're using legacy systems or modern cloud platforms, we can develop APIs and integration solutions that seamlessly connect AI models with your current infrastructure.",
  },
];

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="AI Solutions & Implementation"
        subtitle="Artificial Intelligence Services"
        description="Transform your business with cutting-edge AI solutions. From machine learning models to intelligent automation, we help you harness the power of artificial intelligence."
        icon={Brain}
        features={[
          "Custom ML model development",
          "AI integration & automation",
          "Natural language processing",
          "Computer vision solutions"
        ]}
      />

      {/* What We Offer */}
      <Section variant="default" size="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeOffer.map((offer, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{offer.title}</CardTitle>
                <CardDescription className="text-base">
                  {offer.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Our Process */}
      <ProcessTimeline
        steps={processSteps}
        title="Our AI Development Process"
        description="A proven methodology for delivering exceptional AI solutions"
      />

      {/* Technologies Used */}
      <Section variant="muted" size="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technologies We Use
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry-leading tools and frameworks for AI development
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-lg bg-background border-2 border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <Section variant="default" size="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from our AI implementations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <CardDescription className="text-base">
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span className="text-foreground font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing Approach */}
      <Section variant="primary" size="default" className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Custom Pricing for Every Project
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every AI project is unique. We provide custom quotes based on your specific requirements, 
            scope, and timeline. Our pricing is transparent and includes all development, integration, 
            and support services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="font-bold text-lg mb-2 text-foreground">Discovery</h3>
              <p className="text-muted-foreground text-sm">Free consultation and assessment</p>
            </div>
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="font-bold text-lg mb-2 text-foreground">Transparent Pricing</h3>
              <p className="text-muted-foreground text-sm">Clear quotes with no hidden fees</p>
            </div>
            <div className="p-6 rounded-xl bg-background border-2 border-border">
              <h3 className="font-bold text-lg mb-2 text-foreground">Flexible Terms</h3>
              <p className="text-muted-foreground text-sm">Payment plans tailored to your needs</p>
            </div>
          </div>
          <Button size="lg" className="group">
            Get a Custom Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Section>

      {/* FAQ Section */}
      <ServiceFAQ faqs={faqs} />

      {/* Contact Form */}
      <ServiceContactForm
        serviceName="AI Solutions"
        prefillService="AI Solutions & Implementation"
      />
    </main>
  );
}

