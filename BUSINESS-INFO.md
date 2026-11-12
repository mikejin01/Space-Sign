# Space Sign — Business Information

> Scraped from https://www.spacesign.com (Wix site) on 2026-06-23 for the homepage rebuild.

## Identity
- **Name:** Space Sign
- **Tagline:** NYC Licensed Sign Hanger (License #215)
- **Headline:** "Space Sign is one of the top sign makers in the tri-state area."
- **Established:** 1987 (30+ years)
- **Rating:** 4.9 stars

## Contact
- **Phone:** (718) 961-1112
- **Fax:** (718) 961-5577
- **Email:** info@spacesign.com
- **Address:** 15-25 132nd Street, College Point, NY 11356 (Queens)
- **Hours:** Mon–Fri 8:00 AM–6:00 PM; Sat–Sun closed (source: Google Maps listing, checked 2026-11-03; matches Yahoo Local)
- **LinkedIn:** https://www.linkedin.com/company/space-sign/
- **Facebook:** https://www.facebook.com/spacesignNY/

## Positioning / About copy (verbatim)
- "Based out of Queens, NY, we at Space Sign provide a full-concierge service, taking care of all our client's signage needs from sales and design, to the manufacture and final installation processes."
- "Since 1987, Space Sign has set the industry standard for quality, selection and customer service."
- "We produce all our signs under one roof, a purpose-built factory designed to facilitate ease of communication and efficiency."
- "We apply traditional skills and materials to the latest and most advanced technology."
- Licensed as a **Special Sign Hanger by the NYC Department of Buildings**; in-house Permit Department handles permit applications and violation removal.
- "Located in the center of Queens, we provide signage to our clients anywhere in the Tri-State region from East Long Island to New Jersey."

## Service area
Queens, Brooklyn, Manhattan, the Bronx, Long Island — and the wider Tri-State area (NY, NJ, CT).

## Services / Products
Channel Letters (Front Lit / Back Lit / Front & Back Lit), 3D Letters, LED Neon Signs,
Illuminated Lightbox Signs, Blade Signs, Push-Thru Signs, Carved Signs, Flat Panel Signs (a category in the client's Google Drive photos, not on spacesign.com), Pylon Signs,
Interior Signs, Awnings & Vestibules, Digital Printing / Custom Vinyl Decals, Custom Banners,
Trade Show Booths & Displays, Sign Installation & Maintenance, DOB Permits, DOB/ECB Violation Removal.

## Permits & Violations (verbatim)
- "All signs require Sign Permits issued by the NYC Department of Buildings (DOB)."
- "NYC Licensed Sign Hangers are the only persons legally allowed to pull a Sign Permit in NYC."
- "NYC DOB and NYC ECB issue violations for all types of signs, awnings, and canopies that are in violation of the NYC Administrative Codes."
- "NYC Sign Violations can only be corrected and cleared by NYC Licensed Sign Hangers."

## Selected clients (from portfolio photos)
Bareburger, Subway, Kung Fu Tea, Panini, Gong cha, Oren Orthodontics, Daiso, Raby Garden Farm,
Key Food, Chase, Taco Bell, TGI Fridays, Kumon, European Wax Center, plus many local storefronts.

## Site pages
home, about-us, contact-us, signs, channel-letters, 3d-letters, led-neon-sign,
illuminated-sign-box, blade-signs, push-thru-sign, carved-signs, awning-vestibule,
interior-signs, banners, custom-vinyl-decals, permit-violations.

## Asset archive
- `public/assets/work/` — curated, web-optimized photos: the hero slides and the hand-picked Our Work photos (`work` in `src/shared/projects.js`), named `<sign type>-<business>.jpg` for SEO.
- `public/assets/signs/` — one photo per sign type, from spacesign.com/signs (`signTypes`).
- `public/assets/portfolio/` — the Our Work page's other photos: every spacesign.com product-gallery photo (all 257 gallery slots, checked Nov 2026 by matching each image) not already in `work/`, plus the four photos atop spacesign.com/channel-letters, then the client's Google Drive photos (Nov 2026, four folders: Outdoor Signage, Awnings, Interior Signage, Digital Print, Booth & Display) not already on the site, named `<sign type>-<nn>[-<business>].webp` for SEO (`portfolio` in `src/shared/projects.js`). Drive photos are WebP, at most 1600px on the long side, in sRGB with no metadata; 145 gallery photos the Drive had at a higher resolution were replaced by the Drive copy (same name, now `.webp`), and the 95 the Drive didn't have are still the 800px `.jpg` from spacesign.com. Duplicates were found by perceptual hash and feature matching, then checked by eye: exact copies and re-crops of one shot count as one photo. A photo shown in two galleries or two Drive folders is saved once and listed under both types. The business was read off each sign by eye or taken from the Drive file name. Photos of one job (same building and sign, judged by eye) share a `project` key and show as one card on Our Work, with all of them in the project gallery.
- `public/assets/archive/` — every image scraped from the homepage (optimized), for future use.
- Originals were downloaded at full resolution during scraping (not committed).
