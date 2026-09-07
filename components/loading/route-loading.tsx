"use client";

/**
 * Route-level loading UI used by app/loading.tsx.
 * Minimal top progress bar only — no full-screen takeover.
 */
export function RouteLoading() {
  return (
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
  );
}
