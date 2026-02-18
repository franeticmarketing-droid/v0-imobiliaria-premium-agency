import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import type { Testimonial } from "@/lib/data"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-0 bg-card shadow-sm">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-accent/40" />
        <p className="mt-4 text-foreground leading-relaxed">{testimonial.content}</p>
        <div className="mt-6 flex items-center gap-3">
          {testimonial.image && (
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-medium text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
