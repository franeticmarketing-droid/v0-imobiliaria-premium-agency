import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { GuideCard } from "@/components/guide-card"
import { StatsBar } from "@/components/stats-bar"
import { TrustBadges } from "@/components/trust-badges"
import { SuccessCounters } from "@/components/success-counters"
import { AdvancedSearch } from "@/components/advanced-search"
import { FAQList } from "@/components/faq-list"
import { getFeaturedProperties, guides, testimonials } from "@/lib/data"
import { Search, ShieldCheck, FileText, TrendingUp, Users, ArrowRight, ChevronRight } from "lucide-react"

const pillars = [
  {
    icon: ShieldCheck,
    title: "Curadoria",
    description: "Selecionamos criteriosamente cada imóvel. Não somos um catálogo genérico.",
  },
  {
    icon: FileText,
    title: "Transparência",
    description: "Documentação completa e reporting regular. Sem surpresas, sem letras pequenas.",
  },
  {
    icon: TrendingUp,
    title: "Promoção",
    description: "Fotografia profissional, vídeo e marketing digital de alta performance.",
  },
  {
    icon: Users,
    title: "Acompanhamento",
    description: "Consultor dedicado do início ao fim. Estamos consigo em cada passo.",
  },
]

const processSteps = [
  { step: "01", title: "Avaliação", description: "Análise de mercado e definição de estratégia de preço" },
  { step: "02", title: "Preparação", description: "Documentação, fotografia profissional e materiais" },
  { step: "03", title: "Promoção", description: "Marketing multicanal e base de compradores qualificados" },
  { step: "04", title: "Negociação", description: "Triagem de leads, visitas acompanhadas e propostas" },
  { step: "05", title: "Fecho", description: "CPCV, escritura e entrega de chaves sem complicações" },
]

export default function HomePage() {
  const featuredProperties = getFeaturedProperties().slice(0, 6)
  const featuredGuides = guides.slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-luxury-interior.jpg"
            alt="Interior de casa de luxo"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Imóveis únicos para
              <br />
              <span className="text-accent">vidas extraordinárias</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Transparência total, acompanhamento personalizado e resultados que superam expectativas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/imoveis">
                  Ver Imóveis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/vender">Avaliar o Meu Imóvel</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="relative -mt-16 z-10 mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="rounded-lg border bg-card p-6 shadow-lg">
          <AdvancedSearch />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Imóveis em Destaque
            </h2>
            <p className="mt-2 text-muted-foreground">Seleção curada das melhores oportunidades do momento.</p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link href="/imoveis">
              Ver todos
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} priority={index < 3} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline">
            <Link href="/imoveis">Ver todos os imóveis</Link>
          </Button>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <TrustBadges />
      </section>

      {/* Why Us - Pillars */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Porquê a Franetic
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Não somos mais uma agência. Somos o seu parceiro estratégico na compra, venda ou investimento imobiliário.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <pillar.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-6 font-medium text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Processo de Venda
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Metodologia comprovada para vender o seu imóvel ao melhor preço, no menor tempo.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {processSteps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < processSteps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-px w-full bg-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary font-serif text-xl font-semibold text-foreground">
                  {item.step}
                </span>
                <h3 className="mt-4 font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/vender">
              Iniciar Avaliação Gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Investor Callout */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-architecture-investment.jpg"
            alt="Arquitetura moderna"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70">
                Para Investidores
              </span>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Oportunidades de Investimento
              </h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/80">
                Prédios para reabilitação, terrenos com projeto, ativos com rentabilidade comprovada. Análise rigorosa,
                cenários de saída e acompanhamento dedicado.
              </p>
              <Button asChild variant="secondary" size="lg" className="mt-8">
                <Link href="/investimento">
                  Explorar Oportunidades
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <p className="font-serif text-4xl font-semibold">5-8%</p>
                <p className="mt-2 text-sm text-primary-foreground/70">Yield Médio</p>
              </div>
              <div className="rounded-lg bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <p className="font-serif text-4xl font-semibold">15+</p>
                <p className="mt-2 text-sm text-primary-foreground/70">Ativos Disponíveis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Os Números que Falam
        </h2>
        <SuccessCounters />
      </section>

      {/* Testimonials */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            O Que Dizem os Nossos Clientes
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="mt-16">
          <StatsBar />
        </div>
      </section>

      {/* Guides */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Guias e Recursos
              </h2>
              <p className="mt-2 text-muted-foreground">Conhecimento prático para decisões informadas.</p>
            </div>
            <Button asChild variant="ghost" className="hidden sm:flex">
              <Link href="/guias">
                Ver todos
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <FAQList />
      </section>

      {/* Final CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-secondary/50 p-8 text-center sm:p-12 lg:p-16">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Pronto para Dar o Próximo Passo?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Quer esteja a comprar, vender ou investir, estamos aqui para o ajudar a tomar a melhor decisão.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/vender">Avaliar Imóvel</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contactos">Falar Connosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
