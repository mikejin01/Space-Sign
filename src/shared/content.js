// Business facts shared by every design. Anything visual (icons, map
// geometry, design-specific headline copy) lives in the design's own folder.

export const BASE = import.meta.env.BASE_URL

export const asset = (path) => `${BASE}assets/${path}`

export const PHONE = '(718) 961-1112'
export const PHONE_DOT = '718.961.1112'
export const PHONE_TEL = 'tel:+17189611112'
export const FAX = '(718) 961-5577'
export const EMAIL = 'info@spacesign.com'
export const ADDRESS = '15-25 132nd St, College Point, NY 11356'
export const MAPS_URL = 'https://maps.google.com/?q=15-25+132nd+Street+College+Point+NY+11356'
export const LICENSE = '#215'
export const SINCE = 1987
export const RATING = '4.9'

export const heroSlides = [
  { img: 'space-sign-hero-1.png', label: 'Space Sign — Custom Storefront Signage' },
  { img: 'space-sign-hero-2.png', label: 'Space Sign — Illuminated Channel Letters' },
  { img: 'space-sign-hero-3.png', label: 'Space Sign — Storefront Installation' },
  { img: 'space-sign-hero-4.png', label: 'Space Sign — Custom Sign Fabrication' },
]

export const services = [
  {
    title: 'Channel & 3D Letters',
    icon: 'channel',
    copy: 'Dimensional, illuminated letters built in-house — front-lit, halo back-lit and front-&-back-lit — plus precision-cut 3D letters.',
    tags: ['Front-Lit', 'Halo', '3D Letters', 'Push-Thru'],
  },
  {
    title: 'LED, Neon & Lightbox',
    icon: 'neon',
    copy: 'Energy-efficient LED neon and illuminated lightbox signs — bright, even and built to outlast traditional neon, day and night.',
    tags: ['LED Neon', 'Lightbox', 'Illuminated'],
  },
  {
    title: 'Blade, Carved & Awnings',
    icon: 'blade',
    copy: 'Projecting blade & carved signs, freestanding pylons, custom awnings & vestibules, plus interior signage and printed graphics.',
    tags: ['Blade', 'Carved', 'Pylon', 'Awnings', 'Interior'],
  },
  {
    title: 'Permits & Violations',
    icon: 'permit',
    copy: 'As a NYC Licensed Sign Hanger (#215) we pull DOB permits and clear DOB & ECB violations — work only a licensed hanger can do.',
    tags: ['DOB Permits', 'ECB Violations', 'Licensed #215'],
  },
]

// Full product list from spacesign.com, for designs that show more than four services.
export const products = [
  'Channel Letters', '3D Letters', 'LED Neon Signs', 'Illuminated Lightbox Signs', 'Blade Signs',
  'Push-Thru Signs', 'Carved Signs', 'Pylon Signs', 'Interior Signs', 'Awnings & Vestibules',
  'Digital Printing & Vinyl Decals', 'Custom Banners', 'Trade Show Booths & Displays',
  'Sign Installation & Maintenance', 'DOB Permits', 'DOB / ECB Violation Removal',
]

export const work = [
  { img: 'pizza-channel-letters.jpg', name: 'Pizza Hut', type: 'Channel Letters' },
  { img: 'nightlife-blade.jpg', name: 'Sports & Nightlife', type: 'Blade Sign' },
  { img: 'panini-channel-letters.jpg', name: 'Panini', type: 'Channel Letters' },
  { img: 'bareburger.jpg', name: 'Bareburger', type: 'Channel Letters' },
  { img: 'flowers-carved.jpg', name: 'Glen Maid Flower Bar', type: 'Carved Sign' },
  { img: 'subway-neon.jpg', name: 'Subway', type: 'LED / Neon' },
  { img: 'vision-optical.jpg', name: 'Vision Optical', type: 'Storefront' },
  { img: 'illuminated-lightbox.jpg', name: 'Smoke Shop', type: 'Lightbox Sign' },
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
export function sendQuoteEmail(form) {
  const subject = `Quote request — ${form.name || 'Storefront sign'}`
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
  channel: 'work/pizza-channel-letters.jpg',
  channelPanini: 'work/panini-channel-letters.jpg',
  channelBareburger: 'work/bareburger.jpg',
  neon: 'work/subway-neon.jpg',
  neonInterior: 'archive/50_fc1b21_ea43a03366db4e7d90e32835cea84cdd_mv2.jpg',
  lightbox: 'work/illuminated-lightbox.jpg',
  lightboxKungfu: 'work/hero-kungfu-tea.jpg',
  blade: 'work/nightlife-blade.jpg',
  carved: 'work/flowers-carved.jpg',
  awning: 'work/raby-market.jpg',
  vestibule: 'work/vestibule-awning.jpg',
  storefrontVision: 'work/vision-optical.jpg',
  storefrontOren: 'work/oren-orthodontics.jpg',
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
  { img: 'work/pizza-channel-letters.jpg', name: 'Pizza Hut', type: 'Channel Letters' },
  { img: 'work/panini-channel-letters.jpg', name: 'Panini', type: 'Channel Letters' },
  { img: 'work/bareburger.jpg', name: 'Bareburger', type: 'Channel Letters' },
  { img: 'work/subway-neon.jpg', name: 'Subway', type: 'Channel Letters' },
  { img: 'archive/07_fc1b21_15c7dfc80d12496ea24e404e4e7c2e12_mv2.jpg', name: 'Restaurant Letters', type: 'Channel Letters' },
  { img: 'archive/26_fc1b21_5735d2c5c5a54a5b9b88e100d50951d8_mv2_d_1669_1207_s_2.jpg', name: 'Sprout Market', type: 'Channel Letters' },
  { img: 'work/illuminated-lightbox.jpg', name: 'Perfect Smile', type: 'Lightbox' },
  { img: 'work/hero-kungfu-tea.jpg', name: 'Kung Fu Tea', type: 'Lightbox' },
  { img: 'archive/20_fc1b21_418c0ad3f4234a02849ec3efe76b87e2_mv2.jpg', name: 'Café Lightbox', type: 'Lightbox' },
  { img: 'archive/42_fc1b21_c57992f1472448c7b63ce77da17fc780_mv2.jpg', name: 'Shinhan Bank', type: 'Lightbox' },
  { img: 'work/nightlife-blade.jpg', name: 'Sports & Nightlife', type: 'Blade' },
  { img: 'work/flowers-carved.jpg', name: 'Glen Head Flower Shop', type: 'Blade' },
  { img: 'archive/00_bc25b0_73fb8ea7e5e14fb084070479f43eb3c5_mv2_d_1752_1512_s_2.jpg', name: 'Café Blade Sign', type: 'Blade' },
  { img: 'work/vision-optical.jpg', name: 'Vision Taekwondo', type: 'Storefront' },
  { img: 'work/oren-orthodontics.jpg', name: 'Oren Orthodontics', type: 'Storefront' },
  { img: 'archive/04_fc1b21_04f62c3ab0084398b3f20a2707474447_mv2.jpg', name: 'Sharks', type: 'Storefront' },
  { img: 'archive/45_fc1b21_dd188f38479f453889c72506b3bfa79e_mv2_d_4608_3456_s_4_2.jpg', name: 'Bareburger', type: 'Storefront' },
  { img: 'archive/32_fc1b21_88c11e9810884f0cb868e17f634683f9_mv2_d_4000_3000_s_4_2.jpg', name: 'Subway', type: 'Storefront' },
  { img: 'work/raby-market.jpg', name: 'Raby Garden Farm', type: 'Awnings' },
  { img: 'work/vestibule-awning.jpg', name: 'Vestibule', type: 'Awnings' },
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
