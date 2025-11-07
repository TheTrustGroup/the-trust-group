import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thetrustgroupsolutions.com";
const siteName = "The Trust Group";
const defaultDescription = "The Trust Group specializes in AI solutions, custom software development, mobile and web application development, and sophisticated website development.";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function generateMetadata({
  title,
  description = defaultDescription,
  keywords = [],
  image = `${siteUrl}/og-image.jpg`,
  url,
  type = "website",
  noindex = false,
  nofollow = false,
}: SEOProps): Metadata {
  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} - AI & Software Engineering Solutions`;

  const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
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
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@thetrustgroup",
      site: "@thetrustgroup",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    metadataBase: new URL(siteUrl),
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    },
  };
}

export function generateStructuredData(type: "Organization" | "WebSite" | "Service" | "BreadcrumbList", data?: any) {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: defaultDescription,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@thetrustgroupsolutions.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/thetrustgroup",
      "https://twitter.com/thetrustgroup",
      "https://www.facebook.com/thetrustgroup",
    ],
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
        ...data,
      };

    case "Service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: data?.serviceType || "Software Development",
        provider: baseOrganization,
        areaServed: "Worldwide",
        ...data,
      };

    case "BreadcrumbList":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data?.items || [],
      };

    default:
      return baseOrganization;
  }
}

