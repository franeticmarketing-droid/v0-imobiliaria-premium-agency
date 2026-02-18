import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { PropertyCard } from "@/components/property-card"
import { getInvestmentProperties } from "@/lib/data"
import { Building2, Landmark, TreePine, BarChart3, Shield, ArrowRight, Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: "Investimento Imobiliário | Franetic Real Estate",
  description:
    "Oportunidades de investimento imobiliário em Portugal. Prédios, terrenos, reabilitações e ativos com rentabilidade comprovada.",
}

const investmentTypes = [
  {
    icon: Building2,
    title: "Prédios para Reabilitação",
    description: "Edifícios em zonas prime com potencial de valorização através de reabilitação integral ou parcial.",
  },
  {
    icon: Landmark,
    title: "Ativos com Rendimento",
    description: "Imóveis arrendados com contratos estáveis e rentabilidade comprovada. Rendimento passivo imediato.",
  },
  {
    icon: TreePine,
    title: "Terrenos e Quintas",
    description: "Lotes para construção ou desenvolvimento, com projeto aprovado ou potencial de licenciamento.",
  },
  {
    icon: Calculator,
    title: "Alojamento Local",
    description: "Unidades licenciadas para AL em zonas turísticas, com histórico de ocupação e gestão estabelecida.",
  },
]

const criteria = [
  "Análise de rentabilidade bruta e líquida",
  "Estudo de comparáveis e potencial de valorização",
  "Avaliação de riscos e cenários de saída",
  "Due diligence documental e jurídica",
  "Projeções financeiras personalizadas",
  "Acompanhamento pós-aquisição",
]

export default function InvestmentPage() {
  const investmentProperties = getInvestmentProperties()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-primary-foreground lg:py-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/investment-hero-cityscape.jpg"
            alt="Arquitetura moderna"
            fill
            priority
            className="object-cover opacity-10"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70">
              Para Investidores
            </span>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Investimento Imobiliário
              <br />
              <span className="text-primary-foreground/80">com Critério</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Não apresentamos tudo. Apresentamos o que faz sentido. Análise rigorosa, due diligence completa e
              acompanhamento dedicado para investidores que valorizam resultados.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg">
                <a href="#oportunidades">
                  Ver Oportunidades
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/contactos">Agendar Reunião</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <p className="font-serif text-4xl font-semibold text-foreground">5-8%</p>
              <p className="mt-1 text-sm text-muted-foreground">Yield Médio</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <p className="font-serif text-4xl font-semibold text-foreground">{investmentProperties.length}+</p>
              <p className="mt-1 text-sm text-muted-foreground">Ativos Disponíveis</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <p className="font-serif text-4xl font-semibold text-foreground">€45M+</p>
              <p className="mt-1 text-sm text-muted-foreground">Volume Transacionado</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investment Types */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Tipos de Investimento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Diferentes perfis de risco e retorno para diferentes objetivos de investimento.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {investmentTypes.map((type) => (
            <div key={type.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <type.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 font-medium text-foreground">{type.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A Nossa Abordagem
              </h2>
              <p className="mt-4 text-muted-foreground">
                Cada oportunidade passa por um processo rigoroso de análise antes de ser apresentada. Não vendemos
                imóveis — apresentamos investimentos fundamentados.
              </p>
              <ul className="mt-8 space-y-4">
                {criteria.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8">
                <Link href="/contactos">
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg lg:aspect-[4/3]">
              <Image
src="/investment-analysis-meeting.jpg"
  alt="Análise de investimento"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Properties */}
      <section id="oportunidades" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Oportunidades Atuais
            </h2>
            <p className="mt-2 text-muted-foreground">Ativos selecionados com perfil de investimento.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {investmentProperties.map((property) => (
            <div key={property.id} className="relative">
              <PropertyCard property={property} />
              {property.investmentYield && (
                <Badge className="absolute right-3 top-3 z-10 bg-accent text-accent-foreground">
                  Yield {property.investmentYield}%
                </Badge>
              )}
            </div>
          ))}
        </div>
        {investmentProperties.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
            <p className="text-lg font-medium text-foreground">Novas oportunidades em breve</p>
            <p className="mt-2 text-muted-foreground">Contacte-nos para ser notificado quando surgirem novos ativos.</p>
            <Button asChild className="mt-6">
              <Link href="/contactos">Registar Interesse</Link>
            </Button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Shield className="mx-auto h-12 w-12 text-primary-foreground/70" />
          <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Invista com Confiança</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Agende uma reunião para discutir os seus objetivos de investimento e descobrir oportunidades adequadas ao
            seu perfil.
          </p>
          <Button asChild variant="secondary" size="lg" className="mt-8">
            <Link href="/contactos">Agendar Reunião</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
