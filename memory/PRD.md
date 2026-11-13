# PRD — CoverEdge Marketing Pvt. Ltd Website

## Original Problem Statement
Build a website for a 3rd-party logistics (3PL) company using the attached logo and company name.
- Company: CoverEdge Marketing Pvt. Ltd
- Warehouse locations: Bhiwandi, Nagpur, New Delhi, Siliguri
- In business since 2012
- Logo images provided by the user (dark background, orange/grey diamond-arrows mark, COVER grey + EDGE orange wordmark)

## User Choices (from first-response card)
1. Multi-page site (Home, About, Services, Warehouses, Contact)
2. Enquiry form that saves to the database + visible contact info
3. Dark industrial theme with orange accents (matches logo)
4. Placeholder contact details (phone/email are placeholders until real ones are supplied)
5. Standard 3PL service set: Warehousing, Order Fulfilment, Transportation & Distribution, Inventory Management, Value-Added Services

## Architecture
- Frontend: React 19 SPA (CRA/craco), react-router-dom v7 (5 routes), framer-motion 11 (masked reveals, scroll reveals, 3D tilt, parallax), lenis 1.3 smooth scrolling, Tailwind (custom ink/coal/ember/steel palette), Anton + Manrope + JetBrains Mono type stack, sonner toasts.
- Backend: FastAPI on :8001, `/api` prefix. MongoDB via motor (`MONGO_URL`, `DB_NAME`). `enquiries` collection with unique `reference` index + `created_at` desc index. Endpoints: POST /api/enquiries (201, returns CE-XXXXXX reference), GET /api/enquiries (limit, sorted desc, `_id` never leaked), legacy status-check endpoints preserved.
- Brand assets: user logo webp files served from `/public/brand/` with `mix-blend-mode: lighten`; hand-built SVG mark (favicon + nav) reproduces the logo's diamond-arrows + dot.
- Photography: curated Unsplash warehouse/truck imagery (mappped to hubs & services).

## Personas
- Prospective client (ops/SCM head) researching a 3PL partner; needs services, network reach, and a quick RFQ path.
- Returning client who needs a phone/email fast.

## Core Requirements (static)
- Show company name, "in business since 2012", the four warehouse cities, and the five 3PL services — exactly as given, no invented stats (no fake sq.ft / % metrics).
- Enquiry form must persist submissions server-side and return a reference.
- Dark industrial aesthetic matching the provided logo.

## Implemented (2026-11-13)
- Home: kinetic masked hero ("YOUR GOODS. / OUR EDGE."), 3D-tilt logo mark with hub chips, stats band (Est. 2012 / 04 hubs / 05 lines), parallax photo band, 5-cell services bento, slow editorial marquee, interactive 4-hub selector, why-us grid, CTA banner.
- About: story (2012 → four hubs), full logo showcase card, values grid, horizontal-logo photo band, cities marquee.
- Services: 5 alternating deep-dive rows with capability bullets and photography.
- Warehouses: 4 hub sections (city, region, corridor role, capability chips, per-hub CTA).
- Contact: RFQ form (name, company, email, phone, service, hub, monthly volume, message) → POST /api/enquiries → success panel with CE-XXXXXX reference + sonner toast; contact cards; hub list.
- Global: sticky glass nav with mobile overlay menu, footer, lenis smooth scroll, scroll-to-top on route change, ErrorBoundary, film-grain overlay, favicon SVG, page titles, data-testids throughout.
- Verified: curl POST/GET enquiries (201 + reference, no `_id` leak, 422 on bad email); screenshot passes on desktop 1440 & mobile 390 for all 5 pages; live form submission flow captured (ref CE-6196DC).

## Backlog
- P0: Replace placeholder phone (+91 98200 12345), email (info@coveredge.in), working hours with real details (edit `frontend/src/data/site.js`).
- P1: Correct city spelling if needed ("Siliguri" used; user brief wrote "Silliguri"). Real warehouse addresses + a map embed per hub. Enquiry inbox/admin view to read submissions.
- P2: Email notification on new enquiry (Resend), testimonials/clients section once real quotes exist, SEO sitemap + OG images.
