# OPTIMIZACION_LOG — automatizatuempresa.com

## Estado inicial (baseline · 2026-06-29)

### Build
- `npm run build` ✓ sin errores
- Warning: `turbopack.root` por lockfiles múltiples → **RESUELTO**

### Hallazgos auditados

| # | Archivo | Problema | Prioridad | Estado |
|---|---------|----------|-----------|--------|
| 1 | `src/app/page.tsx:235` | Email `hola@` en lugar de `hablemos@` — inconsistente con footer/legal | Alta | ✅ Resuelto |
| 2 | `src/app/servicios/page.tsx` | Sin Twitter metadata, sin `images` en OG | Alta | ✅ Resuelto |
| 3 | `src/app/nosotros/page.tsx` | Sin Twitter metadata, sin `images` en OG | Alta | ✅ Resuelto |
| 4 | `src/app/casos/layout.tsx` | Sin Twitter metadata, sin `images` en OG | Alta | ✅ Resuelto |
| 5 | `src/app/contacto/layout.tsx` | Sin Twitter metadata, sin `images` en OG | Alta | ✅ Resuelto |
| 6 | `next.config.ts` | Vacío: sin cabeceras de seguridad, sin `turbopack.root` | Alta | ✅ Resuelto |
| 7 | `src/app/layout.tsx:123` | `streetAddress: ""` en JSON-LD — campo vacío inválido | Media | ✅ Resuelto |
| 8 | `src/app/globals.css` | Sin `prefers-reduced-motion` | Media | ✅ Resuelto |
| 9 | `src/app/globals.css` | z-index mágicos (3, 50, 100) sin escala centralizada | Media | ✅ Resuelto |
| 10 | `src/app/nosotros/page.tsx` | `description` no alineada con keyword de /nosotros | Baja | ✅ Resuelto |
| 11 | `public/og.png` | Imagen OG no existe — URLs apuntan a ella pero falta el archivo | Alta | ⏳ Pendiente |

### Pendiente operativo (fuera del repo)
- [ ] Google Search Console: verificar propiedad + enviar sitemap
- [ ] Google Business Profile: crear/optimizar ficha con NAP coherente
- [ ] Crear `public/og.png` (1200×630px) — imagen de compartir en redes
- [ ] Resolver acceso GitHub: repo público o mismo usuario en Vercel

---

## Cambios aplicados en `chore/optimizacion-integral`

### Fix 1 — Email inconsistente
- `src/app/page.tsx:235` `hola@` → `hablemos@automatizatuempresa.com`

### Fix 2 — Twitter metadata + OG images por ruta
- `/servicios`, `/nosotros`, `/casos`, `/contacto` — añadido `twitter: {}` completo e `images` en `openGraph`

### Fix 3 — next.config.ts
- Añadidas 5 cabeceras de seguridad (HSTS, nosniff, Referrer-Policy, Permissions-Policy, X-Frame-Options)
- Añadido `turbopack.root` para eliminar warning de lockfiles
- `trailingSlash: false` explícito

### Fix 4 — JSON-LD schema
- Eliminado `streetAddress: ""` del `PostalAddress` (inválido en Schema.org)

### Fix 5 — prefers-reduced-motion
- Añadido `@media (prefers-reduced-motion: reduce)` en `globals.css`

### Fix 6 — z-index centralizado
- Añadidos tokens `--z-base`, `--z-dropdown`, `--z-header`, `--z-overlay`, `--z-modal` en `:root`
- Reemplazados todos los valores numéricos mágicos por tokens

### Fix 7 — Formulario de contacto
- Corregido bug de checkboxes (`readOnly` + `onClick` → `onChange`)
- Eliminada sección "Días" redundante; solo franja horaria
- Enlace de privacidad en consent: `#` → `/politica-de-privacidad`

---

## Métricas Lighthouse (pendiente — medir sobre Preview Vercel)
> Ejecutar tras deploy del PR contra la URL de Preview.

| Ruta | Perf | SEO | A11y | Best Practices | LCP | CLS |
|------|------|-----|------|----------------|-----|-----|
| `/` | — | — | — | — | — | — |
| `/servicios` | — | — | — | — | — | — |
| `/casos` | — | — | — | — | — | — |
| `/nosotros` | — | — | — | — | — | — |
| `/contacto` | — | — | — | — | — | — |
