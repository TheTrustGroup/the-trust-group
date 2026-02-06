"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { Section } from "@/components/ui/section";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceContactForm } from "@/components/services/service-contact-form";
import { Globe, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const whatWeOffer = [
  {
    title: "Sophisticated Website Development",
    description: "Modern, responsive websites that combine stunning design with cutting-edge functionality and optimal performance.",
    features: ["Responsive design", "Modern frameworks", "Performance optimization", "SEO-friendly"],
  },
  {
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payment processing, inventory management, and customer portals.",
    features: ["Shopping cart systems", "Payment integration", "Inventory management", "Order tracking"],
  },
  {
    title: "Web Application Development",
    description: "Complex web applications with advanced features, real-time capabilities, and scalable architectures.",
    features: ["Single Page Applications", "Real-time features", "User authentication", "Data visualization"],
  },
  {
    title: "Progressive Web Apps",
    description: "Web applications that work like native apps with offline capabilities and push notifications.",
    features: ["Offline functionality", "Push notifications", "App-like experience", "Install prompts"],
  },
  {
    title: "Performance Optimization",
    description: "Optimize your website for speed, SEO, and user experience to maximize conversions and engagement.",
    features: ["Page speed optimization", "Core Web Vitals", "Image optimization", "Caching strategies"],
  },
  {
    title: "SEO & Accessibility",
    description: "Ensure your website is discoverable by search engines and accessible to all users, including those with disabilities.",
    features: ["SEO optimization", "WCAG compliance", "Semantic HTML", "Structured data"],
  },
];

const processSteps = [
  {
    title: "Planning & Strategy",
    description: "We analyze your goals, target audience, and requirements to create a comprehensive web development strategy.",
    duration: "1-2 weeks",
  },
  {
    title: "Design & Prototyping",
    description: "Our designers create beautiful, user-friendly designs and interactive prototypes for your approval.",
    duration: "2-3 weeks",
  },
  {
    title: "Development & Testing",
    description: "Agile development with continuous testing, quality assurance, and regular client reviews.",
    duration: "6-12 weeks",
  },
  {
    title: "Launch & Optimization",
    description: "Smooth deployment, performance monitoring, and ongoing optimization to ensure your website performs at its best.",
    duration: "Ongoing",
  },
];

const faqs = [
  {
    question: "What web technologies do you use?",
    answer: "We use modern technologies including React, Next.js, Vue.js, Node.js, and various CMS platforms. The technology stack is chosen based on your specific needs and requirements.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Timeline depends on complexity. Small projects are typically completed in 1-2 months, with some simpler sites completed in weeks. Larger, complex web applications typically take around 3 months, depending on requirements and complexity.",
  },
  {
    question: "Do you provide website maintenance?",
    answer: "Yes, we offer maintenance packages including security updates, content updates, performance monitoring, and technical support.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. All our websites are fully responsive and optimized for mobile, tablet, and desktop devices to ensure the best user experience across all platforms.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Web Development"
        subtitle="Modern Websites & Web Applications"
        description="Modern, responsive websites and web applications that combine stunning design with cutting-edge functionality. From sophisticated corporate sites to complex e-commerce platforms."
        icon={Globe}
        features={[
          "Sophisticated website development",
          "E-commerce solutions",
          "Web application development",
          "Progressive Web Apps",
        ]}
      />

      <Section variant="default" size="default">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              What We Offer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web development services for all your digital needs
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
      <ServiceContactForm serviceName="Web Development" />
    </div>
  );
}

