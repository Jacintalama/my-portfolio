# Automation repositioning: design

Date: 2026-10-24. Approved by Jacint in conversation.

## Goal

Reposition the portfolio from "developer + visual maker" to "developer + automation builder".
Message: I help businesses run faster by replacing manual work with automation (scraping,
browser bots that get through anti-bot checks), backed by full-stack systems and tests.

## Changes

1. Hero (data/portfolio.json): eyebrow, primaryTitle, summary rewritten around automation.
2. Stats: "3 Years graphic design" replaced by "13,900+ Cards tracked by automation"
   (13,927 shown in the Cardmarket monitor panel screenshot).
3. New featured case study "Cardmarket Monitor", first in `caseStudies`. Private, no link,
   no client name. Facts checked against `Desktop/Danny Project/Cardmaker-monitor`:
   - Cardmarket bot reads watched sets, records PSA 9/10 listings (README section 1).
   - Card Ladder bot looks up latest PSA sale prices; panel shows up to 250 searches per batch.
   - Output is Google Sheets (`src/google-sheets.js`); `src/xlsx.js` only reads input.
   - Anti-bot: passes Cloudflare's check via human-paced tab batches, rests, signed-in
     profile, auto-click, CapSolver fallback. Copy must not claim it bypasses blocks.
   - Test suite: 606 pass, 0 fail (`npm test`, run 2026-10-24).
   - Image renamed to `public/images/Cardmarket-automation.png` (1906x912).
4. Removed: `designArchive` data and its section in `components/Projects.tsx`, the
   "Visual Production" capability group, the "Visual maker" lane in About, the
   "a Graphics Designer" typewriter entry.
5. Replaced: "Visual Production" group becomes "Scraping & Automation"; About lane becomes
   "Automation builder"; "visual maker" wording in Hero, Footer, NavMobile, page title and
   meta description becomes "automation builder".

## Out of scope

Design image files in `public/images` stay on disk (unused). No layout or style changes.
