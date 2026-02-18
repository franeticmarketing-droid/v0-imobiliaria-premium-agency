"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function FloatingCTA() {
  return (
    <Link
      href="https://wa.me/351915555285?text=Olá%20Franetic!%20Gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl lg:bottom-8 lg:left-8"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  )
}
