/**
 * Enhanced smooth scroll utilities with performance optimizations
 */

// Debounce function for scroll events
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Enhanced smooth scroll with offset and easing
export function smoothScrollTo(
  elementId: string,
  offset: number = 0,
  behavior: ScrollBehavior = "smooth"
) {
  if (typeof window === "undefined") return;
  
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior,
  });
}

// Smooth scroll to top
export function smoothScrollToTop(behavior: ScrollBehavior = "smooth") {
  if (typeof window === "undefined") return;
  
  window.scrollTo({
    top: 0,
    behavior,
  });
}

// Get scroll position
export function getScrollPosition(): number {
  if (typeof window === "undefined") return 0;
  return window.pageYOffset || document.documentElement.scrollTop;
}

// Get scroll progress (0 to 1)
export function getScrollProgress(): number {
  if (typeof window === "undefined") return 0;
  
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  const scrollableHeight = documentHeight - windowHeight;
  return scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;
}

// Check if element is in viewport
export function isInViewport(
  element: HTMLElement,
  threshold: number = 0
): boolean {
  if (typeof window === "undefined") return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  return (
    rect.top >= -threshold &&
    rect.left >= -threshold &&
    rect.bottom <= windowHeight + threshold &&
    rect.right <= windowWidth + threshold
  );
}

// Request animation frame wrapper for smooth animations
export function requestAnimationFrame(callback: () => void): number {
  if (typeof window === "undefined") return 0;
  return window.requestAnimationFrame(callback);
}

// Cancel animation frame wrapper
export function cancelAnimationFrame(id: number): void {
  if (typeof window === "undefined") return;
  window.cancelAnimationFrame(id);
}

