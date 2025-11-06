import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      aria-hidden="true"
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-xl border-2 border-border bg-background p-6">
      <Skeleton className="h-6 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-4" />
      <Skeleton className="h-32 w-full" />
    </div>
  );
}

export function ImageSkeleton() {
  return (
    <Skeleton className="h-48 w-full rounded-lg" />
  );
}

