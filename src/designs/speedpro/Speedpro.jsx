import { useCallback, useEffect, useRef, useState } from 'react'
import useDesignAssets from '../../shared/useDesignAssets.js'
import {
  asset, PHONE, PHONE_TEL, EMAIL, ADDRESS, MAPS_URL, LICENSE, about, heroSlides, photos, gallery, reviews,
  clients, serviceAreas, sendQuoteEmail,
} from '../../shared/content.js'
import css from './speedpro.css?inline'

const FONTS = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Mulish:ital,wght@0,300;0,400;0,700;1,400&display=swap'

const services = [
  { title: 'Channel Letters', img: photos.channel },
  { title: 'LED Neon & Lightbox', img: photos.neon },
  { title: 'Blade & Carved Signs', img: photos.carved },
  { title: 'Awnings & Vestibules', img: photos.vestibule },
  { title: 'Permits & Violations', img: photos.permits },
]

const projects = gallery.filter((g, i) => i % 2 === 0 || g.type === 'Blade').slice(0, 12)

const navLinks = [
  ['#services', 'Products & Services'],
  ['#quote', 'Request a Quote'],
  ['#projects', 'Portfolio'],
  ['#reviews', 'About Us'],
]

const Arrow = () => (
  <svg viewBox="0 0 16 10" aria-hidden="true"><path d="M0 5h14M10 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
)

const Stars = () => (
  <span className="sp-stars" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.8 5.7 21.5l1.7-7.3L2 9.5l7.1-.6z" /></svg>
    ))}
  </span>
)

const IconImage = () => (
  <svg viewBox="0 0 32 28" aria-hidden="true"><rect x="1.5" y="1.5" width="29" height="25" rx="2" fill="none" stroke="currentColor" strokeWidth="2.4" /><path d="M5 22l7-8 5 5 4-4 6 7z" fill="currentColor" /><circle cx="22" cy="8.5" r="3" fill="currentColor" /></svg>
)

const IconQuote = () => (
  <svg viewBox="0 0 32 28" aria-hidden="true"><path d="M16 2v15M9.5 8.5 16 2l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="3" /><path d="M2 16v10h28V16" fill="none" stroke="currentColor" strokeWidth="3" /><circle cx="24" cy="21" r="1.6" fill="currentColor" /></svg>
)

const IconConsult = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="22" cy="14" r="7" /><circle cx="42" cy="14" r="7" />
    <path d="M10 46V32a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8" /><path d="M54 46V32a8 8 0 0 0-8-8h-6" />
    <path d="M30 30h14l-4 16H26z" /><path d="M14 46h36M20 46v10M44 46v10" />
  </svg>
)

function useHeroSlider(count, ms) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % count), ms)
    return () => clearInterval(id)
  }, [count, ms])
  return i
}

// Scroll-snap carousel helpers: which item is first in view, and jump to an item.
function useTrack() {
  const ref = useRef(null)
  const [index, setIndex] = useState(0)
  const onScroll = useCallback(() => {
    const el = ref.current
    if (!el || !el.children.length) return
    const step = el.children[0].getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || 0)
    setIndex(Math.round(el.scrollLeft / step))
  }, [])
  const go = useCallback((n) => {
    const el = ref.current
    const child = el?.children[Math.max(0, Math.min(n, el.children.length - 1))]
    if (child) el.scrollTo({ left: child.offsetLeft - el.children[0].offsetLeft, behavior: 'smooth' })
  }, [])
  return { ref, index, onScroll, go }
}

export default function Speedpro() {
  useDesignAssets(css, FONTS, 'Space Sign — Sign Boldly | NYC Licensed Sign Maker')
  const slide = useHeroSlider(heroSlides.length, 5000)
  const [menuOpen, setMenuOpen] = useState(false)
  const reviewTrack = useTrack()
  const projectTrack = useTrack()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const onField = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    sendQuoteEmail(form)
    setSent(true)
  }
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="sp">
      <header className="sp-header">
        <div className="sp-util">
          <a className="sp-util-phone" href={PHONE_TEL}>{PHONE}</a>
          <a className="sp-util-loc" href={MAPS_URL} target="_blank" rel="noreferrer">
            <span className="sp-util-brand">Space Sign — </span>College Point, NY <span className="sp-util-chev" aria-hidden="true">›</span>
          </a>
          <nav className="sp-util-links" aria-label="Utility">
            <a href="#services">Service Areas</a>
            <a href="#quote">Permits</a>
            <a href="#projects">Our Work</a>
            <a href={`mailto:${EMAIL}`}>Contact</a>
          </nav>
        </div>
        <div className="sp-nav">
          <button className={`sp-burger${menuOpen ? ' open' : ''}`} aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
            <span /><span /><span /><em>Menu</em>
          </button>
          <a className="sp-logo" href="#top" onClick={closeMenu}><img src={asset('logo-black.png')} alt="Space Sign" /></a>
          <nav className="sp-nav-links" aria-label="Main">
            {navLinks.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="sp-nav-call" href={PHONE_TEL} aria-label={`Call ${PHONE}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
          </a>
        </div>
        {menuOpen && (
          <nav className="sp-mobile-menu" aria-label="Mobile">
            {navLinks.map(([href, label]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a href={PHONE_TEL} onClick={closeMenu}>Call {PHONE}</a>
          </nav>
        )}
      </header>

      <section className="sp-hero" id="top">
        <div className="sp-hero-letters" aria-hidden="true">S&nbsp;S</div>
        <div className="sp-hero-copy">
          <p className="sp-hero-kicker">NYC Licensed Sign Hanger {LICENSE}</p>
          <h1><span>Sign</span><span className="sp-red">Boldly</span></h1>
          <p className="sp-hero-sub">Grow Your Business with Custom Storefront Signs</p>
          <a className="sp-btn" href="#quote">Contact Us</a>
        </div>
        <div className="sp-hero-media" aria-label="Recent Space Sign installations">
          {heroSlides.map((s, i) => (
            <div
              key={s.img}
              className={`sp-hero-slide${i === slide ? ' active' : ''}`}
              style={{ backgroundImage: `url(${asset(`work/${s.img}`)})` }}
              role="img"
              aria-label={s.label}
              aria-hidden={i === slide ? undefined : true}
            />
          ))}
        </div>
      </section>

      <aside className="sp-tabs" aria-label="Quick links">
        <a className="sp-tab sp-tab-black" href="#projects"><IconImage />View Work</a>
        <a className="sp-tab sp-tab-red" href="#quote"><IconQuote />Get a Quote</a>
      </aside>

      <section className="sp-intro" id="services">
        <div className="sp-wrap sp-intro-grid">
          <div className="sp-col sp-col-left">
            <h2 className="sp-giant"><span>Great Big</span><span className="sp-red">Signs</span></h2>
            {services.map((s, i) => i % 2 === 0 && <ServiceCard key={s.title} s={s} n={i + 1} />)}
          </div>
          <div className="sp-col sp-col-right">
            <div className="sp-intro-copy">{about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
            {services.map((s, i) => i % 2 === 1 && <ServiceCard key={s.title} s={s} n={i + 1} />)}
            <div className="sp-specific">
              <h2>Looking for <br />something <span className="sp-red">specific?</span></h2>
              <p>Browse By:</p>
              <div className="sp-specific-pills">
                <a className="sp-btn sp-btn-sm" href="#projects">Channel Letters</a>
                <a className="sp-btn sp-btn-sm" href="#projects">Lightbox</a>
                <a className="sp-btn sp-btn-sm" href="#quote">Permits</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-reviews" id="reviews">
        <div className="sp-reviews-head">
          <span className="sp-quote-mark" aria-hidden="true">“</span>
          <h2 className="sp-h2"><span>What</span><span>They&rsquo;re</span><span className="sp-red">Saying</span></h2>
          <div className="sp-reviews-ctrl">
            <div className="sp-arrows">
              <button aria-label="Previous review" onClick={() => reviewTrack.go(reviewTrack.index - 1)}>‹</button>
              <button aria-label="Next review" onClick={() => reviewTrack.go(reviewTrack.index + 1)}>›</button>
            </div>
            <a className="sp-btn" href="#quote">View All Reviews</a>
          </div>
        </div>
        <div className="sp-marble">
          <div className="sp-review-track" ref={reviewTrack.ref} onScroll={reviewTrack.onScroll}>
            {reviews.map((r) => (
              <article className="sp-review" key={r.name}>
                <div className="sp-review-top">
                  <span className="sp-avatar" aria-hidden="true">{r.name.split(' ').map((w) => w[0]).join('')}</span>
                  <div>
                    <h4>{r.name}</h4>
                    <p className="sp-review-place">- {r.place}</p>
                    <p className="sp-review-meta"><Stars /> {r.date}</p>
                  </div>
                </div>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-clients" aria-label="Clients">
        <div className="sp-wrap sp-clients-row">
          {clients.slice(0, 6).map((c) => (
            <img key={c.file} src={asset(`clients/${c.file}.png`)} alt={c.name} loading="lazy" />
          ))}
        </div>
      </section>

      <section className="sp-projects" id="projects">
        <div className="sp-wrap">
          <div className="sp-projects-head">
            <h2 className="sp-h2">Recent <span className="sp-red">Projects</span></h2>
            <a className="sp-btn" href="#quote">View Full Portfolio</a>
          </div>
          <div className="sp-project-track" ref={projectTrack.ref} onScroll={projectTrack.onScroll}>
            {projects.map((p) => (
              <figure className="sp-project" key={p.img}>
                <img src={asset(p.img)} alt={`${p.name} — ${p.type}`} loading="lazy" />
              </figure>
            ))}
          </div>
          <div className="sp-dots" role="tablist" aria-label="Projects">
            {projects.map((p, i) => (
              <button
                key={p.img}
                role="tab"
                aria-selected={i === projectTrack.index}
                aria-label={`Show project ${i + 1}`}
                className={i === projectTrack.index ? 'active' : ''}
                onClick={() => projectTrack.go(i)}
              />
            ))}
          </div>
          <a className="sp-btn sp-projects-cta-m" href="#quote">View Full Portfolio</a>
        </div>
      </section>

      <section className="sp-quote" id="quote">
        <div className="sp-quote-box">
          <div className="sp-quote-icon"><IconConsult /></div>
          <div className="sp-quote-body">
            <h2>Quote &amp; Consultation <span className="sp-red-m">Request</span></h2>
            <p>Contact Space Sign for a quote or consultation regarding your next storefront sign.</p>
            <form className="sp-form" onSubmit={onSubmit}>
              <input name="name" value={form.name} onChange={onField} placeholder="Name*" autoComplete="name" required />
              <input name="email" type="email" value={form.email} onChange={onField} placeholder="Email*" autoComplete="email" required />
              <input name="phone" type="tel" value={form.phone} onChange={onField} placeholder="Phone*" autoComplete="tel" required />
              <textarea name="message" value={form.message} onChange={onField} placeholder="Tell us about your project*" rows={3} required />
              <button className="sp-btn" type="submit">{sent ? 'Opening your email…' : 'Make a Request'}</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="sp-footer">
        <div className="sp-footer-main">
          <div className="sp-footer-brand">
            <img src={asset('logo-black.png')} alt="Space Sign" />
            <a className="sp-btn-outline" href={PHONE_TEL}>Call Us Today {PHONE}</a>
            <address>
              <span>My Studio</span>
              <b>Space Sign — College Point</b>
              <a href={MAPS_URL} target="_blank" rel="noreferrer">{ADDRESS.split(', ').map((l) => <span key={l}>{l}</span>)}</a>
            </address>
          </div>
          <div className="sp-footer-col">
            <h6>Helpful Links</h6>
            <a href="#top">Home</a>
            <a href="#services">About Space Sign</a>
            <a href="#quote">Request a Consultation or Quote</a>
            <a href="#services">Products &amp; Services</a>
          </div>
          <div className="sp-footer-col sp-footer-areas">
            <h6>Areas Served</h6>
            {serviceAreas.map((a) => <span key={a}>{a}</span>)}
          </div>
          <div className="sp-footer-col sp-footer-products">
            <h6>Products &amp; Solutions</h6>
            <div>
              {['Channel Letters', 'LED Neon', 'Lightbox Signs', 'Blade Signs', 'Awnings', 'Interior Signs', 'DOB Permits', 'More'].map((p) => (
                <a key={p} href="#services">{p}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="sp-footer-bar">
          <p>© 2026 Space Sign. All Rights Reserved.</p>
          <p><a href="#services">NYC Licensed Sign Hanger {LICENSE}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={PHONE_TEL}>{PHONE}</a></p>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ s, n }) {
  return (
    <a className="sp-card" href="#projects">
      <span className="sp-card-img" style={{ backgroundImage: `url(${asset(s.img)})` }} />
      <span className="sp-card-cap">
        <span className="sp-card-num">{String(n).padStart(2, '0')}</span>
        <strong>{s.title}</strong>
        <span className="sp-card-all">view all <Arrow /></span>
      </span>
    </a>
  )
}
