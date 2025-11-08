"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen, usePageLoad } from "./loading-screen";

export function PageLoader() {
  const pathname = usePathname();
  const { isLoading, progress } = usePageLoad();
  const [isInitialLoad, setIsInitialLoad] = React.useState(true);

  React.useEffect(() => {
    // Only show loading screen on initial page load
    if (isInitialLoad && !isLoading) {
      setIsInitialLoad(false);
    }
  }, [isLoading, isInitialLoad]);

  // Reset on route change
  React.useEffect(() => {
    // Don't show loading screen on route changes, only initial load
    setIsInitialLoad(false);
  }, [pathname]);

  // Only show on initial mount
  if (!isInitialLoad) return null;

  return <LoadingScreen isLoading={isLoading} progress={progress} />;
}

