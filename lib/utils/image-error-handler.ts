/**
 * Image Error Handler Utilities
 * Provides utilities for handling image loading errors across the application
 */

/**
 * Default placeholder image path
 */
export const DEFAULT_PLACEHOLDER = "/placeholder.jpg";

/**
 * Generate a data URL for a simple placeholder image
 */
export function generatePlaceholderDataURL(
  width: number = 400,
  height: number = 300,
  text: string = "Image"
): string {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZTwvdGV4dD48L3N2Zz4=";
  }

  // Background
  ctx.fillStyle = "#f3f4f6";
  ctx.fillRect(0, 0, width, height);

  // Border
  ctx.strokeStyle = "#e5e7eb";
  ctx.lineWidth = 1;
  ctx.strokeRect(0, 0, width, height);

  // Text
  ctx.fillStyle = "#9ca3af";
  ctx.font = "18px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);

  return canvas.toDataURL();
}

/**
 * Create an error handler for images
 */
export function createImageErrorHandler(
  fallbackSrc?: string,
  onError?: () => void
) {
  return (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    
    if (fallbackSrc && target.src !== fallbackSrc) {
      target.src = fallbackSrc;
      target.alt = "Image not available";
      onError?.();
    } else {
      // Replace with placeholder if fallback also fails
      target.src = generatePlaceholderDataURL();
      target.alt = "Image not available";
    }
  };
}

/**
 * Check if an image URL is valid
 */
export async function validateImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentType = response.headers.get("content-type");
    return response.ok && (contentType?.startsWith("image/") ?? false);
  } catch {
    return false;
  }
}
