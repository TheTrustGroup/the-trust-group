"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { Section } from "@/components/ui/section";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceContactForm } from "@/components/services/service-contact-form";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const whatWeOffer = [
  {
    title: "Digital Transformation Strategy",
    description: "Comprehensive strategies to guide your organization through digital transformation and technology adoption.",
    features: ["Transformation roadmap", "Change management", "Technology selection", "ROI analysis"],
  },
  {
    title: "Technology Advisory Services",
    description: "Expert guidance on technology decisions, architecture, and best practices to drive business success.",
    features: ["Technology assessment", "Architecture reviews", "Best practices", "Risk analysis"],
  },
  {
    title: "Architecture Consulting",
    description: "Design scalable, maintainable system architectures that align with your business goals and technical requirements.",
    features: ["System architecture", "Microservices design", "Cloud architecture", "Integration patterns"],
  },
  {
    title: "Technical Due Diligence",
    description: "Comprehensive technical assessments for M&A, investments, and strategic partnerships.",
    features: ["Code reviews", "Security audit", "Scalability assessment", "Technical debt analysis"],
  },
  {
    title: "Innovation Workshops",
    description: "Interactive workshops to identify innovation opportunities and develop actionable technology strategies.",
    features: ["Design thinking", "Ideation sessions", "Prototyping", "Roadmap development"],
  },
  {
    title: "Technology Roadmap Planning",
    description: "Strategic roadmaps that align technology initiatives with business objectives and budget constraints.",
    features: ["Strategic planning", "Priority setting", "Timeline development", "Resource planning"],
  },
];

const processSteps = [
  {
    title: "Discovery & Assessment",
    description: "We conduct a comprehensive assessment of your current state, challenges, and opportunities.",
    duration: "1-2 weeks",
  },
  {
    title: "Strategy Development",
    description: "Our experts develop a tailored strategy and roadmap aligned with your business objectives.",
    duration: "2-4 weeks",
  },
  {
    title: "Implementation Planning",
    description: "Detailed implementation plans with timelines, resources, and success metrics.",
    duration: "1-2 weeks",
  },
  {
    title: "Ongoing Support",
    description: "Continuous guidance and support throughout implementation to ensure successful execution.",
    duration: "Ongoing",
  },
];

const faqs = [
  {
    question: "What types of consulting services do you offer?",
    answer: "We offer strategic technology consulting including digital transformation, architecture design, technology selection, technical due diligence, and innovation workshops tailored to your needs.",
  },
  {
    question: "How long does a consulting engagement typically last?",
    answer: "Engagements vary from short-term assessments (1-2 weeks) to long-term strategic partnerships (ongoing). We customize the engagement based on your specific needs.",
  },
  {
    question: "Do you work with specific industries?",
    answer: "We work across industries including healthcare, finance, retail, manufacturing, and technology. Our consultants have experience in diverse sectors and can adapt to your industry's specific requirements.",
  },
  {
    question: "Can you help with technology selection?",
    answer: "Absolutely. We provide unbiased technology recommendations based on your requirements, budget, and long-term goals, helping you make informed decisions.",
  },
];

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Consulting & Strategy"
        subtitle="Strategic Technology Guidance"
        description="Strategic technology consulting to guide your digital transformation journey. Our experts provide actionable insights and roadmaps to help you leverage technology for business growth."
        icon={TrendingUp}
        features={[
          "Digital transformation strategy",
          "Technology advisory services",
          "Architecture consulting",
          "Technical due diligence",
        ]}
      />

      <Section variant="default" size="default">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              What We Offer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive consulting services to guide your technology decisions
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
      <ServiceContactForm serviceName="Consulting & Strategy" />
    </div>
  );
}

