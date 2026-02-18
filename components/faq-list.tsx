"use client"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
  category: string
}

interface FAQListProps {
  items: FAQItem[]
  title?: string
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    category: "Compra",
    question: "Quais são os custos reais de comprar um imóvel em Portugal?",
    answer:
      "Os custos incluem IMT (Imposto Municipal sobre Imóveis de 0-8%), Imposto de Selo (10% sobre o valor do IMT), consultor imobiliário, fotografia, vídeo e marketing. A Franetic oferece análise transparente de todos os custos.",
  },
  {
    category: "Venda",
    question: "Quanto tempo demora a vender um imóvel?",
    answer:
      "Em média, 30-60 dias com a estratégia certa de marketing, fotografia profissional e base de compradores qualificados. A Franetic consegue acelerar este processo com análise de mercado e preço competitivo.",
  },
  {
    category: "Investimento",
    question: "Qual é o ROI típico de investimento imobiliário em Portugal?",
    answer:
      "Os investimentos em imobiliário em Portugal geram tipicamente 4-8% de yield anual em arrendamento, com potencial de apreciação de 3-5% ao ano. A Franetic análisa cada oportunidade com rigor.",
  },
  {
    category: "Processo",
    question: "O que é o CPCV e por que é importante?",
    answer:
      "O Contrato-Promessa de Compra e Venda (CPCV) é um documento vinculativo que marca a intenção de compra/venda. Define preço, data de entrega, condições e obrigações de ambas as partes.",
  },
  {
    category: "Documentação",
    question: "Que documentos preciso para comprar imóvel em Portugal?",
    answer:
      "Precisa de: Cartão de Cidadão, Número Fiscal, Comprovativo de Rendimentos, Comprovativo de Moradia e Pré-Aprovação do Crédito. A Franetic ajuda a reunir toda a documentação necessária.",
  },
  {
    category: "Financiamento",
    question: "Como posso obter financiamento para comprar?",
    answer:
      "Pode solicitar crédito hipotecário a bancos com base em rendimentos, histórico de crédito e valor do imóvel (até 80-90% de LTV). A Franetic tem parcerias com instituições de crédito para facilitar o processo.",
  },
]

export function FAQList({ items = DEFAULT_FAQS, title = "Perguntas Frequentes" }: FAQListProps) {
  const categories = [...new Set(items.map((item) => item.category))]

  return (
    <div className="w-full">
      {title && <h2 className="mb-8 text-center font-serif text-3xl font-semibold tracking-tight">{title}</h2>}

      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="mb-4 font-medium text-accent">{category}</h3>
            <div className="space-y-2">
              {items
                .filter((item) => item.category === category)
                .map((item, index) => (
                  <Collapsible key={`${category}-${index}`} className="overflow-hidden rounded-lg border border-border/50">
                    <CollapsibleTrigger className="flex w-full items-center justify-between bg-secondary/30 px-4 py-3 transition-colors hover:bg-secondary/50 [&[data-state=open]>svg]:rotate-180">
                      <h4 className="text-left text-sm font-medium leading-tight text-foreground">{item.question}</h4>
                      <ChevronDown className="ml-4 h-4 w-4 flex-shrink-0 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="border-t border-border/50 bg-background px-4 py-3">
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* JSON-LD Schema for FAQ Rich Snippets */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
