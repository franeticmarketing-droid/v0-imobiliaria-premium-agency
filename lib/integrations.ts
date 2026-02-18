// Integration configuration for Franetic Real Estate

export const analytics = {
  // Google Analytics 4
  GA4_ID: process.env.NEXT_PUBLIC_GA4_ID || "",

  // Google Tag Manager
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || "",

  // Hotjar (Session Recording & Heatmaps)
  HOTJAR_ID: process.env.NEXT_PUBLIC_HOTJAR_ID || "",

  // Sentry (Error Tracking)
  SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN || "",
}

export const crm = {
  // HubSpot CRM
  HUBSPOT_API_KEY: process.env.HUBSPOT_API_KEY || "",
  HUBSPOT_PORTAL_ID: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "",

  // Email service
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || "",
  SENDER_EMAIL: process.env.SENDER_EMAIL || "noreply@franetic.pt",
}

export const communication = {
  // WhatsApp
  WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+351915555285",
  WHATSAPP_MESSAGE: "Olá Franetic! Gostaria de mais informações.",

  // Calendly (for scheduling)
  CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/franetic",

  // Chatbot (Tawk.to or similar)
  CHATBOT_ID: process.env.NEXT_PUBLIC_CHATBOT_ID || "",
}

export const tracking = {
  // Conversion events
  EVENTS: {
    PAGE_VIEW: "page_view",
    LEAD_FORM_SUBMIT: "lead_form_submit",
    PROPERTY_VIEW: "property_view",
    DOWNLOAD_GUIDE: "download_guide",
    SCHEDULE_VISIT: "schedule_visit",
    WHATSAPP_CLICK: "whatsapp_click",
  },

  // Custom dimensions
  CUSTOM_DIMENSIONS: {
    USER_TYPE: "user_type", // buyer, seller, investor
    PROPERTY_TYPE: "property_type",
    PRICE_RANGE: "price_range",
  },
}
