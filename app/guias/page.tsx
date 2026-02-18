import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GuideCard } from "@/components/guide-card"
import { guides } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Guias Imobiliários | Franetic Real Estate",
  description:
    "Guias práticos sobre compra, venda e investimento imobiliário em Portugal. Documentação, custos, financiamento e muito mais.",
}

const categories = [
  { value: "all", label: "Todos" },
  { value: "comprar", label: "Comprar" },
  { value: "vender", label: "Vender" },
  { value: "investimento", label: "Investimento" },
  { value: "documentação", label: "Documentação" },
]

export default function GuidesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Guias e Recursos
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Conhecimento prático para tomar decisões informadas na compra, venda ou investimento em imóveis.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={category.value === "all" ? "default" : "outline"}
                size="sm"
                className={category.value !== "all" ? "bg-transparent" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Não Encontrou o Que Procurava?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contacte-nos para esclarecer qualquer dúvida sobre o processo imobiliário.
          </p>
          <Button asChild className="mt-6">
            <Link href="/contactos">
              Falar Connosco
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
