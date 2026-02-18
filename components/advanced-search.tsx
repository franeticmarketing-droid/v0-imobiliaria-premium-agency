"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin } from "lucide-react"

const LOCATIONS = ["Lisboa", "Porto", "Algarve", "Cascais", "Sintra", "Covilhã", "Madeira"]
const PROPERTY_TYPES = ["Apartamento", "Moradia", "Terreno", "Prédio", "Quinta"]
const TYPOLOGIES = ["T0", "T1", "T2", "T3", "T4", "T4+"]
const PRICE_RANGES = [
  { label: "Até 300.000€", value: "300000" },
  { label: "Até 500.000€", value: "500000" },
  { label: "Até 750.000€", value: "750000" },
  { label: "Até 1.000.000€", value: "1000000" },
  { label: "Até 2.000.000€", value: "2000000" },
]

export function AdvancedSearch() {
  const [formData, setFormData] = useState({
    location: "",
    propertyType: "",
    typology: "",
    maxPrice: "",
  })

  // Load saved filters from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("searchFilters")
      if (saved) {
        setFormData(JSON.parse(saved))
      }
    }
  }, [])

  // Save filters to localStorage
  const handleChange = (field: string, value: string) => {
    const updated = { ...formData, [field]: value }
    setFormData(updated)
    if (typeof window !== "undefined") {
      localStorage.setItem("searchFilters", JSON.stringify(updated))
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Build query string from filters
    const params = new URLSearchParams()
    if (formData.location) params.append("location", formData.location)
    if (formData.propertyType) params.append("type", formData.propertyType)
    if (formData.typology) params.append("typology", formData.typology)
    if (formData.maxPrice) params.append("maxPrice", formData.maxPrice)

    window.location.href = `/imoveis?${params.toString()}`
  }

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {/* Location */}
        <div className="relative">
          <Select value={formData.location} onValueChange={(value) => handleChange("location", value)}>
            <SelectTrigger className="pl-9">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <SelectValue placeholder="Localização" />
            </SelectTrigger>
            <SelectContent>
              {LOCATIONS.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <Select value={formData.propertyType} onValueChange={(value) => handleChange("propertyType", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Tipo de Imóvel" />
          </SelectTrigger>
          <SelectContent>
            {PROPERTY_TYPES.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Typology */}
        <Select value={formData.typology} onValueChange={(value) => handleChange("typology", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Tipologia" />
          </SelectTrigger>
          <SelectContent>
            {TYPOLOGIES.map((typ) => (
              <SelectItem key={typ} value={typ}>
                {typ}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Max Price */}
        <Select value={formData.maxPrice} onValueChange={(value) => handleChange("maxPrice", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Preço máximo" />
          </SelectTrigger>
          <SelectContent>
            {PRICE_RANGES.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button type="submit" className="lg:col-span-1">
          <Search className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Pesquisar</span>
          <span className="inline sm:hidden">OK</span>
        </Button>
      </div>
    </form>
  )
}
