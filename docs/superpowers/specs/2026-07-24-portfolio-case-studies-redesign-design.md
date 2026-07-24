# Portfolio Case-Studies Redesign — Design Spec

Date: 2026-07-24
Status: Approved, implementing

## Summary

Elevate the existing "Printmaker" portfolio (paper / ink / oxide print system, Archivo +
Libre Franklin) into a more professional, credibility-first portfolio led by two serious
engineering case studies. Keep the established visual identity; sharpen craft and cut the
patterns that now read as templated (reflexive `01/02/03` numbering on every section,
tiny uppercase eyebrow above every heading).

Direction confirmed with the user:
- Visual direction: **refine the current print look** (identity-preservation, not a pivot).
- Panetti Analytics: **flagship case study**.
- Underwriting Engine: **second featured case study**.
- Both new projects are **private / client work** — no outbound links, but full story +
  metrics + screenshots shown.
- Project set is complete: 2 new case studies + existing 5 linked projects + design archive.

## Primary user action

A hiring manager or client scanning in daytime should, within one fold, believe Jacint
ships real production systems — then move into the case studies, then resume or contact.

## Structure

1. Nav — refined, active-section highlight, cleaner sticky state.
2. Hero — kept two-column editorial hero; choreographed load-in; real stats retained.
3. **Featured Case Studies (new band)** — two large screenshot-led blocks.
4. Selected Work — grid of the 5 linked projects (Waffenplatz, Raven, Petrol, GSCWD, SSG).
5. Design Archive — kept compact indexed list (Drive links).
6. Capabilities — kept lanes; add new stack (Prisma, Vitest, Playwright, TDD, LLM safety).
7. About — kept role lanes, de-cluttered.
8. Contact — kept copy-to-clipboard, polished.
9. Footer (new) — closing footer (currently missing).

## Case study content

### Panetti Analytics — Full-stack e-commerce profit & affiliate analytics
- Status: Live · private platform.
- Summary: in-house replacement for a paid SaaS (BeProfit) consolidating 8 WooCommerce
  stores across 5 currencies into one true-profit dashboard, plus a self-service portal for
  brand ambassadors to track sales and commission.
- Metrics: 24,000+ real orders · 8 stores · 5 currencies · ~410 automated tests.
- Detail: Next.js App Router, TDD, typed end-to-end, hourly Vercel cron sync, encrypted
  store credentials, Frankfurter FX.
- Tech chips: Next.js · React · TypeScript · Tailwind · Prisma · PostgreSQL (Neon) ·
  WooCommerce REST API · Vercel · Vitest · Playwright.
- Images: `1-admin-dashboard.png`, `4-shops.png`.

### Underwriting Engine — AI deal-intake QA & safety layer
- Status: Private · client work (UK residential property underwriting platform).
- Summary: automated QA and regression layer for an AI-mediated deal-intake system. An LLM
  agent reads and drafts; a deterministic validator — never the model — owns every
  "ready for analysis" and "send" decision.
- Metrics: 170 QA-matrix cases · 24 zero-tolerance safety rules · $0 to run (fully offline) ·
  38-mode agent safety eval.
- Highlight (pull-quote): caught a live production regression silently merging multi-property
  alerts into one deal; traced it to the exact commit with `git bisect` and filed a verified
  fix path without touching valuation logic.
- Capability tags (no invented stack — language not specified by user): QA architecture ·
  Deterministic validation · LLM-agent safety · Fixture suites (40 real + 130 synthetic) ·
  Regression & idempotency testing · Release-evidence packs · Audit trails.
- Image: `Underwriting-Engine-system-image.png` (exact casing — Vercel is case-sensitive).

## Data model

Add `caseStudies` array to `data/portfolio.json`:
`{ title, category, status, summary, highlight?, metrics:[{value,label}], tags:[], images:[], imageAlts:[] }`.
`selectedWork` (now 5 linked projects) and `designArchive` stay. Update `capabilityGroups`
to include the new stack. Optionally refine hero copy.

## Craft standards (impeccable)

- Body text contrast ≥ 4.5:1; verify muted-ink tokens against paper.
- Bans: no gradient text, no >1px colored side-stripe borders, no decorative glassmorphism,
  no border+wide-shadow ghost cards, card radius ≤ 16px.
- Reduce numbered-marker reflex; numbers only where the section is a true sequence (archive).
- Motion: one choreographed hero load-in + varied, intentional section reveals via
  IntersectionObserver (default state visible — never gate content visibility on a class
  transition). Full `prefers-reduced-motion: reduce` fallback (instant / no transform).
- Do NOT use `aos` (opacity:0 default risks blank content in headless/SSR renderers).
- SEO: add `<title>`, meta description, Open Graph + Twitter card to the homepage.
- Keep Google Search Console verification + favicons intact.

## Verification

- `npm run lint` clean.
- `npm run build` clean.
- Playwright screenshots at desktop (1440) + mobile (390): check overflow, contrast,
  image framing, section rhythm, case-study readability.
- Confirm git status contains only intended changes (do not commit `nul`,
  `generate_resume.py`, or the resume PDF).

## Out of scope

Stray untracked files (`nul`, `generate_resume.py`, `Jacint_Alama_Resume.pdf`) untouched.
No framework change; scoped component + token updates only.
