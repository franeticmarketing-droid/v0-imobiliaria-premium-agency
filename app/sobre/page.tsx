import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StatsBar } from "@/components/stats-bar"
import { Target, Eye, Heart, MessageSquare, BarChart3, FileText, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre Nós | Franetic Real Estate",
  description:
    "Conheça a Franetic Real Estate. Agência imobiliária premium em Portugal com foco em curadoria, transparência e resultados.",
}

const values = [
  {
    icon: Target,
    title: "Curadoria",
    description: "Selecionamos criteriosamente cada imóvel e cada cliente. Qualidade acima de quantidade.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Comunicação clara, documentação completa e expectativas realistas desde o primeiro dia.",
  },
  {
    icon: Heart,
    title: "Compromisso",
    description: "O seu sucesso é o nosso sucesso. Trabalhamos até conseguir os resultados que merece.",
  },
]

const services = [
  {
    title: "Mediação Imobiliária",
    description:
      "Acompanhamento completo na compra e venda de imóveis residenciais e comerciais, desde a avaliação até à escritura.",
  },
  {
    title: "Consultoria de Investimento",
    description:
      "Análise de oportunidades, due diligence, projeções financeiras e acompanhamento para investidores nacionais e internacionais.",
  },
  {
    title: "Promoção e Marketing",
    description:
      "Fotografia profissional, vídeo, marketing digital e presença nos principais portais nacionais e internacionais.",
  },
  {
    title: "Apoio Documental",
    description:
      "Verificação e preparação de toda a documentação necessária, coordenação com notários, advogados e entidades bancárias.",
  },
]

const communicationPillars = [
  {
    icon: MessageSquare,
    title: "Reporting Regular",
    description: "Relatórios semanais com estatísticas de visualizações, contactos, visitas realizadas e feedback.",
  },
  {
    icon: BarChart3,
    title: "Análise de Mercado",
    description: "Informação atualizada sobre tendências, comparáveis e posicionamento do seu imóvel.",
  },
  {
    icon: FileText,
    title: "Documentação Acessível",
    description: "Acesso digital a todos os documentos, propostas e comunicações relevantes.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Sobre Nós</span>
              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
                Imobiliário
                <br />
                <span className="text-accent">com Critério</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                A Franetic nasceu da convicção de que o mercado imobiliário merece mais rigor, mais transparência e mais
                profissionalismo. Não somos um catálogo de imóveis. Somos curadores de oportunidades.
              </p>
              <p className="mt-4 text-muted-foreground">
                Com experiência em marketing digital, comunicação e análise de mercado, trazemos uma abordagem diferente
                à mediação imobiliária: dados concretos, apresentação premium e acompanhamento real.
              </p>
              <Button asChild className="mt-8">
                <Link href="/contactos">
                  Conhecer a Equipa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg lg:aspect-[4/5]">
              <Image src="/team-office-professional.jpg" alt="Equipa Franetic" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StatsBar />
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Os Nossos Valores
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Princípios que guiam cada interação, cada recomendação, cada decisão.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="border-0 bg-card shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A Nossa Equipa
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Profissionais dedicados com experiência em imobiliário, marketing e finanças.
            </p>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="max-w-sm text-center">
              <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full">
                <Image src="/founder-portrait.jpg" alt="Fundador" fill className="object-cover" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">Ricardo Franetic</h3>
              <p className="text-accent">Fundador & Consultor Principal</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Mais de 8 anos de experiência em mediação imobiliária e marketing digital. Especialista em análise de
                mercado e estratégias de venda para imóveis premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Os Nossos Serviços
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Soluções completas para cada fase do processo imobiliário.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="border-0 bg-card shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-medium text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Communication */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Como Comunicamos
              </h2>
              <p className="mt-4 text-muted-foreground">
                A transparência não é um slogan. É um processo. Mantemos os nossos clientes informados em cada etapa,
                com dados concretos e comunicação proativa.
              </p>
              <div className="mt-8 space-y-6">
                {communicationPillars.map((pillar) => (
                  <div key={pillar.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <pillar.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{pillar.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/communication-meeting.jpg" alt="Comunicação" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12 lg:p-16">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Vamos Conversar?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Seja para comprar, vender ou investir, estamos disponíveis para uma conversa sem compromisso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <Link href="/contactos">Entrar em Contacto</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/imoveis">Ver Imóveis</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
