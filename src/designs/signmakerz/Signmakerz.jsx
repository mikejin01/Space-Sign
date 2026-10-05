import { useEffect, useRef, useState } from 'react'
import useDesignAssets from '../../shared/useDesignAssets.js'
import {
  asset, PHONE, PHONE_TEL, EMAIL, FAX, ADDRESS, MAPS_URL, LICENSE, SINCE, RATING, photos, gallery, reviews, faqs,
  steps, serviceAreas, sendQuoteEmail,
} from '../../shared/content.js'
import css from './signmakerz.css?inline'

const FONTS = 'https://fonts.googleapis.com/css2?family=Young+Serif&family=Archivo:wght@400;500;600;700;800&display=swap'

const signTypes = [
  { title: 'Channel Letters', img: photos.channel, copy: 'Front-lit, halo back-lit and front-&-back-lit channel letters, fabricated in-house and built to read clearly from across the street, day and night.' },
  { title: 'LED Neon Signs', img: photos.neonInterior, copy: 'Energy-efficient LED neon in any color or script — bright, even glow that outlasts traditional glass neon, for windows, walls and interiors.' },
  { title: 'Lightbox Signs', img: photos.lightboxKungfu, copy: 'Illuminated cabinet and push-thru signs with even LED lighting, sized to your storefront fascia and finished in your brand colors.' },
  { title: 'Blade Signs', img: photos.blade, copy: 'Projecting blade signs that catch foot traffic from both directions, engineered and permitted for NYC sidewalks.' },
  { title: 'Carved Signs', img: photos.carved, copy: 'Carved and dimensional signs with gilded or painted lettering — a hand-crafted look for boutiques, cafés and florists.' },
  { title: 'Awnings & Vestibules', img: photos.vestibule, copy: 'Custom awnings, canopies and storefront vestibules that protect the entrance and carry your name to the curb.' },
  { title: 'Interior Signs', img: photos.interior, copy: 'Lobby logos, 3D letters and wayfinding that finish a space and greet every customer the moment they walk in.' },
  { title: 'Permits & Violations', img: photos.permits, copy: `As a NYC Licensed Sign Hanger (${LICENSE}) we pull DOB sign permits and clear DOB & ECB sign violations.` },
]

const mockups = [
  { id: 'channel', title: 'Channel Letters', sub: 'Front & halo lit', img: photos.channelBareburger, badge: 'Best seller' },
  { id: 'lightbox', title: 'Lightbox', sub: 'Cabinet signs', img: photos.lightbox, badge: 'Popular' },
  { id: 'blade', title: 'Blade', sub: 'Projecting signs', img: photos.blade, badge: 'Popular' },
]

const tilted = [photos.channelBareburger, photos.neon, photos.lightboxKungfu]
const portfolio = gallery.slice(0, 14)
const reviewPhotos = [photos.channel, photos.storefrontOren, photos.lightbox, photos.awning, photos.blade, photos.bareburgerStore]

const Check = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" /><path d="M6 10.3l2.6 2.5L14 7.4" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
)
const Stars = ({ n = 5 }) => (
  <span className="mz-stars" aria-label={`${n} out of 5 stars`}>{'★★★★★'.slice(0, n)}</span>
)
const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
)
const ICONS = {
  house: 'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  sun: 'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
  lock: 'M6 11h12v10H6zM8 11V7a4 4 0 0 1 8 0v4',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
  tag: 'M3 12V4h8l10 10-8 8zM7.5 7.5h.01',
  phone: 'M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z',
  badge: 'M12 2l2.4 2.1 3.2-.4.9 3.1 2.8 1.6-1.3 3 1.3 3-2.8 1.6-.9 3.1-3.2-.4L12 22l-2.4-2.1-3.2.4-.9-3.1-2.8-1.6 1.3-3-1.3-3 2.8-1.6.9-3.1 3.2.4z',
}

export default function Signmakerz() {
  useDesignAssets(css, FONTS, 'Custom Storefront Signs — Space Sign')
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [place, setPlace] = useState('Outdoor')
  const [types, setTypes] = useState(['channel'])
  const [sent, setSent] = useState(false)
  const stripRef = useRef(null)
  // start the portfolio strip centered, so photos run off both edges like the reference
  useEffect(() => {
    const el = stripRef.current
    if (el) el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2
  }, [])
  const onField = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const toggleType = (id) => setTypes((t) => (t.includes(id) ? t.filter((x) => x !== id) : [...t, id]))
  const onSubmit = (e) => {
    e.preventDefault()
    const typeNames = mockups.filter((m) => types.includes(m.id)).map((m) => m.title).join(', ') || 'Not sure yet'
    sendQuoteEmail({ ...form, extra: { 'Indoor / outdoor': place, 'Sign type': typeNames } })
    setSent(true)
  }

  return (
    <div className="mz">
      <header className="mz-top">
        <a href="#top" aria-label="Space Sign home"><img src={asset('logo-white.png')} alt="Space Sign" /></a>
      </header>

      <section className="mz-hero" id="top" style={{ '--mz-hero-img': `url(${asset(photos.heroStorefront)})` }}>
        <div className="mz-wrap mz-hero-grid">
          <div className="mz-hero-left">
            <span className="mz-badge"><i />Free design mockup · NYC Licensed {LICENSE}</span>
            <h1>Custom Storefront Signs — Space Sign</h1>
            <p className="mz-hero-p">
              Channel letters, LED neon, lightbox, blade and carved signs, awnings and interior signage for storefronts,
              offices and restaurants. Send us your logo for a free sign design and estimate — designed, permitted,
              fabricated and installed by one team in Queens.
            </p>
            <ul className="mz-bullets">
              <li><Check />Free design mockup and estimate, no obligation</li>
              <li><Check />NYC Licensed Sign Hanger {LICENSE} — we pull the DOB permit</li>
              <li><Check />Built in our College Point factory, installed across the Tri-State</li>
            </ul>
            <div className="mz-tilted" aria-hidden="true">
              {tilted.map((src) => <img key={src} src={asset(src)} alt="" />)}
            </div>
          </div>

          <form className="mz-card" onSubmit={onSubmit}>
            <div className="mz-card-strip">
              <span><Icon d={ICONS.badge} />Licensed &amp; insured <b>· NYC {LICENSE}</b></span>
              <a href={PHONE_TEL}><Icon d={ICONS.phone} />{PHONE}</a>
            </div>
            <div className="mz-card-body">
              <h2>Tell us about your sign.</h2>
              <p className="mz-card-lead">Name, phone and email to start, everything else is optional.</p>

              <fieldset className="mz-fs">
                <legend>Contact information <sup>*</sup></legend>
                <div className="mz-fs-body mz-grid2">
                  <label>Your name<input name="name" value={form.name} onChange={onField} placeholder="First and last name" autoComplete="name" required /></label>
                  <label>Phone<input name="phone" type="tel" value={form.phone} onChange={onField} placeholder="(555) 123-4567" autoComplete="tel" required /></label>
                  <label className="mz-span2">Email<input name="email" type="email" value={form.email} onChange={onField} placeholder="you@yourbusiness.com" autoComplete="email" required /></label>
                </div>
              </fieldset>

              <fieldset className="mz-fs">
                <legend>Sign details <em>Optional</em></legend>
                <div className="mz-fs-body">
                  <span className="mz-label">Indoor or outdoor?</span>
                  <div className="mz-toggle" role="radiogroup" aria-label="Indoor or outdoor">
                    {[['Indoor', ICONS.house], ['Outdoor', ICONS.sun]].map(([v, d]) => (
                      <button key={v} type="button" role="radio" aria-checked={place === v} className={place === v ? 'on' : ''} onClick={() => setPlace(v)}>
                        <Icon d={d} />{v}
                      </button>
                    ))}
                  </div>
                  <span className="mz-label">Select sign type(s)</span>
                  <div className="mz-tiles">
                    {mockups.map((m) => (
                      <button key={m.id} type="button" aria-pressed={types.includes(m.id)} className={`mz-tile${types.includes(m.id) ? ' on' : ''}`} onClick={() => toggleType(m.id)}>
                        <img src={asset(m.img)} alt="" />
                        <span className="mz-tile-t">{m.title}</span>
                        <span className="mz-tile-s">{m.sub}</span>
                        <span className="mz-tile-b">{m.badge}</span>
                      </button>
                    ))}
                  </div>
                  <label className="mz-label-block">Project details
                    <textarea name="message" value={form.message} onChange={onField} rows={3} placeholder="Storefront size, address, budget, timeline…" />
                  </label>
                </div>
              </fieldset>

              <button className="mz-submit" type="submit">{sent ? 'Opening your email…' : 'Get My Free Quote'} <span aria-hidden="true">›</span></button>
              <div className="mz-card-foot">
                <span><Icon d={ICONS.lock} />No spam</span>
                <span><Icon d={ICONS.clock} />1-day reply</span>
                <span><Icon d={ICONS.tag} />Free estimate</span>
              </div>
            </div>
          </form>
        </div>
      </section>

      <div className="mz-trust">
        <span><b className="mz-copper">★</b> {RATING} rating</span>
        <span>Since {SINCE}</span>
        <span>NYC Licensed {LICENSE}</span>
        <span>Tri-State service</span>
      </div>

      <section className="mz-sec mz-tint" id="types">
        <div className="mz-wrap">
          <div className="mz-head">
            <span className="mz-eyebrow">Browse by sign type</span>
            <h2>Storefront signage for every kind of business.</h2>
            <p>Indoor and outdoor signs for business, built under one roof in Queens. Pick a sign type to see what we make.</p>
          </div>
          <div className="mz-cats">
            {signTypes.map((c, i) => (
              <a className="mz-cat" href="#top" key={c.title}>
                <span className="mz-cat-img" style={{ backgroundImage: `url(${asset(c.img)})` }}>
                  <span className="mz-cat-n">{String(i + 1).padStart(2, '0')}</span>
                </span>
                <span className="mz-cat-body">
                  <h3>{c.title}</h3>
                  <p>{c.copy}</p>
                  <span className="mz-cat-btn">Explore Sign</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mz-sec mz-portfolio" id="work">
        <div className="mz-head">
          <span className="mz-eyebrow">Portfolio</span>
          <h2>Signs we&rsquo;ve installed lately.</h2>
        </div>
        <div className="mz-strip" ref={stripRef}>
          {portfolio.map((g) => <img key={g.img} src={asset(g.img)} alt={`${g.name} — ${g.type}`} loading="lazy" />)}
        </div>
      </section>

      <section className="mz-sec mz-dark" id="how">
        <div className="mz-wrap">
          <div className="mz-head">
            <span className="mz-eyebrow">How it works</span>
            <h2>From sketch to installed sign.</h2>
          </div>
          <ol className="mz-steps">
            {steps.map((s, i) => (
              <li key={s.h}>
                <span className="mz-step-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mz-sec mz-tint" id="reviews">
        <div className="mz-wrap">
          <div className="mz-head">
            <span className="mz-eyebrow">Word of mouth</span>
            <h2>Built for people who notice details.</h2>
          </div>
          <div className="mz-rev-summary"><Stars /> <b>{RATING}</b> average · {reviews.length} recent reviews</div>
          <div className="mz-reviews">
            {reviews.map((r, i) => (
              <article className="mz-review" key={r.name}>
                <img src={asset(reviewPhotos[i % reviewPhotos.length])} alt="" loading="lazy" />
                <div className="mz-review-body">
                  <p className="mz-review-name">{r.name} <span className="mz-verified" aria-label="Verified">✓</span></p>
                  <p className="mz-review-date">{r.date} · {r.place}</p>
                  <Stars />
                  <p>{r.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mz-sec mz-faq" id="faq">
        <div className="mz-wrap">
          <div className="mz-head">
            <span className="mz-eyebrow">Questions</span>
            <h2>Before you ask.</h2>
          </div>
          <div className="mz-faq-list">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mz-cta mz-dark">
        <span className="mz-eyebrow">Custom storefront signs · Free estimate</span>
        <h2>Your storefront sign is waiting.</h2>
        <p>Send your logo and storefront photo today and get a free design and quote within one business day.</p>
        <div className="mz-cta-btns">
          <a className="mz-btn" href="#top">Get My Free Quote →</a>
          <a className="mz-btn-ghost" href={PHONE_TEL}>Call {PHONE}</a>
        </div>
      </section>

      <footer className="mz-footer">
        <div className="mz-wrap mz-foot-grid">
          <div className="mz-foot-brand">
            <img src={asset('logo-white.png')} alt="Space Sign" />
            <p>Channel letters, LED neon, lightbox and blade signs, awnings and interior signage — designed, permitted, built and installed in-house since {SINCE}.</p>
          </div>
          <FootCol title="Signs">
            {signTypes.slice(0, 7).map((s) => <a key={s.title} href="#types">{s.title}</a>)}
          </FootCol>
          <FootCol title="Company">
            <a href="#top">Home</a><a href="#work">Portfolio</a><a href="#top">Get a Free Quote</a><a href="#how">How it Works</a><a href="#faq">Permits &amp; FAQ</a>
          </FootCol>
          <FootCol title="Service Area">
            {serviceAreas.map((a) => <span key={a}>{a}</span>)}
          </FootCol>
          <FootCol title="Contact" className="mz-foot-contact">
            <a href={PHONE_TEL}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <div className="mz-foot-rating"><b>{RATING}</b><span><Stars />Customer rating</span></div>
            <span>Fax {FAX}</span>
            <a href={MAPS_URL} target="_blank" rel="noreferrer">{ADDRESS}</a>
          </FootCol>
        </div>
        <div className="mz-wrap mz-foot-bottom">
          <span>© 2026 Space Sign. All rights reserved.</span>
          <span>NYC Licensed Sign Hanger {LICENSE} · Proudly serving the Tri-State since {SINCE}</span>
        </div>
      </footer>
    </div>
  )
}

// Footer column: always open on desktop, an accordion on mobile (like the reference).
function FootCol({ title, className = '', children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`mz-foot-col ${className}${open ? ' open' : ''}`}>
      <h5>
        <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {title}<span aria-hidden="true">+</span>
        </button>
      </h5>
      <div className="mz-foot-links">{children}</div>
    </div>
  )
}
