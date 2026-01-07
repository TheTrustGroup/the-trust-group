/**
 * Optimized Intersection Observer hook
 * Replaces scroll-based visibility detection with Intersection Observer API
 * Much more performant than scroll event listeners
 */

import { useEffect, useRef, useState, RefObject } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  root?: Element | null;
}

/**
 * Hook that uses Intersection Observer to detect when element enters viewport
 * Replaces scroll event listeners for better performance
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): [RefObject<T>, boolean] {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px", // Trigger slightly before element enters viewport
    triggerOnce = true,
    root = null,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            // Optional: unobserve after animation triggers
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsIntersecting(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
        root,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, root]);

  return [elementRef, isIntersecting];
}

/**
 * Hook for observing multiple elements
 * Useful for animating lists or grids
 */
export function useMultipleIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
    root = null,
  } = options;

  const [visibleElements, setVisibleElements] = useState<Set<Element>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target));
            if (triggerOnce) {
              observerRef.current?.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setVisibleElements((prev) => {
              const next = new Set(prev);
              next.delete(entry.target);
              return next;
            });
          }
        });
      },
      {
        threshold,
        rootMargin,
        root,
      }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, root]);

  const observe = (element: T | null) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  const unobserve = (element: T | null) => {
    if (element && observerRef.current) {
      observerRef.current.unobserve(element);
    }
  };

  const isVisible = (element: T | null) => {
    return element ? visibleElements.has(element) : false;
  };

  return { observe, unobserve, isVisible };
}

