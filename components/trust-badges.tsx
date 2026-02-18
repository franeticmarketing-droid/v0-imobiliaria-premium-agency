"use client"

import { Shield, CheckCircle, Award, TrendingUp } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Dados protegidos com encriptação SSL",
    },
    {
      icon: CheckCircle,
      title: "Sem Taxas Ocultas",
      description: "Transparência total em todos os custos",
    },
    {
      icon: Award,
      title: "20+ Anos",
      description: "Experiência na indústria imobiliária",
    },
    {
      icon: TrendingUp,
      title: "1000+ Clientes",
      description: "Satisfação e confiança comprovadas",
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((badge) => {
        const Icon = badge.icon
        return (
          <div
            key={badge.title}
            className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-colors hover:border-accent/50 hover:bg-card"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-foreground">{badge.title}</p>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
