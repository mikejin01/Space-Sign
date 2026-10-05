# Design Styles — Implementation Plan

Goal: turn the Space Sign preview site into a **4-way design comparison**. A floating "Design Style" switcher (bottom-right, like the reference screenshot) lets the client flip between:

| ID | Name | Tagline (switcher subtitle) | Source | Scope |
|---|---|---|---|---|
| `editorial` | Editorial | Dark & industrial | Current site, unchanged | Full site (as-is) |
| `speedpro` | Speedpro | Bold & high-contrast | speedpro.com/nyc-mt-vernon | Demo homepage |
| `signmakerz` | Signmakerz | Warm & hand-crafted | signmakerz.com/pages/signmakerz-info | Demo homepage |
| `signsny` | Signsny | Clean & corporate | signsny.com | Demo homepage |

The three new designs are **demo homepages only**. They should be quick to build but look as close to their reference as possible, so the client can pick a direction. When this plan is done the site has 4 switchable styles. What happens after the client picks is decided later.

**Ground rules for all new designs**
- Copy the reference's *layout and visual style* (type scale, color, spacing, component shapes). Never copy its text, logos, photos or icons.
- Use only real Space Sign content (`BUSINESS-INFO.md`) and our own photos (`public/assets/work`, `public/assets/archive`, `public/assets/clients`).
- Every asset URL must be prefixed with `import.meta.env.BASE_URL`, or it breaks on GitHub Pages (see commit `5a6b6d3`).
- Each design must be responsive down to 390px wide, with no horizontal scroll.

---

## Phase 1 — Reorganize files (no visual change)

Today everything lives in `src/App.jsx` (488 lines) and `src/index.css` (345 lines, global selectors like `header`, `footer`, `body`, `.btn`). Each design will get its own folder.

### Target structure

```
src/
├── main.jsx                    # mounts <App/>, no global CSS import anymore
├── App.jsx                     # reads active style → renders that design + <StyleSwitcher/>
├── shared/
│   ├── content.js              # business facts: phone, email, address, services, work photos,
│   │                           #   clients, process steps, service-area names, hero slides
│   └── useDesignAssets.js      # injects a design's CSS + Google Fonts <link> on mount, removes on unmount
├── switcher/
│   ├── StyleSwitcher.jsx
│   └── StyleSwitcher.css
└── designs/
    ├── index.js                # registry: id, name, tagline, swatch colors, lazy import
    ├── editorial/
    │   ├── Editorial.jsx       # today's App.jsx markup, unchanged
    │   ├── editorial.css       # today's index.css, unchanged
    │   ├── icons.jsx           # service SVG icons (moved out of App.jsx)
    │   └── regions.js          # Tri-State map geometry (Editorial-only)
    ├── speedpro/
    │   ├── Speedpro.jsx
    │   ├── speedpro.css
    │   └── reference/          # screenshots + NOTES.md (not imported, so never bundled)
    ├── signmakerz/             # same shape as speedpro/
    └── signsny/                # same shape as speedpro/
```

Rule of thumb: **facts about the business go in `shared/`; anything visual goes in the design folder** (icons, map geometry, design-specific headline copy).

### CSS isolation (key decision)

Each design ships page-wide CSS (`body`, `header`, `:root` variables, resets), and those rules collide when designs share a document. Vite injects CSS when a module loads and never removes it, so a plain `import './x.css'` would leak Editorial's rules into Speedpro after a switch.

**Approach:** import each design's stylesheet as a string (`import css from './editorial.css?inline'`). `useDesignAssets(css, fontsHref)` then adds a `<style>` and a Google Fonts `<link>` in `useLayoutEffect` (before paint) and removes both on unmount. Only the active design's CSS is ever in the page, so no existing selector needs rewriting. Scoping every rule under a `.ds-<id>` wrapper was rejected: it means rewriting all 345 lines of Editorial and handling `body`/`:root` rules by hand, and the work gets thrown away when the client picks a winner.

Also:
- Load designs with `React.lazy(() => import('./editorial/Editorial.jsx'))`, so the client only downloads the design being viewed. Preload the others when the switcher panel opens, so switching feels instant.
- Move the font `<link>` out of `index.html` and into each design. Fonts per design:
  - Editorial: Archivo, Space Mono
  - Speedpro: Poppins, Mulish
  - Signmakerz: Young Serif, Archivo
  - Signsny: Oswald, Plus Jakarta Sans, Roboto
- Each design sets `document.title`. Today it is the stale "SPACE SIGN — Option B".

### Done when
- [ ] `pnpm build` passes.
- [ ] Editorial looks **identical** to before at 1440×900 and 390×844. Screenshot both widths before the refactor and compare after.
- [ ] Hero slider, mobile menu, map hover and quote form still work.
- [ ] The refactor is a single commit with no visual changes.

---

## Phase 2 — Floating style switcher

Match the reference screenshot.

**Closed state (pill):** fixed bottom-right with a 16px inset and `z-index` above everything (Editorial's header is 60, so use 1000). Dark glass background (≈`#2a2a2c`, blur, 1px `rgba(255,255,255,.1)` border, fully rounded). Contents, left to right:
- a 22px rounded-square swatch
- two lines: "DESIGN STYLE" (9–10px, letter-spaced, gray) over the active name (14px, bold, white)
- an up chevron

**Open state (panel):** opens above the pill, right-aligned, about 290px wide (max `calc(100vw - 32px)`), with 16px corner radius and the same glass background.
- Header: "CHOOSE A DESIGN STYLE" (11px, letter-spaced, gray).
- One row per design: a 30px swatch, the name (bold) and the tagline (gray) below it.
- The active row has a lighter background (`rgba(255,255,255,.08)`) and a ✓ on the right.

**Swatches** are 2–3 color diagonal splits (`linear-gradient(135deg, …)`), defined in `designs/index.js`:

| Design | Colors |
|---|---|
| Editorial | `#0c0c0b` / `#e4121d` |
| Speedpro | `#ffffff` / `#e1251b` / `#000000` |
| Signmakerz | `#f3e9e1` / `#ac7051` / `#161210` |
| Signsny | `#ffffff` / `#046bd2` / `#1a2d4e` |

**Behavior**
- `?style=<id>` in the URL is the source of truth, so each design has a shareable link for the client. The last choice is also remembered in `localStorage`, which is wrapped in try/catch. If neither is set, the default is `editorial`. Update the URL with `history.replaceState`.
- Choosing a design scrolls to the top and closes the panel. Outside click and Escape also close it. Focus returns to the pill when the panel closes.
- `?switcher=off` hides the pill so reference-comparison screenshots are clean.
- Accessibility: the pill is a `<button aria-expanded>`. Rows use `role="menuitemradio"` with `aria-checked`.
- The switcher uses a neutral system font stack and `ss-`-prefixed classes. It resets its own `button` styles so no design's CSS can restyle it.

### Done when
- [ ] Switching works between all four (placeholder components are fine for the three new designs at this point).
- [ ] Deep links such as `/Space-Sign/?style=signsny` work on the built site.
- [ ] Keyboard works: Tab to the pill, Enter opens, arrow keys or Tab move through rows, Escape closes.

---

## Phase 3 — Capture reference screenshots

Do this before building each design. It is what keeps the copy close.

For each reference site, using Claude in Chrome:
1. Decline any cookie banner ("Reject All") so it isn't in the shots.
2. **Desktop (1440 wide):** scroll top to bottom and save one screenshot per section into `src/designs/<id>/reference/`, named `d-01-hero.jpg`, `d-02-services.jpg`, and so on.
3. **Mobile (390 wide):** the same, named `m-01-hero.jpg`, ….
4. Run a computed-style dump (JS in the page) for `body`, `h1`–`h3`, buttons, cards and section backgrounds. Record fonts, sizes, weights, letter-spacing, colors, radii and shadows.
5. Write `reference/NOTES.md` with:
   - the token table (from step 4)
   - the ordered section list
   - which Space Sign content fills each section
   - anything we are deliberately skipping

## Phase 4 — Build the three demo homepages

Each design is independent: its own folder, no shared CSS. They can be built in any order, or in parallel. Per design:
1. Scaffold `<Name>.jsx` and `<name>.css`, then put the design tokens from `NOTES.md` into `:root` variables.
2. Build section by section in the order of the reference.
3. **Comparison loop:** run `pnpm dev`, open `?style=<id>&switcher=off`, and screenshot the same section at the same widths. Compare it to the reference shot, fix the differences in layout, type scale, color, spacing and component shape, and repeat until they match. Content is expected to differ.
4. Check mobile at 390px.
5. Make one commit per design.

Interactions stay light: CSS scroll-snap for carousels, simple `useState` for tabs and FAQ. The quote form reuses Editorial's `mailto:` submit.

### Speedpro — bold, high-contrast, giant type

**Tokens (measured on the reference site):**
- Fonts: Poppins 700 for headings (uppercase, huge: h1 180px, h2 110px on desktop); Mulish for body (text `#484848`, 16px).
- Colors: black, white and signal red ≈`#e1251b`. Confirm the exact red in Phase 3.
- Light gray section bands.
- Fully rounded red buttons with small uppercase bold labels.
- Big soft drop shadows under cards.
- Signature move: two-tone headlines, with the first line black or white and the last line red.

**Sections → Space Sign content:**
1. **Utility bar:** a red block with the phone number, then a black strip reading "SPACE SIGN — COLLEGE POINT, NY ›", with small links on the right.
2. **White nav:** `logo-black.png`, links, and "Request a Quote".
3. **Hero:**
   - Black background with giant faint outlined letters behind everything.
   - Left side: a kicker line, then "SIGN / BOLDLY" in white and red, a subline, and a red pill "CONTACT US" button.
   - Right side: an animated photo slider (auto-advancing crossfade through `space-sign-hero-*.png`) in place of their video, framed the same way their video panel is.
4. **Sticky side tabs** on the right edge: "VIEW WORK" (black) and "GET A QUOTE" (red), in place of their "View Portfolio / Upload File".
5. **"GREAT BIG SIGNS" intro:** the two-tone headline beside an about paragraph. Below it, staggered 2-column service cards. Each card is a photo over a black caption bar holding a white rule, the number, the service name and "view all →". The cards sit over a gray band. Use 4–6 Space Sign services.
6. **"WHAT THEY'RE SAYING":** a large quote mark and headline beside review cards on a black marbled background (CSS gradient). Use demo reviews (see Decisions).
7. **"RECENT PROJECTS":** a black section with 3 photos per view, dot pagination, and a red pill "VIEW FULL PORTFOLIO".
8. **"QUOTE & CONSULTATION REQUEST"** form, then the footer.

### Signmakerz — warm, crafted, conversion-focused

**Tokens (measured on the reference site):**
- Headings: Young Serif (h1 54px, cream `#faf3ec` on dark).
- Body: Archivo 500, `#52453c` on `#faf6f2`.
- Copper accent `#ac7051`; dark heading text `#241b14`.
- Cream-pink section background ≈`#f3e9e3`; near-black dark sections ≈`#0f0d0c`.
- Rounded corners: 12–16px on cards and form.
- Small letter-spaced eyebrows with a dot ("• HOW IT WORKS").

**Sections → Space Sign content:**
1. **Dark top bar** with a centered `logo-white.png`.
2. **Hero:** a dark photo with a heavy scrim.
   - Left side:
     - a pill badge, "FREE DESIGN MOCKUP · NYC LICENSED #215"
     - the serif H1 "Custom Storefront Signs — Space Sign" and a paragraph
     - 3 copper check bullets
     - a stack of 3 tilted work photos
   - Right side: a white rounded quote card.
     - Copper section headers: Contact information, Sign details.
     - An indoor/outdoor toggle and photo tiles for sign type (Channel Letters, Lightbox, Blade).
     - A full-width copper "Get My Free Quote ›" button.
     - A row underneath: "No spam · 1-day reply · Free estimate".
3. **Trust strip** on cream: "★ 4.9 rating · Since 1987 · NYC Licensed #215 · Tri-State service".
4. **"• BROWSE BY SIGN TYPE":** the serif H2, then a 4×2 grid of white rounded cards. Each card has a photo with a "01" badge, a serif title, short copy and a copper "Explore Sign" button.
5. **Recent work strip:** a horizontally scrolling row of rounded photos.
6. **Dark "How it works":** "From sketch to installed sign." followed by 4 numbered circle steps (Design & Survey → Permits → Fabrication → Install).
7. **Reviews:** a masonry layout of photo-topped review cards. Use demo reviews (see Decisions).
8. **"Before you ask." FAQ** accordion, using permit and violation facts from `BUSINESS-INFO.md`.
9. **Final CTA**, "Your storefront sign is waiting.", then the footer.

### Signsny — clean, corporate, navy and blue

**Tokens (measured on the reference site):**
- Hero H1: Oswald 600, uppercase, 88px.
- Section H2: Plus Jakarta Sans 800, 46px, navy `#1a2d4e`.
- Body: Roboto 16px, `#2b2f33`.
- Primary button: blue `#046bd2` with a 10px radius.
- Pill eyebrows ("OUR WORK GALLERY") in a pale blue-gray chip.
- Cards: white, 1px light border, about 12px radius.
- Blue dot bullets.

**Sections → Space Sign content:**
1. **Navy utility bar:** social icons on the left, small links on the right.
2. **White nav:** logo, 6 links, and a navy "Request a Quote" button.
3. **Hero:** a full-width shop or install photo with a navy duotone overlay.
   - Centered: the Oswald H1 "SPACE SIGN", the subline "YOUR NYC LICENSED SIGN MAKER", and two buttons (solid blue "Get a Free Quote" and white "See Our Work →").
   - A trust strip along the bottom of the hero: "NYC LICENSED #215 | SINCE 1987 | IN-HOUSE FABRICATION | TRI-STATE INSTALL".
4. **Two-column intro:** the H2 "Sign Company in Queens, NY — Serving the Tri-State Since 1987", two paragraphs, a 2-column checklist under "Our Sign Solutions:" and a blue "Start your Project! →" button. A rounded photo sits on the right.
5. **Work gallery:** filter tabs (Channel Letters / Lightbox / Blade / Storefront / Awnings) with the active tab in solid navy, above a 4-column grid of rounded photos. Use `work/` and `archive/` photos and make the tabs actually filter.
6. **Services:** a 3-column grid of cards. Each card has a photo, a navy title, copy and a blue-dot list. One card carries a "Most Popular" badge.
7. **Logo strip** of client logos from `assets/clients`, in place of their materials-brand strip.
8. **Navy CTA banner:** "Need help with your signage project?" with a "Get Free Quote →" button.
9. **"Your Full Service Sign Partner in New York City":** 4 cards (Design / Fabrication / Installation / Permits & Violations) on a pale blue panel.
10. **Footer.**

---

## Phase 5 — QA and hand-off

- [ ] `pnpm build` and `pnpm preview`: every design loads under `/Space-Sign/` with no broken images.
- [ ] Check every design at 1440, 1024, 768 and 390: no horizontal scroll, and the switcher never covers a primary CTA.
- [ ] Switch through all four in sequence and confirm no styles leak between designs (look at fonts and colors).
- [ ] No console errors.
- [ ] Merge to `main`, which deploys via GitHub Actions. Send the client 4 direct links (`?style=editorial`, `?style=speedpro`, …) along with the switcher.

## Git workflow

Work on a branch (`design-styles`), because every push to `main` deploys the live preview. Commits:
1. Refactor
2. Switcher
3. Speedpro
4. Signmakerz
5. Signsny

Merge to `main` when all three demos are ready for the client.

## Decisions (confirmed by Mike)

1. **Reviews:** write demo reviews for now. Keep them in one array in `shared/content.js` with a `// DEMO REVIEWS — replace with real Google reviews before launch` comment, so they are easy to find and swap later.
2. **Swatch colors and taglines:** approved as written in the tables above.
3. **After the client picks:** decide later. For now, build all three new styles so the site ends up with 4 switchable styles. Do not remove anything.
4. **Speedpro hero media:** an animated photo slider replaces their video.
