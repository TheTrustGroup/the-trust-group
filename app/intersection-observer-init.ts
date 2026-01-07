/**
 * Initialize Intersection Observer for CSS-based animations
 * This replaces scroll event listeners with Intersection Observer API
 * 
 * Usage: Add 'animate-on-scroll' class to elements you want to animate
 * They will get 'visible' class when they enter the viewport
 */

if (typeof window !== "undefined") {
  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initIntersectionObserver);
  } else {
    initIntersectionObserver();
  }

  function initIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Optional: unobserve after animation triggers
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element enters viewport
      }
    );

    // Observe all elements with 'animate-on-scroll' class
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    // Also observe dynamically added elements
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.classList.contains("animate-on-scroll")) {
              observer.observe(element);
            }
            // Also check children
            element.querySelectorAll?.(".animate-on-scroll").forEach((child) => {
              observer.observe(child);
            });
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}
