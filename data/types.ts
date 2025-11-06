// Type definitions for all CMS content

export interface Service {
  id: string;
  icon: string; // Icon name from lucide-react
  title: string;
  description: string;
  features: string[];
  variant: "default" | "primary" | "accent";
  href?: string;
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
  client?: string;
  year?: string;
  results?: string[];
}

export interface ProjectCategory {
  id: string;
  name: string;
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

