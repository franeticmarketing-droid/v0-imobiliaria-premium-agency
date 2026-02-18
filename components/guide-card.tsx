import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"
import type { Guide } from "@/lib/data"

interface GuideCardProps {
  guide: Guide
}

const categoryLabels = {
  comprar: "Comprar",
  vender: "Vender",
  investimento: "Investimento",
  documentação: "Documentação",
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <Card className="group overflow-hidden border-0 bg-card shadow-sm transition-all duration-300 hover:shadow-md">
      <Link href={`/guias/${guide.slug}`}>
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={guide.image || "/placeholder.svg"}
            alt={guide.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3">
            <Badge variant="secondary" className="backdrop-blur-sm">
              {categoryLabels[guide.category]}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-accent transition-colors">
            {guide.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{guide.excerpt}</p>
          <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{guide.readTime} min de leitura</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
