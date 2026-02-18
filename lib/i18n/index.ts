import { pt } from "./translations/pt"
import { en } from "./translations/en"
import { fr } from "./translations/fr"
import { es } from "./translations/es"
import type { Locale } from "./config"

export const translations = {
  pt,
  en,
  fr,
  es,
} as const

export type Translations = typeof pt

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.pt
}

export * from "./config"
