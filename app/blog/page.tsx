import { getBlogPosts, getBlogTags } from "@/lib/cms";
import { generateMetadata, generateBreadcrumbs } from "@/lib/seo";
import type { Metadata } from "next";
import { BlogPageClient } from "./blog-page-client";

const POSTS_PER_PAGE = 6;

export const metadata: Metadata = generateMetadata({
  title: "Insights",
  description: "Engineering perspectives on AI systems, enterprise software, defense technology, and what it takes to build systems that last.",
  keywords: ["blog", "AI", "software development", "technology", "tutorials"],
});

// Force dynamic rendering to prevent timeout
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BlogPage() {
  const { posts, categories } = getBlogPosts();
  const allTags = getBlogTags();

  return <BlogPageClient posts={posts} categories={categories} tags={allTags} postsPerPage={POSTS_PER_PAGE} />;
}
