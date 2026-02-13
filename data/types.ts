// Type definitions for all CMS content

export interface Service {
  id: string;
  icon: string; // Icon name from lucide-react
  title: string;
  description: string;
  features: string[];
  variant: "default" | "primary" | "accent";
  href?: string;
  featured?: boolean; // For highlighting strategic capabilities
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "ai" | "web" | "mobile" | "enterprise" | "all";
  technologies: string[];
  featured: boolean;
  caseStudyUrl?: string;
  image?: string;
  images?: string[];
  client?: string;
  year?: string;
  timeline?: string;
  teamSize?: string;
  industry?: string;
  link?: string;
  results?: string[];
}

export interface ProjectCategory {
  id: string;
  name: string;
}

/**
 * Confidentiality tier for case studies. Required for every case study.
 * Tier A (public): Full editorial page — Context, Challenge, Approach, Outcome.
 * Tier B (limited): Minimal page — Context, Our Role, Result + disclaimer.
 * Tier C (confidential): Single statement + CTA only.
 */
export type CaseStudyConfidentiality = "public" | "limited" | "confidential";

export interface CaseStudy {
  slug: string;
  title: string;
  /** Required. Default to "limited" if unspecified (see CASE_STUDY_AUDIT.md). */
  confidentiality: CaseStudyConfidentiality;
  client?: string | null;
  year?: string | null;
  /** Tier A/B: context section. Tier C: unused. */
  context: string | null;
  /** Tier A only. */
  challenge: string | null;
  /** Tier A only. */
  approach: string | null;
  /** Tier A only. */
  outcome: string | null;
  /** Tier B only. */
  ourRole?: string | null;
  /** Tier B only. */
  result?: string | null;
  /** No thumbnails unless symbolic/abstract. Optional. */
  image: string | null;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  company: string;
  rating: number;
  featured: boolean;
  avatar?: string;
  companyLogo?: string;
  companySize?: string;
  industry?: string;
  projectType?: string;
  date?: string;
  verified?: boolean;
  metrics?: Record<string, string>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  email?: string;
  avatar?: string;
  department?: string;
}

export interface Technology {
  name: string;
  category: string;
  proficiency: "expert" | "advanced" | "proficient";
  icon?: string;
  description?: string;
}

export interface TechnologyCategory {
  id: string;
  name: string;
  icon: string;
}

export interface ContactInfo {
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  email: string;
  phone: string;
  businessHours: {
    weekdays: string;
    weekends?: string;
    closed?: string;
  };
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface SocialLink {
  name: string;
  icon: string; // Icon name from lucide-react
  href: string;
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface Subsidiary {
  name: string;
  href: string;
  status?: "active" | "coming-soon";
  description?: string;
}

export interface CompanyInfo {
  name: string;
  tagline?: string;
  description: string;
  founded?: string;
  headquarters?: string;
  website?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  publishedAt: string; // ISO date string
  updatedAt?: string; // ISO date string
  category: string;
  tags: string[];
  featuredImage?: string;
  featured: boolean;
  readTime?: number; // in minutes
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface JobListing {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship" | "remote";
  experience: "entry" | "mid" | "senior" | "lead";
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
  salary?: {
    min?: number;
    max?: number;
    currency?: string;
    period?: "hourly" | "monthly" | "yearly";
  };
  postedAt: string; // ISO date string
  expiresAt?: string; // ISO date string
  featured: boolean;
  applicationUrl?: string;
  applicationEmail?: string;
}

export interface JobDepartment {
  id: string;
  name: string;
  description?: string;
}

export interface SiteConfig {
  company: CompanyInfo;
  contact: ContactInfo;
  socialLinks: SocialLink[];
  navigation: {
    main: NavigationLink[];
    footer: {
      services: NavigationLink[];
      company: NavigationLink[];
      subsidiaries: Subsidiary[];
    };
  };
}

