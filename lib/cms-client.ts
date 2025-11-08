/**
 * Client-side CMS Data Loading Utilities
 * 
 * For client components, we load data at build time and export as constants.
 * This ensures data is available without server-side dependencies.
 */

import servicesData from '@/data/services.json';
import projectsData from '@/data/projects.json';
import testimonialsData from '@/data/testimonials.json';
import teamData from '@/data/team.json';
import technologiesData from '@/data/technologies.json';
import configData from '@/data/config.json';

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

// Export data as typed constants
export const services: Service[] = servicesData as Service[];
export const projects: Project[] = projectsData.projects as Project[];
export const projectCategories: ProjectCategory[] = projectsData.categories as ProjectCategory[];
export const testimonials: Testimonial[] = testimonialsData as unknown as Testimonial[];
export const teamMembers: TeamMember[] = teamData as TeamMember[];
export const technologies: Technology[] = technologiesData.technologies as Technology[];
export const technologyCategories: TechnologyCategory[] = technologiesData.categories as TechnologyCategory[];
export const siteConfig: SiteConfig = configData as SiteConfig;

// Helper functions for client-side use
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((testimonial) => testimonial.featured);
}

export function getTeamMembersByDepartment(department: string): TeamMember[] {
  return teamMembers.filter((member) => member.department === department);
}

export function getTechnologiesByCategory(category: string): Technology[] {
  if (category === 'all') {
    return technologies;
  }
  return technologies.filter((tech) => tech.category === category);
}

