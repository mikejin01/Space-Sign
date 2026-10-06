# Signmakerz — reference notes

Source: https://www.signmakerz.com/pages/signmakerz-info (captured 2026-10-05, no cookie banner shown).
Screenshots: `d-*.jpg` at 1440 wide, `m-*.jpg` at 390 wide. Chat widgets were hidden for the captures.
The reviews block is a lazy third-party widget (Loox), so `d-06-reviews.jpg` is cropped to the part that rendered.

## Tokens (measured)

| Token | Value |
|---|---|
| Heading font | Young Serif 400; h1 54px / 58px, `letter-spacing:-.54px`; h2 46px / 50px, `-.46px`; card h3 17–19px (synthetic bold) |
| Body font | Archivo 500, 16–17px / 1.7, `letter-spacing:.8px` (they track all body text) |
| Page bg | `#faf6f2` |
| Cream-pink section bg | `#f3ebe2` (categories, reviews) |
| Dark bg | `#0a0a0a` (hero, how it works, final CTA, footer) |
| Copper accent | `#ac7051` |
| Light copper (eyebrows on dark) | ≈ `#cf9b80` |
| Heading text | `#241b14` |
| Body text | `#52453c`; muted `#94826f` |
| Cream text on dark | `#faf3ec`; body on dark `rgba(240,228,216,.72)` |
| Hairline | `rgba(90,60,35,.2)` (form), `rgba(90,60,35,.1)` (cards) |
| Eyebrow | Archivo 700 12px, uppercase, `letter-spacing:2.64px`, preceded by a small dot with a soft glow |
| Hero badge | pill, `padding:9px 16px`, `border:1px solid rgba(255,255,255,.12)`, `background:rgba(255,255,255,.06)`, Archivo 700 12.5px uppercase `letter-spacing:1.75px`, light copper |
| Quote card | white, `border-radius:20px`, `padding:22px 22px 18px`, shadow `0 30px 70px rgba(0,0,0,.12)`, 480px wide |
| Form sub-section | 12px radius, 1px hairline, copper header strip (Archivo 700 11px uppercase white, `padding:9px 14px`) |
| Toggle buttons | white, 1px hairline, 9px radius, Archivo 600 13.5px |
| Sign-type tiles | black tile, 9px radius, 2px hairline border, photo top, white uppercase 10.5px 800 label + gray sub-label, copper "POPULAR" pill |
| Primary button | copper, white Archivo 700 15px, `border-radius:11px`, `padding:15px`, copper glow shadow |
| Secondary button (dark) | transparent, 1px `rgba(255,255,255,.25)`, 12px radius, `padding:16px 28px` |
| Category card | white, `border-radius:16px`, 1px hairline, photo 210px tall with "01" dark pill badge (Young Serif 12px), copper "Explore Sign" button 7px radius |
| Step circle | 48px circle, 1px `rgba(255,255,255,.15)`, `#1a1a1a` fill, Young Serif number in light copper |
| FAQ row | white, 12px radius, 1px hairline, Archivo 600 16px, copper "+" |
| Container | 1180px (130px gutters at 1440) |
| Section padding | 96px top/bottom |

## Section order

1. Dark top bar (71px) with centered logo — `d-01-header`
2. Hero: dark photo + heavy scrim; left = badge, h1, paragraph, 3 copper check bullets, 3 tilted photos (sticky column); right = white quote card — `d-02-hero`
3. "• BROWSE BY BUSINESS" — centered h2 + intro, 4×2 grid of category cards — `d-03-categories`
4. "• PORTFOLIO" — centered h2, horizontally scrolling row of rounded photos — `d-04-portfolio`
5. "• HOW IT WORKS" (dark) — h2 + 4 numbered circle steps — `d-05-how-it-works`
6. "• WORD OF MOUTH" — masonry of photo-topped review cards — `d-06-reviews`
7. "• QUESTIONS" — "Before you ask." FAQ accordion — `d-07-faq`
8. Final CTA (dark) — eyebrow, h2, line, copper + outline buttons — `d-08-final-cta`
9. Footer (dark) — logo + blurb + social, 4 link columns, rating, bottom bar — `d-09-footer`

The plan also lists a cream **trust strip** after the hero; the live reference no longer has one, but it is kept as
planned and styled like the hero badge row.

## Space Sign content per section

| Reference section | Space Sign version |
|---|---|
| Top bar | `logo-white.png`, centered |
| Hero | badge "FREE DESIGN MOCKUP · NYC LICENSED #215" · h1 "Custom Storefront Signs — Space Sign" · about paragraph · bullets (licensed hanger, in-house fabrication, Tri-State install) · 3 tilted `work/` photos |
| Quote card | Contact information (name, phone, email) · Sign details (indoor/outdoor toggle, tiles Channel Letters / Lightbox / Blade with our photos) · project details · "Get My Free Quote ›" (shared mailto) · "No spam · 1-day reply · Free estimate" |
| Trust strip | "★ 4.9 rating · Since 1987 · NYC Licensed #215 · Tri-State service" |
| Browse | "• BROWSE BY SIGN TYPE" · 8 cards: Channel Letters, LED Neon, Lightbox, Blade, Carved, Awnings & Vestibules, Interior Signs, Permits & Violations |
| Portfolio | `work/` + `archive/` photos in a scroll-snap row |
| How it works | "From sketch to installed sign." · Design & Survey → Permits → Fabrication → Install |
| Reviews | demo reviews from `shared/content.js`, each topped with one of our photos |
| FAQ | permit, violation, timeline, service-area and process questions from `BUSINESS-INFO.md` |
| Final CTA | "Your storefront sign is waiting." · copper "Get My Free Quote →" + outline "Call (718) 961-1112" |
| Footer | logo, blurb, columns Services / Company / Contact, 4.9 rating, address, fax |

## Deliberately skipped

- Logo upload drop zone (no backend; mailto can't attach files) — replaced by the project-details field.
- Six-tile mockup type grid → three tiles (Channel Letters, Lightbox, Blade) per the plan.
- Payment-method icons, social icons, WhatsApp button (replaced by a call button), review-widget filters.
