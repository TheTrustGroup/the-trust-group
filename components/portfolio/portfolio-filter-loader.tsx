"use client";

import * as React from "react";
import { OverlayLoader } from "@/components/ui/loading-indicator";

interface PortfolioFilterLoaderProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export function PortfolioFilterLoader({ isLoading, children }: PortfolioFilterLoaderProps) {
  return (
    <div className="relative">
      {isLoading && <OverlayLoader text="Filtering projects..." />}
      <div className={isLoading ? "opacity-50 pointer-events-none" : ""}>
        {children}
      </div>
    </div>
  );
}

