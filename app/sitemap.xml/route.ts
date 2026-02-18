import { properties, guides } from "@/lib/data"

export async function GET() {
  const baseUrl = "https://franetic.pt"

  // Static pages
  const staticPages = [
    { path: "", priority: "1.0", changefreq: "daily" },
    { path: "/imoveis", priority: "0.9", changefreq: "daily" },
    { path: "/vender", priority: "0.9", changefreq: "weekly" },
    { path: "/investimento", priority: "0.8", changefreq: "weekly" },
    { path: "/guias", priority: "0.8", changefreq: "weekly" },
    { path: "/sobre", priority: "0.7", changefreq: "monthly" },
    { path: "/contactos", priority: "0.7", changefreq: "monthly" },
  ]

  // Dynamic property pages
  const propertyPages = properties.map((property) => ({
    path: `/imoveis/${property.slug}`,
    priority: "0.9",
    changefreq: "weekly",
    lastmod: property.publishedAt,
  }))

  // Dynamic guide pages
  const guidePages = guides.map((guide) => ({
    path: `/guias/${guide.slug}`,
    priority: "0.8",
    changefreq: "weekly",
    lastmod: guide.publishedAt,
  }))

  const allPages = [...staticPages, ...propertyPages, ...guidePages]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=86400", // 24 hours
    },
  })
}
