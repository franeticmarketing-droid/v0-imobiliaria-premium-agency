"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Phone } from "lucide-react"
import { useTranslations } from "@/lib/i18n/context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations()

  const navigation = [
    { name: t.nav.properties, href: "/imoveis" },
    { name: t.nav.sell, href: "/vender" },
    { name: t.nav.investment, href: "/investimento" },
    { name: t.nav.about, href: "/sobre" },
    { name: t.nav.guides, href: "/guias" },
    { name: t.nav.contacts, href: "/contactos" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative flex items-center">
          <Image src="/logo.png" alt="Franetic Real Estate Agency" width={160} height={40} priority className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Link
            href="tel:+351915555285"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            <span>+351 91 555 5285</span>
          </Link>
          <Button asChild size="sm">
            <Link href="/vender">{t.sell.form.title.split(" ").slice(0, 2).join(" ")}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t.common.viewMore}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center justify-between">
                  <Image src="/logo.png" alt="Franetic" width={140} height={35} className="h-7 w-auto" />
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="border-t pt-6">
                  <Link href="tel:+351915555285" className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    +351 91 555 5285
                  </Link>
                  <Button asChild className="w-full">
                    <Link href="/vender" onClick={() => setIsOpen(false)}>
                      {t.sell.form.title.split(" ").slice(0, 2).join(" ")}
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
