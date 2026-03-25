"use client";

import * as React from "react";
import { LoadingScreen } from "./loading-screen";

/** Only show full-screen loader if route load exceeds this (ms). */
const DELAY_MS = 400;

/**
 * Route-level loading UI used by app/loading.tsx.
 * - Shows a minimal top progress bar immediately for feedback.
 * - Shows the full "Loading your experience..." screen only if the route
 *   takes longer than DELAY_MS. Fast navigations (e.g. prefetched) never
 *   show the full-screen loader.
 */
export function RouteLoading() {
  const [showFullScreen, setShowFullScreen] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setShowFullScreen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Minimal top progress bar: always visible during route load */}
      <div
        className="fixed left-0 right-0 top-0 h-0.5 bg-primary/20 overflow-hidden"
        style={{ zIndex: "var(--z-loading)" }}
        aria-hidden
      >
        <div
          className="h-full w-1/3 bg-primary"
          style={{ animation: "route-load-shimmer 1.2s ease-in-out infinite" }}
        />
      </div>
      {/* Full-screen loader only after delay to avoid flash on fast navigations */}
      {showFullScreen && (
        <LoadingScreen isLoading={true} message="Loading your experience..." />
      )}
    </>
  );
}
