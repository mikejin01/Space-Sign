// Business facts shared by every design. Anything visual (icons, map
// geometry, design-specific headline copy) lives in the design's own folder.
// The project photos (Our Work) are in projects.js.

export const BASE = import.meta.env.BASE_URL

export const asset = (path) => `${BASE}assets/${path}`

export const PHONE = '(718) 961-1112'
export const PHONE_TEL = 'tel:+17189611112'
export const FAX = '(718) 961-5577'
export const EMAIL = 'info@spacesign.com'
export const ADDRESS = '15-25 132nd St, College Point, NY 11356'
export const MAPS_URL = 'https://maps.google.com/?q=15-25+132nd+Street+College+Point+NY+11356'
export const LICENSE = '#215'
export const SINCE = 1987
export const RATING = '4.9'
// From the Google Maps listing (checked 2026-11-03).
export const HOURS = [
  { days: 'Mon – Fri', time: '8:00 AM – 6:00 PM' },
  { days: 'Sat – Sun', time: 'Closed' },
]
// Social profiles, in the order they're shown. `id` picks the design's icon.
export const SOCIAL = [
  { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/company/space-sign/' },
  { id: 'facebook', name: 'Facebook', url: 'https://www.facebook.com/spacesignNY/' },
]

export const heroSlides = [
  { img: 'space-sign-hero-2.png', label: 'Space Sign — Illuminated Channel Letters' },
  { img: 'space-sign-hero-3.png', label: 'Space Sign — Storefront Installation' },
  { img: 'space-sign-hero-4.png', label: 'Space Sign — Custom Sign Fabrication' },
]

// The 12 sign types on spacesign.com/signs, in that page's order and with its
// titles, plus Flat Panel Sign (after Carved), a folder in the client's Google
// Drive photos (Nov 2026) that spacesign.com doesn't have. Each photo
// (public/assets/signs/) is the one that page shows for the type, at its crop;
// Flat Panel's is cropped from one of its Drive photos. `id` names the type in
// URLs (/signs/#blade, /work/?type=blade) and in the quote form. `copy` is the
// homepage card's one line; `details` is the
// Sign Types page's description. spacesign.com's type pages have no description,
// only the styles some types come in (channel letters: front lit, back lit, front
// & back lit; awning, vestibule, canopy; custom vinyl, digital printing, banners;
// trade show booths and displays), so `details` works those in. `made` names the
// type in a project's generic caption: "<made> for <business>." Drafted Nov 2026
// for the client to approve.
export const signTypes = [
  { id: 'channel-letters', title: 'Channel Letters Sign', img: 'channel-letters.jpg', alt: 'Pizza Hut channel letters on a brick storefront',
    copy: 'Illuminated letters, front-lit, back-lit or front & back-lit.',
    made: 'Illuminated channel letters',
    details: 'Individually built, illuminated letters mounted on your storefront: the classic lit business sign. Front-lit letters glow bright and crisp, back-lit letters cast a soft halo on the wall behind them, and front & back-lit letters do both.' },
  { id: '3d-letters', title: '3D Letters Sign', img: '3d-letters.jpg', alt: 'Halo-lit Panini 3D letters above a menu board',
    copy: 'Precision-cut dimensional letters for facades and lobbies.',
    made: 'Dimensional 3D letters',
    details: 'Precision-cut dimensional letters and logos for facades, lobbies and reception walls. Their depth catches light and casts shadow by day, and they can be halo-lit to glow at night.' },
  { id: 'led-neon', title: 'LED Neon Sign', img: 'led-neon.jpg', alt: 'Yellow LED neon sign spelling burger',
    copy: 'The glow of classic neon from energy-efficient LED.',
    made: 'An LED neon sign',
    details: 'The glow of classic neon, made with flexible LED instead of glass tubing. It’s energy-efficient and durable, and bends into lettering, logos and artwork for windows, walls and interiors.' },
  { id: 'lightbox', title: 'Lightbox Sign', img: 'lightbox.jpg', alt: 'Round Connecticut Muffin lightbox sign',
    copy: 'Illuminated cabinet signs, bright and even day and night.',
    made: 'An illuminated lightbox sign',
    details: 'Illuminated cabinet signs, lit evenly from within so your logo and colors read clearly day and night. Built in the shape you need, from long storefront boxes to round logo signs.' },
  { id: 'blade', title: 'Blade Sign', img: 'blade.jpg', alt: 'Subway blade sign projecting from a storefront',
    copy: 'Projecting signs that reach foot traffic up and down the block.',
    made: 'A projecting blade sign',
    details: 'Projecting signs mounted at a right angle to your storefront, so people walking up and down the block see you before they reach your door. Lit or non-lit, in any shape.' },
  { id: 'push-thru', title: 'Push-Thru Sign', img: 'push-thru.jpg', alt: 'Round push-thru sign for 3S Restaurant Sports Nightlife',
    copy: 'Acrylic letters pushed through a cut face, lit from within.',
    made: 'A push-thru sign',
    details: 'Acrylic letters and logos pushed through a cut-out face and lit from within, so only your lettering glows. A clean, upscale take on the lightbox.' },
  { id: 'carved', title: 'Carved Sign', img: 'carved.jpg', alt: 'Carved Flowers by Glen Head Flower Shop sign with gold lettering',
    copy: 'Carved panels with raised lettering and real depth.',
    made: 'A carved sign',
    details: 'Carved panels with raised lettering and real depth, finished in paint or gold. A timeless, crafted look for boutiques, restaurants and professional offices.' },
  { id: 'flat-panel', title: 'Flat Panel Sign', img: 'flat-panel.webp', alt: 'Spirals Cinnamon Rolls flat panel sign above a storefront',
    copy: 'Aluminum panels with printed graphics, clean and affordable.',
    made: 'A flat panel sign',
    details: 'Flat aluminum panels with your name, logo and colors in printed or cut vinyl, mounted across your storefront or building. A clean, durable and affordable sign, sized to the facade, from narrow shopfronts to warehouses.' },
  { id: 'pylon', title: 'Pylon Sign', img: 'pylon.jpg', alt: 'Feel Beauty pylon sign on two posts',
    copy: 'Freestanding signs that mark your site from the road.',
    made: 'A freestanding pylon sign',
    details: 'Freestanding signs on one or two posts that mark your site from the road. Made for plazas, dealerships and businesses set back from the street.' },
  { id: 'interior', title: 'Interior Sign', img: 'interior.jpg', alt: 'Beyond Vape Bronx Strong wall graphic in a lounge',
    copy: 'Lobby, wall and wayfinding graphics for inside your space.',
    made: 'Interior signage',
    details: 'Lobby logos, wall graphics and wayfinding that carry your brand indoors, from the reception desk to feature walls in salons, clinics and markets.' },
  { id: 'awning-vestibule', title: 'Awning & Vestibule', img: 'awning-vestibule.jpg', alt: 'Red Carmine’s awning and entrance vestibule',
    copy: 'Awnings, vestibules and canopies made to fit your storefront.',
    made: 'Custom awning and vestibule work',
    details: 'Awnings, vestibules and canopies made to fit your storefront. They shelter your entrance and put your name in front of everyone who passes, and we file the DOB permit they need.' },
  { id: 'digital-printing', title: 'Digital Printing', img: 'digital-printing.jpg', alt: 'Printed soup-can window graphics for Hudson Market',
    copy: 'Custom vinyl, digital prints and banners.',
    made: 'Printed graphics',
    details: 'Custom vinyl decals, digital prints and banners for windows, walls and promotions. Printed in-house in full color and installed by our crew.' },
  { id: 'trade-show', title: 'Trade Show', img: 'trade-show.jpg', alt: 'Neoflam trade show booth with product shelving',
    copy: 'Booths and displays that stand out on the show floor.',
    made: 'A trade show booth',
    details: 'Trade show booths and displays that stand out on the show floor, with backdrops, graphics and shelving built around your products and your brand.' },
]

// The quote form's choices after the sign types. `id` is the form's value; the
// Permits and Violations buttons choose 'permit' and 'violation'.
export const otherServices = [
  { id: 'permit', title: 'DOB sign permit' },
  { id: 'violation', title: 'Violation removal' },
  { id: 'repair', title: 'Sign repair or maintenance' },
  { id: 'other', title: 'Something else' },
]

export const clients = [
  { file: 'shinhan-bank', name: 'Shinhan Bank' },
  { file: 'key-food', name: 'Key Food' },
  { file: 'mitsuwa', name: 'Mitsuwa Marketplace' },
  { file: 'gong-cha', name: 'Gong cha' },
  { file: 'food-bazaar', name: 'Food Bazaar Supermarket' },
  { file: 'deal-automotive', name: 'Deal Automotive Sales' },
  { file: 'daiso', name: 'Daiso' },
  { file: 'noah-bank', name: 'Noah Bank' },
  { file: 'taco-bell', name: 'Taco Bell' },
  { file: 'lash-forever', name: 'Lash Forever' },
  { file: 'kumon', name: 'Kumon' },
  { file: 'feel-beauty', name: 'Feel Beauty' },
  { file: 'bareburger', name: 'Bareburger' },
  { file: 'ny-radio-korea', name: 'NY Radio Korea' },
  { file: 'subway', name: 'Subway' },
  { file: 'new-millennium-bank', name: 'New Millennium Bank' },
  { file: 'european-wax-center', name: 'European Wax Center' },
  { file: 'tgi-fridays', name: 'TGI Fridays' },
  { file: 'dashing-diva', name: 'Dashing Diva' },
  { file: 'teso', name: 'TESO' },
]

export const serviceAreas = [
  'Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island', 'Long Island', 'New Jersey', 'Connecticut',
]

export const steps = [
  { s: '/01', h: 'Design & Survey', p: 'Concept, renderings and an on-site survey to confirm fit, power and NYC code.' },
  { s: '/02', h: 'Permits', p: 'As a licensed hanger we prepare drawings and pull all required DOB sign permits.' },
  { s: '/03', h: 'Fabrication', p: 'Built under one roof in our College Point factory — quality-checked before it ships.' },
  { s: '/04', h: 'Install & Maintain', p: 'Our crews set, wire and inspect — then keep your sign lit with ongoing service.' },
]

// Opens the visitor's mail client with the quote request filled in.
export function sendQuoteEmail(form, topic = 'Quote request') {
  const subject = `${topic} — ${form.name || 'Storefront sign'}`
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    ...Object.entries(form.extra || {}).map(([k, v]) => `${k}: ${v}`),
    '',
    'Project details:',
    form.message,
  ].join('\n')
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const about = [
  'Based out of Queens, NY, Space Sign provides a full-concierge service — taking care of every signage need from sales and design to manufacture and final installation.',
  'We produce all our signs under one roof, in a purpose-built College Point factory, applying traditional skills and materials to the latest sign technology. As a NYC Licensed Sign Hanger (#215) our in-house permit department handles DOB permits and violation removal too.',
  'Since 1987 Space Sign has set the standard for quality, selection and customer service. Located in the center of Queens, we provide signage to clients anywhere in the Tri-State region — from East Long Island to New Jersey.',
]

// Photos by subject, as paths under public/assets.
export const photos = {
  heroStorefront: 'work/space-sign-hero-1.png',
  heroLetters: 'work/space-sign-hero-2.png',
  heroInstall: 'work/space-sign-hero-3.png',
  heroInterior: 'work/space-sign-hero-4.png',
  channel: 'work/channel-letters-pizza-hut.jpg',
  channelPanini: 'work/3d-letters-panini.jpg',
  channelBareburger: 'work/led-neon-bareburger.jpg',
  neon: 'work/channel-letters-subway.jpg',
  neonInterior: 'archive/50_fc1b21_ea43a03366db4e7d90e32835cea84cdd_mv2.jpg',
  lightbox: 'work/channel-letters-perfect-smile-braces.jpg',
  lightboxKungfu: 'work/channel-letters-kung-fu-tea.jpg',
  blade: 'work/blade-sports-and-nightlife.jpg',
  carved: 'work/carved-glen-head-flower-shop.jpg',
  awning: 'work/awning-vestibule-rahway-garden-farm.jpg',
  vestibule: 'work/awning-vestibule-67-wine.jpg',
  storefrontVision: 'work/3d-letters-vision-taekwondo.jpg',
  storefrontOren: 'work/awning-vestibule-i-care-orthodontics.jpg',
  interior: 'archive/10_fc1b21_26a49df104534135a2c0ba20284179a6_mv2.jpg',
  interiorDaiso: 'archive/43_fc1b21_ccdc88fd1c1a43dd89c56db41bfb02b7_mv2.jpg',
  design: 'archive/05_fc1b21_091b52d5492b4e0e897f6ec47ac416f3_mv2.jpg',
  swatches: 'archive/22_fc1b21_43d3610c30614d0b8266db1f8736db16_mv2.jpg',
  permits: 'archive/49_fc1b21_e89990142b104ffdb98f69c2d06a87ff_mv2.jpg',
  sprout: 'archive/26_fc1b21_5735d2c5c5a54a5b9b88e100d50951d8_mv2_d_1669_1207_s_2.jpg',
  bareburgerStore: 'archive/45_fc1b21_dd188f38479f453889c72506b3bfa79e_mv2_d_4608_3456_s_4_2.jpg',
  subwayCorner: 'archive/32_fc1b21_88c11e9810884f0cb868e17f634683f9_mv2_d_4000_3000_s_4_2.jpg',
}

export const GALLERY_TYPES = ['Channel Letters', 'Lightbox', 'Blade', 'Storefront', 'Awnings']

// Portfolio photos tagged by sign type, for galleries and carousels.
export const gallery = [
  { img: 'work/channel-letters-pizza-hut.jpg', name: 'Pizza Hut', type: 'Channel Letters' },
  { img: 'work/3d-letters-panini.jpg', name: 'Panini', type: 'Channel Letters' },
  { img: 'work/led-neon-bareburger.jpg', name: 'Bareburger', type: 'Channel Letters' },
  { img: 'work/channel-letters-subway.jpg', name: 'Subway', type: 'Channel Letters' },
  { img: 'archive/07_fc1b21_15c7dfc80d12496ea24e404e4e7c2e12_mv2.jpg', name: 'Restaurant Letters', type: 'Channel Letters' },
  { img: 'archive/26_fc1b21_5735d2c5c5a54a5b9b88e100d50951d8_mv2_d_1669_1207_s_2.jpg', name: 'Sprout Market', type: 'Channel Letters' },
  { img: 'work/channel-letters-perfect-smile-braces.jpg', name: 'Perfect Smile', type: 'Lightbox' },
  { img: 'work/channel-letters-kung-fu-tea.jpg', name: 'Kung Fu Tea', type: 'Lightbox' },
  { img: 'archive/20_fc1b21_418c0ad3f4234a02849ec3efe76b87e2_mv2.jpg', name: 'Café Lightbox', type: 'Lightbox' },
  { img: 'archive/42_fc1b21_c57992f1472448c7b63ce77da17fc780_mv2.jpg', name: 'Shinhan Bank', type: 'Lightbox' },
  { img: 'work/blade-sports-and-nightlife.jpg', name: 'Sports & Nightlife', type: 'Blade' },
  { img: 'work/carved-glen-head-flower-shop.jpg', name: 'Glen Head Flower Shop', type: 'Blade' },
  { img: 'archive/00_bc25b0_73fb8ea7e5e14fb084070479f43eb3c5_mv2_d_1752_1512_s_2.jpg', name: 'Café Blade Sign', type: 'Blade' },
  { img: 'work/3d-letters-vision-taekwondo.jpg', name: 'Vision Taekwondo', type: 'Storefront' },
  { img: 'work/awning-vestibule-i-care-orthodontics.jpg', name: 'I Care Orthodontics', type: 'Storefront' },
  { img: 'archive/04_fc1b21_04f62c3ab0084398b3f20a2707474447_mv2.jpg', name: 'Sharks', type: 'Storefront' },
  { img: 'archive/45_fc1b21_dd188f38479f453889c72506b3bfa79e_mv2_d_4608_3456_s_4_2.jpg', name: 'Bareburger', type: 'Storefront' },
  { img: 'archive/32_fc1b21_88c11e9810884f0cb868e17f634683f9_mv2_d_4000_3000_s_4_2.jpg', name: 'Subway', type: 'Storefront' },
  { img: 'work/awning-vestibule-rahway-garden-farm.jpg', name: 'Rahway Garden Farm', type: 'Awnings' },
  { img: 'work/awning-vestibule-67-wine.jpg', name: '67 Wine', type: 'Awnings' },
  { img: 'archive/02_bc25b0_808c693bd0c2491489d6fd5398bc5961_mv2_d_2960_3391_s_4_2.jpg', name: 'Bakery Awning', type: 'Awnings' },
  { img: 'archive/12_fc1b21_2c257cce99334f1d81a48c2babc60392_mv2.jpg', name: 'Bagel NY', type: 'Awnings' },
  { img: 'archive/24_fc1b21_52b1892662f14aec9b3b69444388018d_mv2.jpg', name: 'DukaanBoyz', type: 'Awnings' },
  { img: 'archive/11_fc1b21_299df1a555f14335afe8fe2263aa859c_mv2.jpg', name: 'Corner Storefront', type: 'Awnings' },
]

// DEMO REVIEWS — replace with real Google reviews before launch
export const reviews = [
  { name: 'Daniel K.', place: 'Flushing, NY', date: 'August 2026', text: 'Space Sign handled our channel letters from the first sketch to the DOB permit. The sign went up on schedule and looks even better lit at night.' },
  { name: 'Maria L.', place: 'Astoria, NY', date: 'July 2026', text: 'We had an open ECB violation on our old awning. They cleared it and installed a new one in under a month. Very professional crew.' },
  { name: 'James P.', place: 'Brooklyn, NY', date: 'June 2026', text: 'Third storefront we have done with them. Clear quotes, solid fabrication and they always answer the phone.' },
  { name: 'Grace C.', place: 'Fort Lee, NJ', date: 'May 2026', text: 'Our new lightbox is bright, even and exactly the brand colors we asked for. The install team was clean and quick.' },
  { name: 'Anthony R.', place: 'Bayside, NY', date: 'April 2026', text: 'They designed a blade sign that fits our narrow block perfectly and took care of the permit paperwork for us.' },
  { name: 'Sophie W.', place: 'Manhattan, NY', date: 'March 2026', text: 'From the survey to the final inspection everything was handled in-house. Easy to work with and the quality shows.' },
]

export const faqs = [
  { q: 'Do I need a permit for my storefront sign?', a: 'Yes. All signs require Sign Permits issued by the NYC Department of Buildings (DOB), and only NYC Licensed Sign Hangers can legally pull one. Space Sign is licensed (#215) and files the permit for you.' },
  { q: 'Can you clear a DOB or ECB sign violation?', a: 'Yes. The DOB and ECB issue violations for signs, awnings and canopies that break the NYC Administrative Code, and those violations can only be corrected and cleared by a licensed sign hanger. Our permit department handles it end to end.' },
  { q: 'Do you build the signs yourselves?', a: 'Every sign is produced under one roof in our purpose-built factory in College Point, Queens — channel letters, LED neon, lightboxes, blade and carved signs, awnings and more.' },
  { q: 'What areas do you serve?', a: 'All five boroughs, Long Island, New Jersey and Connecticut — anywhere in the Tri-State region from East Long Island to New Jersey.' },
  { q: 'What happens after I ask for a quote?', a: 'We review your project, visit the site to survey fit, power and code, then send a design and a clear price. Once approved we permit, fabricate and install.' },
  { q: 'Do you maintain signs after installation?', a: 'Yes. Our crews provide ongoing installation and maintenance service to keep your sign lit and looking sharp.' },
]
