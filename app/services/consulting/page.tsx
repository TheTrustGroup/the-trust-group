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
    title: "Technology Strategy & Planning",
    description: "Develop comprehensive technology strategies aligned with business objectives. We assess current state, identify opportunities, and create actionable roadmaps.",
    features: ["Current state assessment", "Strategic roadmap development", "Technology portfolio analysis", "Investment prioritization"],
  },
  {
    title: "Digital Transformation Advisory",
    description: "Guide organizations through complex digital transformation initiatives. We help navigate change management, process optimization, and technology adoption.",
    features: ["Transformation planning", "Change management strategy", "Process optimization", "Organizational readiness assessment"],
  },
  {
    title: "Technical Due Diligence",
    description: "Comprehensive technical assessments for M&A, investments, and strategic partnerships. Evaluate technology assets, risks, and opportunities.",
    features: ["Code quality assessment", "Security & compliance review", "Scalability analysis", "Technical debt evaluation"],
  },
  {
    title: "Architecture Strategy & Design",
    description: "Define system architecture strategies that support business goals. We design scalable, secure architectures before implementation begins.",
    features: ["Architecture strategy", "Technology selection guidance", "Integration planning", "Migration strategy"],
  },
  {
    title: "Innovation & Ideation",
    description: "Facilitate strategic workshops to identify technology opportunities and develop innovation roadmaps aligned with market trends.",
    features: ["Innovation workshops", "Technology trend analysis", "Competitive assessment", "Opportunity identification"],
  },
  {
    title: "Technology Governance",
    description: "Establish frameworks for technology decision-making, standards, and governance processes to ensure consistent execution.",
    features: ["Governance framework design", "Decision-making processes", "Standards definition", "Vendor evaluation"],
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
    answer: "We provide strategic technology consulting focused on planning and decision-making rather than implementation. Services include technology strategy, digital transformation advisory, technical due diligence, architecture strategy, innovation workshops, and technology governance.",
  },
  {
    question: "How long does a consulting engagement typically last?",
    answer: "Consulting engagements are typically short to medium-term, ranging from 1-2 weeks for assessments to 1-3 months for comprehensive strategy development. We focus on delivering actionable insights and roadmaps rather than long-term implementation partnerships.",
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
        description="Strategic technology consulting to guide critical decisions and transformations. We provide independent, expert guidance on technology strategy, architecture, and digital transformation initiatives."
        icon={TrendingUp}
        features={[
          "Technology strategy & planning",
          "Digital transformation advisory",
          "Technical due diligence",
          "Architecture strategy & design",
        ]}
      />

      <Section variant="default" size="default">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              What We Offer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Independent strategic guidance for technology decisions, transformations, and investments
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

