"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { BlogCategory } from "@/data/types";

interface BlogFiltersProps {
  categories: BlogCategory[];
  tags: string[];
  selectedCategory: string;
  selectedTags: string[];
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onTagToggle: (tag: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

export function BlogFilters({
  categories,
  tags,
  selectedCategory,
  selectedTags,
  searchQuery,
  onCategoryChange,
  onTagToggle,
  onSearchChange,
  onClearFilters,
}: BlogFiltersProps) {
  const [isTagsExpanded, setIsTagsExpanded] = useState(false);
  const hasActiveFilters = selectedCategory !== "all" || selectedTags.length > 0 || searchQuery.length > 0;

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Categories */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange("all")}
            className="text-xs"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className="text-xs"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Tags</h3>
            {tags.length > 6 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsTagsExpanded(!isTagsExpanded)}
                className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
              >
                {isTagsExpanded ? "Show less" : `Show all (${tags.length})`}
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {(isTagsExpanded ? tags : tags.slice(0, 6)).map((tag) => (
              <button
                key={tag}
                onClick={() => onTagToggle(tag)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                  selectedTags.includes(tag)
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
                )}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={onClearFilters}
          className="w-full"
        >
          Clear all filters
        </Button>
      )}
    </div>
  );
}

