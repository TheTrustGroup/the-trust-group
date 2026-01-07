/**
 * Optimized Parallax Utility
 * Uses transform3d, RAF throttling, and passive listeners for optimal performance
 */

interface ParallaxOptions {
  speed?: number;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Initialize optimized parallax for elements with data-parallax attribute
 * Replaces scroll event listeners with RAF-throttled transform updates
 */
export function initOptimizedParallax(options: ParallaxOptions = {}) {
  const { speed: defaultSpeed = 0.5 } = options;
  
  const parallaxElements = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (parallaxElements.length === 0) return () => {};

  let ticking = false;
  let rafId: number | null = null;

  function updateParallax() {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || String(defaultSpeed)) || defaultSpeed;
      const yPos = -(scrolled * speed);

      // ✅ GOOD - Use translate3d for GPU acceleration
      el.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      rafId = window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', requestTick);
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
    }
  };
}

/**
 * Optimize a single element's parallax effect
 */
export function optimizeParallaxElement(
  element: HTMLElement,
  speed: number = 0.5
): () => void {
  let ticking = false;
  let rafId: number | null = null;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const yPos = -(scrolled * speed);

    // ✅ GOOD - Use translate3d for GPU acceleration
    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      rafId = window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });

  return () => {
    window.removeEventListener('scroll', requestTick);
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
    }
  };
}

/**
 * Batch optimize multiple parallax elements
 */
export function optimizeParallaxElements(
  elements: HTMLElement[],
  speeds: number[] = []
): () => void {
  let ticking = false;
  let rafId: number | null = null;

  function updateParallax() {
    const scrolled = window.pageYOffset;

    elements.forEach((el, index) => {
      const speed = speeds[index] || 0.5;
      const yPos = -(scrolled * speed);

      // ✅ GOOD - Use translate3d for GPU acceleration
      el.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      rafId = window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });

  return () => {
    window.removeEventListener('scroll', requestTick);
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
    }
  };
}

