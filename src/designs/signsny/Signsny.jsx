import { useState } from 'react'
import useDesignAssets from '../../shared/useDesignAssets.js'
import {
  asset, PHONE, PHONE_TEL, EMAIL, ADDRESS, MAPS_URL, LICENSE, SINCE, about, photos, gallery, GALLERY_TYPES, clients,
  serviceAreas,
} from '../../shared/content.js'
import css from './signsny.css?inline'

const FONTS = 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&family=Plus+Jakarta+Sans:wght@500;700;800&family=Roboto:wght@400;500&family=Cabin:wght@500;600&family=Fira+Sans+Condensed:wght@400&display=swap'

const navLinks = [
  ['#services', 'Channel Letters'],
  ['#services', 'Lightbox & Neon'],
  ['#services', 'Awnings'],
  ['#partner', 'Permits'],
  ['#gallery', 'Our Work'],
  ['#about', 'About'],
]

const solutions = [
  'Channel & 3D Letters', 'Design • Fabrication • Install', 'LED Neon & Lightbox Signs', 'DOB Permits & Violations',
]

const services = [
  { title: 'Channel Letters', img: photos.channel, popular: true, copy: 'Front-lit, halo back-lit and front-&-back-lit channel letters fabricated in our College Point factory — built for bright, even light and years of NYC weather.', list: ['Front-Lit & Halo-Lit', 'Front & Back-Lit', 'Precision-Cut 3D Letters'] },
  { title: 'LED Neon & Lightbox', img: photos.lightboxKungfu, copy: 'Energy-efficient LED neon and illuminated lightbox signs that stay bright day and night and outlast traditional neon.', list: ['LED Neon Signs', 'Illuminated Lightboxes', 'Push-Thru Signs'] },
  { title: 'Blade & Carved Signs', img: photos.carved, copy: 'Projecting blade signs and carved, dimensional signs that catch foot traffic from both directions along the block.', list: ['Blade Signs', 'Carved Signs', 'Pylon Signs'] },
  { title: 'Awnings & Vestibules', img: photos.vestibule, copy: 'Custom awnings, canopies and storefront vestibules that protect the entrance and carry your brand to the curb.', list: ['Commercial Awnings', 'Vestibules & Enclosures', 'Canopies'] },
  { title: 'Storefront & Interior', img: photos.storefrontVision, copy: 'Complete storefront programs plus lobby logos, interior signage, vinyl decals, banners and trade show displays.', list: ['Storefront Signs', 'Interior & Lobby Signs', 'Vinyl, Banners & Displays'] },
  { title: 'Permits & Violations', img: photos.permits, copy: `As a NYC Licensed Sign Hanger (${LICENSE}) we pull DOB sign permits and clear DOB & ECB sign violations — work only a licensed hanger can do.`, list: ['DOB Sign Permits', 'DOB & ECB Violation Removal', 'Code-Compliant Drawings'] },
]

const ICON = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }
const partner = [
  {
    title: 'Design',
    copy: 'Concepts, renderings and an on-site survey to confirm fit, power and NYC code — so the design you approve is the sign we build.',
    icon: <svg viewBox="0 0 50 50" {...ICON}><rect x="5" y="7" width="40" height="27" rx="2" /><path d="M19 42h12M25 34v8M11 13h12M11 18h8" /><rect x="27" y="13" width="12" height="15" rx="1" /><path d="M11 24h10M11 28h6" /></svg>,
  },
  {
    title: 'Fabrication',
    copy: 'Every sign is produced under one roof in our purpose-built College Point factory, applying traditional skills to the latest sign technology.',
    icon: <svg viewBox="0 0 50 50" {...ICON}><path d="M13 18V6h24v12" /><rect x="5" y="18" width="40" height="18" rx="3" /><path d="M13 30h24v14H13z" /><path d="M18 36h14M18 40h9M10 23h2" /></svg>,
  },
  {
    title: 'Installation',
    copy: 'Our own crews set, wire and inspect every sign across the five boroughs, Long Island, New Jersey and Connecticut — then keep it lit.',
    icon: <svg viewBox="0 0 50 50" {...ICON}><path d="M30 8a8 8 0 0 0-9 10L7 32a4 4 0 0 0 6 6l14-14a8 8 0 0 0 10-9l-5 5-5-1-1-5z" /><path d="M33 31l9 9a3 3 0 0 1-4 4l-9-9M27 26l4-4" /></svg>,
  },
  {
    title: 'Permits & Violations',
    copy: `NYC Licensed Sign Hanger ${LICENSE}: our in-house permit department files DOB sign permits and clears DOB & ECB violations.`,
    icon: <svg viewBox="0 0 50 50" {...ICON}><path d="M25 4l5 4 6-1 2 6 6 3-2 6 2 6-6 3-2 6-6-1-5 4-5-4-6 1-2-6-6-3 2-6-2-6 6-3 2-6 6 1z" /><path d="M18 25l5 5 9-10" /></svg>,
  },
]

const Arrow = () => (
  <svg className="ny-arrow" viewBox="0 0 18 12" aria-hidden="true"><path d="M1 6h15M11 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
)

export default function Signsny() {
  useDesignAssets(css, FONTS, 'Space Sign | Sign Company in Queens, NY — Since 1987')
  const [menuOpen, setMenuOpen] = useState(false)
  const [tab, setTab] = useState(GALLERY_TYPES[0])
  const shown = gallery.filter((g) => g.type === tab)

  return (
    <div className="ny">
      <div className="ny-util">
        <div className="ny-util-icons">
          <a href={PHONE_TEL} aria-label={`Call ${PHONE}`}><svg viewBox="0 0 24 24"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg></a>
          <a href={`mailto:${EMAIL}`} aria-label={`Email ${EMAIL}`}><svg viewBox="0 0 24 24"><path d="M3 5h18v14H3zM3 6l9 7 9-7" fill="none" stroke="currentColor" strokeWidth="2.2" /></svg></a>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" aria-label="Directions"><svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg></a>
        </div>
        <nav className="ny-util-links" aria-label="Utility">
          <a href="#partner">Service Areas</a>
          <a href="#partner">Permits</a>
          <a href={PHONE_TEL}>{PHONE}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </nav>
      </div>

      <header className="ny-nav">
        <a className="ny-logo" href="#top"><img src={asset('logo-black.png')} alt="Space Sign" /></a>
        <nav className="ny-nav-links" aria-label="Main">
          {navLinks.map(([href, label]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="ny-btn-navy" href={`mailto:${EMAIL}?subject=Quote%20request`}>Request a Quote</a>
        <button className="ny-burger" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
          <span /><span /><span />
        </button>
        {menuOpen && (
          <nav className="ny-mobile-menu" aria-label="Mobile">
            {navLinks.map(([href, label]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="ny-btn-navy" href={`mailto:${EMAIL}?subject=Quote%20request`}>Request a Quote</a>
          </nav>
        )}
      </header>

      <section className="ny-hero" id="top" style={{ '--ny-hero-img': `url(${asset(photos.heroInterior)})` }}>
        <div className="ny-hero-in">
          <h1>Space Sign</h1>
          <p className="ny-hero-sub">Your NYC Licensed Sign Maker</p>
          <div className="ny-hero-btns">
            <a className="ny-btn" href={`mailto:${EMAIL}?subject=Free%20quote%20request`}>Get a Free Quote</a>
            <a className="ny-btn ny-btn-white" href="#gallery">See Our Work <Arrow /></a>
          </div>
        </div>
      </section>
      <div className="ny-trust">
        <span>NYC Licensed {LICENSE}</span>
        <span>Since {SINCE}</span>
        <span>In-House Fabrication</span>
        <span>Tri-State Install</span>
      </div>

      <section className="ny-intro" id="about">
        <div className="ny-wrap ny-intro-grid">
          <div>
            <h2 className="ny-h2-sm">Sign Company in Queens, NY — Serving the Tri-State Since {SINCE}</h2>
            {about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            <h3 className="ny-h3">Our Sign Solutions:</h3>
            <ul className="ny-checks">
              {solutions.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <a className="ny-btn" href={`mailto:${EMAIL}?subject=New%20sign%20project`}>Start your Project! <Arrow /></a>
          </div>
          <img className="ny-intro-img" src={asset(photos.interior)} alt="Illuminated lobby sign by Space Sign" />
        </div>
      </section>

      <section className="ny-gallery" id="gallery">
        <div className="ny-wrap">
          <div className="ny-head">
            <span className="ny-chip">Our Work Gallery</span>
            <h2>Explore Our Recent Sign Projects</h2>
            <p>Browse a few of the storefronts we&rsquo;ve designed, permitted, built and installed across New York City and the Tri-State area since {SINCE}.</p>
          </div>
          <div className="ny-tabs" role="tablist" aria-label="Filter work by sign type">
            {GALLERY_TYPES.map((t) => (
              <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>
          <div className="ny-grid" role="tabpanel">
            {shown.map((g) => (
              <figure key={g.img}>
                <img src={asset(g.img)} alt={`${g.name} — ${g.type}`} loading="lazy" />
                <figcaption>{g.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="ny-services" id="services">
        <div className="ny-wrap">
          <div className="ny-head">
            <span className="ny-chip">Our Services</span>
            <h2>Our Signage Solutions</h2>
          </div>
          <div className="ny-cards">
            {services.map((s) => (
              <article className="ny-card" key={s.title}>
                <div className="ny-card-img" style={{ backgroundImage: `url(${asset(s.img)})` }}>
                  {s.popular && <span className="ny-badge">Most Popular</span>}
                </div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <ul className="ny-dots">{s.list.map((l) => <li key={l}>{l}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ny-logos" aria-label="Clients">
        <div className="ny-wrap ny-logos-row">
          {clients.slice(0, 6).map((c) => <img key={c.file} src={asset(`clients/${c.file}.png`)} alt={c.name} loading="lazy" />)}
        </div>
      </section>

      <section className="ny-cta-wrap">
        <div className="ny-cta">
          <h2>Need help with your signage project?</h2>
          <a className="ny-btn" href={`mailto:${EMAIL}?subject=Free%20quote%20request`}>Get Free Quote <Arrow /></a>
        </div>
      </section>

      <section className="ny-partner" id="partner">
        <div className="ny-head">
          <h2>Your Full Service Sign Partner in New York City</h2>
          <p>No middlemen. Our in-house team handles every step — from the first survey to the final inspection.</p>
        </div>
        <div className="ny-panel">
          {partner.map((p) => (
            <div className="ny-pcard" key={p.title}>
              <span className="ny-picon" aria-hidden="true">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="ny-footer">
        <div className="ny-foot-grid">
          <div className="ny-foot-col">
            <h5>Useful Links</h5>
            <a href="#about">About Us</a><a href="#gallery">Our Work</a><a href="#services">Services</a><a href="#partner">Permits &amp; Violations</a><a href={`mailto:${EMAIL}`}>Contact Us</a>
          </div>
          <div className="ny-foot-col">
            <h5>Our Services</h5>
            {services.map((s) => <a key={s.title} href="#services">{s.title}</a>)}
          </div>
          <div className="ny-foot-col">
            <h5>Service Areas</h5>
            {serviceAreas.map((a) => <span key={a}>{a}</span>)}
          </div>
          <div className="ny-foot-col">
            <h5>Contact</h5>
            <a href={PHONE_TEL}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer">{ADDRESS}</a>
            <span>NYC Licensed Sign Hanger {LICENSE}</span>
          </div>
        </div>
        <div className="ny-foot-bottom">
          <span>©2026 Space Sign. All rights reserved.</span>
          <img src={asset('logo-white.png')} alt="Space Sign" />
        </div>
      </footer>
    </div>
  )
}
