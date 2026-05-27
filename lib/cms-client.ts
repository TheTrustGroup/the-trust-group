/**
 * Client-side CMS Data Loading Utilities
 * 
 * For client components, we load data at build time and export as constants.
 * This ensures data is available without server-side dependencies.
 */

import servicesData from '@/data/services.json';
import teamData from '@/data/team.json';
import technologiesData from '@/data/technologies.json';
import configData from '@/data/config.json';

import type {
  Service,
  TeamMember,
  Technology,
  TechnologyCategory,
  SiteConfig,
} from '@/data/types';

// Export data as typed constants
export const services: Service[] = servicesData as Service[];
export const teamMembers: TeamMember[] = teamData as TeamMember[];
export const technologies: Technology[] = technologiesData.technologies as Technology[];
export const technologyCategories: TechnologyCategory[] = technologiesData.categories as TechnologyCategory[];
export const siteConfig: SiteConfig = configData as SiteConfig;

// Helper functions for client-side use
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
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

