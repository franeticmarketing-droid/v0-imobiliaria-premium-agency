"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"

interface PropertyGalleryProps {
  images: string[]
  title: string
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      {/* Main Gallery Grid */}
      <div className="grid gap-2 lg:grid-cols-4 lg:grid-rows-2">
        {/* Main Image */}
        <div
          className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg lg:col-span-3 lg:row-span-2 lg:aspect-[16/10]"
          onClick={() => {
            setSelectedIndex(0)
            setIsOpen(true)
          }}
        >
          <Image
            src={images[0] || "/placeholder.svg"}
            alt={`${title} - Imagem principal`}
            fill
            priority
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <Button
            variant="secondary"
            size="sm"
            className="absolute bottom-4 right-4 gap-2 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(0)
              setIsOpen(true)
            }}
          >
            <Expand className="h-4 w-4" />
            Ver Galeria ({images.length})
          </Button>
        </div>

        {/* Thumbnail Images */}
        {images.slice(1, 3).map((image, index) => (
          <div
            key={index + 1}
            className="relative hidden aspect-[4/3] cursor-pointer overflow-hidden rounded-lg lg:block"
            onClick={() => {
              setSelectedIndex(index + 1)
              setIsOpen(true)
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} - Imagem ${index + 2}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            {index === 1 && images.length > 3 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <span className="font-medium text-white">+{images.length - 3} fotos</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl border-0 bg-black/95 p-0">
          <div className="relative flex h-[80vh] items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-50 text-white hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 z-50 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 z-50 -translate-y-1/2 text-white hover:bg-white/10"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div className="relative h-full w-full">
              <Image
                src={images[selectedIndex] || "/placeholder.svg"}
                alt={`${title} - Imagem ${selectedIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto bg-black p-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded ${
                  index === selectedIndex ? "ring-2 ring-white" : "opacity-50 hover:opacity-100"
                }`}
              >
                <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
