import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thetrustgroupsolutions.com";

import { getBlogPosts, getJobListings } from "@/lib/cms";

export default function sitemap(): MetadataRoute.Sitemap {
  const { posts } = getBlogPosts();
  
  const routes = [
    "",
    "/about",
    "/services",
    "/services/ai-solutions",
    "/services/software-development",
    "/services/mobile-apps",
    "/services/web-development",
    "/portfolio",
    "/technologies",
    "/contact",
    "/blog",
    "/careers",
  ];

  const { jobs } = getJobListings();
  
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: post.featured ? 0.8 : 0.6,
  }));

  const jobRoutes: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${siteUrl}/careers/${job.slug}`,
    lastModified: new Date(job.postedAt),
    changeFrequency: "weekly" as const,
    priority: job.featured ? 0.7 : 0.5,
  }));

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => {
    const changeFrequency = route === "" ? ("daily" as const) : ("weekly" as const);
    return {
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority: route === "" ? 1 : 0.8,
    };
  });

  return [...staticRoutes, ...blogRoutes, ...jobRoutes] as MetadataRoute.Sitemap;
}

