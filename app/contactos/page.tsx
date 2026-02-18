import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contactos | Franetic Real Estate",
  description:
    "Entre em contacto connosco. Estamos disponíveis para ajudar na compra, venda ou investimento em imóveis.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "+351 91 555 5285",
    href: "tel:+351915555285",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@franetic.com",
    href: "mailto:info@franetic.com",
  },
  {
    icon: MapPin,
    label: "Morada",
    value: "Rua Luís de Camões, 55 C, r/c\n2460-014 Quinta da Conceição, Alcobaça",
    href: "https://maps.google.com/?q=Rua+Luís+de+Camões,+55,+Alcobaça",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Segunda a Sexta: 9h00 - 19h00",
    href: null,
  },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]

export default function ContactsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Contactos</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Estamos disponíveis para ajudar. Entre em contacto através do formulário, telefone ou visite-nos.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Envie-nos uma Mensagem</h2>
            <p className="mt-2 text-muted-foreground">
              Preencha o formulário e responderemos em menos de 24 horas úteis.
            </p>
            <Card className="mt-8 border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <LeadForm type="contact" />
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Informações de Contacto</h2>
            <p className="mt-2 text-muted-foreground">
              Pode também contactar-nos diretamente através dos canais abaixo.
            </p>
            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="mt-1 whitespace-pre-line text-foreground transition-colors hover:text-accent"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="mt-1 whitespace-pre-line text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-sm font-medium text-muted-foreground">Siga-nos</p>
              <div className="mt-4 flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12">
              <div className="aspect-video overflow-hidden rounded-lg bg-secondary">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>Mapa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
