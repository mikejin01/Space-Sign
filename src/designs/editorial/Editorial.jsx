import { useState, useEffect, useCallback } from 'react'
import useDesignAssets from '../../shared/useDesignAssets.js'
import {
  BASE, PHONE, PHONE_TEL, EMAIL, MAPS_URL, LICENSE, SINCE, heroSlides, services, work, clients, steps, sendQuoteEmail,
} from '../../shared/content.js'
import { icons } from './icons.jsx'
import css from './editorial.css?inline'

const FONTS = 'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap'

// Grid span for each work tile, in the order of `work`.
const workLayout = ['big', 'tall', 'third', 'third', 'third', 'third', 'third', 'third']

export default function Editorial() {
  useDesignAssets(css, FONTS, 'Space Sign — NYC Licensed Sign Maker')
  const [slide, setSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const go = useCallback((n) => setSlide((s) => (n + heroSlides.length) % heroSlides.length), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const onField = useCallback((e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }, [])

  const onQuoteSubmit = useCallback((e) => {
    e.preventDefault()
    sendQuoteEmail(form)
    setSent(true)
  }, [form])

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="nav-logo" href="#" onClick={closeMenu}><img src={`${BASE}assets/logo-black.png`} alt="SPACE SIGN" /></a>
          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#permits">Permits</a>
            <a href="#violations">Violations</a>
            <a href="#process">Process</a>
            <a className="btn" href="#quote">Get a free quote</a>
          </nav>
          <button
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
        <nav className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#permits" onClick={closeMenu}>Permits</a>
          <a href="#violations" onClick={closeMenu}>Violations</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a className="nav-phone" href={PHONE_TEL} onClick={closeMenu}>{PHONE}</a>
          <a className="btn" href="#quote" onClick={closeMenu}>Get a free quote</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          {heroSlides.map((sl, i) => (
            <div
              key={sl.img}
              className={`hero-slide img${i === slide ? ' active' : ''}`}
              style={{ backgroundImage: `url(${BASE}assets/work/${sl.img})` }}
              role="img"
              aria-label={sl.label}
              aria-hidden={i === slide ? undefined : true}
            />
          ))}
        </div>

        <button className="hero-arrow prev" aria-label="Previous slide" onClick={() => go(slide - 1)}>‹</button>
        <button className="hero-arrow next" aria-label="Next slide" onClick={() => go(slide + 1)}>›</button>

        <div className="hero-content">
          <div className="wrap hero-grid">
            <div className="hero-main">
              <div className="hero-kicker mono">NYC Licensed Sign Hanger #215 · Est. 1987</div>
              <h1>We make brands<br /><em>impossible</em> to miss.</h1>
              <div className="hero-row">
                <p>Space Sign is a full-concierge sign company in Queens, NY — sales, design, fabrication and installation under one roof, serving storefronts across the Tri-State area since 1987.</p>
              </div>
              <div className="hero-dots" role="tablist" aria-label="Hero slides">
                {heroSlides.map((sl, i) => (
                  <button
                    key={sl.img}
                    className={`hero-dot${i === slide ? ' active' : ''}`}
                    aria-label={`Show slide ${i + 1}`}
                    aria-selected={i === slide}
                    role="tab"
                    onClick={() => go(i)}
                  />
                ))}
              </div>
            </div>

            <form className="quote-card" onSubmit={onQuoteSubmit}>
              <div className="qc-top">
                <span className="qc-kicker mono">Call us today</span>
                <a className="qc-phone" href={PHONE_TEL}>{PHONE}</a>
              </div>
              <div className="qc-div" />
              <h2 className="qc-h">Get a free quote</h2>
              <div className="qc-fields">
                <input name="name" value={form.name} onChange={onField} placeholder="Name*" autoComplete="name" required />
                <input name="email" type="email" value={form.email} onChange={onField} placeholder="E-mail address*" autoComplete="email" required />
                <input name="phone" type="tel" value={form.phone} onChange={onField} placeholder="Contact number*" autoComplete="tel" required />
                <textarea name="message" value={form.message} onChange={onField} placeholder="Tell us about your project*" rows={4} required />
              </div>
              <button className="btn qc-submit" type="submit">
                {sent ? 'Thank you — opening your email…' : 'Request my free quote'}
              </button>
              <p className="qc-fine mono">Free quotes across the Tri-State · usually within one business day</p>
            </form>
          </div>
        </div>
      </section>

      {/* LICENSE BANNER */}
      <section className="license">
        <div className="wrap">
          <p className="license-line">
            Space Sign is a <span className="nyc">NYC</span> Licensed Sign Hanger <span className="lic">(#215)</span>
          </p>
          <p className="license-sub">We also help with <a href="#violations">violation removals</a> for DOB &amp; ECB sign violations.</p>
        </div>
      </section>

      {/* TRUST */}
      <div className="trust dark">
        <div><div className="n"><em>37</em>+</div><div className="l">Years in business · since 1987</div></div>
        <div><div className="n">#215</div><div className="l">NYC Licensed Sign Hanger</div></div>
        <div><div className="n">4.9<em>★</em></div><div className="l">Average customer rating</div></div>
        <div><div className="n">NY·NJ·CT</div><div className="l">Tri-State service area</div></div>
      </div>

      {/* SERVICES */}
      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head">
            <div><div className="k mono">01 / Services</div><h2>What we build</h2></div>
            <p>One roof for the whole job — the design you approve is the sign we fabricate, permit and install.</p>
          </div>
          <div className="svc">
            {services.map((s) => (
              <div className="svc-card" key={s.title}>
                <div className="svc-icon-tr">{icons[s.icon]}</div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <div className="tags">{s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="sec dark" id="work">
        <div className="wrap">
          <div className="sec-head">
            <div><div className="k mono">02 / Selected Work</div><h2>From the shop floor</h2></div>
            <p>A cross-section of recent storefront, illuminated and interior programs across NYC.</p>
          </div>
          <div className="work">
            {work.map((w, i) => (
              <div className={`cell ${workLayout[i]}`} key={w.img}>
                <div className="img" style={{ backgroundImage: `url(${BASE}assets/work/${w.img})` }} />
                <div className="cap"><b>{w.name}</b><span className="mono">{w.type}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="sec" id="clients">
        <div className="wrap">
          <div className="sec-head">
            <div><div className="k mono">03 / Our Clients</div><h2>Brands we've lit up</h2></div>
            <p>From national chains to neighborhood storefronts across the Tri-State — a few of the businesses we've built signage for.</p>
          </div>
          {/* Two copies of the logos so the -50% loop point is seamless; the copy is hidden from screen readers. */}
          <div className="logo-marquee">
            <div className="logo-track">
              {[0, 1].map((copy) => clients.map((c) => (
                <div className="logo" key={`${copy}-${c.file}`} aria-hidden={copy ? true : undefined}>
                  <img src={`${BASE}assets/clients/${c.file}.png`} alt={copy ? '' : c.name} />
                </div>
              )))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec dark" id="about">
        <div className="wrap">
          <div className="sec-head">
            <div><div className="k mono">04 / About Us</div><h2>About us</h2></div>
          </div>
          <div className="about">
            {/* Placeholder until the client sends a storefront photo (public/assets/work/space-sign-storefront.jpg). */}
            <div className="about-photo ph"><span>Storefront photo — coming soon</span></div>
            <div className="about-bio">
              <p>Since 1987, Space Sign has designed, built and installed storefront signs from our shop in College Point, Queens. Every sign is made under one roof in our purpose-built factory, where traditional craft meets the latest sign technology. As a NYC Licensed Sign Hanger (#215), our in-house permit department also handles DOB permits and violation removal — so one team takes your sign from first sketch to final inspection, anywhere from East Long Island to New Jersey.</p>
              <ul className="about-facts mono">
                <li>Est. {SINCE}</li>
                <li>Licensed {LICENSE}</li>
                <li><a href={MAPS_URL} target="_blank" rel="noreferrer">College Point, Queens</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PERMITS & VIOLATIONS — copy verbatim from spacesign.com (see BUSINESS-INFO.md) */}
      <section className="sec permits" id="permits">
        <div className="wrap">
          <div className="sec-head">
            <div><div className="k mono">05 / Permits &amp; Violations</div><h2>Permits &amp; violations</h2></div>
          </div>
          <div className="pv">
            <article className="pv-panel">
              <h3>DOB Sign Permits</h3>
              <p>All signs require Sign Permits issued by the NYC Department of Buildings (DOB). NYC Licensed Sign Hangers are the only persons legally allowed to pull a Sign Permit in NYC.</p>
              <p>As Licensed Sign Hanger #215, we prepare the drawings and file the permit for you.</p>
              <a className="btn" href="#quote">Get a free quote</a>
            </article>
            <article className="pv-panel" id="violations">
              <h3>DOB &amp; ECB Violations</h3>
              <p>NYC DOB and NYC ECB issue violations for all types of signs, awnings, and canopies that are in violation of the NYC Administrative Codes. NYC Sign Violations can only be corrected and cleared by NYC Licensed Sign Hangers.</p>
              <a className="btn" href="#quote">Get a free quote</a>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec" id="process">
        <div className="wrap">
          <div className="sec-head">
            <div><div className="k mono">06 / Process</div><h2>Four steps, one team</h2></div>
            <p>Full-concierge service — we handle sales, design, permitting, manufacture and installation in-house.</p>
          </div>
          <div className="proc">
            {steps.map((st) => (
              <div className="proc-step" key={st.s}>
                <span className="s">{st.s}</span><h4>{st.h}</h4><p>{st.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="quote">
        <div className="cta-in">
          <h2>Ready to <em>light up</em><br />your storefront?</h2>
          <p>Tell us the basics and we'll come back with a budget range and timeline. Free quotes across the Tri-State area — usually within one business day.</p>
          <div className="cta-actions">
            <a className="btn" href={`mailto:${EMAIL}`}>Get a free quote</a>
            <a className="btn ghost" href={PHONE_TEL}>Call {PHONE}</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot">
            <div className="foot-logo">
              <img src={`${BASE}assets/logo-white.png`} alt="SPACE SIGN" />
              <p className="mono" style={{ marginTop: 16, color: 'var(--mute)' }}>Design · Build · Install · Permit</p>
            </div>
            <div className="foot-cols">
              <div className="foot-col"><h5 className="mono">Studio</h5><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About Us</a><a href="#permits">Permits</a><a href="#violations">Violations</a><a href="#process">Process</a></div>
              <div className="foot-col"><h5 className="mono">Services</h5><a href="#services">Channel Letters</a><a href="#services">LED Neon &amp; Lightbox</a><a href="#services">Awnings &amp; Vestibules</a><a href="#permits">Permits &amp; Violations</a></div>
              <div className="foot-col">
                <h5 className="mono">Contact</h5>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <a href={PHONE_TEL}>{PHONE}</a>
                <a href="https://maps.google.com/?q=15-25+132nd+Street+College+Point+NY+11356" target="_blank" rel="noreferrer">15-25 132nd St, College Point, NY 11356</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom"><span>© 2026 Space Sign. NYC Licensed Sign Hanger #215 · Fax (718) 961-5577.</span><span>Design · Build · Install</span></div>
        </div>
      </footer>
    </>
  )
}
