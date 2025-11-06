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
} from '@/data/types';

// Cache for loaded data
const cache: {
  services?: Service[];
  projects?: { categories: ProjectCategory[]; projects: Project[] };
  testimonials?: Testimonial[];
  team?: TeamMember[];
  technologies?: { categories: TechnologyCategory[]; technologies: Technology[] };
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
 * Get icon component by name (for dynamic icon loading)
 */
export function getIconByName(iconName: string) {
  // This will be handled by components that need icons
  // Icons are imported from lucide-react
  return iconName;
}

