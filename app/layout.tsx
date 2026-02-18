import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { I18nProvider } from "@/lib/i18n/context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Franetic Real Estate | Imobiliária Premium em Portugal",
  description:
    "Agência imobiliária premium em Portugal. Curadoria de imóveis exclusivos, transparência total e acompanhamento personalizado na compra, venda e investimento.",
  keywords: ["imobiliária", "Portugal", "imóveis", "comprar casa", "vender casa", "investimento imobiliário"],
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
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
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <I18nProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
