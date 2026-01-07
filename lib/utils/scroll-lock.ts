/**
 * Optimized Scroll Lock Utility
 * Prevents body scroll when modals/menus are open
 * Handles iOS background scroll prevention
 * Prevents layout shift with scrollbar width compensation
 */

interface ScrollLockState {
  originalOverflow: string;
  originalPaddingRight: string;
  originalPosition: string;
  originalTop: string;
  originalWidth: string;
  scrollY: number;
}

let scrollLockState: ScrollLockState | null = null;
let lockCount = 0; // Track multiple locks (e.g., nested modals)

/**
 * Detect if device is iOS
 */
function isIOS(): boolean {
  if (typeof window === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

/**
 * Get scrollbar width to prevent layout shift
 */
function getScrollbarWidth(): number {
  if (typeof window === "undefined") return 0;
  
  // ✅ GOOD - Batch all reads first
  const windowWidth = window.innerWidth;
  const documentWidth = document.documentElement.clientWidth;
  
  // Calculate after all reads
  return windowWidth - documentWidth;
}

/**
 * Lock body scroll (optimized for iOS and layout shift prevention)
 * 
 * @returns Cleanup function to unlock scroll
 */
export function lockBodyScroll(): () => void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {}; // No-op for SSR
  }

  lockCount++;
  
  // If already locked, just increment counter
  if (scrollLockState !== null) {
    return () => {
      lockCount--;
      if (lockCount === 0) {
        unlockBodyScroll();
      }
    };
  }

  // ✅ GOOD - Batch all reads first
  const originalOverflow = document.body.style.overflow;
  const originalPaddingRight = document.body.style.paddingRight;
  const originalPosition = document.body.style.position;
  const originalTop = document.body.style.top;
  const originalWidth = document.body.style.width;
  const scrollY = window.scrollY;
  const scrollbarWidth = getScrollbarWidth();

  // Store state for restoration
  scrollLockState = {
    originalOverflow,
    originalPaddingRight,
    originalPosition,
    originalTop,
    originalWidth,
    scrollY,
  };

  // ✅ GOOD - Then batch all writes
  // Lock scroll
  document.body.style.overflow = "hidden";
  
  // Prevent layout shift (compensate for scrollbar)
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  // Prevent background scroll on iOS
  if (isIOS()) {
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
  }

  // Return cleanup function
  return () => {
    lockCount--;
    if (lockCount === 0) {
      unlockBodyScroll();
    }
  };
}

/**
 * Unlock body scroll and restore state
 */
function unlockBodyScroll(): void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  if (scrollLockState === null) {
    return;
  }

  // ✅ GOOD - Batch all writes
  // Restore styles
  document.body.style.overflow = scrollLockState.originalOverflow || "";
  document.body.style.paddingRight = scrollLockState.originalPaddingRight || "";
  document.body.style.position = scrollLockState.originalPosition || "";
  document.body.style.top = scrollLockState.originalTop || "";
  document.body.style.width = scrollLockState.originalWidth || "";

  // Restore scroll position on iOS
  if (isIOS()) {
    window.scrollTo(0, scrollLockState.scrollY);
  }

  // Clear state
  scrollLockState = null;
}

/**
 * Check if scroll is currently locked
 */
export function isScrollLocked(): boolean {
  return scrollLockState !== null;
}

/**
 * Force unlock scroll (use with caution - for cleanup)
 */
export function forceUnlockScroll(): void {
  lockCount = 0;
  unlockBodyScroll();
}
