# Plano de Otimização - Franetic Real Estate

## Status: Implementação em Progresso ✅

Este documento detalha as melhorias implementadas no website da Franetic para atração e captação de clientes de alta qualidade.

---

## Fases Implementadas

### ✅ Fase 1: Otimizações de Usabilidade e Mobile-First
- **Sticky Header aprimorado** com navegação clara e CTA destacado
- **Breadcrumbs dinâmicos** em todas as páginas de detalhes
- **Scroll-to-top button** fixo para facilitar navegação em mobile
- **Busca Avançada** com filtros persistentes (localStorage)
- **Mobile-first design** com breakpoints responsivos (sm, md, lg, xl, 2xl)
- **Ícones e iconografia** consistentes com a marca

**Arquivos criados/modificados:**
- `components/scroll-to-top.tsx` - Botão flutuante scroll to top
- `components/breadcrumb-nav.tsx` - Breadcrumb dinâmico
- `components/advanced-search.tsx` - Busca com filtros persistentes
- `app/layout.tsx` - Integração de componentes na hierarquia

### ✅ Fase 2: Elementos de Confiança e Credibilidade
- **Trust Badges** com 4 indicadores de segurança e confiança
- **Success Counters** animados (imóveis vendidos, clientes, etc.)
- **Enhanced Testimonials** com ratings de estrelas e tipo de transação
- **FAQ expandida** com Schema.org FAQPage markup para Rich Snippets

**Arquivos criados:**
- `components/trust-badges.tsx` - Badges de confiança
- `components/success-counters.tsx` - Contadores animados
- `components/enhanced-testimonial-card.tsx` - Testimoniais melhorados
- `components/faq-list.tsx` - FAQ com JSON-LD Schema

### ✅ Fase 3: Sistema de CTAs e Formulários
- **Floating WhatsApp CTA** para contact direto em mobile
- **Urgency Badges** para criar FOMO (últimas unidades, muito procurado)
- **Lead Forms otimizados** com validação e feedback
- **Multiple CTA contextualizados** ao longo da página

**Arquivos criados:**
- `components/floating-cta.tsx` - CTA flutuante WhatsApp
- `components/urgency-badge.tsx` - Badges de urgência
- `components/lead-form.tsx` - Forms com validação (já existente, aprimorado)

### ✅ Fase 4: Estratégia SEO e Sitemaps
- **Metadata otimizada** com title e description para buscas
- **Open Graph tags** para compartilhamento em redes sociais
- **Schema.org markup** (Organization, Property, Review, FAQPage)
- **Dynamic Sitemap XML** com todas as páginas
- **robots.txt otimizado** para crawlers

**Arquivos criados:**
- `app/layout.tsx` - Metadata e schema.org Organization
- `app/sitemap.xml/route.ts` - Sitemap dinâmico
- `app/robots.txt/route.ts` - Robots.txt otimizado
- `app/page.tsx` - Página com FAQ schema

### ✅ Fase 5: Integrações de Analytics
- **Tracking configuration** centralizada
- **Event tracking utilities** para GA4, GTM
- **Custom dimensions** para segmentação (user_type, property_type, price_range)
- **Conversão tracking** (lead forms, property views, downloads)

**Arquivos criados:**
- `lib/integrations.ts` - Configuração de integrações
- `lib/analytics.ts` - Utilities para tracking de eventos
- Layout com `<Analytics />` do Vercel

### ✅ Fase 6: Design System Aprimorado
- **Micro-interações** com Framer Motion (animações suaves)
- **Skeleton loaders** para states de carregamento
- **Animated toast notifications** com tipos (success, error, info, warning)
- **Animações CSS** (fadeInUp, slideIn, scaleIn, pulseGlow)
- **Transições suaves** em elementos interativos

**Arquivos criados:**
- `components/skeleton-loaders.tsx` - Loading states
- `components/animated-toast.tsx` - Toast notifications
- `app/globals.css` - Keyframes e animation utilities

---

## Próximos Passos - Configuração e Ativação

### 1. Configurar Variáveis de Ambiente
Adicione as seguintes variáveis ao seu `.env.local`:

```env
# Google Analytics
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX

# Hotjar (Session Recording)
NEXT_PUBLIC_HOTJAR_ID=XXXXXXX

# Error Tracking (Sentry)
NEXT_PUBLIC_SENTRY_DSN=https://...

# HubSpot CRM
HUBSPOT_API_KEY=pat-XX-XX-XX
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=XXXXXXX

# Email Service
SENDGRID_API_KEY=SG.XXXXX
SENDER_EMAIL=noreply@franetic.pt

# WhatsApp (já em uso)
NEXT_PUBLIC_WHATSAPP_NUMBER=+351915555285

# Chatbot
NEXT_PUBLIC_CHATBOT_ID=xxxx

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/franetic
```

### 2. Instalar Dependências Faltantes
Se o projeto não tiver Framer Motion, instale:

```bash
npm install framer-motion
# ou
yarn add framer-motion
```

### 3. Validar Funcionamento
- Verifique que o scroll-to-top aparece após scroll em mobile
- Teste breadcrumbs navegando para `/imoveis/[slug]`
- Confirme que filtros de busca salvam no localStorage
- Teste WhatsApp CTA no mobile
- Valide que FAQ Rich Snippets aparecem no Google Search Console

### 4. Configurar Google Search Console
1. Submeter sitemap: `https://franetic.pt/sitemap.xml`
2. Verificar robots.txt: `https://franetic.pt/robots.txt`
3. Validar Schema.org markup na seção "Rich Results"

### 5. Integrar com HubSpot CRM
1. Criar workflow para leads do form
2. Configurar tags de automação (comprador, vendedor, investidor)
3. Setup de email automation para follow-up

### 6. Configurar Google Analytics 4
1. Criar eventos customizados para:
   - Lead form submissions
   - Property views
   - Guide downloads
   - WhatsApp clicks

### 7. Implementar Hotjar
1. Adicionar ID do Hotjar
2. Configurar heatmaps para:
   - Homepage (scroll behavior)
   - Property pages (gallery interaction)
   - Forms (onde as pessoas abandonam)

---

## Métricas para Monitorar

### KPIs Principais
- **Taxa de Conversão**: Visitas → Leads (target: 5-8%)
- **Tempo de Carregamento**: Página inicial < 2.5s
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Bounce Rate**: < 40%
- **Tempo médio de sessão**: > 2 minutos
- **Mobile conversion rate**: 50%+ do total

### Otimizações a Medir
- Impacto da busca avançada → aumento de property views
- Impacto dos trust badges → redução de bounce rate
- Impacto do WhatsApp CTA → aumento de conversões em mobile
- Impacto do FAQ → redução de contactos repetitivos

---

## Checklist de Implementação

- [ ] Variáveis de ambiente configuradas
- [ ] GA4/GTM implementado e testado
- [ ] Sitemap XML funcional
- [ ] Robots.txt validado
- [ ] Schema.org markup validado
- [ ] HubSpot CRM integrado
- [ ] Email automation configurado
- [ ] Hotjar com heatmaps
- [ ] Framer Motion instalado
- [ ] Testes de responsividade em 5+ dispositivos
- [ ] Lighthouse audit score > 90
- [ ] Rich Results validados no Google
- [ ] Core Web Vitals otimizados
- [ ] Monitoramento contínuo ativo

---

## Roadmap Futuro (Fases 7-8)

### Performance & Testing
- Image optimization (WebP com fallback)
- Code splitting por rota
- Lazy loading de componentes
- Cache strategy otimizada
- PWA implementation
- E2E testing com Playwright

### Advanced Features
- Virtual tours 360°
- Before/after gallery para reformas
- Investment calculator com ROI
- AI chatbot para perguntas frequentes
- Video testimonials
- Blog com SEO
- Multi-language optimization

---

## Resultados Esperados (3-6 meses)

Com a implementação completa deste plano, esperamos:

- **+40% em leads qualificados**
- **-25% em custo por lead**
- **+50% em engagement time**
- **Página 1 para keywords primárias em 6 meses**
- **90+ Lighthouse score**
- **98% Core Web Vitals passing**
- **50%+ de tráfego via mobile com bom conversion rate**

---

## Support & Maintenance

Recomendações para manutenção contínua:

1. **Revisão mensal** de métricas analytics
2. **Update de conteúdo** de guias e case studies
3. **A/B testing** de CTAs e layouts
4. **Feedback dos clientes** para melhorias
5. **Monitoramento de rankings** e concorrência
6. **Atualização de imagens** e portfolio

---

**Data de implementação**: 2026-02-18  
**Status**: 80% completo - Fase 7 pendente
