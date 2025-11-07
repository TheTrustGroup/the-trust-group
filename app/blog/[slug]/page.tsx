import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/cms";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const { posts } = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const { posts } = getBlogPosts();
  const publishedDate = new Date(post.publishedAt);
  const formattedDate = publishedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get related posts (same category, excluding current post)
  const relatedPosts = posts
    .filter(
      (p) => p.category === post.category && p.id !== post.id
    )
    .slice(0, 3);

  // Convert markdown-like content to HTML (simple conversion)
  const formatContent = (content: string) => {
    return content
      .split("\n\n")
      .map((paragraph, index) => {
        if (paragraph.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="mt-8 mb-4 text-2xl font-bold text-foreground"
            >
              {paragraph.replace("## ", "")}
            </h2>
          );
        }
        if (paragraph.startsWith("### ")) {
          return (
            <h3
              key={index}
              className="mt-6 mb-3 text-xl font-semibold text-foreground"
            >
              {paragraph.replace("### ", "")}
            </h3>
          );
        }
        if (paragraph.startsWith("- ")) {
          const items = paragraph
            .split("\n")
            .filter((line) => line.startsWith("- "))
            .map((line) => line.replace("- ", ""));
          return (
            <ul key={index} className="my-4 ml-6 list-disc space-y-2">
              {items.map((item, i) => (
                <li key={i} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (paragraph.trim() === "") {
          return null;
        }
        return (
          <p key={index} className="mb-4 leading-7 text-muted-foreground">
            {paragraph}
          </p>
        );
      })
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <section className="border-b py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <header className="mb-8">
              {/* Category */}
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                  {post.author.role && (
                    <span className="text-xs">• {post.author.role}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishedAt}>{formattedDate}</time>
                </div>
                {post.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="mb-8 aspect-video overflow-hidden rounded-xl bg-muted">
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl font-bold text-primary/20">
                    {post.title.charAt(0)}
                  </span>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="text-lg leading-8 text-muted-foreground">
                {formatContent(post.content)}
              </div>
            </div>

            {/* Author Info */}
            <div className="mt-12 rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {post.author.name}
                  </h3>
                  {post.author.role && (
                    <p className="text-sm text-muted-foreground">
                      {post.author.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t bg-muted/30 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-2xl font-bold sm:text-3xl">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

