"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-2 text-sm text-muted-foreground", className)}
    >
      <Link
        href="/"
        className="hover:text-primary transition-colors flex items-center"
        aria-label="Home"
      >
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item, index) => (
        <div key={item.url} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
          {index === items.length - 1 ? (
            <span className="text-foreground font-medium" aria-current="page">
              {item.name}
            </span>
          ) : (
            <Link
              href={item.url}
              className="hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

