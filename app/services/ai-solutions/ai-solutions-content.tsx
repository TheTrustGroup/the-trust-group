"use client";

import Image from "next/image";
import { ServiceHero } from "@/components/services/service-hero";
import { Section } from "@/components/ui/section";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceContactForm } from "@/components/services/service-contact-form";
import { TechnologiesSection } from "@/components/technologies";
import { Brain, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui";
import Link from "next/link";

const whatWeOffer = [
  {
    title: "Machine Learning Model Development",
    description: "Custom ML models tailored to your business needs, from predictive analytics to computer vision solutions.",
    features: ["Custom model architecture", "Data preprocessing & feature engineering", "Model training & optimization", "Performance monitoring"],
  },
  {
    title: "AI Integration & Automation",
    description: "Seamlessly integrate AI capabilities into your existing systems and automate complex workflows.",
    features: ["API development & integration", "Workflow automation", "Scalable deployment", "Real-time processing"],
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Unlock insights from text data with advanced NLP techniques for sentiment analysis, chatbots, and more.",
    features: ["Sentiment analysis", "Text summarization", "Chatbot development", "Language translation"],
  },
  {
    title: "Computer Vision Solutions",
    description: "Implement cutting-edge computer vision for object detection, facial recognition, and image analysis.",
    features: ["Object detection & tracking", "Image recognition", "Facial recognition", "Video analytics"],
  },
  {
    title: "Predictive Analytics",
    description: "Leverage data to forecast future trends, identify opportunities, and make data-driven decisions.",
    features: ["Demand forecasting", "Risk assessment", "Customer churn prediction", "Fraud detection"],
  },
  {
    title: "AI Strategy & Consulting",
    description: "Develop a robust AI strategy, identify use cases, and guide your digital transformation journey.",
    features: ["AI roadmap development", "Feasibility studies", "Ethical AI guidelines", "Team training"],
  },
];

const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "We begin by understanding your business goals, data landscape, and identifying key AI opportunities.",
    duration: "1-2 Weeks",
  },
  {
    title: "Data Preparation",
    description: "Collecting, cleaning, and transforming your data to ensure it's ready for model training and analysis.",
    duration: "2-4 Weeks",
  },
  {
    title: "Model Development",
    description: "Designing, training, and fine-tuning custom machine learning models to achieve optimal performance.",
    duration: "4-8 Weeks",
  },
  {
    title: "Integration & Deployment",
    description: "Seamlessly integrating AI solutions into your existing infrastructure and deploying them for real-world use.",
    duration: "2-4 Weeks",
  },
  {
    title: "Monitoring & Optimization",
    description: "Continuous monitoring of AI model performance, retraining, and optimization to ensure long-term value.",
    duration: "Ongoing",
  },
];

const aiTechnologies = [
  "TensorFlow", "PyTorch", "OpenAI API", "scikit-learn", "Keras",
  "Hugging Face", "LangChain", "Pandas", "NumPy", "Python",
  "AWS SageMaker", "Google Cloud AI", "Azure ML", "Docker", "Kubernetes"
];

const caseStudies = [
  {
    title: "AI-Powered Customer Analytics Platform",
    description: "Developed a platform that uses machine learning to analyze customer behavior, predict churn, and personalize recommendations.",
    results: [
      "35% increase in customer conversion rates",
      "50% reduction in customer churn",
      "Real-time insights into customer segments"
    ],
    image: "/images/ai-case-study-1.jpg",
    link: "/work"
  },
  {
    title: "Intelligent Document Processing System",
    description: "Implemented an AI-driven system to automate the extraction and processing of data from various document types, significantly reducing manual effort.",
    results: [
      "80% reduction in manual data entry time",
      "95% accuracy in data extraction",
      "Scalable to process millions of documents annually"
    ],
    image: "/images/ai-case-study-2.jpg",
    link: "/work"
  },
];

const faqs = [
  {
    question: "What types of AI solutions do you offer?",
    answer: "We offer a wide range of AI solutions including machine learning model development, AI integration and automation, natural language processing (NLP), computer vision, predictive analytics, and AI strategy consulting.",
  },
  {
    question: "How long does it take to develop an AI solution?",
    answer: "The timeline varies greatly depending on the complexity of the project, data availability, and specific requirements. A typical project can range from 8 weeks to several months. We provide a detailed timeline after the discovery phase.",
  },
  {
    question: "Do I need to have data ready before starting an AI project?",
    answer: "While having clean, organized data is beneficial, it's not strictly required to start. We offer data strategy and preparation services to help you collect, clean, and structure your data for optimal AI model performance.",
  },
  {
    question: "What technologies do you use for AI development?",
    answer: "We leverage industry-leading technologies such as TensorFlow, PyTorch, OpenAI API, scikit-learn, Keras, Hugging Face, and cloud AI platforms like AWS SageMaker, Google Cloud AI, and Azure ML.",
  },
  {
    question: "How do you ensure AI model accuracy and performance?",
    answer: "Our process includes rigorous data validation, extensive model training and testing, hyperparameter tuning, and continuous monitoring post-deployment. We also implement MLOps practices to maintain and improve model performance over time.",
  },
  {
    question: "Can you integrate AI into our existing systems?",
    answer: "Yes, our expertise includes seamlessly integrating AI solutions into your current infrastructure, whether it's through APIs, custom connectors, or embedding models directly into your applications.",
  },
];

export function AISolutionsContent() {
  return (
    <main className="min-h-screen">
      <ServiceHero
        title="AI Solutions & Implementation"
        subtitle="Artificial Intelligence Services"
        description="Harness the power of artificial intelligence to transform your business operations, drive innovation, and gain a competitive edge."
        iconName="Brain"
        features={[
          "Custom ML Model Development",
          "AI Integration & Automation",
          "Predictive Analytics",
          "Natural Language Processing",
          "Computer Vision",
          "AI Strategy & Consulting",
        ]}
      />

      {/* What We Offer Section */}
      <Section variant="default" size="default">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What We Offer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI services cover the entire lifecycle, from strategy to deployment and optimization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whatWeOffer.map((item, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 100} className="p-0">
              <Card className="h-full border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {item.description}
                  </CardDescription>
                  <ul className="space-y-2 text-muted-foreground">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Our Process Section */}
      <ProcessTimeline
        steps={processSteps}
        title="Our AI Development Process"
        description="We follow a structured and agile approach to deliver robust and effective AI solutions."
      />

      {/* Technologies Used Section */}
      <Section variant="muted" size="default">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Key Technologies We Master
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge tools and frameworks to build intelligent systems.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {aiTechnologies.map((tech, index) => (
            <AnimatedSection key={index} animation="fade-in" delay={index * 50} className="p-0">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md">
                {tech}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Case Studies/Examples Section */}
      <Section variant="default" size="default">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            AI Case Studies & Success Stories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how we&apos;ve helped businesses achieve remarkable results with AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((cs, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 150} className="p-0">
              <Card className="h-full overflow-hidden border-2 hover:border-accent transition-colors group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={cs.image || "https://via.placeholder.com/600x300?text=AI+Case+Study"}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground group-hover:text-accent transition-colors">
                    {cs.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {cs.description}
                  </CardDescription>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Key Results:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {cs.results.map((result, rIndex) => (
                      <li key={rIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="mt-4 pl-0 text-primary group/link" asChild>
                    <Link href={cs.link}>
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Pricing Approach Section */}
      <Section variant="primary" size="default" className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            Custom Pricing for Every Project
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            We believe in transparent and flexible pricing tailored to your specific AI solution needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <AnimatedSection animation="slide-up" delay={0} className="p-0">
            <Card className="bg-primary-light text-foreground border-primary/30 h-full">
              <CardHeader>
                <Brain className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">Free Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Start with a complimentary consultation to define your AI project scope and objectives.
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={100} className="p-0">
            <Card className="bg-primary-light text-foreground border-primary/30 h-full">
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Receive a detailed, no-hidden-fees quote based on your project&apos;s complexity and features.
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={200} className="p-0">
            <Card className="bg-primary-light text-foreground border-primary/30 h-full">
              <CardHeader>
                <ArrowRight className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">Flexible Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We offer various engagement models to suit your budget and project timeline.
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="secondary" asChild>
            <Link href="#contact-form">
              Get a Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* FAQ Section */}
      <ServiceFAQ faqs={faqs} />

      {/* Service Specific Contact Form */}
      <ServiceContactForm serviceName="AI Solutions" prefillService="AI Solutions & Implementation" />
    </main>
  );
}

