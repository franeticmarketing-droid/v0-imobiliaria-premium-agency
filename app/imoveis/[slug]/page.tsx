import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PropertyGallery } from "@/components/property-gallery"
import { PropertyCard } from "@/components/property-card"
import { LeadForm } from "@/components/lead-form"
import { getPropertyBySlug, properties, formatPrice } from "@/lib/data"
import { Bed, Bath, Square, Car, Calendar, Zap, MapPin, Phone, ChevronLeft, Share2, Heart } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) {
    return { title: "Imóvel não encontrado" }
  }

  const cleanDescription = property.description.replace(/\*\*/g, "").replace(/\n/g, " ").slice(0, 160)
  const priceFormatted = new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(property.price)

  return {
    title: `${property.title} | ${priceFormatted} | Franetic Real Estate`,
    description: `${property.type.charAt(0).toUpperCase() + property.type.slice(1)} ${property.typology} em ${property.location.parish}, ${property.location.county}. ${property.areaGross}m², ${property.bedrooms} quartos. ${cleanDescription}`,
    keywords: [
      property.type,
      property.typology,
      property.location.parish,
      property.location.county,
      property.location.district,
      "imobiliária",
      "Portugal",
      property.purpose === "investimento" ? "investimento imobiliário" : "comprar casa",
      ...property.features.slice(0, 5),
    ],
    openGraph: {
      title: property.title,
      description: cleanDescription,
      images: property.images[0] ? [{ url: property.images[0], width: 1200, height: 630, alt: property.title }] : [],
      type: "website",
      locale: "pt_PT",
    },
    twitter: {
      card: "summary_large_image",
      title: property.title,
      description: cleanDescription,
      images: property.images[0] ? [property.images[0]] : [],
    },
    alternates: {
      canonical: `/imoveis/${property.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }))
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) {
    notFound()
  }

  const statusColors = {
    disponível: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
    reservado: "bg-amber-500/10 text-amber-700 border-amber-200",
    vendido: "bg-muted text-muted-foreground border-muted",
  }

  // Get similar properties
  const similarProperties = properties
    .filter(
      (p) =>
        p.id !== property.id &&
        p.status !== "vendido" &&
        (p.type === property.type || p.location.district === property.location.district),
    )
    .slice(0, 3)

  const highlights = [
    { icon: Bed, label: "Quartos", value: property.typology },
    { icon: Bath, label: "Casas de Banho", value: property.bathrooms },
    { icon: Square, label: "Área Útil", value: `${property.areaUseful} m²` },
    ...(property.areaLand ? [{ icon: Square, label: "Terreno", value: `${property.areaLand} m²` }] : []),
    ...(property.parking > 0 ? [{ icon: Car, label: "Estacionamento", value: property.parking }] : []),
    ...(property.year ? [{ icon: Calendar, label: "Ano", value: property.year }] : []),
    { icon: Zap, label: "Classe Energética", value: property.energyClass },
  ]

  return (
    <div className="pb-24">
      {/* Back Navigation */}
      <div className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/imoveis"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar aos imóveis
          </Link>
        </div>
      </div>

      {/* Gallery */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <PropertyGallery images={property.images} title={property.title} />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className={statusColors[property.status]}>
                    {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                  </Badge>
                  {property.purpose === "investimento" && (
                    <Badge variant="outline" className="border-accent/30 bg-accent/10 text-accent">
                      Investimento
                    </Badge>
                  )}
                  <Badge variant="secondary">{property.type.charAt(0).toUpperCase() + property.type.slice(1)}</Badge>
                </div>
                <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {property.title}
                </h1>
                <div className="mt-2 flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {property.location.parish}, {property.location.county}, {property.location.district}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Price */}
            <div className="mt-6">
              <p className="font-serif text-4xl font-semibold text-foreground">{formatPrice(property.price)}</p>
              {property.investmentYield && (
                <p className="mt-1 text-sm text-accent">Yield estimado: {property.investmentYield}%</p>
              )}
            </div>

            <Separator className="my-8" />

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {highlights.map((item, index) => (
                <div key={index} className="rounded-lg bg-secondary/50 p-4 text-center">
                  <item.icon className="mx-auto h-5 w-5 text-muted-foreground" />
                  <p className="mt-2 font-medium text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <Separator className="my-8" />

            {/* Description */}
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">Descrição</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                {property.description.split("\n\n").map((paragraph, idx) => {
                  // Handle bold text with **
                  const renderText = (text: string) => {
                    const parts = text.split(/\*\*(.*?)\*\*/g)
                    return parts.map((part, i) =>
                      i % 2 === 1 ? (
                        <strong key={i} className="font-semibold text-foreground">
                          {part}
                        </strong>
                      ) : (
                        part
                      ),
                    )
                  }

                  // Check if paragraph starts with bullet points
                  if (paragraph.includes("•")) {
                    const lines = paragraph.split("\n")
                    return (
                      <ul key={idx} className="list-none space-y-1">
                        {lines.map((line, lineIdx) =>
                          line.startsWith("•") ? (
                            <li key={lineIdx} className="flex items-start gap-2">
                              <span className="text-accent">{"•"}</span>
                              <span>{renderText(line.slice(1).trim())}</span>
                            </li>
                          ) : (
                            <p key={lineIdx} className="font-medium text-foreground">
                              {renderText(line)}
                            </p>
                          ),
                        )}
                      </ul>
                    )
                  }

                  return <p key={idx}>{renderText(paragraph)}</p>
                })}
              </div>
            </div>

            <Separator className="my-8" />

            {/* Features */}
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">Características</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {property.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="text-sm">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="my-8" />

            {/* Location */}
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">Localização</h2>
              <p className="mt-2 text-sm text-muted-foreground">{property.location.approximate}</p>
              <div className="mt-4 aspect-video overflow-hidden rounded-lg bg-secondary">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>Mapa disponível mediante contacto</span>
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                * A localização apresentada é aproximada para proteção da privacidade dos proprietários.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Interessado neste imóvel?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Agende uma visita ou peça mais informações sem compromisso.
                  </p>
                  <div className="mt-6 space-y-3">
                    <Button asChild className="w-full">
                      <a href="tel:+351912345678">
                        <Phone className="mr-2 h-4 w-4" />
                        Ligar Agora
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a
                        href={`https://wa.me/351912345678?text=Olá, gostaria de saber mais sobre o imóvel: ${property.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                  <Separator className="my-6" />
                  <LeadForm type="visit" propertyId={property.id} propertyTitle={property.title} />
                </CardContent>
              </Card>

              {/* Documentation Notice */}
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-medium text-foreground">Documentação e Processo</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Garantimos transparência total. Toda a documentação do imóvel está verificada e disponível para
                    consulta.
                  </p>
                  <Button variant="link" className="mt-2 h-auto p-0 text-accent" asChild>
                    <Link href="/guias/documentacao-necessaria-compra-imovel">Saber mais sobre documentação</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-24">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">Imóveis Semelhantes</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
