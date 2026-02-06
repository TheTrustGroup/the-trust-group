"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { Section } from "@/components/ui/section";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceContactForm } from "@/components/services/service-contact-form";
import { Smartphone, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const whatWeOffer = [
  {
    title: "iOS Native Development",
    description: "High-performance iOS apps built with Swift and SwiftUI for the best user experience on Apple devices.",
    features: ["Swift & SwiftUI", "iOS design guidelines", "App Store optimization", "Apple ecosystem integration"],
  },
  {
    title: "Android Native Development",
    description: "Native Android applications using Kotlin and Jetpack Compose for optimal performance and user experience.",
    features: ["Kotlin & Jetpack Compose", "Material Design", "Google Play optimization", "Android ecosystem"],
  },
  {
    title: "Cross-Platform Development",
    description: "Build once, deploy everywhere with React Native and Flutter for faster development and cost efficiency.",
    features: ["React Native", "Flutter", "Code sharing", "Native performance"],
  },
  {
    title: "Progressive Web Apps",
    description: "Web applications that work like native apps with offline capabilities and push notifications.",
    features: ["Offline functionality", "Push notifications", "App-like experience", "No app store needed"],
  },
  {
    title: "App Store Optimization",
    description: "Maximize your app's visibility and downloads with strategic ASO and marketing campaigns.",
    features: ["Keyword optimization", "App store listings", "Screenshots & videos", "User reviews management"],
  },
  {
    title: "Mobile UI/UX Design",
    description: "Intuitive, beautiful mobile interfaces designed for optimal user experience and engagement.",
    features: ["User research", "Wireframing", "Prototyping", "Usability testing"],
  },
];

const processSteps = [
  {
    title: "Discovery & Planning",
    description: "We analyze your target audience, platform requirements, and business goals to create a comprehensive app strategy.",
    duration: "1-2 weeks",
  },
  {
    title: "Design & Prototyping",
    description: "Our designers create intuitive UI/UX designs and interactive prototypes for user testing and validation.",
    duration: "2-3 weeks",
  },
  {
    title: "Development & Testing",
    description: "Agile development with continuous testing, beta releases, and iterative improvements based on feedback.",
    duration: "8-16 weeks",
  },
  {
    title: "Launch & Maintenance",
    description: "App store submission, launch support, and ongoing updates to keep your app current and bug-free.",
    duration: "Ongoing",
  },
];

const faqs = [
  {
    question: "Should I build a native or cross-platform app?",
    answer: "Native apps offer the best performance and platform-specific features, while cross-platform apps are faster to develop and maintain. We'll help you choose based on your requirements, budget, and timeline.",
  },
  {
    question: "How long does mobile app development take?",
    answer: "Timeline depends on complexity and platform requirements. Small projects are typically completed in 1-2 months, with some simpler apps completed in weeks. Larger, complex applications typically take around 3 months, depending on features and platform requirements.",
  },
  {
    question: "How much does mobile app development cost?",
    answer: "Costs vary based on complexity, features, and platforms. Simple apps start around $20K, while complex enterprise apps can range from $50K to $200K+. We provide detailed quotes after understanding your requirements.",
  },
  {
    question: "Do you handle app store submissions?",
    answer: "Yes, we handle the entire app store submission process including preparing assets, writing descriptions, and managing the review process for both iOS and Android stores.",
  },
  {
    question: "Can you update existing mobile apps?",
    answer: "Absolutely. We can update, maintain, and enhance existing mobile applications, regardless of the original development team or technology used.",
  },
];

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Mobile App Development"
        subtitle="Exceptional Mobile Experiences"
        description="Cross-platform mobile applications that deliver exceptional user experiences. We build native and hybrid apps for iOS, Android, and web platforms with cutting-edge technologies."
        icon={Smartphone}
        features={[
          "iOS native development (Swift)",
          "Android native development (Kotlin)",
          "Cross-platform (React Native, Flutter)",
          "Progressive Web Apps (PWA)",
        ]}
      />

      <Section variant="default" size="default">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              What We Offer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive mobile app development services for all platforms
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
      <ServiceContactForm serviceName="Mobile App Development" />
    </div>
  );
}

