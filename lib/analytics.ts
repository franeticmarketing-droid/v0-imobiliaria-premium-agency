import { tracking } from "./integrations"

interface EventParams {
  [key: string]: string | number | boolean
}

/**
 * Track events for analytics (GA4, GTM, etc.)
 * @param eventName - The event name from tracking.EVENTS
 * @param params - Additional event parameters
 */
export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined") return

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("event", eventName, {
      ...params,
      timestamp: new Date().toISOString(),
    })
  }

  // Debug log
  console.log("[Analytics]", eventName, params)
}

/**
 * Track property view
 */
export function trackPropertyView(propertyId: string, propertyType: string, price: number) {
  trackEvent(tracking.EVENTS.PROPERTY_VIEW, {
    property_id: propertyId,
    property_type: propertyType,
    price: price,
  })
}

/**
 * Track lead form submission
 */
export function trackLeadForm(formType: "contact" | "valuation" | "visit", propertyId?: string) {
  trackEvent(tracking.EVENTS.LEAD_FORM_SUBMIT, {
    form_type: formType,
    property_id: propertyId || "direct",
  })
}

/**
 * Track guide download/view
 */
export function trackGuideInteraction(guideId: string, action: "view" | "download") {
  trackEvent(action === "download" ? tracking.EVENTS.DOWNLOAD_GUIDE : "guide_view", {
    guide_id: guideId,
  })
}

/**
 * Track WhatsApp click
 */
export function trackWhatsAppClick() {
  trackEvent(tracking.EVENTS.WHATSAPP_CLICK)
}

// Extend Window for gtag
declare global {
  interface Window {
    gtag?: (command: string, event: string, params?: EventParams) => void
    dataLayer?: any[]
  }
}
