import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { FAQAccordion } from "@/components/faq-accordion"
import { StatsBar } from "@/components/stats-bar"
import { Camera, TrendingUp, Users, Target, BarChart3, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Vender Imóvel | Franetic Real Estate",
  description:
    "Avaliação gratuita e sem compromisso do seu imóvel. Metodologia comprovada para vender ao melhor preço, no menor tempo.",
}

const benefits = [
  {
    icon: Target,
    title: "Avaliação Rigorosa",
    description: "Análise de comparáveis, procura ativa e tendências de mercado para definir o preço certo.",
  },
  {
    icon: Camera,
    title: "Apresentação Premium",
    description: "Fotografia profissional, vídeo, plantas e materiais de marketing de alta qualidade.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Multicanal",
    description: "Portais nacionais e internacionais, redes sociais, base de compradores qualificados.",
  },
  {
    icon: Users,
    title: "Acompanhamento Dedicado",
    description: "Consultor exclusivo, reporting semanal e comunicação transparente em cada etapa.",
  },
  {
    icon: Shield,
    title: "Segurança Jurídica",
    description: "Verificação documental completa, apoio na preparação e na negociação do CPCV.",
  },
  {
    icon: BarChart3,
    title: "Metodologia Estruturada",
    description: "Processo transparente passo a passo, reporting regular e total controlo sobre a venda do seu imóvel.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Avaliação",
    description:
      "Visitamos o seu imóvel, analisamos o mercado local, comparáveis recentes e definimos uma estratégia de preço competitiva.",
    details: ["Análise de mercado gratuita", "Estudo de comparáveis", "Estratégia de posicionamento"],
  },
  {
    number: "02",
    title: "Preparação",
    description:
      "Organizamos toda a documentação, realizamos sessão fotográfica profissional e preparamos os materiais de promoção.",
    details: ["Verificação documental", "Fotografia e vídeo profissional", "Plantas e descrições detalhadas"],
  },
  {
    number: "03",
    title: "Promoção",
    description:
      "Lançamos o seu imóvel nos principais canais, ativamos a nossa base de compradores e gerimos todas as comunicações.",
    details: [
      "Portais nacionais e internacionais",
      "Marketing digital direcionado",
      "Base de compradores qualificados",
    ],
  },
  {
    number: "04",
    title: "Visitas",
    description:
      "Qualificamos cada interessado antes das visitas, acompanhamos presencialmente e reportamos feedback detalhado.",
    details: ["Pré-qualificação de leads", "Visitas acompanhadas", "Reporting de feedback"],
  },
  {
    number: "05",
    title: "Negociação",
    description:
      "Apresentamos propostas estruturadas, negociamos em seu nome e garantimos as melhores condições possíveis.",
    details: ["Análise de propostas", "Negociação estratégica", "Proteção dos seus interesses"],
  },
  {
    number: "06",
    title: "Fecho",
    description: "Coordenamos CPCV, escritura e todos os passos legais até à entrega das chaves, sem stress para si.",
    details: ["CPCV e escritura", "Coordenação com notário", "Entrega de chaves"],
  },
]

const documentChecklist = [
  "Certidão de registo predial atualizada",
  "Caderneta predial urbana",
  "Licença de utilização",
  "Ficha técnica de habitação (se aplicável)",
  "Certificado energético",
  "Plantas do imóvel",
  "Documentos de identificação dos proprietários",
  "Comprovativo de morada fiscal",
]

const faqs = [
  {
    question: "Qual é a comissão cobrada pela Franetic?",
    answer:
      "A nossa comissão é competitiva e alinhada com o mercado, normalmente entre 3% e 5% do valor de venda, dependendo do tipo de imóvel e serviços incluídos. Só é paga após a concretização da venda, ou seja, partilhamos o mesmo objetivo: vender o seu imóvel ao melhor preço.",
  },
  {
    question: "O contrato de mediação é exclusivo?",
    answer:
      "Recomendamos o regime de exclusividade porque nos permite investir mais recursos na promoção do seu imóvel (fotografia profissional, marketing digital, etc.) e garantir um serviço de excelência. No entanto, discutimos sempre a melhor opção para cada caso.",
  },
  {
    question: "Quanto tempo demora a vender um imóvel?",
    answer:
      "O prazo de venda depende de múltiplos fatores como localização, preço, estado do imóvel e condições de mercado. Com uma estratégia bem definida e acompanhamento dedicado, trabalhamos para obter os melhores resultados no menor tempo possível. Mantemos comunicação transparente e reporting regular ao longo de todo o processo.",
  },
  {
    question: "Como é feita a avaliação do imóvel?",
    answer:
      "A avaliação combina análise de comparáveis vendidos recentemente na zona, estudo da procura ativa, tendências de mercado e características específicas do seu imóvel. Visitamos sempre presencialmente e apresentamos um relatório fundamentado.",
  },
  {
    question: "Que documentos preciso para vender?",
    answer:
      "Os documentos essenciais incluem: certidão de registo predial, caderneta predial urbana, licença de utilização, certificado energético, plantas e documentos de identificação. Ajudamos a reunir tudo o que for necessário.",
  },
  {
    question: "Posso continuar a viver no imóvel durante a venda?",
    answer:
      "Sim, é perfeitamente possível. Coordenamos as visitas com antecedência e em horários convenientes para si. Damos também sugestões de preparação do imóvel para maximizar o impacto nas visitas.",
  },
  {
    question: "E se o imóvel não vender?",
    answer:
      "Se após um período razoável não tivermos propostas adequadas, reavaliamos conjuntamente a estratégia: ajuste de preço, reposicionamento, reforço de promoção ou outras ações. A comunicação é sempre transparente e as decisões são suas.",
  },
]

export default function SellPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 text-primary-foreground lg:py-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/seller-hero-house.jpg"
            alt="Casa moderna"
            fill
            priority
            className="object-cover opacity-10"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70">
                Venda o seu imóvel
              </span>
              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Avaliação gratuita
                <br />
                <span className="text-primary-foreground/80">e sem compromisso</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Metodologia comprovada para vender o seu imóvel ao melhor preço, no menor tempo. Transparência total,
                acompanhamento dedicado e resultados que superam expectativas.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="secondary" size="lg">
                  <a href="#avaliacao">
                    Pedir Avaliação Gratuita
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/contactos">Falar Connosco</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-lg bg-primary-foreground/10 p-8 backdrop-blur-sm">
                  <p className="font-serif text-5xl font-semibold">100%</p>
                  <p className="mt-2 text-primary-foreground/70">Transparência</p>
                </div>
                <div className="rounded-lg bg-primary-foreground/10 p-8 backdrop-blur-sm">
                  <p className="font-serif text-5xl font-semibold">0%</p>
                  <p className="mt-2 text-primary-foreground/70">Custos Ocultos</p>
                </div>
                <div className="rounded-lg bg-primary-foreground/10 p-8 backdrop-blur-sm">
                  <p className="font-serif text-5xl font-semibold">24h</p>
                  <p className="mt-2 text-primary-foreground/70">Resposta</p>
                </div>
                <div className="rounded-lg bg-primary-foreground/10 p-8 backdrop-blur-sm">
                  <p className="font-serif text-5xl font-semibold">360°</p>
                  <p className="mt-2 text-primary-foreground/70">Acompanhamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Form Section */}
      <section id="avaliacao" className="relative -mt-12 mx-auto w-full max-w-4xl px-4 sm:px-6">
        <Card className="border-0 shadow-xl">
          <CardContent className="p-8 sm:p-10">
            <div className="mb-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-foreground">Solicite a sua Avaliação Gratuita</h2>
              <p className="mt-2 text-muted-foreground">
                Preencha o formulário e entraremos em contacto em menos de 24 horas.
              </p>
            </div>
            <LeadForm type="valuation" />
          </CardContent>
        </Card>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Porquê Vender Connosco
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Não somos mais uma agência. Somos o seu parceiro estratégico na venda do seu imóvel.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-medium text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              O Nosso Processo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Metodologia estruturada e transparente, do primeiro contacto à entrega das chaves.
            </p>
          </div>
          <div className="mt-16 space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col gap-8 lg:flex-row lg:items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="rounded-lg bg-card p-8 shadow-sm">
                    <span className="font-serif text-4xl font-semibold text-accent/30">{step.number}</span>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
                    <ul className="mt-4 space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden w-px self-stretch bg-border lg:block" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Documentação Necessária
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ajudamos a reunir toda a documentação necessária para uma venda sem surpresas. Eis os documentos
              principais:
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {documentChecklist.map((doc) => (
                <li key={doc} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{doc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Não se preocupe se não tiver tudo. Ajudamos a obter os documentos em falta.
            </p>
            <Button asChild className="mt-6">
              <Link href="/guias/documentacao-necessaria-compra-imovel">
                Ver Guia Completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg lg:aspect-[4/3]">
            <Image
src="/seller-valuation-meeting.jpg"
  alt="Documentos imobiliários"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      

      {/* FAQs */}
      <section className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-muted-foreground">Respostas às dúvidas mais comuns sobre vender com a Franetic.</p>
        </div>
        <div className="mt-12">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Pronto para Dar o Primeiro Passo?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Peça já a sua avaliação gratuita e descubra quanto vale o seu imóvel no mercado atual.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <a href="#avaliacao">Pedir Avaliação Gratuita</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:+351912345678">
                <Clock className="mr-2 h-4 w-4" />
                Ligar Agora
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
