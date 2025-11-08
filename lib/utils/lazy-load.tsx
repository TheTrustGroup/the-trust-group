"use client";

import * as React from "react";
import dynamic from "next/dynamic";

/**
 * Lazy load a component with loading state
 */
export function createLazyComponent<P = {}>(
  importFunc: () => Promise<{ default: React.ComponentType<P> }>,
  options?: {
    loading?: () => React.ReactElement | null;
    ssr?: boolean;
  }
) {
  return dynamic(importFunc, {
    loading: options?.loading || (() => <div>Loading...</div>),
    ssr: options?.ssr !== false,
  });
}

/**
 * Hook to detect when element enters viewport
 */
export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit
) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const [hasIntersected, setHasIntersected] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (!hasIntersected) {
            setHasIntersected(true);
          }
        } else {
          setIsIntersecting(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, hasIntersected, options]);

  return { isIntersecting, hasIntersected };
}

/**
 * Lazy load component when it enters viewport
 */
export function LazyLoadOnView({
  children,
  fallback,
  className,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(ref);

  return (
    <div ref={ref} className={className}>
      {hasIntersected ? children : fallback || <div>Loading...</div>}
    </div>
  );
}

