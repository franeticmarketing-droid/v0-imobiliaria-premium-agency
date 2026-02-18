import type { Metadata } from "next"
import { Suspense } from "react"
import { PropertyCard } from "@/components/property-card"
import { FiltersPanel } from "@/components/filters-panel"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { properties } from "@/lib/data"

export const metadata: Metadata = {
  title: "Imóveis | Franetic Real Estate",
  description:
    "Descubra a nossa seleção curada de imóveis premium em Portugal. Apartamentos, moradias, terrenos e oportunidades de investimento.",
}

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function PropertiesPage({ searchParams }: PageProps) {
  const params = await searchParams

  // Filter properties based on search params
  let filteredProperties = properties.filter((p) => p.status !== "vendido")

  const tipo = params.tipo as string
  const localizacao = params.localizacao as string
  const finalidade = params.finalidade as string

  if (tipo && tipo !== "all") {
    filteredProperties = filteredProperties.filter((p) => p.type === tipo)
  }

  if (finalidade === "habitacao") {
    filteredProperties = filteredProperties.filter((p) => p.purpose === "habitação")
  } else if (finalidade === "investimento") {
    filteredProperties = filteredProperties.filter((p) => p.purpose === "investimento")
  }

  if (localizacao && localizacao !== "all") {
    filteredProperties = filteredProperties.filter((p) =>
      p.location.district.toLowerCase().includes(localizacao.toLowerCase()),
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Imóveis</h1>
        <p className="mt-2 text-muted-foreground">{filteredProperties.length} imóveis disponíveis</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Filters Sidebar */}
        <Suspense fallback={<div className="w-72 animate-pulse bg-muted rounded-lg h-96" />}>
          <FiltersPanel className="w-72 shrink-0" />
        </Suspense>

        {/* Properties Grid */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="mb-6 flex items-center justify-between">
            <div className="lg:hidden">
              <Suspense fallback={null}>
                <FiltersPanel />
              </Suspense>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Ordenar por:</span>
              <Select defaultValue="recent">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Mais Recentes</SelectItem>
                  <SelectItem value="price-asc">Preço (menor)</SelectItem>
                  <SelectItem value="price-desc">Preço (maior)</SelectItem>
                  <SelectItem value="featured">Destaques</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} priority={index < 6} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
              <p className="text-lg font-medium text-foreground">Nenhum imóvel encontrado</p>
              <p className="mt-2 text-muted-foreground">
                Tente ajustar os filtros ou contacte-nos para ajuda personalizada.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
