/**
 * Global Intersection Observer utility
 * Use this for CSS-based animations that need to add/remove classes
 * Much more performant than scroll event listeners
 */

/**
 * Initialize Intersection Observer for CSS-based scroll animations
 * Replaces scroll event listeners with Intersection Observer API
 * 
 * @param selector - CSS selector for elements to observe (e.g., '.animate-on-scroll')
 * @param options - Intersection Observer options
 * @returns Cleanup function
 */
export function initIntersectionObserver(
  selector: string,
  options: {
    threshold?: number | number[];
    rootMargin?: string;
    visibleClass?: string;
    triggerOnce?: boolean;
  } = {}
) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px", // Trigger slightly before element enters viewport
    visibleClass = "visible",
    triggerOnce = true,
  } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
          // Optional: unobserve after animation triggers
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          entry.target.classList.remove(visibleClass);
        }
      });
    },
    {
      threshold,
      rootMargin,
    }
  );

  // Observe all elements matching the selector
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    observer.observe(el);
  });

  // Return cleanup function
  return () => {
    observer.disconnect();
  };
}

/**
 * Observe a single element with Intersection Observer
 * Useful for programmatic element observation
 */
export function observeElement(
  element: Element,
  callback: (isIntersecting: boolean, entry: IntersectionObserverEntry) => void,
  options: {
    threshold?: number | number[];
    rootMargin?: string;
    triggerOnce?: boolean;
  } = {}
) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
  } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry.isIntersecting, entry);
        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold,
      rootMargin,
    }
  );

  observer.observe(element);

  return () => {
    observer.disconnect();
  };
}

/**
 * Batch observe multiple elements efficiently
 * Creates a single observer for multiple elements
 */
export function observeElements(
  elements: Element[],
  callback: (isIntersecting: boolean, entry: IntersectionObserverEntry) => void,
  options: {
    threshold?: number | number[];
    rootMargin?: string;
    triggerOnce?: boolean;
  } = {}
) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
  } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry.isIntersecting, entry);
        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold,
      rootMargin,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    observer.disconnect();
  };
}

