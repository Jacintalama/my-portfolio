# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Next.js portfolio homepage into the approved "Printmaker Portfolio" direction and prepare it for push-triggered Vercel deployment.

**Architecture:** Keep the Pages Router app and existing component boundaries, but move portfolio content into `data/portfolio.json` so selected projects, archive items, skills, stats, and contact details have one source of truth. Rebuild the visual layer with light print-inspired CSS in `styles/globals.css`, then update the existing components to render from the data file.

**Tech Stack:** Next.js 14 Pages Router, React 18, TypeScript, Tailwind CSS, Next Image, Node.js built-in test script for content validation.

---

## File Structure

- Create: `scripts/check-portfolio-content.mjs` validates portfolio data before build.
- Create: `data/portfolio.json` stores hero, stats, selected work, design archive, capability groups, and contact details.
- Modify: `styles/globals.css` replaces Obsidian Luxe/glass/orb system with the Printmaker Portfolio visual system.
- Modify: `tailwind.config.ts` replaces the banned current font families with approved portfolio font families.
- Modify: `pages/index.tsx` removes AOS setup and keeps the clean page section order.
- Modify: `components/Nav.tsx` rebuilds desktop navigation for the light print layout.
- Modify: `components/NavMobile.tsx` rebuilds the mobile drawer for the light print layout.
- Modify: `components/Hero.tsx` renders hero content from `portfolio.json`, removes particles/orbs/typewriter, keeps resume and project actions.
- Modify: `components/AboutMe.tsx` renders profile, stats, and role lanes from `portfolio.json`.
- Modify: `components/Projects.tsx` renders curated selected work plus archive groups from `portfolio.json`.
- Modify: `components/Helper/ProjectsCard.tsx` becomes a sharper project case card for the new layout.
- Modify: `components/Skills.tsx` renders grouped capabilities instead of percentage cards.
- Modify: `components/Contact.tsx` replaces `alert()` with inline copy feedback.
- Leave untouched unless build requires cleanup: `components/Particle.tsx`, `components/Helper/TypeWriteEffect.tsx`, `components/Helper/SkillCard.tsx`.

## Task 1: Add Data Contract And Red-Green Content Check

**Files:**
- Create: `scripts/check-portfolio-content.mjs`
- Create: `data/portfolio.json`

- [ ] **Step 1: Write the failing content check**

Create `scripts/check-portfolio-content.mjs` with:

```js
import fs from "node:fs";
import path from "node:path";

const dataPath = path.join(process.cwd(), "data", "portfolio.json");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(fs.existsSync(dataPath), "data/portfolio.json must exist");

const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

assert(data.hero?.name === "Jacint Alama", "hero.name must be Jacint Alama");
assert(data.hero?.primaryTitle?.includes("Developer"), "hero.primaryTitle must describe developer role");
assert(data.hero?.primaryTitle?.includes("visual maker"), "hero.primaryTitle must include visual maker positioning");
assert(Array.isArray(data.stats) && data.stats.length >= 4, "stats must include at least 4 items");
assert(Array.isArray(data.selectedWork) && data.selectedWork.length >= 5 && data.selectedWork.length <= 6, "selectedWork must include 5 to 6 curated projects");
assert(data.selectedWork.some((project) => project.title === "Waffenplatz"), "selectedWork must include Waffenplatz");
assert(data.selectedWork.some((project) => project.title === "RAVEN WEAPON"), "selectedWork must include RAVEN WEAPON");
assert(data.selectedWork.some((project) => project.title === "Petrol Stations Directory"), "selectedWork must include Petrol Stations Directory");
assert(Array.isArray(data.designArchive) && data.designArchive.length >= 8, "designArchive must preserve the graphic design items");
assert(Array.isArray(data.capabilityGroups) && data.capabilityGroups.length === 3, "capabilityGroups must include exactly 3 groups");
assert(data.contact?.email === "alamajacintg04@gmail.com", "contact email must match current portfolio");
assert(data.contact?.phone === "+63 951 110 6262", "contact phone must match current portfolio");

console.log("Portfolio content contract passed");
```

- [ ] **Step 2: Run the content check and verify RED**

Run:

```powershell
node scripts/check-portfolio-content.mjs
```

Expected: FAIL with `data/portfolio.json must exist`.

- [ ] **Step 3: Add portfolio data**

Create `data/portfolio.json` containing the approved curated content:

```json
{
  "hero": {
    "name": "Jacint Alama",
    "eyebrow": "Full stack developer + visual maker",
    "primaryTitle": "Developer and visual maker.",
    "summary": "I build practical web systems, automation workflows, and visual assets for businesses that need work shipped clearly and quickly.",
    "portrait": "/images/hero.png",
    "resumeUrl": "https://drive.google.com/file/d/1eXj_LQnXSE_IeFG04zPGH4W2XimlXUxW/view?usp=sharing"
  },
  "stats": [
    { "value": "3+", "label": "Years full stack development" },
    { "value": "15", "label": "Projects delivered" },
    { "value": "3", "label": "Years graphic design" },
    { "value": "AI", "label": "Claude Code workflow builder" }
  ],
  "selectedWork": [
    {
      "title": "Waffenplatz",
      "category": "Marketplace platform",
      "image": "/images/waffenplatz.png",
      "url": "https://waffenplatz.ch/",
      "summary": "Swiss weapons marketplace experience with dealer discovery, storefront flow, and production-facing UI work."
    },
    {
      "title": "RAVEN WEAPON",
      "category": "E-commerce storefront",
      "image": "/images/ravenweapon.png",
      "url": "https://ravenweapon.ch/",
      "summary": "Configurable Shopware storefront for a Swiss family business selling mission-ready weapons and accessories."
    },
    {
      "title": "Petrol Stations Directory",
      "category": "Automation system",
      "image": "/images/bern.png",
      "url": "https://petrolstations-directory-935253236645.europe-west6.run.app/",
      "summary": "Data scraping and directory system for collecting and displaying petrol station records across Bern and Zurich."
    },
    {
      "title": "GSCWD Hydraulic Analysis",
      "category": "Engineering tool",
      "image": "/images/gscwd.png",
      "url": "https://mrtankee.vercel.app/",
      "summary": "OJT team project for water district hydraulic analysis using EPANET-related workflow features."
    },
    {
      "title": "SSG Voting System",
      "category": "School system",
      "image": "/images/SSG.png",
      "url": "http://everest.stratfordgensan.com/",
      "summary": "Voting system built for school election workflows with a simple public-facing experience."
    },
    {
      "title": "Pizza Website Design",
      "category": "UI design",
      "image": "/images/HOME 1.jpg",
      "url": "https://drive.google.com/drive/folders/1XDFMyvo756A7y61hmYuyEEJgXyJZekeu?usp=sharing",
      "summary": "Food website design concept focused on visual hierarchy, product browsing, and conversion layout."
    }
  ],
  "designArchive": [
    { "title": ".inp Files Resource", "type": "Utility file", "image": "/images/icon.jpg", "url": "https://drive.google.com/file/d/17ZvQeRUfA9I0KVIecZ-1Eanag_00acWv/view?usp=sharing" },
    { "title": "Nova Shoes Website Design", "type": "UI design", "image": "/images/shoes.jpg", "url": "https://drive.google.com/drive/folders/1RrVm_uXJgp5r-GnzUz_79Eil6iq8bURV?usp=sharing" },
    { "title": "Calendar Layout", "type": "Print layout", "image": "/images/homesol2.jpg", "url": "https://drive.google.com/drive/folders/1m50TfMoqLCU1_e9a_k0NoyNIlqvGp96D?usp=sharing" },
    { "title": "ID Layout", "type": "Print layout", "image": "/images/ID.png", "url": "https://drive.google.com/drive/folders/1GIFOXRgLFF1wybLsBEb1gUQoXNptUSta?usp=sharing" },
    { "title": "Calling Card", "type": "Brand collateral", "image": "/images/JACKIE.jpg", "url": "https://drive.google.com/drive/folders/1Q6a6ksADDxyrKu3Z0H0XkHk3V83RKEsA?usp=sharing" },
    { "title": "Posters", "type": "Graphic design", "image": "/images/poster.jpg", "url": "https://drive.google.com/drive/folders/14T6Y7MgK2I8o2NA1f_3YUDlq4RtcRQgA?usp=sharing" },
    { "title": "Mobile Design & Product Booth", "type": "Campaign design", "image": "/images/atlantis.jpg", "url": "https://drive.google.com/drive/folders/1UFO6XRSO0H_y41P3apWEoNqNq-eruU94?usp=sharing" },
    { "title": "Labels", "type": "Packaging design", "image": "/images/labels.jpg", "url": "https://drive.google.com/drive/folders/1INxHNvlKp3uK0EWYwoP2wqueA3Xdt2tn?usp=sharing" },
    { "title": "Packaging Box Layout", "type": "Packaging design", "image": "/images/box.PNG", "url": "https://drive.google.com/drive/folders/1INxHNvlKp3uK0EWYwoP2wqueA3Xdt2tn?usp=sharing" }
  ],
  "capabilityGroups": [
    { "title": "Development", "items": ["React", "Next.js", "TypeScript", "Laravel", "Django", "PostgreSQL", "MongoDB"] },
    { "title": "Automation and AI", "items": ["Claude Code", "Web scraping", "Data workflows", "Operational tools", "API integration"] },
    { "title": "Visual Production", "items": ["UI design", "Photoshop", "Illustrator", "Premiere", "Print layout", "Brand assets"] }
  ],
  "contact": {
    "email": "alamajacintg04@gmail.com",
    "phone": "+63 951 110 6262",
    "message": "Send a project brief, role opening, or system idea. I will reply with practical next steps."
  }
}
```

- [ ] **Step 4: Run the content check and verify GREEN**

Run:

```powershell
node scripts/check-portfolio-content.mjs
```

Expected: PASS with `Portfolio content contract passed`.

- [ ] **Step 5: Commit the data contract**

```powershell
git add scripts/check-portfolio-content.mjs data/portfolio.json
git commit -m "Add portfolio content contract"
```

## Task 2: Replace The Global Visual System

**Files:**
- Modify: `styles/globals.css`
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Replace the old glass/dark design tokens**

Replace `styles/globals.css` with a light print-inspired system using OKLCH variables:

```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Libre+Franklin:wght@400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --paper: oklch(96% 0.012 82);
  --paper-soft: oklch(92% 0.018 88);
  --ink: oklch(18% 0.035 250);
  --ink-muted: oklch(38% 0.035 250);
  --ink-faint: oklch(56% 0.028 250);
  --oxide: oklch(57% 0.16 36);
  --oxide-soft: oklch(86% 0.07 44);
  --sage: oklch(64% 0.09 145);
  --blueprint: oklch(41% 0.11 250);
  --line: oklch(24% 0.035 250 / 0.22);
  --line-strong: oklch(19% 0.035 250);
  --shadow: oklch(14% 0.03 250 / 0.16);
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  background: var(--paper);
}

body {
  margin: 0;
  overflow-x: hidden;
  background:
    linear-gradient(90deg, oklch(18% 0.035 250 / 0.035) 1px, transparent 1px),
    linear-gradient(180deg, oklch(18% 0.035 250 / 0.03) 1px, transparent 1px),
    var(--paper);
  background-size: 36px 36px;
  color: var(--ink);
  font-family: 'Libre Franklin', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: var(--oxide-soft);
  color: var(--ink);
}

@layer components {
  .page-shell {
    width: min(1180px, calc(100vw - 32px));
    margin-inline: auto;
  }

  .section-band {
    padding-block: clamp(4rem, 8vw, 7.5rem);
    border-top: 1px solid var(--line);
  }

  .section-kicker {
    color: var(--oxide);
    font-size: 0.76rem;
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .display-title {
    font-family: 'Archivo', system-ui, sans-serif;
    font-size: clamp(2.65rem, 8vw, 7.2rem);
    font-weight: 900;
    line-height: 0.88;
    letter-spacing: 0;
  }

  .section-title {
    font-family: 'Archivo', system-ui, sans-serif;
    font-size: clamp(2rem, 4vw, 4.4rem);
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: 0;
  }

  .body-copy {
    max-width: 68ch;
    color: var(--ink-muted);
    font-size: 1rem;
    line-height: 1.7;
  }

  .print-button {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    border: 1.5px solid var(--line-strong);
    border-radius: 4px;
    padding: 0.78rem 1rem;
    background: var(--ink);
    color: var(--paper);
    font-size: 0.82rem;
    font-weight: 900;
    text-decoration: none;
    transition: transform 260ms var(--ease-out), background-color 260ms var(--ease-out), color 260ms var(--ease-out), box-shadow 260ms var(--ease-out);
  }

  .print-button:hover {
    transform: translateY(-2px);
    box-shadow: 6px 6px 0 var(--oxide-soft);
  }

  .print-button.secondary {
    background: transparent;
    color: var(--ink);
  }

  .print-button.secondary:hover {
    background: var(--oxide-soft);
  }

  .ruled-panel {
    border: 1.5px solid var(--line-strong);
    border-radius: 6px;
    background: oklch(98% 0.008 82);
  }
}
```

- [ ] **Step 2: Replace Tailwind font aliases**

Set `tailwind.config.ts` font families to:

```ts
fontFamily: {
  logo: ["Archivo", "system-ui"],
  primary: ["Libre Franklin", "system-ui", "sans-serif"],
  heading: ["Archivo", "system-ui", "sans-serif"],
}
```

- [ ] **Step 3: Run build check for CSS syntax**

Run:

```powershell
npm run build
```

Expected: build fails only if old components still reference removed classes in a way that Tailwind cannot parse. If it passes, continue.

- [ ] **Step 4: Commit global visual system**

```powershell
git add styles/globals.css tailwind.config.ts
git commit -m "Replace portfolio visual system"
```

## Task 3: Rebuild Page Sections From Portfolio Data

**Files:**
- Modify: `pages/index.tsx`
- Modify: `components/Nav.tsx`
- Modify: `components/NavMobile.tsx`
- Modify: `components/Hero.tsx`
- Modify: `components/AboutMe.tsx`
- Modify: `components/Projects.tsx`
- Modify: `components/Helper/ProjectsCard.tsx`
- Modify: `components/Skills.tsx`

- [ ] **Step 1: Simplify page shell**

Update `pages/index.tsx` to remove AOS setup and render:

```tsx
return (
  <div className="min-h-screen">
    <NavMobile showNav={showNav} closeNav={closeNavHandler} />
    <Nav openNav={showNavHandler} />
    <main>
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </main>
  </div>
);
```

- [ ] **Step 2: Render hero from `portfolio.json`**

Update `components/Hero.tsx` to import the data file, show the portrait, render the hero headline, summary, resume action, project action, and stats strip. Remove `Particle` and `TypeWriteEffect` imports.

- [ ] **Step 3: Render selected work and archive**

Update `components/Projects.tsx` so `selectedWork` is the primary project grid and `designArchive` is a compact archive list below it. The section id must stay `projects`.

- [ ] **Step 4: Update project card**

Update `components/Helper/ProjectsCard.tsx` props to accept `category`, `summary`, `image`, and `url`. Preserve Next Image and external link behavior.

- [ ] **Step 5: Update skills into capability groups**

Update `components/Skills.tsx` so it renders `capabilityGroups` as three ruled panels with comma-free skill chips or line items. Remove percent bars from the rendered UI.

- [ ] **Step 6: Update About**

Update `components/AboutMe.tsx` to be a concise profile section with practical role lanes and no duplicate stat grid if stats are already in the hero.

- [ ] **Step 7: Update navigation**

Update `components/Nav.tsx` and `components/NavMobile.tsx` for the new ids: Home, Work, Skills, About, Contact. Use light background, crisp border, and no gradient text.

- [ ] **Step 8: Run content check and build**

Run:

```powershell
node scripts/check-portfolio-content.mjs
npm run build
```

Expected: both pass.

- [ ] **Step 9: Commit rebuilt sections**

```powershell
git add pages/index.tsx components/Nav.tsx components/NavMobile.tsx components/Hero.tsx components/AboutMe.tsx components/Projects.tsx components/Helper/ProjectsCard.tsx components/Skills.tsx
git commit -m "Rebuild portfolio homepage sections"
```

## Task 4: Rebuild Contact Copy Feedback

**Files:**
- Modify: `components/Contact.tsx`

- [ ] **Step 1: Replace alert copy flow**

Use React state to show copied feedback:

```tsx
const [copied, setCopied] = useState<string | null>(null);

const copyToClipboard = async (label: string, text: string) => {
  await navigator.clipboard.writeText(text);
  setCopied(label);
  window.setTimeout(() => setCopied(null), 1800);
};
```

- [ ] **Step 2: Render contact methods from `portfolio.json`**

Use `portfolioData.contact.email`, `portfolioData.contact.phone`, and `portfolioData.contact.message`. Show `Copied email` or `Copied phone` inline when the action succeeds.

- [ ] **Step 3: Run build**

Run:

```powershell
npm run build
```

Expected: PASS.

- [ ] **Step 4: Commit contact rebuild**

```powershell
git add components/Contact.tsx
git commit -m "Improve portfolio contact actions"
```

## Task 5: Polish, Responsive Verification, And Push

**Files:**
- Modify only files that fail verification or visual review.

- [ ] **Step 1: Run lint**

Run:

```powershell
npm run lint
```

Expected: PASS or Next lint prompts for setup. If lint prompts or errors because the command is deprecated/missing, record the exact output and rely on build plus browser verification.

- [ ] **Step 2: Run content check and production build**

Run:

```powershell
node scripts/check-portfolio-content.mjs
npm run build
```

Expected: PASS.

- [ ] **Step 3: Start local server**

Run:

```powershell
npm run dev
```

Expected: local URL available, usually `http://localhost:3000`.

- [ ] **Step 4: Browser inspect desktop and mobile**

Open the local URL and inspect:

- Desktop around 1366px width.
- Mobile around 390px width.
- Hero text does not overlap portrait.
- Project cards retain image framing.
- Archive items remain scannable.
- Contact copy buttons fit.

- [ ] **Step 5: Commit final polish if needed**

```powershell
git add styles/globals.css tailwind.config.ts pages/index.tsx components/Nav.tsx components/NavMobile.tsx components/Hero.tsx components/AboutMe.tsx components/Projects.tsx components/Helper/ProjectsCard.tsx components/Skills.tsx components/Contact.tsx data/portfolio.json scripts/check-portfolio-content.mjs
git commit -m "Polish responsive portfolio layout"
```

Skip this commit if no polish changes are needed.

- [ ] **Step 6: Push main for Vercel deployment**

After confirming only intended changes are committed:

```powershell
git status --short --branch
git push origin main
```

Expected: push succeeds. Vercel should deploy from the connected GitHub repository if the project is configured for automatic deploys.
