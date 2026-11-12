import { useState, useEffect, useCallback } from 'react'
import { BASE, MAPS_URL, LICENSE, SINCE, heroSlides, signTypes, clients } from '../../shared/content.js'
import { projects } from '../../shared/projects.js'
import { icons } from './icons.jsx'
import QuoteForm from './QuoteForm.jsx'
import { SignTypeGrid } from './SignTypes.jsx'
import { WorkTile } from './Work.jsx'
import ProjectGallery from './ProjectGallery.jsx'

// The homepage sections. The shell (Editorial.jsx) adds the header, CTA band and
// footer around them; `onQuote` opens its quote pop-up, and `onQuote(id)` opens
// it with that service chosen.
export default function Home({ onQuote }) {
  const [slide, setSlide] = useState(0)
  const [gallery, setGallery] = useState(null) // { projects, at } while the project gallery is open
  const go = useCallback((n) => setSlide((s) => (n + heroSlides.length) % heroSlides.length), [])

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* FIRST SCREEN — the hero and the license banner, so the banner shows without scrolling */}
      <div className="fold">
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
                <div className="hero-kicker label">NYC Licensed Sign Hanger #215 · Est. 1987</div>
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

              <QuoteForm />
            </div>
          </div>
        </section>

        {/* LICENSE BANNER */}
        <section className="license">
          <div className="wrap">
            <p className="license-line">
              Space Sign is a <span className="nyc">NYC</span> Licensed Sign Hanger <span className="lic">(#215)</span>
            </p>
            <p className="license-sub">We also help with <a href={`${BASE}violations/`}>violation removals</a> for DOB &amp; ECB sign violations.</p>
          </div>
        </section>
      </div>

      {/* TRUST */}
      <div className="wrap">
        <div className="trust">
          <div><div className="n"><em>37</em>+</div><div className="l">Years in business · since 1987</div></div>
          <div><div className="n">#215</div><div className="l">NYC Licensed Sign Hanger</div></div>
          <div><div className="n">4.9<em className="star">★</em></div><div className="l">Average customer rating</div></div>
          <div><div className="n">NY·NJ·CT</div><div className="l">Tri-State service area</div></div>
        </div>
      </div>

      {/* SIGN TYPES — the first four; the Sign Types page has all of them */}
      <section className="sec" id="sign-types">
        <div className="wrap">
          <div className="sec-head">
            <h2>Sign types</h2>
            <p>One roof for the whole job — the design you approve is the sign we fabricate, permit and install.</p>
          </div>
          <SignTypeGrid items={signTypes.slice(0, 4)} className="svc-row" />
          <div className="sec-more">
            <a className="btn ghost" href={`${BASE}signs/`}>View all sign types</a>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="sec" id="clients">
        <div className="wrap">
          <div className="sec-head">
            <h2>Brands we've lit up</h2>
            <p>National chains and neighborhood shops — a few of the Tri-State businesses we've built signs for.</p>
          </div>
          {/* Two copies of the logos so the -50% loop point is seamless; the copy is hidden from screen readers. */}
          <div className="logo-marquee">
            <div className="logo-track">
              {[0, 1].map((copy) => clients.map((c) => (
                <div className="logo" key={`${copy}-${c.file}`} aria-hidden={copy ? true : undefined}>
                  <img src={`${BASE}assets/clients/${c.file}.png`} alt={copy ? '' : c.name} />
                  {/* Hover caption. Hidden from screen readers because the img alt already names the brand. */}
                  <span className="logo-name label" aria-hidden="true">{c.name}</span>
                </div>
              )))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — a short bio; the About Us page has the full story */}
      <section className="sec" id="about">
        <div className="wrap">
          <div className="sec-head">
            <h2>About us</h2>
          </div>
          <div className="about">
            <div className="about-logo">
              <img src={`${BASE}assets/logo-black-large.png`} alt="Space Sign" width="506" height="109" />
            </div>
            <div className="about-bio">
              <p>Since 1987, Space Sign has designed, built and installed storefront signs from our shop in College Point, Queens. Every sign is made under one roof in our purpose-built factory, where traditional craft meets the latest sign technology. As a NYC Licensed Sign Hanger (#215), our in-house permit department also handles DOB permits and violation removal — so one team takes your sign from first sketch to final inspection, anywhere from East Long Island to New Jersey.</p>
              <ul className="about-facts label">
                <li>Est. {SINCE}</li>
                <li>Licensed {LICENSE}</li>
                <li><a href={MAPS_URL} target="_blank" rel="noreferrer">College Point, Queens</a></li>
              </ul>
            </div>
          </div>
          <div className="sec-more">
            <a className="btn ghost" href={`${BASE}about/`}>More about us</a>
          </div>
        </div>
      </section>

      {/* WORK — five named photos; the Our Work page has all of them */}
      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-head">
            <h2>Our work</h2>
            <p>A cross-section of recent storefront, illuminated and interior programs across NYC.</p>
          </div>
          <div className="work work-bento">
            {projects.slice(0, 5).map((p, k) => <WorkTile key={p.id} project={p} onOpen={() => setGallery({ projects, at: k })} />)}
          </div>
          <div className="sec-more">
            <a className="btn ghost" href={`${BASE}work/`}>View all work</a>
          </div>
        </div>
      </section>

      {/* PERMITS & VIOLATIONS — copy verbatim from spacesign.com (see BUSINESS-INFO.md);
          the Permits and Violations pages have the rest */}
      <section className="sec" id="permits">
        <div className="wrap">
          <div className="sec-head">
            <h2>Permits &amp; violations</h2>
          </div>
          <div className="panels pair">
            <article className="panel blue">
              <div className="panel-icon">{icons.permit}</div>
              <h3>DOB Sign Permits</h3>
              <p>All signs require Sign Permits issued by the NYC Department of Buildings (DOB). NYC Licensed Sign Hangers are the only persons legally allowed to pull a Sign Permit in NYC.</p>
              <p>As Licensed Sign Hanger #215, we prepare the drawings and file the permit for you.</p>
              <div className="panel-actions">
                <button className="btn" type="button" aria-haspopup="dialog" onClick={() => onQuote('permit')}>Get a free quote</button>
                <a className="text-link" href={`${BASE}permits/`}>How sign permits work <span aria-hidden="true">→</span></a>
              </div>
            </article>
            <article className="panel dark" id="violations">
              <div className="panel-icon tone-red">{icons.violation}</div>
              <h3>DOB &amp; ECB Violations</h3>
              <p>NYC DOB and NYC ECB issue violations for all types of signs, awnings, and canopies that are in violation of the NYC Administrative Codes. NYC Sign Violations can only be corrected and cleared by NYC Licensed Sign Hangers.</p>
              <div className="panel-actions">
                <button className="btn" type="button" aria-haspopup="dialog" onClick={() => onQuote('violation')}>Get a free quote</button>
                <a className="text-link" href={`${BASE}violations/`}>How we clear violations <span aria-hidden="true">→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* the "Our work" cards open it, and it steps on through every project */}
      <ProjectGallery request={gallery} onClose={() => setGallery(null)} onQuote={onQuote} />
    </>
  )
}
