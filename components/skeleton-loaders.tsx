"use client"

export function PropertyCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-border/50 bg-card">
      {/* Image skeleton */}
      <div className="aspect-video animate-pulse bg-muted" />

      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
        <div className="flex items-end justify-between">
          <div className="h-5 w-20 animate-pulse rounded bg-muted" />
          <div className="h-3 w-24 animate-pulse rounded bg-muted" />
        </div>
      </div>
    </div>
  )
}

export function PropertyCardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <PropertyCardSkeleton key={i} />
      ))}
    </div>
  )
}

export function FormInputSkeleton() {
  return (
    <div className="space-y-2">
      <div className="h-4 w-20 animate-pulse rounded bg-muted" />
      <div className="h-10 w-full animate-pulse rounded bg-muted" />
    </div>
  )
}
