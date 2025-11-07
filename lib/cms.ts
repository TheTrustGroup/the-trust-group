/**
 * CMS Data Loading Utilities
 * 
 * This module provides utilities to load and manage content from JSON files.
 * All content can be easily updated by editing the JSON files in the /data directory.
 */

import fs from 'fs';
import path from 'path';
import type {
  Service,
  Project,
  ProjectCategory,
  Testimonial,
  TeamMember,
  Technology,
  TechnologyCategory,
  SiteConfig,
  BlogPost,
  BlogCategory,
  JobListing,
  JobDepartment,
} from '@/data/types';

// Cache for loaded data
const cache: {
  services?: Service[];
  projects?: { categories: ProjectCategory[]; projects: Project[] };
  testimonials?: Testimonial[];
  team?: TeamMember[];
  technologies?: { categories: TechnologyCategory[]; technologies: Technology[] };
  blog?: { categories: BlogCategory[]; posts: BlogPost[] };
  jobs?: { departments: JobDepartment[]; jobs: JobListing[] };
  config?: SiteConfig;
} = {};

/**
 * Load JSON data from file
 */
function loadJSON<T>(filename: string): T {
  const filePath = path.join(process.cwd(), 'data', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as T;
}

/**
 * Get all services
 */
export function getServices(): Service[] {
  if (!cache.services) {
    cache.services = loadJSON<Service[]>('services.json');
  }
  return cache.services;
}

/**
 * Get a service by ID
 */
export function getService(id: string): Service | undefined {
  return getServices().find((service) => service.id === id);
}

/**
 * Get all projects with categories
 */
export function getProjects(): { categories: ProjectCategory[]; projects: Project[] } {
  if (!cache.projects) {
    cache.projects = loadJSON<{ categories: ProjectCategory[]; projects: Project[] }>('projects.json');
  }
  return cache.projects;
}

/**
 * Get a project by ID
 */
export function getProject(id: string): Project | undefined {
  return getProjects().projects.find((project) => project.id === id);
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return getProjects().projects.filter((project) => project.featured);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') {
    return getProjects().projects;
  }
  return getProjects().projects.filter((project) => project.category === category);
}

/**
 * Get all testimonials
 */
export function getTestimonials(): Testimonial[] {
  if (!cache.testimonials) {
    cache.testimonials = loadJSON<Testimonial[]>('testimonials.json');
  }
  return cache.testimonials;
}

/**
 * Get featured testimonials
 */
export function getFeaturedTestimonials(): Testimonial[] {
  return getTestimonials().filter((testimonial) => testimonial.featured);
}

/**
 * Get all team members
 */
export function getTeamMembers(): TeamMember[] {
  if (!cache.team) {
    cache.team = loadJSON<TeamMember[]>('team.json');
  }
  return cache.team;
}

/**
 * Get team members by department
 */
export function getTeamMembersByDepartment(department: string): TeamMember[] {
  return getTeamMembers().filter((member) => member.department === department);
}

/**
 * Get technologies with categories
 */
export function getTechnologies(): { categories: TechnologyCategory[]; technologies: Technology[] } {
  if (!cache.technologies) {
    cache.technologies = loadJSON<{ categories: TechnologyCategory[]; technologies: Technology[] }>('technologies.json');
  }
  return cache.technologies;
}

/**
 * Get technologies by category
 */
export function getTechnologiesByCategory(category: string): Technology[] {
  if (category === 'all') {
    return getTechnologies().technologies;
  }
  return getTechnologies().technologies.filter((tech) => tech.category === category);
}

/**
 * Get site configuration
 */
export function getSiteConfig(): SiteConfig {
  if (!cache.config) {
    cache.config = loadJSON<SiteConfig>('config.json');
  }
  return cache.config;
}

/**
 * Clear cache (useful for development/hot reloading)
 */
export function clearCache(): void {
  Object.keys(cache).forEach((key) => delete cache[key as keyof typeof cache]);
}

/**
 * Get all blog posts with categories
 */
export function getBlogPosts(): { categories: BlogCategory[]; posts: BlogPost[] } {
  if (!cache.blog) {
    cache.blog = loadJSON<{ categories: BlogCategory[]; posts: BlogPost[] }>('blog.json');
  }
  return cache.blog;
}

/**
 * Get a blog post by slug
 */
export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().posts.find((post) => post.slug === slug);
}

/**
 * Get a blog post by ID
 */
export function getBlogPostById(id: string): BlogPost | undefined {
  return getBlogPosts().posts.find((post) => post.id === id);
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(): BlogPost[] {
  return getBlogPosts().posts.filter((post) => post.featured);
}

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === 'all') {
    return getBlogPosts().posts;
  }
  return getBlogPosts().posts.filter((post) => post.category === category);
}

/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getBlogPosts().posts.filter((post) => post.tags.includes(tag));
}

/**
 * Get all blog categories
 */
export function getBlogCategories(): BlogCategory[] {
  return getBlogPosts().categories;
}

/**
 * Get all unique tags from blog posts
 */
export function getBlogTags(): string[] {
  const posts = getBlogPosts().posts;
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

/**
 * Get all job listings with departments
 */
export function getJobListings(): { departments: JobDepartment[]; jobs: JobListing[] } {
  if (!cache.jobs) {
    cache.jobs = loadJSON<{ departments: JobDepartment[]; jobs: JobListing[] }>('jobs.json');
  }
  return cache.jobs;
}

/**
 * Get a job listing by slug
 */
export function getJobListing(slug: string): JobListing | undefined {
  return getJobListings().jobs.find((job) => job.slug === slug);
}

/**
 * Get a job listing by ID
 */
export function getJobListingById(id: string): JobListing | undefined {
  return getJobListings().jobs.find((job) => job.id === id);
}

/**
 * Get featured job listings
 */
export function getFeaturedJobListings(): JobListing[] {
  return getJobListings().jobs.filter((job) => job.featured);
}

/**
 * Get job listings by department
 */
export function getJobListingsByDepartment(department: string): JobListing[] {
  if (department === 'all') {
    return getJobListings().jobs;
  }
  return getJobListings().jobs.filter((job) => job.department === department);
}

/**
 * Get job listings by type
 */
export function getJobListingsByType(type: string): JobListing[] {
  if (type === 'all') {
    return getJobListings().jobs;
  }
  return getJobListings().jobs.filter((job) => job.type === type);
}

/**
 * Get job listings by experience level
 */
export function getJobListingsByExperience(experience: string): JobListing[] {
  if (experience === 'all') {
    return getJobListings().jobs;
  }
  return getJobListings().jobs.filter((job) => job.experience === experience);
}

/**
 * Get all job departments
 */
export function getJobDepartments(): JobDepartment[] {
  return getJobListings().departments;
}

/**
 * Get icon component by name (for dynamic icon loading)
 */
export function getIconByName(iconName: string) {
  // This will be handled by components that need icons
  // Icons are imported from lucide-react
  return iconName;
}

