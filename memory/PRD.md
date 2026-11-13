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

## Implemented (2026-11-13, round 2)
- Real contact details everywhere: +91 9967399430, info@coveredgemarketing.com (nav badge, contact cards, footer, page headers). Hours placeholder retained (Mon–Sat 09:00–19:00 IST).
- Email alerts on new enquiry via Emergent-managed Resend: POST /api/enquiries fires a non-blocking `notify_enquiry` task → formatted HTML alert to OWNER_EMAIL (info@coveredgemarketing.com), from_name "CoverEdge Marketing Pvt. Ltd", reply-to set to owner inbox. Guardrail gate (`_assert_safe_email`) on every send. Env keys in backend/.env (EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME, EMAIL_REPLY_TO, OWNER_EMAIL). httpx added to requirements.
- Twelve-service list replaced the placeholder five across Home bento (12-cell aligned grid + feature tile), Services page (12 anchored sections + anchor scroll support), marquee, enquiry dropdown, stats (12 service lines), About/Footer copy.
- Cool & cold storage highlighted block on Services page: three chamber bands (Cold 0–8°C, Cool 8–15°C, Ambient cool 15–25°C) with typical goods + spec-confirmation note. Bands are DRAFT placeholders pending the company's actual ranges.
- Verified: two test enquiries fired email sends (HTTP 202 Accepted); cold storage block renders clean at desktop; contact details confirmed in DOM on nav, cards and footer.

## Implemented (2026-11-13, round 3)
- Bhiwandi head office address added: Warehouse No. 7 & 8, Building No. B11, Parasnath Complex, Dapoda Road, Bhiwandi - 421302, Maharashtra, India.
- Live Google map embed (coords 19.2607, 73.0490, dark-styled) in a "Find the head office" block on the Warehouses page + compact map on the Contact page; "Get directions" link added; address shown on the Bhiwandi hub card and Contact address card.

## Implemented (2026-11-13, round 3b)
- Visitor confirmation email: every enquiry now also sends a branded "we received your enquiry" message to the submitter (server-side template, reference + service + hub echoed). Verified — both owner alert and visitor confirmation returned HTTP 202.

## Implemented (2026-11-13, round 4)
- WhatsApp tap-to-chat button on Contact page (wa.me/919967399430 with prefilled message; click-to-chat, no WhatsApp API needed).
- LinkedIn company page (linkedin.com/company/coveredge-marketing-pvt-ltd) linked in the header icon and footer.

## Backlog
- P0: Send the real cool/cold temperature bands to replace the drafted 0–8°C / 8–15°C / 15–25°C ranges.
- P1: Nagpur, New Delhi and Siliguri warehouse addresses + map pins (same pattern as Bhiwandi). Enquiry inbox/admin view to read submissions. Real working hours if different from Mon–Sat 09:00–19:00.
- P2: Testimonials/clients section once real quotes exist, SEO sitemap + OG images.
