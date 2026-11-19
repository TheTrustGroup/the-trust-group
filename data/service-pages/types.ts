export interface CapabilityBlock {
  title: string;
  description: string;
  features: string[];
}

export interface WhyBlock {
  number: string;
  title: string;
  description: string;
}

export interface ComplianceItem {
  title: string;
  description: string;
}

export interface ProcessStepDef {
  title: string;
  description: string;
  duration?: string;
}

export interface FaqItemDef {
  question: string;
  answer: string;
}

export interface CaseStudyCardDef {
  title: string;
  description: string;
  results: string[];
  /** Path to a published case study, e.g. /case-studies/enterprise-saas */
  href?: string;
}

export interface ServicePageDefinition {
  slug: string;
  breadcrumbLabel: string;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
    url: string;
    /** Keep the page out of search engines and the sitemap. */
    noindex?: boolean;
  };
  schemaServiceType: string;
  schemaDescription: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    iconName?: string;
    features: string[];
    /** Symbolic capability art from /public/images/capabilities — not a client logo. */
    visualUrl?: string;
  };
  whySection?: {
    title: string;
    intro: string;
    items: WhyBlock[];
  };
  capabilities: {
    title: string;
    intro: string;
    /** Defense-style uses muted for the grid section background. */
    sectionVariant?: "default" | "muted";
    items: CapabilityBlock[];
    cardClassName: string;
  };
  compliance?: {
    title: string;
    intro: string;
    items: ComplianceItem[];
  };
  process: {
    title: string;
    description: string;
    steps: ProcessStepDef[];
  };
  techStack?: {
    title: string;
    intro: string;
    tags: string[];
  };
  caseStudies?: {
    title: string;
    intro: string;
    items: CaseStudyCardDef[];
  };
  pricingBand?: {
    title: string;
    intro: string;
    columns: { title: string; description: string }[];
  };
  classifiedNote?: {
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  faqs: FaqItemDef[];
  contact: {
    serviceName: string;
    prefillService: string;
  };
}
