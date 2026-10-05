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
