import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import {
  getServicePageBySlug,
  SERVICE_PAGE_DEFINITIONS,
} from "@/data/service-pages";

export function generateStaticParams() {
  return SERVICE_PAGE_DEFINITIONS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServicePageBySlug(params.slug);
  if (!service) {
    return {};
  }
  return generateSEOMetadata({
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    url: service.seo.url,
  });
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServicePageBySlug(params.slug);
  if (!service) {
    notFound();
  }
  return <ServicePageTemplate service={service} />;
}
