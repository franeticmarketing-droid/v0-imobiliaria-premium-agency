"use client"

import { AlertCircle, Zap } from "lucide-react"

interface UrgencyBadgeProps {
  type: "limited" | "popular" | "urgent"
  text?: string
}

export function UrgencyBadge({ type = "limited", text }: UrgencyBadgeProps) {
  const configs = {
    limited: {
      icon: AlertCircle,
      bg: "bg-orange-100 dark:bg-orange-900/30",
      text: "text-orange-700 dark:text-orange-300",
      label: text || "Últimas unidades",
    },
    popular: {
      icon: Zap,
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-700 dark:text-blue-300",
      label: text || "Muito procurado",
    },
    urgent: {
      icon: AlertCircle,
      bg: "bg-red-100 dark:bg-red-900/30",
      text: "text-red-700 dark:text-red-300",
      label: text || "Oferta urgente",
    },
  }

  const config = configs[type]
  const Icon = config.icon

  return (
    <div className={`flex items-center gap-2 rounded-full px-3 py-1 ${config.bg}`}>
      <Icon className={`h-4 w-4 ${config.text}`} />
      <span className={`text-xs font-semibold ${config.text}`}>{config.label}</span>
    </div>
  )
}
