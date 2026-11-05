// Business facts shared by every design. Anything visual (icons, map
// geometry, design-specific headline copy) lives in the design's own folder.

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

// The 12 sign types on spacesign.com/signs, in that page's order. Each photo
// (public/assets/signs/) is the one that page shows for the type, at its crop.
export const signTypes = [
  { title: 'Channel Letters Sign', img: 'channel-letters.jpg', alt: 'Pizza Hut channel letters on a brick storefront',
    copy: 'Illuminated letters, front-lit, back-lit or front & back-lit.' },
  { title: '3D Letters Sign', img: '3d-letters.jpg', alt: 'Halo-lit Panini 3D letters above a menu board',
    copy: 'Precision-cut dimensional letters for facades and lobbies.' },
  { title: 'LED Neon Sign', img: 'led-neon.jpg', alt: 'Yellow LED neon sign spelling burger',
    copy: 'The glow of classic neon from energy-efficient LED.' },
  { title: 'Lightbox Sign', img: 'lightbox.jpg', alt: 'Round Connecticut Muffin lightbox sign',
    copy: 'Illuminated cabinet signs, bright and even day and night.' },
  { title: 'Blade Sign', img: 'blade.jpg', alt: 'Subway blade sign projecting from a storefront',
    copy: 'Projecting signs that reach foot traffic up and down the block.' },
  { title: 'Push-Thru Sign', img: 'push-thru.jpg', alt: 'Round push-thru sign for 3S Restaurant Sports Nightlife',
    copy: 'Acrylic letters pushed through a cut face, lit from within.' },
  { title: 'Carved Sign', img: 'carved.jpg', alt: 'Carved Flowers by Glen Head Flower Shop sign with gold lettering',
    copy: 'Carved panels with raised lettering and real depth.' },
  { title: 'Pylon Sign', img: 'pylon.jpg', alt: 'Feel Beauty pylon sign on two posts',
    copy: 'Freestanding signs that mark your site from the road.' },
  { title: 'Interior Sign', img: 'interior.jpg', alt: 'Beyond Vape Bronx Strong wall graphic in a lounge',
    copy: 'Lobby, wall and wayfinding graphics for inside your space.' },
  { title: 'Awning & Vestibule', img: 'awning-vestibule.jpg', alt: 'Red Carmine’s awning and entrance vestibule',
    copy: 'Awnings, vestibules and canopies made to fit your storefront.' },
  { title: 'Digital Printing', img: 'digital-printing.jpg', alt: 'Printed soup-can window graphics for Hudson Market',
    copy: 'Custom vinyl, digital prints and banners.' },
  { title: 'Trade Show', img: 'trade-show.jpg', alt: 'Neoflam trade show booth with product shelving',
    copy: 'Booths and displays that stand out on the show floor.' },
]

// Project photos shown first, paths under public/assets/. The homepage shows the
// first five (the first one large); the Our Work page shows them all, ahead of
// `portfolio`. Each `type` is a `signTypes` title: the spacesign.com category
// whose gallery shows that photo, or typed by eye for the photos marked * that
// aren't in one. Files in work/ are named <sign type>-<business>.jpg for SEO.
export const work = [
  { img: 'work/channel-letters-kung-fu-tea.jpg', name: 'Kung Fu Tea', type: 'Channel Letters Sign' }, // *
  { img: 'work/channel-letters-subway.jpg', name: 'Subway', type: 'Channel Letters Sign' },
  { img: 'work/push-thru-sports-and-nightlife.jpg', name: 'Sports & Nightlife', type: 'Push-Thru Sign' },
  { img: 'work/carved-glen-head-flower-shop.jpg', name: 'Glen Head Flower Shop', type: 'Carved Sign' },
  { img: 'work/awning-vestibule-carmines.jpg', name: 'Carmine’s', type: 'Awning & Vestibule' },
  { img: 'work/channel-letters-food-bazaar.jpg', name: 'Food Bazaar', type: 'Channel Letters Sign' },
  { img: 'work/3d-letters-vision-taekwondo.jpg', name: 'Vision Taekwondo', type: '3D Letters Sign' }, // *
  { img: 'work/channel-letters-pizza-hut.jpg', name: 'Pizza Hut', type: 'Channel Letters Sign' },
  { img: 'work/3d-letters-panini.jpg', name: 'Panini', type: '3D Letters Sign' },
  { img: 'work/led-neon-bareburger.jpg', name: 'Bareburger', type: 'LED Neon Sign' },
  { img: 'work/channel-letters-perfect-smile-braces.jpg', name: 'Perfect Smile Braces', type: 'Channel Letters Sign' },
  { img: 'work/pylon-feel-beauty.jpg', name: 'Feel Beauty', type: 'Pylon Sign' },
  { img: 'work/awning-vestibule-i-care-orthodontics.jpg', name: 'I Care Orthodontics', type: 'Awning & Vestibule' }, // *
  { img: 'work/awning-vestibule-rahway-garden-farm.jpg', name: 'Rahway Garden Farm', type: 'Awning & Vestibule' }, // *
  { img: 'work/awning-vestibule-67-wine.jpg', name: '67 Wine', type: 'Awning & Vestibule' }, // *
]

// The rest of the Our Work page: spacesign.com's product-gallery photos (Nov
// 2026) in public/assets/portfolio/, by sign type. Files are named
// <sign type>-<nn>[-<business>].jpg for SEO; `name` is the business on the sign,
// left out where none can be read. Photos in `work`, and repeats across
// galleries, are left out. To add one, save it under the type's next number.
export const portfolio = [
  { type: 'Channel Letters Sign', photos: [
    { file: 'channel-letters-01-chipotle.jpg', name: 'Chipotle' },
    { file: 'channel-letters-02-subway.jpg', name: 'Subway' },
    { file: 'channel-letters-03-space-sign.jpg', name: 'Space Sign' },
    { file: 'channel-letters-04-duran-sandwiches.jpg', name: 'Duran Sandwiches' },
    { file: 'channel-letters-05-hudson-pot.jpg', name: 'Hudson Pot' },
    { file: 'channel-letters-06-ginseng-museum-cafe.jpg', name: 'Ginseng Museum Cafe' },
    { file: 'channel-letters-07-teso.jpg', name: 'TESO' },
    { file: 'channel-letters-08-tequilaville.jpg', name: 'Tequilaville' },
    { file: 'channel-letters-09-shinhan-bank.jpg', name: 'Shinhan Bank' },
    { file: 'channel-letters-10-peeka-boo.jpg', name: 'Peeka Boo' },
    { file: 'channel-letters-11-gongcha.jpg', name: 'Gong cha' },
    { file: 'channel-letters-12-the-food-emporium.jpg', name: 'The Food Emporium' },
    { file: 'channel-letters-13-sprout-market.jpg', name: 'Sprout Market' },
    { file: 'channel-letters-14-well-green-market.jpg', name: 'Well Green Market' },
    { file: 'channel-letters-15-kukbo.jpg', name: 'Kukbo' },
    { file: 'channel-letters-16-dream-city.jpg', name: 'Dream City' },
    { file: 'channel-letters-17-la-antioquena.jpg', name: 'La Antioqueña' },
    { file: 'channel-letters-18-cupa.jpg', name: 'Cupa' },
    { file: 'channel-letters-19-cafe-terrace.jpg', name: 'Cafe Terrace' },
    { file: 'channel-letters-20-papparich.jpg', name: 'PappaRich' },
  ] },
  { type: '3D Letters Sign', photos: [
    { file: '3d-letters-01-baker-house.jpg', name: 'Baker House' },
    { file: '3d-letters-02-playlab-kids.jpg', name: 'Playlab Kids' },
    { file: '3d-letters-03-zales.jpg', name: 'Zales' },
    { file: '3d-letters-04-bread-and-butter.jpg', name: 'Bread & Butter' },
    { file: '3d-letters-05-dashing-diva.jpg', name: 'Dashing Diva' },
    { file: '3d-letters-06-dashing-diva.jpg', name: 'Dashing Diva' },
    { file: '3d-letters-07.jpg' },
    { file: '3d-letters-08-lao-feng-xiang.jpg', name: 'Lao Feng Xiang' },
    { file: '3d-letters-09-baker-house-market.jpg', name: 'Baker House Market' },
    { file: '3d-letters-10-mazete.jpg', name: 'Mazete' },
    { file: '3d-letters-11-mazete.jpg', name: 'Mazete' },
    { file: '3d-letters-12-lloyds-gallery.jpg', name: 'Lloyds Gallery' },
    { file: '3d-letters-13-coco-nail-spa.jpg', name: 'Coco Nail Spa' },
    { file: '3d-letters-14-milk-n-honey.jpg', name: 'Milk N\' Honey' },
    { file: '3d-letters-15-sherwood-house.jpg', name: 'Sherwood House' },
    { file: '3d-letters-16-kings-custom-tailor.jpg', name: 'King\'s Custom Tailor' },
  ] },
  { type: 'LED Neon Sign', photos: [
    { file: 'led-neon-01-bareburger.jpg', name: 'Bareburger' },
    { file: 'led-neon-02-rosie-ogradys.jpg', name: 'Rosie O\'Grady\'s' },
  ] },
  { type: 'Lightbox Sign', photos: [
    { file: 'lightbox-01-good-harvest.jpg', name: 'Good Harvest' },
    { file: 'lightbox-02-astro-game.jpg', name: 'Astro Game' },
    { file: 'lightbox-03-h-beauty-supply.jpg', name: 'H Beauty Supply' },
    { file: 'lightbox-04-jollibee.jpg', name: 'Jollibee' },
    { file: 'lightbox-05-super-clean-city-laundromat.jpg', name: 'Super Clean City Laundromat' },
    { file: 'lightbox-06-food-bazaar.jpg', name: 'Food Bazaar' },
    { file: 'lightbox-07-connecticut-muffin.jpg', name: 'Connecticut Muffin' },
    { file: 'lightbox-08-subway.jpg', name: 'Subway' },
  ] },
  { type: 'Blade Sign', photos: [
    { file: 'blade-01-aland.jpg', name: 'Åland' },
    { file: 'blade-02-aura-cocina-bar.jpg', name: 'Aura Cocina Bar' },
    { file: 'blade-03-feel-beauty.jpg', name: 'Feel Beauty' },
    { file: 'blade-04-feel-beauty.jpg', name: 'Feel Beauty' },
    { file: 'blade-05-fields-good-chicken.jpg', name: 'Fields Good Chicken' },
    { file: 'blade-06-corso-coffee.jpg', name: 'Corso Coffee' },
    { file: 'blade-07-the-oasis.jpg', name: 'The Oasis' },
    { file: 'blade-08-udon-lab.jpg', name: 'Udon Lab' },
    { file: 'blade-09-honey.jpg', name: 'Honey' },
    { file: 'blade-10-duet-karaoke.jpg', name: 'Duet Karaoke' },
    { file: 'blade-11-natsumi.jpg', name: 'Natsumi' },
    { file: 'blade-12-subway.jpg', name: 'Subway' },
    { file: 'blade-13-tgi-fridays.jpg', name: 'TGI Fridays' },
    { file: 'blade-14-udon-lab.jpg', name: 'Udon Lab' },
    { file: 'blade-15-renzo-gracie-jiu-jitsu.jpg', name: 'Renzo Gracie Jiu-Jitsu' },
    { file: 'blade-16-niteglow.jpg', name: 'Niteglow' },
  ] },
  { type: 'Push-Thru Sign', photos: [
    { file: 'push-thru-01-honey.jpg', name: 'Honey' },
    { file: 'push-thru-02-dekko-cafe.jpg', name: 'Dekko Cafe' },
    { file: 'push-thru-03-cienna.jpg', name: 'Cienna' },
    { file: 'push-thru-04-grata.jpg', name: 'Grata' },
    { file: 'push-thru-05-halo-health-pharmacy.jpg', name: 'Halo Health Pharmacy' },
  ] },
  { type: 'Carved Sign', photos: [
    { file: 'carved-01-relash.jpg', name: 'ReLash' },
    { file: 'carved-02-bedford-hall.jpg', name: 'Bedford Hall' },
    { file: 'carved-03-sambucci-bros.jpg', name: 'Sambucci Bros.' },
    { file: 'carved-04-sandas-cleaners.jpg', name: 'Sanda\'s Cleaners' },
    { file: 'carved-05-voesh.jpg', name: 'Voesh' },
    { file: 'carved-06-westbury-family-dental.jpg', name: 'Westbury Family Dental' },
    { file: 'carved-07-kungfu-hibachi.jpg', name: 'KungFu Hibachi' },
    { file: 'carved-08-kingdom-hall.jpg', name: 'Kingdom Hall' },
    { file: 'carved-09-spinfast-laundry.jpg', name: 'SpinFast Laundry' },
  ] },
  { type: 'Interior Sign', photos: [
    { file: 'interior-01-glam-and-glow.jpg', name: 'Glam & Glow' },
    { file: 'interior-02.jpg' },
    { file: 'interior-03-ideal-food-basket.jpg', name: 'Ideal Food Basket' },
    { file: 'interior-04-c-town.jpg', name: 'C-Town' },
    { file: 'interior-05-patels-fresh-kitchen.jpg', name: 'Patel\'s Fresh Kitchen' },
    { file: 'interior-06-dashing-diva.jpg', name: 'Dashing Diva' },
    { file: 'interior-07-merci-market.jpg', name: 'Merci Market' },
    { file: 'interior-08-abiko-curry.jpg', name: 'Abiko Curry' },
    { file: 'interior-09-beyond-vape.jpg', name: 'Beyond Vape' },
    { file: 'interior-10.jpg' },
    { file: 'interior-11.jpg' },
    { file: 'interior-12.jpg' },
    { file: 'interior-13.jpg' },
    { file: 'interior-14.jpg' },
    { file: 'interior-15.jpg' },
    { file: 'interior-16.jpg' },
    { file: 'interior-17.jpg' },
    { file: 'interior-18-nail-styler.jpg', name: 'Nail Styler' },
    { file: 'interior-19-dashing-diva.jpg', name: 'Dashing Diva' },
    { file: 'interior-20-dental-solutions.jpg', name: 'Dental Solutions' },
    { file: 'interior-21-bell-massage-therapy.jpg', name: 'Bell Massage Therapy' },
  ] },
  { type: 'Awning & Vestibule', photos: [
    { file: 'awning-vestibule-01-key-food.jpg', name: 'Key Food' },
    { file: 'awning-vestibule-02-runway-towing.jpg', name: 'Runway Towing' },
    { file: 'awning-vestibule-03-pna-installation-center.jpg', name: 'PNA Installation Center' },
    { file: 'awning-vestibule-04-life-skills-preschool.jpg', name: 'Life Skills Preschool' },
    { file: 'awning-vestibule-05-subway.jpg', name: 'Subway' },
    { file: 'awning-vestibule-06-merci-market.jpg', name: 'Merci Market' },
    { file: 'awning-vestibule-07-local.jpg', name: 'Local' },
    { file: 'awning-vestibule-08-barzinis.jpg', name: 'Barzini\'s' },
    { file: 'awning-vestibule-09-azure-gourmet.jpg', name: 'Azure Gourmet' },
    { file: 'awning-vestibule-10-flushing-food-market.jpg', name: 'Flushing Food Market' },
    { file: 'awning-vestibule-11-cafe-ines.jpg', name: 'Café Inés' },
    { file: 'awning-vestibule-12.jpg' },
    { file: 'awning-vestibule-13.jpg' },
    { file: 'awning-vestibule-14-bareburger.jpg', name: 'Bareburger' },
  ] },
  { type: 'Digital Printing', photos: [
    { file: 'digital-printing-01.jpg' },
    { file: 'digital-printing-02-hudson-market.jpg', name: 'Hudson Market' },
    { file: 'digital-printing-03-hudson-market.jpg', name: 'Hudson Market' },
    { file: 'digital-printing-04.jpg' },
    { file: 'digital-printing-05-baker-house.jpg', name: 'Baker House' },
    { file: 'digital-printing-06.jpg' },
    { file: 'digital-printing-07-nymoto.jpg', name: 'Nymoto' },
    { file: 'digital-printing-08.jpg' },
    { file: 'digital-printing-09-beyond-vape.jpg', name: 'Beyond Vape' },
    { file: 'digital-printing-10-dozy-dog.jpg', name: 'Dozy Dog' },
    { file: 'digital-printing-11-reef-physical-therapy.jpg', name: 'Reef Physical Therapy' },
    { file: 'digital-printing-12-michelob-ultra.jpg', name: 'Michelob Ultra' },
    { file: 'digital-printing-13-michelob-ultra.jpg', name: 'Michelob Ultra' },
    { file: 'digital-printing-14-stella-artois.jpg', name: 'Stella Artois' },
    { file: 'digital-printing-15-michelob-ultra.jpg', name: 'Michelob Ultra' },
    { file: 'digital-printing-16-michelob-ultra.jpg', name: 'Michelob Ultra' },
  ] },
  { type: 'Trade Show', photos: [
    { file: 'trade-show-01-neoflam.jpg', name: 'Neoflam' },
    { file: 'trade-show-02-bdr.jpg', name: 'bdr' },
    { file: 'trade-show-03.jpg' },
    { file: 'trade-show-04.jpg' },
  ] },
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
  blade: 'work/push-thru-sports-and-nightlife.jpg',
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
  { img: 'work/push-thru-sports-and-nightlife.jpg', name: 'Sports & Nightlife', type: 'Blade' },
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
