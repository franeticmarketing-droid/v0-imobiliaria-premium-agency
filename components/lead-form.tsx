"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle } from "lucide-react"

interface LeadFormProps {
  type: "contact" | "valuation" | "visit"
  propertyId?: string
  propertyTitle?: string
  className?: string
}

export function LeadForm({ type, propertyId, propertyTitle, className }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className={`flex flex-col items-center justify-center py-12 text-center ${className}`}>
        <CheckCircle className="h-12 w-12 text-emerald-500" />
        <h3 className="mt-4 font-serif text-xl font-semibold">Mensagem Enviada</h3>
        <p className="mt-2 text-muted-foreground">Entraremos em contacto consigo em breve.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nome *</Label>
            <Input id="name" name="name" required placeholder="O seu nome" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required placeholder="email@exemplo.pt" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone *</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="+351 912 345 678" />
          </div>
          {type === "valuation" && (
            <div className="space-y-2">
              <Label htmlFor="propertyType">Tipo de Imóvel</Label>
              <Select name="propertyType">
                <SelectTrigger>
                  <SelectValue placeholder="Selecionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="moradia">Moradia</SelectItem>
                  <SelectItem value="terreno">Terreno</SelectItem>
                  <SelectItem value="predio">Prédio</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          {type === "valuation" && (
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="location">Localização do Imóvel</Label>
              <Input id="location" name="location" placeholder="Concelho, Freguesia" />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensagem</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder={
              type === "visit"
                ? `Gostaria de agendar uma visita ao imóvel ${propertyTitle || ""}`
                : type === "valuation"
                  ? "Descreva brevemente o seu imóvel..."
                  : "A sua mensagem..."
            }
          />
        </div>

        {propertyId && <input type="hidden" name="propertyId" value={propertyId} />}

        <div className="flex items-start gap-2">
          <Checkbox id="consent" name="consent" required />
          <Label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground">
            Concordo com o tratamento dos meus dados pessoais de acordo com a{" "}
            <a href="/privacidade" className="underline hover:text-foreground">
              Política de Privacidade
            </a>
            . *
          </Label>
        </div>

        <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />A enviar...
            </>
          ) : type === "valuation" ? (
            "Solicitar Avaliação Gratuita"
          ) : type === "visit" ? (
            "Agendar Visita"
          ) : (
            "Enviar Mensagem"
          )}
        </Button>
      </div>
    </form>
  )
}
