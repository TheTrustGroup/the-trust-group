"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { Section } from "@/components/ui/section";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceContactForm } from "@/components/services/service-contact-form";
import { Code, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const whatWeOffer = [
  {
    title: "Enterprise Software Solutions",
    description: "Scalable enterprise applications designed to handle complex business processes and large user bases.",
    features: ["Custom ERP systems", "CRM development", "Business intelligence tools", "Workflow automation"],
  },
  {
    title: "SaaS Product Development",
    description: "Cloud-based software-as-a-service solutions that scale with your business and provide recurring revenue streams.",
    features: ["Multi-tenant architecture", "Subscription management", "API-first design", "Scalable infrastructure"],
  },
  {
    title: "API Development & Integration",
    description: "Robust APIs and seamless integrations to connect your systems with third-party services and platforms.",
    features: ["RESTful API design", "GraphQL APIs", "Microservices architecture", "Third-party integrations"],
  },
  {
    title: "Legacy System Modernization",
    description: "Transform outdated systems into modern, efficient solutions while preserving critical business logic.",
    features: ["System migration", "Code refactoring", "Technology upgrades", "Data migration"],
  },
  {
    title: "Microservices Architecture",
    description: "Build scalable, maintainable applications using microservices architecture for better flexibility and performance.",
    features: ["Service decomposition", "Container orchestration", "API gateway", "Service mesh"],
  },
  {
    title: "DevOps & CI/CD Pipelines",
    description: "Automated deployment pipelines and infrastructure management for faster, more reliable releases.",
    features: ["CI/CD setup", "Infrastructure automation", "Monitoring & logging", "Security scanning"],
  },
];

const processSteps = [
  {
    title: "Requirements Analysis",
    description: "We work closely with you to understand your business needs, technical requirements, and success criteria.",
    duration: "1-2 weeks",
  },
  {
    title: "Architecture Design",
    description: "Our architects design a scalable, secure system architecture tailored to your specific requirements.",
    duration: "1-2 weeks",
  },
  {
    title: "Development & Testing",
    description: "Agile development process with continuous testing, code reviews, and regular demos to ensure quality.",
    duration: "8-16 weeks",
  },
  {
    title: "Deployment & Support",
    description: "Smooth deployment to production with ongoing support, monitoring, and maintenance services.",
    duration: "Ongoing",
  },
];

const faqs = [
  {
    question: "What technologies do you use for custom software development?",
    answer: "We use modern, industry-standard technologies including React, Node.js, Python, Java, .NET, and cloud platforms like AWS, Azure, and GCP. The technology stack is chosen based on your specific requirements.",
  },
  {
    question: "How long does it take to develop custom software?",
    answer: "Development timelines vary based on project complexity. Simple applications can take 8-12 weeks, while enterprise solutions may take 6-12 months. We provide detailed timelines during the planning phase.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance and support packages including bug fixes, security updates, feature enhancements, and 24/7 monitoring.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely. We specialize in system integration and can connect your new software with existing ERP, CRM, databases, and third-party services through APIs and integration frameworks.",
  },
];

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Custom Software Development"
        subtitle="Tailored Solutions for Your Business"
        description="We build scalable, secure, and maintainable software solutions designed to meet your unique business requirements. From enterprise applications to SaaS products, we deliver excellence."
        icon={Code}
        features={[
          "Enterprise software solutions",
          "SaaS product development",
          "API development & integration",
          "Legacy system modernization",
        ]}
      />

      <Section variant="default" size="default">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              What We Offer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive custom software development services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whatWeOffer.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <ProcessTimeline steps={processSteps} />
      <ServiceFAQ faqs={faqs} />
      <ServiceContactForm serviceName="Custom Software Development" />
    </div>
  );
}

