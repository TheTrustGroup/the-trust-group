"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ImageSkeleton } from "./shimmer-skeleton";
import { cn } from "@/lib/utils";

// Generate a low-quality placeholder for blur-up effect
function generateBlurDataURL(width: number = 10, height: number = 10): string {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#f3f4f6";
    ctx.fillRect(0, 0, width, height);
  }
  return canvas.toDataURL();
}

interface LazyImageProps extends React.ComponentProps<typeof Image> {
  blurDataURL?: string;
  placeholder?: "blur" | "empty";
  fallback?: string;
  showSkeleton?: boolean;
}

export function LazyImage({
  src,
  alt,
  blurDataURL,
  placeholder = "blur",
  fallback,
  showSkeleton = true,
  className,
  ...props
}: LazyImageProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState(src);

  React.useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (fallback) {
      setImageSrc(fallback);
    }
  };

  // Generate blur placeholder if not provided
  const [defaultBlurDataURL, setDefaultBlurDataURL] = React.useState<string>(
    blurDataURL || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
  );

  React.useEffect(() => {
    if (!blurDataURL && typeof window !== "undefined") {
      try {
        const blur = generateBlurDataURL();
        setDefaultBlurDataURL(blur);
      } catch {
        // Fallback to SVG
      }
    }
  }, [blurDataURL]);

  if (hasError && !fallback) {
    return (
      <div className={cn("bg-muted flex items-center justify-center", className)}>
        <span className="text-muted-foreground text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <AnimatePresence>
        {isLoading && showSkeleton && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10"
          >
            <ImageSkeleton className="w-full h-full" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: isLoading ? 0 : 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-full h-full"
      >
        <Image
          src={imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          placeholder={placeholder}
          blurDataURL={placeholder === "blur" ? defaultBlurDataURL : undefined}
          loading="lazy"
          {...props}
        />
      </motion.div>
    </div>
  );
}

