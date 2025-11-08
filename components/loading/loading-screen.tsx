"use client";

import * as React from "react";
import { EnhancedLoadingScreen } from "./enhanced-loading-screen";

interface LoadingScreenProps {
  isLoading: boolean;
  progress?: number;
  message?: string;
}

// Re-export enhanced version
export function LoadingScreen({ isLoading, progress, message = "Loading your experience..." }: LoadingScreenProps) {
  return <EnhancedLoadingScreen isLoading={isLoading} progress={progress} message={message} />;
}

// Hook to track page loading
export function usePageLoad() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    // Also check if page is actually loaded
    if (typeof window !== "undefined") {
      const handleLoad = () => {
        setProgress(100);
        setTimeout(() => setIsLoading(false), 500);
      };

      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
      }
    }

    return () => clearInterval(interval);
  }, []);

  return { isLoading, progress };
}
