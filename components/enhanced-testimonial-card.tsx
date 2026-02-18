"use client"

import Image from "next/image"
import { Star } from "lucide-react"

interface EnhancedTestimonial {
  id: string
  name: string
  role: string
  transactionType: string
  rating: number
  content: string
  image?: string
}

interface EnhancedTestimonialCardProps {
  testimonial: EnhancedTestimonial
}

export function EnhancedTestimonialCard({ testimonial }: EnhancedTestimonialCardProps) {
  return (
    <div className="rounded-lg border border-border/50 bg-card p-6 transition-all hover:shadow-lg hover:border-accent/50">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex flex-1 items-center gap-3">
          {testimonial.image && (
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
              <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="font-medium text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.transactionType}</p>
          </div>
        </div>
        <div className="ml-2 flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-foreground">{testimonial.content}</p>
      <p className="mt-4 text-xs font-medium text-accent">{testimonial.role}</p>
    </div>
  )
}
