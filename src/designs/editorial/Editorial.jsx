import { useState, useCallback, useRef } from 'react'
import useDesignAssets from '../../shared/useDesignAssets.js'
import { BASE, PHONE, PHONE_TEL, EMAIL, HOURS, SOCIAL, photos } from '../../shared/content.js'
import { icons } from './icons.jsx'
import QuoteForm from './QuoteForm.jsx'
import Home from './Home.jsx'
import SignTypes from './SignTypes.jsx'
import Work from './Work.jsx'
import About from './About.jsx'
import Permits from './Permits.jsx'
import Violations from './Violations.jsx'
import Contact from './Contact.jsx'
import css from './editorial.css?inline'

// Inter, the typeface nordvpn.com uses (see docs/nord-vpn-reference.png).
const FONTS = 'https://fonts.googleapis.com/css2?family=Inter:wght@400..800&display=swap'

// The CTA's row of service icons, each glowing in its own colour.
const ctaIcons = [
  ['channel', 'tone-red'], ['neon', 'tone-amber'], ['awning', 'tone-green'],
  ['blade', 'tone-blue'], ['interior', 'tone-purple'], ['permit', 'tone-red'],
]

// Each page, keyed by the `page` App reads from the URL, with its tab title.
// `cta: false` leaves out the closing CTA band (Contact has its own form).
// Every page's HTML entry is listed in vite.config.js.
const pages = {
  home: { Page: Home, title: 'Space Sign — NYC Licensed Sign Maker' },
  signs: { Page: SignTypes, title: 'Sign Types — Space Sign' },
  work: { Page: Work, title: 'Our Work — Space Sign' },
  about: { Page: About, title: 'About Us — Space Sign' },
  permits: { Page: Permits, title: 'NYC Sign Permits — Space Sign' },
  violations: { Page: Violations, title: 'NYC Sign Violations — Space Sign' },
  contact: { Page: Contact, title: 'Contact Us — Space Sign', cta: false },
}

const SIGNS_URL = `${BASE}signs/`
const WORK_URL = `${BASE}work/`
const ABOUT_URL = `${BASE}about/`
const PERMITS_URL = `${BASE}permits/`
const VIOLATIONS_URL = `${BASE}violations/`
const CONTACT_URL = `${BASE}contact/`

// The page links, in the order the header, mobile menu and footer show them:
// what we make, proof, our licensed specialty, then who we are and how to reach us.
const navLinks = [
  [SignTypes, SIGNS_URL, 'Sign Types'],
  [Work, WORK_URL, 'Our Work'],
  [Permits, PERMITS_URL, 'Permits'],
  [Violations, VIOLATIONS_URL, 'Violations'],
  [About, ABOUT_URL, 'About Us'],
  [Contact, CONTACT_URL, 'Contact'],
]

// The site shell: header, CTA band, footer and quote pop-up around the current page.
export default function Editorial({ page }) {
  const { Page, title, cta = true } = pages[page] ?? pages.home
  useDesignAssets(css, FONTS, title)
  const [menuOpen, setMenuOpen] = useState(false)
  const quoteRef = useRef(null)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const current = (P) => (Page === P ? 'page' : undefined)

  // Every "Get a free quote" button opens the quote pop-up.
  const openQuote = useCallback(() => {
    setMenuOpen(false)
    if (!quoteRef.current.open) quoteRef.current.showModal()
  }, [])
  const closeQuote = useCallback(() => quoteRef.current.close(), [])
  // A click on the dialog element itself (not the form inside it) is a click on the backdrop.
  const onQuoteBackdrop = useCallback((e) => {
    if (e.target === e.currentTarget) closeQuote()
  }, [closeQuote])

  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="nav-logo" href={Page === Home ? '#' : BASE} onClick={closeMenu}><img src={`${BASE}assets/logo-black.png`} alt="SPACE SIGN" /></a>
          <nav className="nav-links">
            {navLinks.map(([P, href, label]) => <a key={href} href={href} aria-current={current(P)}>{label}</a>)}
            <button className="btn" type="button" aria-haspopup="dialog" onClick={openQuote}>Get a free quote</button>
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
          {navLinks.map(([P, href, label]) => <a key={href} href={href} aria-current={current(P)} onClick={closeMenu}>{label}</a>)}
          <a className="nav-phone" href={PHONE_TEL} onClick={closeMenu}>{PHONE}</a>
          <button className="btn" type="button" aria-haspopup="dialog" onClick={openQuote}>Get a free quote</button>
        </nav>
      </header>

      <Page onQuote={openQuote} />

      {/* CTA */}
      {cta && <section className="cta dark" id="quote">
        <div className="cta-bg img" style={{ backgroundImage: `url(${BASE}assets/${photos.lightboxKungfu})` }} aria-hidden="true" />
        <div className="wrap">
          <div className="cta-in">
            <div className="cta-icons" aria-hidden="true">
              {ctaIcons.map(([icon, tone]) => <span className={`cta-icon ${tone}`} key={icon}>{icons[icon]}</span>)}
            </div>
            <h2>Ready to <em>light up</em><br />your storefront?</h2>
            <p>Tell us the basics and we'll come back with a budget range and timeline.</p>
            <div className="cta-actions">
              <button className="btn" type="button" aria-haspopup="dialog" onClick={openQuote}>Get a free quote</button>
              <a className="btn ghost" href={PHONE_TEL}>Call {PHONE}</a>
            </div>
            {/* Two unbreakable phrases, so a narrow screen wraps the note only between them. */}
            <p className="cta-note">{icons.check}<span>Free quotes across the Tri-State ·</span> <span>usually within one business day</span></p>
          </div>
        </div>
      </section>}

      <footer>
        <div className="wrap">
          <div className="foot">
            <div className="foot-logo">
              <img src={`${BASE}assets/logo-white.png`} alt="SPACE SIGN" />
              <p className="label" style={{ marginTop: 16, color: 'var(--mute)' }}>Design · Build · Install · Permit</p>
              <div className="foot-social">
                {SOCIAL.map((s) => (
                  <a key={s.id} href={s.url} target="_blank" rel="noreferrer" aria-label={`Space Sign on ${s.name}`}>{icons[s.id]}</a>
                ))}
              </div>
            </div>
            <div className="foot-cols">
              <div className="foot-col"><h5 className="label">Studio</h5>{navLinks.map(([, href, label]) => <a key={href} href={href}>{label}</a>)}</div>
              <div className="foot-col"><h5 className="label">Services</h5><a href={SIGNS_URL}>Channel Letters</a><a href={SIGNS_URL}>LED Neon &amp; Lightbox</a><a href={SIGNS_URL}>Awnings &amp; Vestibules</a><a href={PERMITS_URL}>Permits &amp; Violations</a></div>
              <div className="foot-col">
                <h5 className="label">Contact</h5>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <a href={PHONE_TEL}>{PHONE}</a>
                <a href="https://maps.google.com/?q=15-25+132nd+Street+College+Point+NY+11356" target="_blank" rel="noreferrer">15-25 132nd St, College Point, NY 11356</a>
                <h5 className="label foot-sub">Hours</h5>
                <dl className="foot-hours">
                  {HOURS.map((h) => <div key={h.days}><dt>{h.days}</dt><dd>{h.time}</dd></div>)}
                </dl>
              </div>
            </div>
          </div>
          {/* Two spans in the first line, so on phones the copyright gets a line of its own. */}
          <div className="foot-bottom">
            <span className="foot-legal"><span className="foot-copy">© 2026 Space Sign.</span> <span>NYC Licensed Sign Hanger&nbsp;#215&nbsp;· Fax (718)&nbsp;961-5577.</span></span>
            <span>Design · Build · Install</span>
          </div>
        </div>
      </footer>

      {/* QUOTE POP-UP — native <dialog> traps focus, closes on Esc and sits above the sticky header. */}
      <dialog ref={quoteRef} className="quote-modal" aria-label="Get a free quote" onClick={onQuoteBackdrop}>
        <button className="qm-close" type="button" aria-label="Close" onClick={closeQuote}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18" /></svg>
        </button>
        <QuoteForm />
      </dialog>
    </>
  )
}
