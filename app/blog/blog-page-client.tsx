"use client";

import { useState, useMemo } from "react";
import { BlogCard, BlogFilters, BlogPagination } from "@/components/blog";
import type { BlogPost, BlogCategory } from "@/data/types";

interface BlogPageClientProps {
  posts: BlogPost[];
  categories: BlogCategory[];
  tags: string[];
  postsPerPage: number;
}

export function BlogPageClient({
  posts,
  categories,
  tags,
  postsPerPage,
}: BlogPageClientProps) {
  // State for filters and pagination
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    let filtered = [...posts];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) =>
        selectedTags.some((tag) => post.tags.includes(tag))
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort by published date (newest first)
    filtered.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return filtered;
  }, [posts, selectedCategory, selectedTags, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage, postsPerPage]);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSelectedTags([]);
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Insights, tutorials, and updates on AI, software development, and
              technology
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Sidebar - Filters */}
            <aside className="lg:sticky lg:top-8 lg:h-fit">
              <div className="rounded-xl border border-border bg-card p-6">
                <BlogFilters
                  categories={categories}
                  tags={tags}
                  selectedCategory={selectedCategory}
                  selectedTags={selectedTags}
                  searchQuery={searchQuery}
                  onCategoryChange={handleCategoryChange}
                  onTagToggle={handleTagToggle}
                  onSearchChange={handleSearchChange}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </aside>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {filteredPosts.length === 0
                    ? "No posts found"
                    : filteredPosts.length === 1
                    ? "1 post found"
                    : `${filteredPosts.length} posts found`}
                </p>
              </div>

              {/* Posts Grid */}
              {paginatedPosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {paginatedPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-12">
                      <BlogPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="rounded-xl border border-border bg-card p-12 text-center">
                  <p className="text-lg font-medium text-muted-foreground">
                    No blog posts match your filters.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="mt-4 text-sm text-primary hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

