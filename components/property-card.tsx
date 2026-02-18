import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Bed, Bath, Square, MapPin } from "lucide-react"
import { type Property, formatPrice } from "@/lib/data"

interface PropertyCardProps {
  property: Property
  priority?: boolean
}

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  const statusColors = {
    disponível: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
    reservado: "bg-amber-500/10 text-amber-700 border-amber-200",
    vendido: "bg-muted text-muted-foreground border-muted",
  }

  return (
    <Card className="group overflow-hidden border-0 bg-card shadow-sm transition-all duration-300 hover:shadow-md">
      <Link href={`/imoveis/${property.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0] || "/placeholder.svg"}
            alt={property.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute left-3 top-3 flex gap-2">
            <Badge variant="outline" className={`border ${statusColors[property.status]} backdrop-blur-sm`}>
              {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
            </Badge>
            {property.purpose === "investimento" && (
              <Badge variant="outline" className="border-accent/30 bg-accent/10 text-accent backdrop-blur-sm">
                Investimento
              </Badge>
            )}
          </div>
          <div className="absolute bottom-3 left-3">
            <p className="font-serif text-2xl font-semibold text-white">{formatPrice(property.price)}</p>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-foreground line-clamp-1">{property.title}</h3>
          <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span className="line-clamp-1">
              {property.location.parish}, {property.location.county}
            </span>
          </div>
          <div className="mt-4 flex items-center gap-4 border-t pt-4 text-sm text-muted-foreground">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bed className="h-4 w-4" />
                <span>{property.typology}</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Square className="h-4 w-4" />
              <span>{property.areaUseful || property.areaLand} m²</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
