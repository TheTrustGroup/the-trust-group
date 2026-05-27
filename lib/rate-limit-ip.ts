/**
 * Simple fixed-window rate limiter by client IP.
 * Best-effort on serverless (per-instance memory); pair with Turnstile for abuse control.
 */

type Bucket = { count: number; windowStart: number };

const globalStore = globalThis as typeof globalThis & {
  __ttgRateLimitBuckets?: Map<string, Bucket>;
};

function getBuckets(): Map<string, Bucket> {
  if (!globalStore.__ttgRateLimitBuckets) {
    globalStore.__ttgRateLimitBuckets = new Map();
  }
  return globalStore.__ttgRateLimitBuckets;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 64);
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp.slice(0, 64);
  return "unknown";
}

export function checkRateLimit(
  ip: string,
  maxRequests: number,
  windowMs: number
): { ok: true } | { ok: false; retryAfterSec: number } {
  const now = Date.now();
  const key = ip || "unknown";
  const buckets = getBuckets();
  let b = buckets.get(key);

  if (!b || now - b.windowStart >= windowMs) {
    buckets.set(key, { count: 1, windowStart: now });
    return { ok: true };
  }

  if (b.count >= maxRequests) {
    const retryAfterSec = Math.ceil((windowMs - (now - b.windowStart)) / 1000);
    return { ok: false, retryAfterSec: Math.max(1, retryAfterSec) };
  }

  b.count += 1;
  return { ok: true };
}
