"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export function BreadcrumbNav() {
  const pathname = usePathname()

  // Remove leading slash and split
  const segments = pathname.split("/").filter(Boolean)

  // Hide breadcrumb on homepage
  if (segments.length === 0) return null

  const breadcrumbs = [
    { href: "/", label: "Início" },
    ...segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/")
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      return { href, label }
    }),
  ]

  return (
    <div className="border-b bg-secondary/30 py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center gap-2">
                {index > 0 && <BreadcrumbSeparator />}
                {index === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage className="text-xs sm:text-sm">{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={crumb.href} className="text-xs sm:text-sm">
                      {crumb.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}
