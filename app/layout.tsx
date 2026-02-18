import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { I18nProvider } from "@/lib/i18n/context"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { FloatingCTA } from "@/components/floating-cta"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Franetic Real Estate | Imobiliária Premium em Portugal - Compra, Venda e Investimento",
  description:
    "Agência imobiliária premium especializada em Portugal. Curadoria de imóveis exclusivos, transparência total, avaliação gratuita. Compra, venda e investimento imobiliário com consultores dedicados.",
  keywords: [
    "imobiliária Portugal",
    "comprar casa",
    "vender imóvel",
    "investimento imobiliário",
    "apartamento Lisboa",
    "moradia Porto",
    "imóvel Algarve",
    "avaliação gratuita",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://franetic.pt",
    siteName: "Franetic Real Estate",
    title: "Franetic Real Estate | Imobiliária Premium em Portugal",
    description: "Curadoria de imóveis exclusivos com transparência total e acompanhamento personalizado.",
    images: [
      {
        url: "/hero-luxury-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Franetic Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franetic Real Estate",
    description: "Imóveis Premium em Portugal - Compra, Venda e Investimento",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Franetic Real Estate",
              url: "https://franetic.pt",
              logo: "https://franetic.pt/logo.png",
              description:
                "Agência imobiliária premium especializada em Portugal com curadoria de imóveis exclusivos",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PT",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+351-91-555-5285",
              },
              sameAs: [
                "https://www.facebook.com/franetic",
                "https://www.instagram.com/franetic",
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <I18nProvider>
          <Header />
          <BreadcrumbNav />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <FloatingCTA />
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
