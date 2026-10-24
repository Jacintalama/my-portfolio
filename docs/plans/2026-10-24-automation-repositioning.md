# Automation Repositioning Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the "visual maker" positioning with "automation builder" and add the Cardmarket Monitor case study.

**Architecture:** Content-only change. Copy lives in `data/portfolio.json` plus a few hard-coded strings in components. No layout or style changes. Spec: `docs/superpowers/specs/2026-10-24-automation-repositioning-design.md`.

**Tech Stack:** Next.js 14 (pages router), TypeScript, Tailwind.

---

### Task 1: Red check

Run: `grep -rniE "visual maker|visual production|graphics? design|designArchive|print layout|brand (assets|collateral)" data components pages`
Expected now: matches (red). Expected after Tasks 2-4: no output (green).

### Task 2: Data

**Files:** Modify `data/portfolio.json`
- hero eyebrow / primaryTitle / summary rewritten (see spec).
- stats[3] -> `{ "value": "13,900+", "label": "Cards tracked by automation" }`.
- Prepend Cardmarket Monitor case study (image `/images/Cardmarket-automation.png`, 1906x912).
- Delete `designArchive`.
- capabilityGroups[2] -> "Scraping & Automation".

Rename `public/images/Cardmarket automation.png` -> `public/images/Cardmarket-automation.png`.

### Task 3: Components

- `components/Projects.tsx`: drop the design archive block and `designArchive` / `Image` imports.
- `components/AboutMe.tsx`: lane "Visual maker" -> "Automation builder"; intro paragraph.
- `components/Helper/TypeWriteEffect.tsx`: 'a Graphics Designer' -> 'an Automation Builder'.
- `components/Hero.tsx:96`, `components/Footer.tsx:27`, `components/NavMobile.tsx:57`, `pages/index.tsx:13-15`: wording.

### Task 4: Verify

1. Re-run the Task 1 grep: no output.
2. `npx tsc --noEmit` and `npm run build`: both pass.
3. `npm run start`, open in a browser, screenshot hero, case studies (Cardmarket first, image loads), projects (no archive), skills, about. Check mobile width.

### Task 5: Commit (only when Jacint asks)
