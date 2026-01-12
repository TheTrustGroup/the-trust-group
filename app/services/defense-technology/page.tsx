import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateStructuredData, generateBreadcrumbs } from "@/lib/seo";
import { ServiceHero } from "@/components/services/service-hero";
import { Section } from "@/components/ui/section";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { ServiceFAQ } from "@/components/services/service-faq";
import { ServiceContactForm } from "@/components/services/service-contact-form";
import { Shield, CheckCircle2, ArrowRight, Lock, Brain, Radio, BarChart3, Rocket, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const whatWeOffer = [
  {
    title: "Cybersecurity Solutions",
    description: "Protecting critical infrastructure from cyber threats with advanced intrusion detection systems, threat intelligence platforms, and secure communication networks.",
    features: [
      "Intrusion Detection & Prevention Systems",
      "Threat Intelligence Platforms",
      "Security Information & Event Management (SIEM)",
      "Zero Trust Architecture Implementation",
      "Vulnerability Assessment & Penetration Testing",
      "Security Operations Center (SOC) Development"
    ],
  },
  {
    title: "AI Defense Systems",
    description: "Modern defense relies on AI for autonomous vehicles, predictive analytics, and decision support. We develop machine learning models for threat detection, target recognition, and mission planning.",
    features: [
      "Computer Vision for Target Recognition",
      "Predictive Threat Analysis",
      "Autonomous System Integration",
      "Natural Language Processing for Intelligence",
      "Decision Support Systems",
      "Anomaly Detection & Pattern Recognition"
    ],
  },
  {
    title: "Secure Communications",
    description: "Military operations depend on secure, reliable communications. We develop encrypted communication systems, secure messaging platforms, and classified data management solutions.",
    features: [
      "End-to-End Encrypted Messaging",
      "Classified Network Infrastructure",
      "Secure Voice & Video Conferencing",
      "Tactical Communication Systems",
      "Command & Control Platforms",
      "Cross-Domain Solutions"
    ],
  },
  {
    title: "Intelligence Analytics",
    description: "Processing massive amounts of intelligence data requires sophisticated software. We build analytics platforms that turn raw data into actionable intelligence for decision-makers.",
    features: [
      "Big Data Processing & Analysis",
      "Intelligence Fusion Platforms",
      "Geospatial Intelligence (GEOINT) Systems",
      "Signals Intelligence (SIGINT) Processing",
      "Open Source Intelligence (OSINT) Collection",
      "Predictive Analytics & Forecasting"
    ],
  },
  {
    title: "Mission Planning & Operations",
    description: "Comprehensive software solutions for mission planning, logistics management, training simulations, and operational dashboards.",
    features: [
      "Mission Planning Software",
      "Logistics & Supply Chain Management",
      "Training & Simulation Systems",
      "Asset Tracking & Management",
      "Operational Dashboards",
      "After-Action Review Systems"
    ],
  },
  {
    title: "Secure Cloud Infrastructure",
    description: "Government cloud deployment, classified cloud infrastructure, and secure DevSecOps pipelines for defense operations.",
    features: [
      "Government Cloud (GovCloud) Deployment",
      "Classified Cloud Infrastructure",
      "Impact Level 4/5/6 Compliance",
      "Hybrid Cloud Architecture",
      "Disaster Recovery & Business Continuity",
      "Secure DevSecOps Pipelines"
    ],
  },
];

const whyImportant = [
  {
    number: "01",
    title: "Cybersecurity & Threat Defense",
    description: "Protecting critical infrastructure from cyber threats requires advanced software engineering. We build intrusion detection systems, threat intelligence platforms, and secure communication networks.",
  },
  {
    number: "02",
    title: "AI & Autonomous Systems",
    description: "Modern defense relies on AI for autonomous vehicles, predictive analytics, and decision support. Our engineers develop machine learning models for threat detection, target recognition, and mission planning.",
  },
  {
    number: "03",
    title: "Intelligence & Data Analytics",
    description: "Processing massive amounts of intelligence data requires sophisticated software. We build analytics platforms that turn raw data into actionable intelligence for decision-makers.",
  },
  {
    number: "04",
    title: "Secure Communications",
    description: "Military operations depend on secure, reliable communications. We develop encrypted communication systems, secure messaging platforms, and classified data management solutions.",
  },
];

const complianceStandards = [
  {
    title: "FedRAMP",
    description: "Federal Risk and Authorization Management Program compliance for cloud services",
  },
  {
    title: "NIST 800-171",
    description: "Protecting Controlled Unclassified Information (CUI) in non-federal systems",
  },
  {
    title: "CMMC",
    description: "Cybersecurity Maturity Model Certification for defense contractors",
  },
  {
    title: "ITAR",
    description: "International Traffic in Arms Regulations compliance",
  },
  {
    title: "ISO 27001",
    description: "Information Security Management System certification",
  },
  {
    title: "SOC 2 Type II",
    description: "Service Organization Control for security, availability, and confidentiality",
  },
];

const processSteps = [
  {
    title: "Requirements & Security Assessment",
    description: "We begin with a comprehensive security assessment and requirements analysis. Our team evaluates security clearance needs, compliance requirements, and mission-critical specifications.",
    duration: "2-3 weeks",
  },
  {
    title: "Architecture & Design",
    description: "We design secure, scalable architectures that meet defense standards. This includes security architecture, threat modeling, and compliance planning.",
    duration: "3-4 weeks",
  },
  {
    title: "Secure Development",
    description: "Our engineers develop mission-critical systems following secure coding practices, security testing, and continuous security monitoring throughout development.",
    duration: "8-16 weeks",
  },
  {
    title: "Security Testing & Validation",
    description: "Rigorous security testing including penetration testing, vulnerability assessments, and compliance validation to ensure systems meet defense standards.",
    duration: "2-4 weeks",
  },
  {
    title: "Deployment & Support",
    description: "Secure deployment to classified environments with ongoing 24/7 mission support, security monitoring, and continuous compliance validation.",
    duration: "Ongoing",
  },
];

const technologies = [
  "Secure Cloud Platforms", "Kubernetes", "Docker", "Terraform", "Ansible",
  "Python", "Java", "C++", "Rust", "Go",
  "TensorFlow", "PyTorch", "Elasticsearch", "Kafka", "PostgreSQL",
  "AWS GovCloud", "Azure Government", "Google Cloud Platform", "Red Hat", "Splunk"
];

const faqs = [
  {
    question: "What security clearances do your team members hold?",
    answer: "Our team includes engineers with various security clearances appropriate for defense contracting. We work with clients to ensure all team members meet clearance requirements for specific projects. For highly classified work, we can provide team members with the necessary clearances.",
  },
  {
    question: "What compliance standards do you meet?",
    answer: "We adhere to multiple defense and security compliance standards including FedRAMP, NIST 800-171, CMMC, ITAR, ISO 27001, and SOC 2 Type II. Our compliance team ensures all systems meet or exceed required standards.",
  },
  {
    question: "Can you work with classified information?",
    answer: "Yes, we have experience working with classified systems and can provide team members with appropriate security clearances. We follow strict protocols for handling classified information and can work in secure facilities as required.",
  },
  {
    question: "What types of defense systems have you built?",
    answer: "We've developed systems for cybersecurity, threat detection, secure communications, intelligence analytics, mission planning, and autonomous systems. Many of our defense projects are classified, but we can discuss our capabilities and approach during a secure consultation.",
  },
  {
    question: "How do you ensure system security and reliability?",
    answer: "We follow defense-grade security practices including secure coding standards, continuous security testing, threat modeling, penetration testing, and rigorous validation. All systems undergo comprehensive security audits before deployment.",
  },
  {
    question: "What is your approach to mission-critical systems?",
    answer: "We design for reliability, security, and performance from the ground up. Our systems include redundancy, failover capabilities, continuous monitoring, and 24/7 support. We understand that defense systems must operate flawlessly under all conditions.",
  },
];

// Route segment config
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: "Defense Technology Solutions | The Trust Group",
    description: "Mission-critical systems for defense and intelligence operations. Secure, compliant, and battle-tested software solutions that protect national interests and support defense operations worldwide.",
  });
}

export default function DefenseTechnologyPage() {
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Defense Technology", url: "/services/defense-technology" },
  ]);

  const serviceSchema = generateStructuredData("Service", {
    serviceType: "Defense Technology Solutions",
    description: "Mission-critical systems for defense and intelligence operations. Secure, compliant, and battle-tested software solutions.",
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
  });

  const breadcrumbsJson = JSON.stringify(breadcrumbs);
  const serviceSchemaJson = JSON.stringify(serviceSchema);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbsJson }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceSchemaJson }}
      />
      <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="Defense Technology Solutions"
        subtitle="Mission-Critical Defense Systems"
        description="Building mission-critical software systems that protect national interests and support defense operations. Secure. Compliant. Battle-tested."
        icon={Shield}
        features={[
          "Cybersecurity & Threat Detection",
          "AI-Powered Defense Systems",
          "Secure Communication Platforms",
          "Intelligence Data Analytics"
        ]}
      />

      {/* Why Software Engineering is Central to Defense */}
      <Section variant="default" size="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Software Engineers are Central to Defense Tech
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Modern defense operations depend entirely on sophisticated software systems. 
            From autonomous vehicles to intelligence analysis, software engineers are 
            the architects of national security infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {whyImportant.map((item, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-primary/30">{item.number}</div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* What We Offer */}
      <Section variant="muted" size="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Defense Technology Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive defense solutions tailored to mission-critical requirements
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

      {/* Compliance & Security */}
      <Section variant="default" size="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Compliance & Security Standards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We adhere to the highest security standards and maintain certifications 
            required for defense contracting.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {complianceStandards.map((standard, index) => (
            <Card key={index} className="border-2 text-center">
              <CardHeader>
                <CardTitle className="text-xl">{standard.title}</CardTitle>
                <CardDescription className="text-base">
                  {standard.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* Our Process */}
      <ProcessTimeline
        steps={processSteps}
        title="Our Defense Technology Development Process"
        description="A proven methodology for delivering secure, mission-critical systems"
      />

      {/* Technologies Used */}
      <Section variant="muted" size="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technologies We Use
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry-leading tools and frameworks for defense technology development
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

      {/* Classified Projects Note */}
      <Section variant="primary" size="default" className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-3xl mx-auto text-center">
          <Lock className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Classified Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Many of our defense projects are classified. The examples shown represent 
            our unclassified work. For specific capabilities inquiries, please contact 
            our defense division directly.
          </p>
          <Button size="lg" className="group" asChild>
            <a href="/contact">
              Contact Defense Division
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </Section>

      {/* FAQ Section */}
      <ServiceFAQ faqs={faqs} />

      {/* Contact Form */}
      <ServiceContactForm
        serviceName="Defense Technology"
        prefillService="Defense Technology"
      />
    </main>
    </>
  );
}
