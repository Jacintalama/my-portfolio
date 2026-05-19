# Portfolio Redesign Design Spec

Date: 2026-05-19
Status: Approved direction, pending implementation plan

## Feature Summary

Rebuild the portfolio homepage into a brighter, print-inspired personal portfolio that presents Jacint as a developer, visual maker, and AI-assisted builder. The redesign replaces the current dark glass UI with a sharper, more memorable surface built around proof of work, readable project grouping, and direct contact actions.

The selected direction is **B. Printmaker Portfolio** from the browser mockup review.

## Primary User Action

Visitors should quickly understand that Jacint can build working web systems and also produce visual design assets, then move into either selected projects, resume, or contact.

## Design Direction

- Register: brand portfolio. Design is the product, so the page must leave a clear impression.
- Color strategy: full palette. Use an off-white paper base, deep ink text, warm oxide accent, and restrained secondary tones for labels and dividers. Project screenshots carry additional color.
- Theme scene sentence: a hiring manager or client opens the portfolio in daytime on a laptop or phone, scanning for practical proof that Jacint can build and design without a long explanation. This supports a light interface with strong contrast and fast scanning.
- Anchor references: small-run print portfolio, developer case-study board, and a clean design archive wall.
- Avoid: dark purple glassmorphism, gradient text, ambient orbs, repeated identical cards, and percentage skill bars as the main credibility device.

## Scope

- Fidelity: production-ready.
- Breadth: whole homepage surface.
- Interactivity: shipped-quality single-page portfolio with anchor navigation, project links, resume link, and copy-to-clipboard contact actions.
- Time intent: polish until it is good enough to push to GitHub and trigger Vercel.

## Layout Strategy

The page should open with an editorial but practical hero: large direct positioning, a short proof statement, a portrait or personal image panel, and immediate actions. The layout should be light, crisp, and bordered like printed work rather than soft cards.

Selected Work becomes the strongest section. It should show the best 5 to 6 projects first, with stronger descriptions and clearer categories. The remaining design projects move into a compact archive section so the work is still visible without weakening the first impression.

Skills should shift from percentage scores to grouped capability lanes:

- Development: React, Next.js, TypeScript, Laravel, Django, databases.
- Automation and AI: Claude Code, scraping, workflows, data systems.
- Visual production: UI design, Photoshop, Illustrator, Premiere, print layouts.

Contact should be direct and usable, with email and phone copy actions plus a short collaboration line.

## Key States

- Default desktop: strong two-column hero, selected project grid, compact archive, capability groups, contact band.
- Default mobile: single-column hero, sticky or simple top navigation, project cards stacked with images preserved.
- Long content: project titles and descriptions wrap cleanly without clipping.
- Missing image: use a solid bordered fallback with the project title, not an empty broken image.
- Contact copy success: show inline feedback or button text change instead of `alert()`.
- External links: open in a new tab with clear accessible labels.

## Interaction Model

- Navigation anchors scroll to About, Work, Skills, and Contact.
- Project items link to the live site or drive resource.
- Resume opens the current resume link.
- Email and phone can be copied with immediate local feedback.
- Hover states should use color, border, and small transform changes only. Avoid layout-shifting animations.
- Motion can be subtle page entrance and section reveal, but it should not obscure content or feel decorative.

## Content Requirements

Hero copy should communicate:

- Full stack developer.
- Visual maker or designer.
- AI-assisted workflow builder.
- Practical systems and business-facing web work.

Selected Work should feature:

- Waffenplatz.
- Raven Weapon.
- Petrol Stations Directory.
- GSCWD Hydraulic Analysis.
- SSG Voting System.
- One strongest design project if space supports it.

Design Archive should group the remaining design items:

- Pizza website design.
- Nova shoes website design.
- Calendar layout.
- ID layout.
- Calling card.
- Posters.
- Mobile design and product booth.
- Labels.
- Packaging box layout.
- `.inp` files resource if still relevant, otherwise keep as a utility item with plain wording.

Media roles:

- Hero portrait: existing `public/images/hero.png`.
- Project previews: existing project screenshots in `public/images`.
- Technology icons: existing SVG assets, used more sparingly.

## Technical Notes

- Keep the current Next.js pages router structure.
- Prefer scoped component updates over a framework rewrite.
- Update `styles/globals.css`, Tailwind font config, and portfolio components.
- Remove unused particle/glass/orb styling if no longer referenced.
- Keep Google Search Console verification and favicon links intact.
- Do not include generated `.superpowers/` mockup files in git.

## Testing and Verification

- Run `npm run lint`.
- Run `npm run build`.
- Start the local Next.js server and inspect the homepage in browser.
- Check desktop and mobile widths for text overlap, image framing, and section rhythm.
- Confirm git status only contains intended changes before pushing.

## Recommended Impeccable References

- `reference/brand.md` for brand portfolio standards.
- `reference/shape.md` for preserving the approved design brief.
- `reference/polish.md` for final visual pass.
- `reference/adapt.md` for responsive behavior.

## Open Questions

No blocking design questions remain. If implementation reveals a broken or outdated external project link, verify the link and either fix it or label the item clearly.
