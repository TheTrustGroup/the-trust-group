/**
 * Performance monitoring utilities
 * Tracks Core Web Vitals and custom performance metrics
 */

export interface PerformanceMetrics {
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  fcp?: number; // First Contentful Paint
  ttfb?: number; // Time to First Byte
}

/**
 * Report Core Web Vitals to analytics
 */
export function reportWebVitals(metric: any) {
  // Only report in production
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  // Report to analytics service (e.g., Google Analytics, Vercel Analytics)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', metric.name, metric.value);
  }
}

/**
 * Measure performance of a function
 */
export function measurePerformance<T>(
  name: string,
  fn: () => T
): T {
  if (typeof window === 'undefined' || !window.performance) {
    return fn();
  }

  const start = performance.now();
  const result = fn();
  const end = performance.now();
  const duration = end - start;

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`);
  }

  return result;
}

/**
 * Check if user is on a slow connection
 */
export function isSlowConnection(): boolean {
  if (typeof window === 'undefined' || !(navigator as any).connection) {
    return false;
  }

  const connection = (navigator as any).connection;
  return (
    connection.effectiveType === 'slow-2g' ||
    connection.effectiveType === '2g' ||
    connection.saveData === true
  );
}

/**
 * Preload critical resources
 */
export function preloadResource(href: string, as: string) {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
}

/**
 * Defer non-critical CSS
 */
export function deferCSS(href: string) {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.onload = () => {
    (link as any).media = 'all';
  };
  document.head.appendChild(link);
}
