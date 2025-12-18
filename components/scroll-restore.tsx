"use client";

import { useEffect } from "react";

/**
 * Component to ensure scroll is restored and body overflow is reset
 * Prevents scroll from getting stuck when modals/menus close unexpectedly
 */
export function ScrollRestore() {
  useEffect(() => {
    // Reset any stuck overflow styles on mount
    const checkAndRestore = () => {
      // Only reset if no modal/menu should be open
      // Check if there are any open modals or menus
      const hasOpenModal = document.querySelector('[role="dialog"][aria-modal="true"]:not([aria-hidden="true"])');
      const hasOpenMenu = document.querySelector('[role="dialog"][aria-label="Navigation menu"]:not([aria-hidden="true"])');
      
      if (!hasOpenModal && !hasOpenMenu) {
        if (document.body.style.overflow === "hidden") {
          document.body.style.overflow = "";
          document.body.style.paddingRight = "";
        }
      }
    };

    // Check immediately
    checkAndRestore();

    // Also check on visibility change (when tab becomes active)
    document.addEventListener("visibilitychange", checkAndRestore);
    
    // Check periodically to catch edge cases
    const interval = setInterval(checkAndRestore, 1000);

    return () => {
      document.removeEventListener("visibilitychange", checkAndRestore);
      clearInterval(interval);
    };
  }, []);

  return null;
}




