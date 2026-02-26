import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thetrustgroupsolutions.com";

/** TTG geometric mark favicon (navy + gold) — inline SVG, no external file. */
const TTG_FAVICON_DATA_URL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%231a1f2e'/%3E%3Cdefs%3E%3ClinearGradient id='fg' x1='0' y1='0' x2='32' y2='32' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0%25' stop-color='%23e8d4a8'/%3E%3Cstop offset='100%25' stop-color='%23b8944a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points='16,2 30,16 16,30 2,16' fill='none' stroke='url(%23fg)' stroke-width='0.8'/%3E%3Cpolygon points='16,7 25,16 16,25 7,16' fill='none' stroke='url(%23fg)' stroke-width='0.5' opacity='0.45'/%3E%3Crect x='9' y='9' width='6' height='6' fill='url(%23fg)' opacity='0.9'/%3E%3Crect x='17' y='9' width='6' height='6' fill='url(%23fg)' opacity='0.55'/%3E%3Crect x='9' y='17' width='6' height='6' fill='url(%23fg)' opacity='0.55'/%3E%3Crect x='17' y='17' width='6' height='6' fill='url(%23fg)' opacity='0.25'/%3E%3Cpath d='M2 6 L2 2 L6 2' fill='none' stroke='url(%23fg)' stroke-width='1.2' stroke-linecap='round'/%3E%3Cpath d='M26 2 L30 2 L30 6' fill='none' stroke='url(%23fg)' stroke-width='1.2' stroke-linecap='round'/%3E%3Cpath d='M30 26 L30 30 L26 30' fill='none' stroke='url(%23fg)' stroke-width='1.2' stroke-linecap='round'/%3E%3Cpath d='M6 30 L2 30 L2 26' fill='none' stroke='url(%23fg)' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E";
const siteName = "The Trust Group";
const defaultDescription = "The Trust Group specializes in AI solutions, custom software development, mobile and web application development, and sophisticated website development.";
const defaultImage = `${siteUrl}/og-image.jpg`;

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

/**
 * Truncate text to specified length
 */
function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3).trim() + "...";
}

/**
 * Generate optimized title (50-60 characters recommended)
 */
function generateTitle(title?: string): string {
  if (!title) {
    return `${siteName} - AI & Software Engineering Solutions`;
  }
  
  const fullTitle = `${title} | ${siteName}`;
  
  // Ensure title is between 50-60 characters for optimal SEO
  if (fullTitle.length > 60) {
    // Truncate the title part, keep site name
    const titlePart = title.slice(0, 60 - siteName.length - 3);
    return `${titlePart}... | ${siteName}`;
  }
  
  return fullTitle;
}

/**
 * Generate optimized description (150-160 characters recommended)
 */
function generateDescription(description?: string): string {
  const desc = description || defaultDescription;
  return truncate(desc, 160);
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = defaultImage,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  noindex = false,
  nofollow = false,
}: SEOProps): Metadata {
  const fullTitle = generateTitle(title);
  const metaDescription = generateDescription(description);
  const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl;
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    metadataBase: new URL(siteUrl),
    title: fullTitle,
    description: metaDescription,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    authors: author ? [{ name: author }] : [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    applicationName: siteName,
    referrer: "origin-when-cross-origin",
    // ✅ Favicon — TTG geometric mark (navy + gold) inline SVG; PNG fallbacks for older clients
    icons: {
      icon: [
        { url: TTG_FAVICON_DATA_URL, type: "image/svg+xml" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      shortcut: TTG_FAVICON_DATA_URL,
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/manifest.json",
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type,
      url: canonicalUrl,
      title: fullTitle,
      description: metaDescription,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
          type: "image/jpeg",
        },
      ],
      locale: "en_US",
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
      creator: "@thetrustgroup",
      site: "@thetrustgroup",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      other: {
        "facebook-domain-verification": process.env.NEXT_PUBLIC_FACEBOOK_VERIFICATION || "",
      },
    },
    // LinkedIn specific tags (via other property)
    other: {
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:type": "image/jpeg",
      "article:author": author || siteName,
      "article:publisher": siteName,
      "linkedin:owner": process.env.NEXT_PUBLIC_LINKEDIN_COMPANY_ID || "",
    },
  };
}

export function generateStructuredData(
  type: "Organization" | "WebSite" | "Service" | "BreadcrumbList" | "Review" | "Article",
  data?: any
) {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
      width: 400,
      height: 400,
    },
    description: defaultDescription,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@thetrustgroupsolutions.com",
      telephone: "+233 (057) 589-5601",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1, Nortei Abio St, Airport Residential Area",
      addressLocality: "Accra",
      addressRegion: "Greater Accra",
      postalCode: "00233",
      addressCountry: "GH",
    },
    sameAs: [
      "https://www.linkedin.com/company/thetrustgroup",
      "https://twitter.com/thetrustgroup",
      "https://www.facebook.com/thetrustgroup",
      "https://github.com/thetrustgroup",
    ],
    foundingDate: "2014",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50+",
    },
  };

  switch (type) {
    case "Organization":
      return {
        ...baseOrganization,
        ...data,
      };

    case "WebSite":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
        description: defaultDescription,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        publisher: baseOrganization,
        ...data,
      };

    case "Service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: data?.serviceType || "Software Development",
        provider: baseOrganization,
        areaServed: {
          "@type": "Country",
          name: "Worldwide",
        },
        description: data?.description || defaultDescription,
        ...data,
      };

    case "BreadcrumbList":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: (data?.items || []).map((item: { name: string; url: string }, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
        })),
      };

    case "Review":
      return {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@type": "Organization",
          name: siteName,
        },
        author: {
          "@type": "Person",
          name: data?.authorName || "Client",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: data?.rating || 5,
          bestRating: 5,
          worstRating: 1,
        },
        reviewBody: data?.reviewText || "",
        datePublished: data?.datePublished || new Date().toISOString(),
        ...data,
      };

    case "Article":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data?.headline || "",
        description: data?.description || "",
        image: data?.image || defaultImage,
        datePublished: data?.datePublished || new Date().toISOString(),
        dateModified: data?.dateModified || data?.datePublished || new Date().toISOString(),
        author: {
          "@type": "Person",
          name: data?.authorName || siteName,
        },
        publisher: baseOrganization,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data?.url || siteUrl,
        },
        ...data,
      };

    default:
      return baseOrganization;
  }
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbs(items: Array<{ name: string; url: string }>) {
  return generateStructuredData("BreadcrumbList", { items });
}

/**
 * Generate review structured data
 */
export function generateReview(data: {
  authorName: string;
  rating: number;
  reviewText: string;
  datePublished?: string;
}) {
  return generateStructuredData("Review", data);
}

/**
 * Generate article structured data
 */
export function generateArticle(data: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
}) {
  return generateStructuredData("Article", data);
}
