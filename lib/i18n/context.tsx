"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import { type Locale, defaultLocale, locales } from "./config"
import { getTranslations, type Translations } from "./index"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const LOCALE_STORAGE_KEY = "franetic-locale"

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Try to get locale from localStorage
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
    if (stored && locales.includes(stored)) {
      setLocaleState(stored)
    } else {
      // Try to detect from browser
      const browserLang = navigator.language.split("-")[0] as Locale
      if (locales.includes(browserLang)) {
        setLocaleState(browserLang)
      }
    }
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
  }, [])

  const t = getTranslations(locale)

  // Prevent hydration mismatch by rendering default locale on server
  if (!mounted) {
    return (
      <I18nContext.Provider value={{ locale: defaultLocale, setLocale, t: getTranslations(defaultLocale) }}>
        {children}
      </I18nContext.Provider>
    )
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

export function useTranslations() {
  const { t } = useI18n()
  return t
}
