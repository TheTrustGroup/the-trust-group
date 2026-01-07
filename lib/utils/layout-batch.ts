/**
 * Layout Batching Utilities
 * Prevents layout thrashing by batching DOM reads and writes
 */

/**
 * Batch read layout properties from multiple elements
 * Returns an array of read values
 */
export function batchReadLayout<T>(
  elements: HTMLElement[],
  readFn: (el: HTMLElement) => T
): T[] {
  // ✅ GOOD - Batch all reads first
  return elements.map(readFn);
}

/**
 * Batch write style properties to multiple elements
 * Applies writes after all reads are complete
 */
export function batchWriteStyles(
  elements: HTMLElement[],
  writeFn: (el: HTMLElement) => void
): void {
  // ✅ GOOD - Batch all writes after reads
  elements.forEach(writeFn);
}

/**
 * Calculate scrollbar width without causing layout thrashing
 * Batches all reads before any writes
 */
export function getScrollbarWidth(): number {
  // ✅ GOOD - Batch all reads first
  const windowWidth = window.innerWidth;
  const documentWidth = document.documentElement.clientWidth;
  
  // Calculate after all reads
  return windowWidth - documentWidth;
}

/**
 * Optimized function to lock body scroll
 * Batches reads, then writes
 */
export function lockBodyScroll(): () => void {
  // ✅ GOOD - Batch all reads first
  const originalOverflow = document.body.style.overflow;
  const originalPaddingRight = document.body.style.paddingRight;
  const scrollbarWidth = getScrollbarWidth();
  
  // ✅ GOOD - Then batch all writes
  document.body.style.overflow = "hidden";
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }
  
  // Return cleanup function
  return () => {
    document.body.style.overflow = originalOverflow || "";
    document.body.style.paddingRight = originalPaddingRight || "";
  };
}

/**
 * Optimized function to update multiple elements' styles
 * Reads all layout properties first, then writes all styles
 */
export function batchUpdateStyles<T extends HTMLElement>(
  elements: T[],
  updateFn: (el: T, index: number, layoutData: any) => void,
  readLayoutFn?: (el: T) => any
): void {
  // ✅ GOOD - Batch all reads first
  const layoutData = readLayoutFn
    ? elements.map(readLayoutFn)
    : elements.map(() => null);
  
  // ✅ GOOD - Then batch all writes
  elements.forEach((el, index) => {
    updateFn(el, index, layoutData[index]);
  });
}

/**
 * Example usage:
 * 
 * // ❌ BAD - Layout thrashing
 * elements.forEach(el => {
 *   const height = el.offsetHeight; // Read
 *   el.style.marginTop = `${height}px`; // Write
 * });
 * 
 * // ✅ GOOD - Batched reads and writes
 * const heights = batchReadLayout(elements, el => el.offsetHeight);
 * batchWriteStyles(elements, (el, i) => {
 *   el.style.marginTop = `${heights[i]}px`;
 * });
 */

