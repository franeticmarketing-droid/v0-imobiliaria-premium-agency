import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GuideCard } from "@/components/guide-card"
import { getGuideBySlug, guides } from "@/lib/data"
import { Clock, ChevronLeft, ArrowRight } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

const categoryLabels: Record<string, string> = {
  comprar: "Comprar",
  vender: "Vender",
  investimento: "Investimento",
  documentação: "Documentação",
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) {
    return { title: "Guia não encontrado" }
  }

  return {
    title: `${guide.title} | Franetic Real Estate`,
    description: guide.excerpt,
  }
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) {
    notFound()
  }

  const relatedGuides = guides.filter((g) => g.id !== guide.id && g.category === guide.category).slice(0, 2)

  // Sample content for the guide (in production this would come from a CMS)
  const guideContent = `
## Introdução

A compra de um imóvel é uma das decisões financeiras mais importantes da vida. Para que o processo decorra sem surpresas, é essencial reunir e verificar toda a documentação necessária antes de avançar para a escritura.

Este guia explica cada documento que vai precisar, onde os obter e o que verificar em cada um.

## Documentos do Imóvel

### Certidão de Registo Predial

A certidão de registo predial é o "bilhete de identidade" do imóvel. Contém informação sobre:

- Identificação do prédio (descrição predial)
- Titularidade atual e histórico de proprietários
- Ónus e encargos (hipotecas, penhoras, etc.)
- Inscrições em vigor

**Onde obter:** Conservatória do Registo Predial ou online em predialonline.pt

**Custo:** Cerca de €15 online

### Caderneta Predial Urbana

A caderneta predial contém a informação fiscal do imóvel:

- Valor Patrimonial Tributário (VPT)
- Áreas declaradas
- Afetação (habitação, comércio, etc.)
- Identificação matricial

**Onde obter:** Portal das Finanças ou repartição de Finanças local

**Custo:** Gratuito

### Licença de Utilização

Comprova que o imóvel está legalmente apto para a utilização a que se destina. Essencial para verificar que a utilização prevista (habitação, comércio, serviços) corresponde ao licenciado.

**Onde obter:** Câmara Municipal

### Certificado Energético

Obrigatório para todos os imóveis à venda. Classifica a eficiência energética numa escala de A+ (mais eficiente) a F (menos eficiente).

**Validade:** 10 anos

**Onde obter:** Técnicos certificados pela ADENE

## Documentos dos Proprietários

### Identificação

- Cartão de Cidadão ou Passaporte
- NIF (Número de Identificação Fiscal)

### Comprovativo de Estado Civil

Se casado, pode ser necessário o consentimento do cônjuge para a venda, dependendo do regime de bens.

## Próximos Passos

Reunir a documentação com antecedência evita atrasos e permite identificar potenciais problemas antes da negociação avançar.

Se precisar de ajuda na verificação documental do imóvel que pretende comprar, a equipa da Franetic está disponível para o acompanhar em todo o processo.
  `

  return (
    <div className="flex flex-col">
      {/* Back Navigation */}
      <div className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/guias"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar aos guias
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <Badge variant="secondary" className="mb-4">
            {categoryLabels[guide.category]}
          </Badge>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {guide.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{guide.excerpt}</p>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{guide.readTime} min de leitura</span>
            </div>
            <span>•</span>
            <span>
              Atualizado em{" "}
              {new Date(guide.publishedAt).toLocaleDateString("pt-PT", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative mb-12 aspect-[2/1] overflow-hidden rounded-lg">
          <Image src={guide.image || "/placeholder.svg"} alt={guide.title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground max-w-none">
          {guideContent.split("\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="mt-12 first:mt-0">
                  {paragraph.replace("## ", "")}
                </h2>
              )
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={index} className="mt-8">
                  {paragraph.replace("### ", "")}
                </h3>
              )
            }
            if (paragraph.startsWith("- ")) {
              return (
                <li key={index} className="ml-4">
                  {paragraph.replace("- ", "")}
                </li>
              )
            }
            if (paragraph.startsWith("**")) {
              return (
                <p key={index} className="text-foreground">
                  <strong>{paragraph.replace(/\*\*/g, "")}</strong>
                </p>
              )
            }
            if (paragraph.trim()) {
              return (
                <p key={index} className="mt-4">
                  {paragraph}
                </p>
              )
            }
            return null
          })}
        </div>

        {/* CTA Card */}
        <Card className="mt-16 border-accent/20 bg-accent/5">
          <CardContent className="p-8 text-center">
            <h3 className="font-serif text-xl font-semibold text-foreground">Precisa de Ajuda?</h3>
            <p className="mt-2 text-muted-foreground">
              A nossa equipa está disponível para esclarecer dúvidas e acompanhar o seu processo imobiliário.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/contactos">
                  Falar Connosco
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/imoveis">Ver Imóveis</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="bg-secondary/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">Guias Relacionados</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedGuides.map((g) => (
                <GuideCard key={g.id} guide={g} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
