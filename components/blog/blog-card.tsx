"use client";

import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/types";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const publishedDate = new Date(post.publishedAt);
  const formattedDate = publishedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10",
        featured && "md:col-span-2"
      )}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="flex h-full flex-col">
          {/* Featured Image */}
          {post.featuredImage ? (
            <div className="relative h-48 overflow-hidden bg-muted md:h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary/20">
                  {post.title.charAt(0)}
                </span>
              </div>
            </div>
          ) : (
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 md:h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/20">
                  {post.title.charAt(0)}
                </span>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            {/* Category Badge */}
            <div className="mb-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{post.readTime} min read</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Read More */}
            <div className="mt-4 flex items-center text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
              Read more
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

