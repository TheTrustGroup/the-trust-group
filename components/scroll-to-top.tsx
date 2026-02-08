"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scrolls to top on route change so the new page doesn’t briefly show
 * previous scroll position (e.g. footer flash before content).
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    const main = document.getElementById("main-content");
    if (main && typeof main.focus === "function") {
      main.focus({ preventScroll: true });
    }
  }, [pathname]);

  return null;
}
