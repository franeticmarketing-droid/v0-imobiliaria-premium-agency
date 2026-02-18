"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { SlidersHorizontal, X } from "lucide-react"
import { formatPrice } from "@/lib/data"

const locations = [
  { value: "lisboa", label: "Lisboa" },
  { value: "porto", label: "Porto" },
  { value: "algarve", label: "Algarve" },
  { value: "cascais", label: "Cascais" },
  { value: "sintra", label: "Sintra" },
  { value: "setubal", label: "Setúbal" },
  { value: "leiria", label: "Leiria" },
  { value: "vila-real", label: "Vila Real" },
  { value: "evora", label: "Évora" },
]

const propertyTypes = [
  { value: "apartamento", label: "Apartamento" },
  { value: "moradia", label: "Moradia" },
  { value: "terreno", label: "Terreno" },
  { value: "predio", label: "Prédio" },
  { value: "quinta", label: "Quinta" },
]

const typologies = [
  { value: "t0", label: "T0" },
  { value: "t1", label: "T1" },
  { value: "t2", label: "T2" },
  { value: "t3", label: "T3" },
  { value: "t4", label: "T4" },
  { value: "t5+", label: "T5+" },
]

const conditions = [
  { value: "novo", label: "Novo" },
  { value: "reabilitado", label: "Reabilitado" },
  { value: "usado", label: "Usado" },
]

const features = [
  { value: "piscina", label: "Piscina" },
  { value: "garagem", label: "Garagem" },
  { value: "jardim", label: "Jardim" },
  { value: "varanda", label: "Varanda" },
  { value: "terraço", label: "Terraço" },
  { value: "vista-mar", label: "Vista Mar" },
  { value: "ar-condicionado", label: "Ar Condicionado" },
  { value: "elevador", label: "Elevador" },
]

interface FiltersPanelProps {
  className?: string
}

export function FiltersPanel({ className }: FiltersPanelProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [priceRange, setPriceRange] = useState([0, 2500000])
  const [isOpen, setIsOpen] = useState(false)

  const currentType = searchParams.get("tipo") || ""
  const currentLocation = searchParams.get("localizacao") || ""
  const currentPurpose = searchParams.get("finalidade") || ""

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`/imoveis?${params.toString()}`)
  }

  const clearFilters = () => {
    router.push("/imoveis")
    setPriceRange([0, 2500000])
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Purpose */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Finalidade</Label>
        <Select value={currentPurpose} onValueChange={(v) => updateFilter("finalidade", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Todas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="habitacao">Habitação</SelectItem>
            <SelectItem value="investimento">Investimento</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Type */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Tipo de Imóvel</Label>
        <Select value={currentType} onValueChange={(v) => updateFilter("tipo", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Todos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            {propertyTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Localização</Label>
        <Select value={currentLocation} onValueChange={(v) => updateFilter("localizacao", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Todas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {locations.map((loc) => (
              <SelectItem key={loc.value} value={loc.value}>
                {loc.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Preço</Label>
        <div className="px-2 pt-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={2500000}
            step={50000}
            className="mb-4"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </div>

      {/* Typology */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Tipologia</Label>
        <div className="grid grid-cols-3 gap-2">
          {typologies.map((t) => (
            <Button
              key={t.value}
              variant="outline"
              size="sm"
              className="text-xs bg-transparent"
              onClick={() => updateFilter("tipologia", t.value)}
            >
              {t.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Estado</Label>
        <div className="space-y-2">
          {conditions.map((c) => (
            <div key={c.value} className="flex items-center gap-2">
              <Checkbox id={c.value} />
              <Label htmlFor={c.value} className="text-sm font-normal">
                {c.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Características</Label>
        <div className="grid grid-cols-2 gap-2">
          {features.map((f) => (
            <div key={f.value} className="flex items-center gap-2">
              <Checkbox id={f.value} />
              <Label htmlFor={f.value} className="text-sm font-normal">
                {f.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full bg-transparent" onClick={clearFilters}>
        <X className="mr-2 h-4 w-4" />
        Limpar Filtros
      </Button>
    </div>
  )

  return (
    <>
      {/* Desktop Filters */}
      <aside className={`hidden lg:block ${className}`}>
        <div className="sticky top-24 rounded-lg border bg-card p-6">
          <h2 className="mb-6 font-medium text-foreground">Filtros</h2>
          <FilterContent />
        </div>
      </aside>

      {/* Mobile Filters */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" className="gap-2 bg-transparent">
            <SlidersHorizontal className="h-4 w-4" />
            Filtros
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full overflow-y-auto sm:w-96">
          <SheetHeader>
            <SheetTitle>Filtros</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <FilterContent />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
