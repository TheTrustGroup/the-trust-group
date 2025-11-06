import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thetrustgroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}

