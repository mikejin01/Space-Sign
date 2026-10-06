# Speedpro — reference notes

Source: https://www.speedpro.com/nyc-mt-vernon (captured 2026-10-05, cookie banner rejected).
Screenshots: `d-*.jpg` at 1440 wide, `m-*.jpg` at 390 wide (the reference itself overflows to 398px on mobile).
Third-party widgets (sticky scroll header, reCAPTCHA badge, cookie icon, social bar, "Get a Quote" chat
widget) were hidden for the captures. Raw computed styles are in `styles-all.json`.

## Tokens (measured)

| Token | Value |
|---|---|
| Heading font | Poppins 700, uppercase, `line-height` ≈ 0.8–1.0 |
| Body font | Muli (= Mulish) 400, 16px / 27.44px, `#484848` |
| h1 (hero) | 180px / 144px desktop · 80px / 64px mobile; line 1 white, line 2 red |
| h2 (intro) | 110px / 110px desktop · 60px mobile; line 1 black, line 2 red |
| h2 (section) | 65px / 73.5px desktop · 55px mobile ("WHAT THEY'RE SAYING", "RECENT PROJECTS") |
| h2 (small) | 40px / 52px ("LOOKING FOR SOMETHING SPECIFIC?") · 26px in quote box |
| Red | **`#da291c`** (rgb 218 41 28) — plan estimated `#e1251b` |
| Black / white | `#000` / `#fff` |
| Gray band | `#eef1f5` (services, location) |
| Button | Poppins 500 12px, uppercase, `letter-spacing:1px`, `padding:18px 30px`, `border-radius:25px`, red bg, white text |
| Small button | same, `padding:12px 20px` |
| Outline button | 2px black border, 25px radius, 300px wide (footer "CALL US TODAY") |
| Service card | photo + black caption bar (`padding:35px 44px`), 2px white rule above "01  Name   view all →"; caption name Poppins 700 26px, number Muli 26px light, "view all" Poppins 500 14px lowercase |
| Card shadow | `0 45px 80px -40px #000` (big soft drop under each card) |
| Review card | white, `padding:20px 30px`, shadow `-5px 5px 15px rgba(0,0,0,.2)`, 2px black rule at top, name Poppins 800 22px, gold stars |
| Container | ~1266px wide (87px side gutters at 1440); 2-col cards 603px each with 60px gap |
| Utility bar | 50px tall black; red phone block (Muli 700 16px white, letter-spaced); Muli 700 14px uppercase location `letter-spacing:1.26px` + red ›; right links Muli 700 11px uppercase |
| Nav | white, 108px tall, logo left, Poppins 400 14–15px links, red search icon |
| Side tabs | fixed right, 84px wide; black "View Portfolio" + red "Upload File", icon over Muli 11px uppercase |
| Footer | white; column heads Poppins 300 16px uppercase `letter-spacing:1.6px` with short gray rule; links Muli 16px `#484848`; red bottom bar, Muli 12px white |

## Section order

1. Utility bar (red phone block + black strip) — `d-01-header`
2. White nav — `d-01-header`
3. Hero: black, giant faint outlined letters behind, kicker + two-tone h1 + subline + red pill; video panel on right (hidden on mobile) — `d-02-hero`
4. Sticky side tabs (fixed, right edge)
5. "GREAT BIG GRAPHICS" intro: two-tone h2 left with photo below, two paragraphs right — `d-03-intro`
6. Services: staggered 2-col cards (right column offset down ~180px) on gray band, plus "Looking for something specific?" with 3 small red pills — `d-04-services`
7. "WHAT THEY'RE SAYING": big gray quote mark behind h2 left, review cards on a black marbled panel right, arrows + "View all reviews" pill — `d-05-testimonials`
8. Client logo strip — `d-06-client-strip`
9. "RECENT PROJECTS": black, h2 left + red pill right, 3 square photos per view, dot pagination — `d-07-projects`
10. Location: gray left with centered h2 + copy + pill, video right — `d-08-location`
11. Map + studio info — `d-09-map`
12. "QUOTE & CONSULTATION REQUEST": white box (icon circle left, h2 + copy + pill) overlapping a black band — `d-10-quote`
13. Footer — `d-11-footer`

## Space Sign content per section

| Reference section | Space Sign version |
|---|---|
| Utility bar | `(718) 961-1112` red block · "SPACE SIGN — COLLEGE POINT, NY ›" · links: Service Areas, Permits, Our Work, Contact |
| Nav | `logo-black.png` · Services, Our Work, Reviews, Process · red "Request a Quote" pill |
| Hero | kicker "NYC LICENSED SIGN HANGER #215" · "SIGN / BOLDLY" · subline about storefront signs since 1987 · "CONTACT US" pill · right panel = crossfading slider of `space-sign-hero-*.png` |
| Side tabs | "VIEW WORK" (black) · "GET A QUOTE" (red) |
| Intro | "GREAT BIG / SIGNS" + photo; two about paragraphs from `BUSINESS-INFO.md` |
| Services | 6 cards: Channel Letters, LED Neon & Lightbox, Blade & Carved, Awnings & Vestibules, Interior & Print, Permits & Violations, each with a `work/` photo; "Looking for something specific?" → pills Channel Letters / Lightbox / Permits |
| Reviews | demo reviews from `shared/content.js` |
| Client strip | client logos from `assets/clients` |
| Recent projects | `work/` + `archive/` photos, 3 per view, scroll-snap carousel with dots, "VIEW FULL PORTFOLIO" pill |
| Quote | white box over black band with a real form (name, email, phone, project) using the shared mailto submit |
| Footer | logo, outline "CALL US TODAY (718) 961-1112" pill, address; columns Helpful Links / Areas Served / Services; red bottom bar |

## Deliberately skipped

- Hero video and location video (replaced by photo slider / skipped).
- Google Map embed and "studio owner/hours" block (no map embed in the demo; address lives in the footer).
- Mega-menu dropdowns, site search, sticky scroll header, social bar, chat widget.
- Their outlined-letter hero image — recreated with CSS text-stroke letters instead.
