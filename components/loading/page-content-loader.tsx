"use client";

import { LoadingIndicator } from "@/components/ui/loading-indicator";

/**
 * Minimal placeholder for dynamic()-loaded page content.
 * Keeps layout stable (min-height) and shows a small spinner so the route
 * shell renders quickly and root loading.tsx is replaced sooner.
 */
export function PageContentLoader() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center"
      aria-hidden
    >
      <LoadingIndicator size="sm" variant="spinner" />
    </div>
  );
}

/**
 * Compact placeholder for a single section (e.g. timeline) loaded via dynamic().
 * Use when the dynamic component is mid-page so the loader doesn’t dominate the viewport.
 */
export function SectionContentLoader() {
  return (
    <div
      className="flex min-h-[200px] items-center justify-center"
      aria-hidden
    >
      <LoadingIndicator size="sm" variant="spinner" />
    </div>
  );
}
