import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  imoveis: [
    { name: "Apartamentos", href: "/imoveis?tipo=apartamento" },
    { name: "Moradias", href: "/imoveis?tipo=moradia" },
    { name: "Terrenos", href: "/imoveis?tipo=terreno" },
    { name: "Investimento", href: "/investimento" },
  ],
  servicos: [
    { name: "Comprar", href: "/imoveis" },
    { name: "Vender", href: "/vender" },
    { name: "Avaliar", href: "/vender" },
    { name: "Consultoria", href: "/sobre" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Guias", href: "/guias" },
    { name: "Contactos", href: "/contactos" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Termos e Condições", href: "/termos" },
    { name: "Cookies", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Franetic Real Estate Agency" width={180} height={45} className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Agência imobiliária premium em Portugal. Curadoria de imóveis exclusivos, transparência total e
              acompanhamento personalizado.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://instagram.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Imóveis</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.imoveis.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Serviços</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contactos</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="tel:+351915555285"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  +351 91 555 5285
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@franetic.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  info@franetic.com
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    Rua Luís de Camões, 55 C
                    <br />
                    2460-014 Alcobaça
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Franetic Real Estate. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
