"use client"

import { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ToastProps {
  title: string
  description?: string
  type: "success" | "error" | "info" | "warning"
  isOpen: boolean
  onClose: () => void
}

const toastConfig = {
  success: {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-800",
    text: "text-emerald-900 dark:text-emerald-100",
    icon: "✓",
    color: "text-emerald-600",
  },
  error: {
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-800",
    text: "text-red-900 dark:text-red-100",
    icon: "✕",
    color: "text-red-600",
  },
  info: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-900 dark:text-blue-100",
    icon: "ℹ",
    color: "text-blue-600",
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-900 dark:text-amber-100",
    icon: "!",
    color: "text-amber-600",
  },
}

export function AnimatedToast({ title, description, type, isOpen, onClose }: ToastProps) {
  const config = toastConfig[type]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`fixed top-6 right-6 z-50 max-w-md rounded-lg border p-4 ${config.bg} ${config.border} ${config.text}`}
        >
          <div className="flex items-start gap-3">
            <span className={`text-lg font-bold ${config.color}`}>{config.icon}</span>
            <div className="flex-1">
              <p className="font-medium">{title}</p>
              {description && <p className="mt-1 text-sm opacity-90">{description}</p>}
            </div>
            <button
              onClick={onClose}
              className="text-lg opacity-50 transition-opacity hover:opacity-100"
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
