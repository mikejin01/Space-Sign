# Signsny — reference notes

Source: https://signsny.com (captured 2026-10-05, no cookie banner shown).
Screenshots: `d-*.jpg` at 1440 wide, `m-*.jpg` at 390 wide. The chat widget was hidden for the captures.
The hero trust strip is hidden on mobile in the reference, so there is no `m-` shot of it.

## Tokens (measured)

| Token | Value |
|---|---|
| Hero h1 | Oswald 600, 88px / 105.6px, uppercase, white |
| Hero subline | Oswald 400, 21px, uppercase, white |
| Section h2 | Plus Jakarta Sans 800, 46px / 59.8px, navy `#1a2d4e` (intro h2: 36px / 46.8px) |
| Card h3 | Cabin 600, 24px / 31.2px, navy |
| Small h3 ("Our Sign Solutions:") | Cabin 600 24px navy |
| Feature card h3 | Montserrat 700 22px navy (we use Plus Jakarta Sans 700) |
| Body | Roboto 400, 16px / 26.4px, `#2b2f33` |
| Eyebrow chip | Inter 600 14px uppercase navy, pale blue-gray pill `#eef3f8` (we use Plus Jakarta Sans) |
| Trust strip | Fira Sans Condensed 400 20px uppercase white on navy, thin white separators |
| Navy | `#1a2d4e` |
| Blue | `#046bd2` |
| Pale panel | `#f0f5fa` |
| Card border | 1px `#ccc`, `border-radius:10px` |
| Feature card | white, `border-radius:15px`, `padding:50px 20px`, on a `#f0f5fa` panel with 15px radius and 30px padding |
| Primary button | Cabin 500 16px, blue bg, white, `border-radius:10px`, `padding:16px 32px`, arrow icon |
| White button | same, white bg, blue text |
| Nav button | Cabin/Frutiger 700 14px, navy bg, white, 10px radius, `padding:12px 18px` |
| Filter tab | Plus Jakarta Sans 500 16px uppercase, `padding:10px`, no radius, shadow `0 1px 2px rgba(0,0,0,.05)`; active = navy bg + white text, inactive = navy text |
| Bullets | 12px blue dot (cards), 20px blue check in a pale circle (intro) |
| Utility bar | 35px navy, white social icons left, 14px white links right with thin separators |
| Nav | 70px white, logo left, 17px 600 links (Frutiger — we use Roboto 500), navy quote button right |
| CTA banner | navy, `border-radius:10px`, `padding:50px 30px`, 1100px wide, white 26px bold heading + blue button |
| Container | 1380px (30px gutters at 1440) |
| Footer | navy, 4 columns, uppercase 18px white headings, white 16px Roboto links, bottom copyright + logo |

Fonts loaded: Oswald, Plus Jakarta Sans, Roboto (per plan) plus Cabin and Fira Sans Condensed, which the reference
uses for buttons, card titles and the trust strip.

## Section order

1. Navy utility bar — `d-01-header`
2. White nav — `d-01-header`
3. Hero: full-width shop photo with navy duotone, centered h1 + subline + two buttons — `d-02-hero`
4. Hero trust strip (navy) — `d-03-trust-strip`
5. Two-column intro: h2, paragraphs, "Our Sign Solutions:" 2-col checklist, blue button; rounded photo right — `d-04-intro`
6. Work gallery: eyebrow chip, h2, intro, filter tabs, 4-col grid of rounded photos — `d-05-gallery`
7. Services: 3-col cards (photo, Cabin title, copy, blue-dot list, "Most Popular" badge) — `d-06-services`
8. Logo strip (grayscale material brands) — `d-07-logo-strip`
9. Navy CTA banner — `d-08-cta-banner`
10. "Your Full Service Sign Partner in New York City": 4 white cards on a pale blue panel — `d-09-full-service`
11. (Reference only) contact band, industries grid, national accounts, hiring, blogs — `d-10`, `d-11`
12. Footer — `d-12-footer`

## Space Sign content per section

| Reference section | Space Sign version |
|---|---|
| Utility bar | social icons (generic) left; Service Areas · Permits · (718) 961-1112 · info@spacesign.com right |
| Nav | `logo-black.png` · Channel Letters, Lightbox & Neon, Awnings, Permits, Our Work, About · navy "Request a Quote" |
| Hero | shop/install photo with navy duotone · "SPACE SIGN" · "YOUR NYC LICENSED SIGN MAKER" · "Get a Free Quote" + "See Our Work →" |
| Trust strip | NYC LICENSED #215 · SINCE 1987 · IN-HOUSE FABRICATION · TRI-STATE INSTALL |
| Intro | "Sign Company in Queens, NY — Serving the Tri-State Since 1987" · about paragraphs · checklist of products · "Start your Project! →" |
| Gallery | tabs Channel Letters / Lightbox / Blade / Storefront / Awnings filter `work/` + `archive/` photos |
| Services | 6 cards from our product list, "Most Popular" on Channel Letters |
| Logo strip | client logos from `assets/clients` |
| CTA banner | "Need help with your signage project?" · "Get Free Quote →" |
| Full service | Design / Fabrication / Installation / Permits & Violations with simple line icons |
| Footer | Useful links / Services / Service Areas / Contact columns, copyright + logo |

## Deliberately skipped

- Mega-menu dropdowns, contact band, industries grid, national accounts, hiring and blog sections (not in the plan's section list).
- Their material-brand logos (3M, Orafol…) — replaced by our client logos.
