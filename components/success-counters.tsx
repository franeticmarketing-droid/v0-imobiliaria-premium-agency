"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

function Counter({ value, label, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          const duration = 2000
          const steps = 60
          const stepValue = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += stepValue
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-3xl font-bold text-accent sm:text-4xl">
        {prefix}
        {count.toLocaleString("pt-PT")}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

export function SuccessCounters() {
  const counters = [
    { value: 250, label: "Imóveis Vendidos", suffix: "+" },
    { value: 5000, label: "Clientes Satisfeitos", suffix: "+" },
    { value: 24, label: "Tempo de Resposta", label: "Horas" },
    { value: 100, label: "Satisfação", suffix: "%" },
  ]

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {counters.map((counter) => (
        <Counter key={counter.label} {...counter} />
      ))}
    </div>
  )
}
