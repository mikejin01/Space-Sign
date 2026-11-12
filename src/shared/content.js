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

// The 12 sign types on spacesign.com/signs, in that page's order and with its
// titles. Each photo (public/assets/signs/) is the one that page shows for the
// type, at its crop. `id` names the type in URLs (/signs/#blade, /work/?type=blade)
// and in the quote form. `copy` is the homepage card's one line; `details` is the
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

// Project photos shown first, paths under public/assets/. The homepage shows the
// first five (the first one large); the Our Work page shows them all, ahead of
// `portfolio`. Each `type` is a `signTypes` title: the spacesign.com category
// whose gallery shows that photo (checked Nov 2026), or typed by eye for the
// photo marked * that isn't in one. Files in work/ are named
// <sign type>-<business>.jpg for SEO.
export const work = [
  { img: 'work/channel-letters-kung-fu-tea.jpg', name: 'Kung Fu Tea', type: 'Channel Letters Sign' },
  { img: 'work/channel-letters-subway.jpg', name: 'Subway', type: 'Channel Letters Sign' },
  { img: 'work/blade-sports-and-nightlife.jpg', name: 'Sports & Nightlife', type: 'Blade Sign' },
  { img: 'work/carved-glen-head-flower-shop.jpg', name: 'Glen Head Flower Shop', type: 'Carved Sign' },
  { img: 'work/awning-vestibule-carmines.jpg', name: 'Carmine’s', type: 'Awning & Vestibule' },
  { img: 'work/channel-letters-food-bazaar.jpg', name: 'Food Bazaar', type: 'Channel Letters Sign' },
  { img: 'work/3d-letters-vision-taekwondo.jpg', name: 'Vision Taekwondo', type: '3D Letters Sign' },
  { img: 'work/channel-letters-pizza-hut.jpg', name: 'Pizza Hut', type: 'Channel Letters Sign' },
  { img: 'work/3d-letters-panini.jpg', name: 'Panini', type: '3D Letters Sign' },
  { img: 'work/led-neon-bareburger.jpg', name: 'Bareburger', type: 'LED Neon Sign' },
  { img: 'work/channel-letters-perfect-smile-braces.jpg', name: 'Perfect Smile Braces', type: 'Channel Letters Sign' },
  { img: 'work/pylon-feel-beauty.jpg', name: 'Feel Beauty', type: 'Pylon Sign' },
  { img: 'work/awning-vestibule-i-care-orthodontics.jpg', name: 'I Care Orthodontics', type: 'Awning & Vestibule' }, // *
  { img: 'work/awning-vestibule-rahway-garden-farm.jpg', name: 'Rahway Garden Farm', type: 'Awning & Vestibule' },
  { img: 'work/awning-vestibule-67-wine.jpg', name: '67 Wine', type: 'Awning & Vestibule' },
]

// The rest of the Our Work page: every photo in spacesign.com's product
// galleries (checked Nov 2026 by matching each image) that isn't in `work`, in
// public/assets/portfolio/, by sign type. The channel letters list
// starts with the four photos at the top of spacesign.com/channel-letters,
// outside its gallery. Files are named <sign type>-<nn>[-<business>].jpg for
// SEO; `name` is the business on the sign, left out where none can be read. A
// photo spacesign.com shows in two galleries is saved once, under the first,
// and listed under both (marked "also in"). Photos of one job share a `project`
// key, grouped by eye (same building and sign), and the first of them carries
// the project's `caption` (drafted Nov 2026 for the client to approve; a project
// without one gets a generic caption, see asProject). To add a photo, save it
// under the type's next number.
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
    { file: 'channel-letters-21-ramen-torii.jpg', name: 'Ramen Torii' },
    { file: 'channel-letters-22-pop-beauty.jpg', name: 'Pop Beauty' },
    { file: 'channel-letters-23-tgi-fridays.jpg', name: 'TGI Fridays' },
    { file: 'channel-letters-24-bareburger.jpg', name: 'Bareburger' },
    { file: 'channel-letters-25-fantacia-beauty-supply.jpg', name: 'Fantacia Beauty Supply' },
    { file: 'channel-letters-26-ole-mexican-grille.jpg', name: 'Olé Mexican Grille' },
    { file: 'channel-letters-27-istanbul-lounge.jpg', name: 'Istanbul Lounge' },
    { file: 'channel-letters-28-food-bazaar.jpg', name: 'Food Bazaar' },
    { file: 'channel-letters-29-kase-studio.jpg', name: 'Kase Studio' },
    { file: 'channel-letters-30-ideal-food-basket.jpg', name: 'Ideal Food Basket' },
    { file: 'channel-letters-31-pingpod.jpg', name: 'Pingpod' },
    { file: 'channel-letters-32-dukaanboyz.jpg', name: 'DukaanBoyz' },
    { file: 'channel-letters-33-fay-da-bakery.jpg', name: 'Fay Da Bakery' },
    { file: 'channel-letters-34-dominos.jpg', name: 'Domino\'s' },
    { file: 'channel-letters-35-westbury-family-dental.jpg', name: 'Westbury Family Dental' },
    { file: 'channel-letters-36-sharks.jpg', name: 'Sharks' },
    { file: 'channel-letters-37-restore-hyper-wellness.jpg', name: 'Restore Hyper Wellness' },
    { file: 'channel-letters-38-the-modern-nails-bar.jpg', name: 'The Modern Nails Bar' },
    { file: 'channel-letters-39-jamaican-flavors.jpg', name: 'Jamaican Flavors' },
    { file: 'channel-letters-40-luogong-grilled-skewer.jpg', name: 'LuoGong Grilled Skewer' },
    { file: 'channel-letters-41-jeong-yuk-jeom.jpg', name: 'Jeong Yuk Jeom' },
    { file: 'channel-letters-42-ju-eun-fashion.jpg', name: 'Ju Eun Fashion' },
    { file: 'channel-letters-43-chip-city.jpg', name: 'Chip City' },
    { file: 'channel-letters-44-francis-animal-clinic.jpg', name: 'Francis Animal Clinic' },
    { file: 'channel-letters-45-subway.jpg', name: 'Subway' },
    { file: 'channel-letters-46-pokeworks.jpg', name: 'Pokeworks' },
    { file: 'channel-letters-47-max-bridal.jpg', name: 'Max Bridal' },
    { file: 'channel-letters-48-image.jpg', name: 'Image' },
    { file: 'channel-letters-49-turtle-bay-tavern.jpg', name: 'Turtle Bay Tavern' },
    { file: 'channel-letters-50-kuku.jpg', name: 'Kuku' },
    { file: 'channel-letters-51-revival-bar.jpg', name: 'Revival Bar' },
    { file: 'channel-letters-52-seoul-alley.jpg', name: 'Seoul Alley' },
    { file: 'channel-letters-53-paris-baguette.jpg', name: 'Paris Baguette' },
    { file: 'channel-letters-54-nail-boutique.jpg', name: 'Nail Boutique' },
    { file: 'channel-letters-55-evergreen-pediatric-dentistry.jpg', name: 'Evergreen Pediatric Dentistry' },
    { file: 'channel-letters-56-alma-bank.jpg', name: 'Alma Bank' },
    { file: 'channel-letters-57-rosa-pizza.jpg', name: 'Rosa Pizza' },
    { file: 'channel-letters-58-sobol.jpg', name: 'Sobol' },
    { file: 'channel-letters-59-doctors-of-new-york.jpg', name: 'Doctors of New York' },
    { file: 'channel-letters-60-subway.jpg', name: 'Subway' },
    { file: 'channel-letters-61-goodwill.jpg', name: 'Goodwill' },
    { file: 'channel-letters-62-tulcingo-bakery.jpg', name: 'Tulcingo Bakery' },
    { file: 'channel-letters-63-paris-baguette.jpg', name: 'Paris Baguette' },
    { file: 'channel-letters-64-apex-taekwondo.jpg', name: 'Apex Taekwondo' },
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
    { file: '3d-letters-10-mazete.jpg', name: 'Mazete', project: 'mazete',
      caption: 'Dimensional letters for Mazete Japanese Mixed Noodles, seen from two angles.' },
    { file: '3d-letters-11-mazete.jpg', name: 'Mazete', project: 'mazete' },
    { file: '3d-letters-12-lloyds-gallery.jpg', name: 'Lloyds Gallery' },
    { file: '3d-letters-13-coco-nail-spa.jpg', name: 'Coco Nail Spa' },
    { file: '3d-letters-14-milk-n-honey.jpg', name: 'Milk N\' Honey' },
    { file: '3d-letters-15-sherwood-house.jpg', name: 'Sherwood House' },
    { file: '3d-letters-16-kings-custom-tailor.jpg', name: 'King\'s Custom Tailor' },
    { file: '3d-letters-17-taco-bell-cantina.jpg', name: 'Taco Bell Cantina' },
    { file: '3d-letters-18-underhill.jpg', name: 'Underhill' },
    { file: '3d-letters-19-vin-sur-vingt.jpg', name: 'Vin Sur Vingt' },
    { file: '3d-letters-20-one-world-hall.jpg', name: 'One World Hall' },
    { file: '3d-letters-21-kjun.jpg', name: 'KJUN' },
    { file: '3d-letters-22-fuzi-pasta.jpg', name: 'Fuzi Pasta' },
    { file: '3d-letters-23-between-the-bagel.jpg', name: 'Between the Bagel' },
    { file: '3d-letters-24-edible.jpg', name: 'Edible' },
    { file: '3d-letters-25-lumos-electric.jpg', name: 'Lumos Electric' },
    { file: '3d-letters-26-aura-cocina-bar.jpg', name: 'Aura Cocina Bar' },
    { file: '3d-letters-27-ediths-sandwich-counter.jpg', name: 'Edith\'s Sandwich Counter' },
    { file: '3d-letters-28-total-eye-care.jpg', name: 'Total Eye Care' },
    { file: '3d-letters-29-future-face-and-body.jpg', name: 'Future Face & Body' },
    { file: '3d-letters-30-dashing-diva.jpg', name: 'Dashing Diva' },
    { file: '3d-letters-31-sanuk-martial-arts.jpg', name: 'Sanuk Martial Arts' },
    { file: '3d-letters-32-charlotte.jpg', name: 'Charlotte' },
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
    { file: 'lightbox-09-tgi-fridays.jpg', name: 'TGI Fridays' },
    { file: 'lightbox-10-hunters-point-dentistry.jpg', name: 'Hunters Point Dentistry' },
    { file: 'lightbox-11-red-hook-takeout.jpg', name: 'Red Hook Takeout' },
    { file: 'lightbox-12-hana-bank-usa.jpg', name: 'Hana Bank USA' },
    { file: 'lightbox-13-riverside-veterinary-clinic.jpg', name: 'Riverside Veterinary Clinic' },
    { file: 'lightbox-14-sea-sun-izakaya.jpg', name: 'Sea Sun Izakaya' },
  ] },
  { type: 'Blade Sign', photos: [
    { file: 'blade-01-aland.jpg', name: 'Åland' },
    { file: 'blade-02-aura-cocina-bar.jpg', name: 'Aura Cocina Bar' },
    { file: 'blade-03-feel-beauty.jpg', name: 'Feel Beauty', project: 'feel-beauty-blade',
      caption: 'A vertical blade sign for Feel Beauty, seen from down the block and up close.' },
    { file: 'blade-04-feel-beauty.jpg', name: 'Feel Beauty', project: 'feel-beauty-blade' },
    { file: 'blade-05-fields-good-chicken.jpg', name: 'Fields Good Chicken' },
    { file: 'blade-06-corso-coffee.jpg', name: 'Corso Coffee' },
    { file: 'blade-07-the-oasis.jpg', name: 'The Oasis' },
    { file: 'blade-08-udon-lab.jpg', name: 'Udon Lab', project: 'udon-lab',
      caption: 'A vertical blade sign for Udon Lab, seen with the storefront and up close.' },
    { file: 'blade-09-honey.jpg', name: 'Honey' },
    { file: 'blade-10-duet-karaoke.jpg', name: 'Duet Karaoke' },
    { file: 'blade-11-natsumi.jpg', name: 'Natsumi' },
    { file: 'blade-12-subway.jpg', name: 'Subway' },
    { file: 'blade-13-tgi-fridays.jpg', name: 'TGI Fridays' },
    { file: 'blade-14-udon-lab.jpg', name: 'Udon Lab', project: 'udon-lab' },
    { file: 'blade-15-renzo-gracie-jiu-jitsu.jpg', name: 'Renzo Gracie Jiu-Jitsu' },
    { file: 'blade-16-niteglow.jpg', name: 'Niteglow' },
    { file: 'blade-17-fay-da-bakery.jpg', name: 'Fay Da Bakery' },
    { file: 'blade-18-cowboy-toms.jpg', name: 'Cowboy Tom\'s' },
    { file: 'channel-letters-45-subway.jpg', name: 'Subway' }, // also in the Channel Letters gallery
  ] },
  { type: 'Push-Thru Sign', photos: [
    { file: 'push-thru-01-honey.jpg', name: 'Honey' },
    { file: 'push-thru-02-dekko-cafe.jpg', name: 'Dekko Cafe' },
    { file: 'push-thru-03-cienna.jpg', name: 'Cienna' },
    { file: 'push-thru-04-grata.jpg', name: 'Grata' },
    { file: 'push-thru-05-halo-health-pharmacy.jpg', name: 'Halo Health Pharmacy' },
    { file: 'blade-14-udon-lab.jpg', name: 'Udon Lab' }, // also in the Blade gallery
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
  { type: 'Pylon Sign', photos: [
    { file: 'pylon-01-mitsuwa-marketplace.jpg', name: 'Mitsuwa Marketplace' },
    { file: 'pylon-02-sandas-cleaners.jpg', name: 'Sanda\'s Cleaners' },
    { file: 'pylon-03-mercedes-benz.jpg', name: 'Mercedes-Benz' },
    { file: 'pylon-04-the-market-place-at-brentwood.jpg', name: 'The Market Place at Brentwood' },
    { file: 'pylon-05.jpg' },
    { file: 'pylon-06-cleancity-laundromat.jpg', name: 'CleanCity Laundromat' },
  ] },
  { type: 'Interior Sign', photos: [
    { file: 'interior-01-glam-and-glow.jpg', name: 'Glam & Glow' },
    { file: 'interior-02.jpg' },
    { file: 'interior-03-ideal-food-basket.jpg', name: 'Ideal Food Basket' },
    { file: 'interior-04-c-town.jpg', name: 'C-Town' },
    { file: 'interior-05-patels-fresh-kitchen.jpg', name: 'Patel\'s Fresh Kitchen' },
    { file: 'interior-06-dashing-diva.jpg', name: 'Dashing Diva' },
    { file: 'interior-07-merci-market.jpg', name: 'Merci Market', project: 'merci-market',
      caption: 'Signage throughout Merci Market: wall lettering, department signs and illuminated counter signs.' },
    { file: 'interior-08-abiko-curry.jpg', name: 'Abiko Curry' },
    { file: 'interior-09-beyond-vape.jpg', name: 'Beyond Vape' },
    { file: 'interior-10-merci-market.jpg', name: 'Merci Market', project: 'merci-market' },
    { file: 'interior-11-merci-market.jpg', name: 'Merci Market', project: 'merci-market' },
    { file: 'interior-12-merci-market.jpg', name: 'Merci Market', project: 'merci-market' },
    { file: 'interior-13-merci-market.jpg', name: 'Merci Market', project: 'merci-market' },
    { file: 'interior-14-merci-market.jpg', name: 'Merci Market', project: 'merci-market' },
    { file: 'interior-15-merci-market.jpg', name: 'Merci Market', project: 'merci-market' },
    { file: 'interior-16-merci-market.jpg', name: 'Merci Market', project: 'merci-market' },
    { file: 'interior-17-merci-market.jpg', name: 'Merci Market', project: 'merci-market' },
    { file: 'interior-18-nail-styler.jpg', name: 'Nail Styler' },
    { file: 'interior-19-dashing-diva.jpg', name: 'Dashing Diva' },
    { file: 'interior-20-dental-solutions.jpg', name: 'Dental Solutions' },
    { file: 'interior-21-bell-massage-therapy.jpg', name: 'Bell Massage Therapy' },
    { file: 'interior-22-panini.jpg', name: 'Panini' },
    { file: 'interior-23-gong-cha.jpg', name: 'Gong cha' },
    { file: 'interior-24-duke-eatery.jpg', name: 'Duke Eatery' },
    { file: 'interior-25-ideal-food-basket.jpg', name: 'Ideal Food Basket' },
    { file: 'interior-26-keywell.jpg', name: 'Keywell' },
    { file: '3d-letters-03-zales.jpg', name: 'Zales' }, // also in the 3D Letters gallery
    { file: '3d-letters-05-dashing-diva.jpg', name: 'Dashing Diva' }, // also in the 3D Letters gallery
    { file: '3d-letters-06-dashing-diva.jpg', name: 'Dashing Diva' }, // also in the 3D Letters gallery
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
    { file: 'awning-vestibule-15-two-thirty-five.jpg', name: 'Two Thirty Five' },
    { file: 'awning-vestibule-16-gracefully.jpg', name: 'Gracefully' },
    { file: 'awning-vestibule-17-bayside-vw.jpg', name: 'Bayside VW', project: 'bayside-vw',
      caption: 'A canopy and awnings for Bayside VW Service & Parts.' },
    { file: 'awning-vestibule-18-wash-and-lube.jpg', name: 'Wash & Lube' },
    { file: 'awning-vestibule-19-maison-east.jpg', name: 'Maison East' },
    { file: 'awning-vestibule-20-medicina-familiar.jpg', name: 'Medicina Familiar' },
    { file: 'awning-vestibule-21-new-york-business-systems.jpg', name: 'New York Business Systems' },
    { file: 'awning-vestibule-22-plantshed.jpg', name: 'Plantshed' },
    { file: 'awning-vestibule-23-rosie-ogradys.jpg', name: 'Rosie O\'Grady\'s' },
    { file: 'awning-vestibule-24-backstage-tavern.jpg', name: 'Backstage Tavern' },
    { file: 'awning-vestibule-25-popeyes.jpg', name: 'Popeyes' },
    { file: 'awning-vestibule-26-alegria-smoke-shop.jpg', name: 'Alegria Smoke Shop' },
    { file: 'awning-vestibule-27-haagen-dazs.jpg', name: 'Häagen-Dazs' },
    { file: 'awning-vestibule-28.jpg' },
    { file: 'awning-vestibule-29-bareburger.jpg', name: 'Bareburger' },
    { file: 'awning-vestibule-30-bareburger.jpg', name: 'Bareburger' },
    { file: 'awning-vestibule-31-koku.jpg', name: 'Koku' },
    { file: 'awning-vestibule-32-c-and-c-farm.jpg', name: 'C&C Farm' },
    { file: 'awning-vestibule-33.jpg', project: 'striped-vestibule',
      caption: 'A black-and-white striped entrance vestibule, seen from two angles.' },
    { file: 'awning-vestibule-34.jpg', project: 'striped-vestibule' },
    { file: 'awning-vestibule-35-paris-baguette.jpg', name: 'Paris Baguette' },
    { file: 'awning-vestibule-36-sola-salons.jpg', name: 'Sola Salons' },
    { file: 'awning-vestibule-37-bareburger.jpg', name: 'Bareburger' },
    { file: 'awning-vestibule-38-cabellos-bellos-beauty-salon.jpg', name: 'Cabellos Bellos Beauty Salon', project: 'cabellos-bellos',
      caption: 'A wrap-around awning on both sides of a corner building, for Cabellos Bellos Beauty Salon and Global Cargo Movers.' },
    { file: 'awning-vestibule-39-global-cargo-movers.jpg', name: 'Global Cargo Movers', project: 'cabellos-bellos' },
    { file: 'awning-vestibule-40.jpg' },
    { file: 'awning-vestibule-41-bayside-vw.jpg', name: 'Bayside VW', project: 'bayside-vw' },
    { file: 'awning-vestibule-42-deli-on-madison.jpg', name: 'Deli on Madison' },
    { file: 'awning-vestibule-43-ideal-food-basket.jpg', name: 'Ideal Food Basket' },
    { file: '3d-letters-21-kjun.jpg', name: 'KJUN' }, // also in the 3D Letters gallery
    { file: '3d-letters-23-between-the-bagel.jpg', name: 'Between the Bagel' }, // also in the 3D Letters gallery
  ] },
  { type: 'Digital Printing', photos: [
    { file: 'digital-printing-01.jpg' },
    { file: 'digital-printing-02-hudson-market.jpg', name: 'Hudson Market', project: 'hudson-market',
      caption: 'Soup-can window graphics wrapping the Hudson Market storefront.' },
    { file: 'digital-printing-03-hudson-market.jpg', name: 'Hudson Market', project: 'hudson-market' },
    { file: 'digital-printing-04-baker-house.jpg', name: 'Baker House', project: 'baker-house',
      caption: 'Food photography window graphics along the Baker House storefront.' },
    { file: 'digital-printing-05-baker-house.jpg', name: 'Baker House', project: 'baker-house' },
    { file: 'digital-printing-06.jpg' },
    { file: 'digital-printing-07-nymoto.jpg', name: 'Nymoto' },
    { file: 'digital-printing-08.jpg' },
    { file: 'digital-printing-09-beyond-vape.jpg', name: 'Beyond Vape' },
    { file: 'digital-printing-10-dozy-dog.jpg', name: 'Dozy Dog' },
    { file: 'digital-printing-11-reef-physical-therapy.jpg', name: 'Reef Physical Therapy' },
    { file: 'digital-printing-12-michelob-ultra.jpg', name: 'Michelob Ultra', project: 'world-cup',
      caption: 'World Cup campaign graphics for Michelob Ultra and Stella Artois: a stage backdrop, wall and door wraps and street banners.' },
    { file: 'digital-printing-13-michelob-ultra.jpg', name: 'Michelob Ultra', project: 'world-cup' },
    { file: 'digital-printing-14-stella-artois.jpg', name: 'Stella Artois', project: 'world-cup' },
    { file: 'digital-printing-15-michelob-ultra.jpg', name: 'Michelob Ultra', project: 'world-cup' },
    { file: 'digital-printing-16-michelob-ultra.jpg', name: 'Michelob Ultra', project: 'world-cup' },
    { file: 'digital-printing-17-pig-beach.jpg', name: 'Pig Beach', project: 'world-cup' },
  ] },
  { type: 'Trade Show', photos: [
    { file: 'trade-show-01-neoflam.jpg', name: 'Neoflam' },
    { file: 'trade-show-02-bdr.jpg', name: 'bdr' },
    { file: 'trade-show-03.jpg', project: 'booth',
      caption: 'A trade show booth with lit display counters and product shelving.' },
    { file: 'trade-show-04.jpg', project: 'booth' },
  ] },
]

// Every listing of a project photo, `work` first and then `portfolio`, as { img
// (a path under public/assets/), name, type (a `signTypes` title), project,
// caption }. A photo listed under two types appears once for each.
const listed = [
  ...work,
  ...portfolio.flatMap(({ type, photos }) => photos.map(({ file, ...p }) => ({ ...p, img: `portfolio/${file}`, type }))),
]

// Photos of one job share a `project` key (on any one listing of each photo) and
// make one project: one card, with every photo in its gallery. Any other photo is
// a project of its own, keyed by its path.
const keyOf = {}
for (const p of listed) if (p.project) keyOf[p.img] = p.project
const projectId = (p) => keyOf[p.img] ?? p.img

// Each project's photos, in listing order, once each, as { img, name, type }.
const photosOf = {}
for (const { img, name, type } of listed) {
  const photos = (photosOf[projectId({ img })] ??= [])
  if (!photos.some((q) => q.img === img)) photos.push({ img, name, type })
}
// A mistyped key leaves a "project" of one photo
if (import.meta.env.DEV) {
  for (const key of new Set(Object.values(keyOf))) {
    if (photosOf[key].length < 2) console.warn(`content.js: project '${key}' has only one photo`)
  }
}

// A project as a list shows it, under the type of the listing `p`. Its cover is
// that listing's photo, the first of the project listed under that type. `name`
// is its first business name; `caption` its written caption, or one built from
// the type's `made`.
function asProject(p) {
  const id = projectId(p)
  const photos = photosOf[id]
  const type = signTypes.find((t) => t.title === p.type)
  const name = photos.find((q) => q.name)?.name
  const caption = listed.find((q) => q.caption && projectId(q) === id)?.caption
    ?? (name ? `${type.made} for ${name}.` : `${type.made} by Space Sign.`)
  return { id, type: p.type, typeId: type.id, cover: p.img, photos, name, caption }
}

// The projects among some listings, once each, at their first listing.
const projectsIn = (ls) => ls.filter((p, i) => ls.findIndex((q) => projectId(q) === projectId(p)) === i).map(asProject)

// Every project once, under the type of its first listing: { id, type, typeId,
// cover, photos, name, caption }. The Our Work page shows them all, and the
// homepage the first five.
export const projects = projectsIn(listed)

// The projects of each sign type, by `signTypes` id, including those also listed
// under another type. The Sign Types rows show the first few of each.
const byType = Object.fromEntries(signTypes.map((t) => [t.id, projectsIn(listed.filter((p) => p.type === t.title))]))
export const projectsOf = (id) => byType[id] ?? []

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
