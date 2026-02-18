export interface Property {
  id: string
  slug: string
  title: string
  status: "disponível" | "reservado" | "vendido"
  purpose: "habitação" | "investimento"
  type: "moradia" | "apartamento" | "terreno" | "prédio" | "quinta"
  location: {
    district: string
    county: string
    parish: string
    approximate: string
  }
  price: number
  typology: string
  areaUseful: number
  areaGross: number
  areaLand?: number
  bedrooms: number
  bathrooms: number
  parking: number
  year?: number
  condition: "novo" | "reabilitado" | "usado"
  energyClass: string
  features: string[]
  images: string[]
  description: string
  coordinates?: { lat: number; lng: number }
  featured: boolean
  publishedAt: string
  investmentYield?: number
}

export interface Guide {
  id: string
  slug: string
  title: string
  excerpt: string
  category: "comprar" | "vender" | "investimento" | "documentação"
  readTime: number
  publishedAt: string
  image: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image?: string
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured)
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug)
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}

export function getInvestmentProperties(): Property[] {
  return properties.filter((p) => p.purpose === "investimento")
}

export const properties: Property[] = [
  {
    id: "vila-cova-001",
    slug: "edificio-reabilitado-vila-cova-alva-arganil",
    title: "Edifício Reabilitado com 8 Unidades em Vila Cova de Alva",
    status: "disponível",
    purpose: "investimento",
    type: "prédio",
    location: {
      district: "Coimbra",
      county: "Arganil",
      parish: "Vila Cova de Alva e Anceriz",
      approximate: "Centro histórico, junto ao Rio Alva",
    },
    price: 525000,
    typology: "Prédio",
    areaUseful: 400,
    areaGross: 475,
    areaLand: 280,
    bedrooms: 8,
    bathrooms: 8,
    parking: 0,
    year: 2023,
    condition: "reabilitado",
    energyClass: "B",
    features: [
      "8 Unidades Independentes",
      "6 T0 + 2 T2",
      "Terraço Panorâmico",
      "Ar Condicionado",
      "Infraestruturas Independentes",
      "Preparado para Elevador",
      "Estrutura em Betão Armado",
      "Contadores Separados",
      "Vista Serra",
      "Centro Histórico",
    ],
    images: [
      "/properties/vila-cova-alva/exterior-aerial-1.jpg",
      "/properties/vila-cova-alva/exterior-street.jpg",
      "/properties/vila-cova-alva/exterior-entrance.jpg",
      "/properties/vila-cova-alva/exterior-aerial-2.jpg",
    ],
    description: `Edifício urbano totalmente reabilitado no coração de Vila Cova de Alva, uma das vilas mais pitorescas da Serra da Estrela, junto ao Rio Alva.

**Configuração Funcional:**
O imóvel apresenta 8 unidades independentes (6 estúdios T0 e 2 apartamentos T2), cada uma com cozinha equipada, casa de banho privativa e infraestruturas totalmente independentes (eletricidade, água, gás e telecomunicações).

**Características Diferenciadoras:**
• Estrutura integralmente renovada em betão armado
• Fachada histórica preservada com cantarias em pedra
• Terraço panorâmico com vistas sobre o vale e a serra
• Caixa de elevador construída e pré-instalação concluída
• Ar condicionado instalado em todas as unidades
• Várias unidades com acesso direto pelo exterior

**Potencial de Exploração:**
Ideal para alojamento local, arrendamento por unidades, projeto de coliving ou habitação multifuncional. A configuração permite diferentes modelos de negócio com elevada flexibilidade operacional.

**Localização Premium:**
A poucos passos do rio Alva, da ponte histórica e do açude. Inserido em núcleo histórico de elevado valor paisagístico e turístico, na região da Serra da Estrela.`,
    coordinates: { lat: 40.282579, lng: -7.943555 },
    featured: true,
    publishedAt: "2024-01-20",
    investmentYield: 7.5,
  },
]

export const guides: Guide[] = [
  {
    id: "1",
    slug: "documentacao-necessaria-compra-imovel",
    title: "Documentação Necessária para Comprar Imóvel",
    excerpt: "Guia completo sobre todos os documentos que precisa reunir antes de comprar casa em Portugal.",
    category: "documentação",
    readTime: 8,
    publishedAt: "2024-01-10",
    image: "/guide-documentacao.jpg",
  },
  {
    id: "2",
    slug: "custos-compra-casa-portugal",
    title: "Custos Reais na Compra de Casa",
    excerpt: "IMT, Imposto de Selo, escritura, registos e outros custos que deve considerar no seu orçamento.",
    category: "comprar",
    readTime: 6,
    publishedAt: "2024-01-08",
    image: "/guide-custos.jpg",
  },
  {
    id: "3",
    slug: "como-vender-imovel-rapidamente",
    title: "Como Vender o Seu Imóvel Rapidamente",
    excerpt: "Estratégias comprovadas para acelerar a venda do seu imóvel ao melhor preço.",
    category: "vender",
    readTime: 10,
    publishedAt: "2024-01-05",
    image: "/guide-vender.jpg",
  },
  {
    id: "4",
    slug: "investir-imobiliario-portugal",
    title: "Investir em Imobiliário em Portugal",
    excerpt: "Análise do mercado, tipologias de investimento e métricas essenciais para tomar decisões informadas.",
    category: "investimento",
    readTime: 12,
    publishedAt: "2024-01-02",
    image: "/guide-investimento.jpg",
  },
  {
    id: "5",
    slug: "cpcv-contrato-promessa",
    title: "CPCV: O Que Precisa de Saber",
    excerpt: "Tudo sobre o Contrato-Promessa de Compra e Venda: cláusulas, sinal e proteções legais.",
    category: "documentação",
    readTime: 7,
    publishedAt: "2023-12-28",
    image: "/guide-documentacao.jpg",
  },
  {
    id: "6",
    slug: "financiamento-credito-habitacao",
    title: "Financiamento e Crédito Habitação",
    excerpt: "Compare propostas de crédito, entenda spreads e taxas, e prepare a sua candidatura.",
    category: "comprar",
    readTime: 9,
    publishedAt: "2023-12-20",
    image: "/guide-credito.jpg",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Santos",
    role: "Compradora em Lisboa",
    content:
      "A equipa da Franetic foi excecional em todo o processo. Encontraram o apartamento perfeito no Chiado e trataram de toda a documentação sem stress. Recomendo vivamente!",
    image: "/testimonial-maria.jpg",
  },
  {
    id: "2",
    name: "João Ferreira",
    role: "Investidor",
    content:
      "Já adquiri três imóveis através da Franetic. A análise de rentabilidade e o acompanhamento pós-venda são impecáveis. Parceiros de confiança para o meu portfólio.",
    image: "/testimonial-joao.jpg",
  },
  {
    id: "3",
    name: "Ana e Pedro Costa",
    role: "Vendedores no Porto",
    content:
      "Vendemos a nossa moradia em apenas 45 dias, acima do preço que esperávamos. A estratégia de marketing e as fotografias profissionais fizeram toda a diferença.",
    image: "/testimonial-couple.jpg",
  },
]

export const stats = [
  { value: "100%", label: "Curadoria Personalizada" },
  { value: "0%", label: "Comissões Ocultas" },
  { value: "24h", label: "Tempo de Resposta" },
  { value: "360°", label: "Acompanhamento Total" },
]
