// The project photos for the Our Work page, the Sign Types rows and the
// homepage: the hand-picked `work` photos, the rest of spacesign.com's product
// galleries in `portfolio`, and the projects they make (`projects`,
// `projectsOf`). The sign types themselves are in content.js with the other
// business facts.

import { signTypes } from './content.js'

// Project photos shown first, paths under public/assets/. The homepage shows the
// first five (the first one large); the Our Work page shows them all, ahead of
// `portfolio`. Each `type` is a `signTypes` title: the spacesign.com category
// whose gallery shows that photo (checked Nov 2026). The photo marked * is on
// spacesign.com's homepage rather than in a gallery, so its type was chosen by
// eye. Files in work/ are named
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
