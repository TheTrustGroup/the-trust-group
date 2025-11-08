/**
 * SEO Utility Functions
 * Additional helper functions for SEO optimization
 */

import { generateStructuredData } from "./seo";
import type { Testimonial } from "@/data/types";

/**
 * Generate Service schema for a service page
 */
export function generateServiceSchema(serviceData: {
  serviceType: string;
  description: string;
  features?: string[];
  url?: string;
}) {
  return generateStructuredData("Service", {
    serviceType: serviceData.serviceType,
    description: serviceData.description,
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    ...(serviceData.url && { url: serviceData.url }),
  });
}

/**
 * Generate Review schemas from testimonials
 */
export function generateReviewSchemas(testimonials: any[]) {
  return testimonials.map((testimonial) =>
    generateStructuredData("Review", {
      authorName: testimonial.clientName || testimonial.author?.name || "Client",
      rating: testimonial.rating || 5,
      reviewText: testimonial.quote || testimonial.reviewText || "",
      datePublished: testimonial.date || testimonial.datePublished || new Date().toISOString(),
    })
  );
}

/**
 * Generate aggregate rating schema
 */
export function generateAggregateRatingSchema(
  averageRating: number,
  reviewCount: number
) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: averageRating,
    bestRating: 5,
    worstRating: 1,
    ratingCount: reviewCount,
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

