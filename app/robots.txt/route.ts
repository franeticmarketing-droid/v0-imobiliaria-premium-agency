export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Allow: /imoveis
Allow: /vender
Allow: /investimento
Allow: /guias
Allow: /sobre
Allow: /contactos

Disallow: /api/
Disallow: /admin/
Disallow: /*.json$

# Sitemap
Sitemap: https://franetic.pt/sitemap.xml

# Crawl-delay for bots (in seconds)
Crawl-delay: 1

# Google
User-agent: Googlebot
Crawl-delay: 0
Allow: /

# Bing
User-agent: Bingbot
Crawl-delay: 1
Allow: /
`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "max-age=604800", // 7 days
    },
  })
}
