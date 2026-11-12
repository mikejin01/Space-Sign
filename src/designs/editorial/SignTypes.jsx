import { useState, useEffect, useRef } from 'react'
import { BASE, signTypes, projectsOf, photos } from '../../shared/content.js'
import PageHero from './PageHero.jsx'
import { WorkTile } from './Work.jsx'

const SIGNS_URL = `${BASE}signs/`

// Sign-type cards (photo, title, one line of copy), each linking to its row on
// the Sign Types page. The homepage shows the first four.
export function SignTypeGrid({ items, className }) {
  return (
    <div className={className ? `svc ${className}` : 'svc'}>
      {items.map((s) => (
        <a className="svc-card" key={s.id} href={`${SIGNS_URL}#${s.id}`}>
          <div className="svc-img"><img src={`${BASE}assets/signs/${s.img}`} alt={s.alt} loading="lazy" /></div>
          <h3>{s.title}</h3>
          <p>{s.copy}</p>
        </a>
      ))}
    </div>
  )
}

// The sign-type name without a trailing "Sign", for the category bar.
const short = (title) => title.replace(/ Sign$/, '')

// The sticky bar of sign types under the page hero. Each link jumps to its row;
// the row being read is marked (aria-current), and on a narrow screen, where
// the bar scrolls sideways, the marked link is kept in view.
function TypeNav() {
  const [active, setActive] = useState(null)
  const barRef = useRef(null)

  // A row is "being read" while it crosses a thin band a little above the
  // middle of the screen. The rows touch, so once the list is reached one is
  // always in the band; above the first row, none is.
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        setActive((a) => (e.isIntersecting ? e.target.id : a === e.target.id ? null : a))
      }
    }, { rootMargin: '-35% 0px -60% 0px' })
    signTypes.forEach((s) => { const row = document.getElementById(s.id); if (row) io.observe(row) })
    return () => io.disconnect()
  }, [])

  // Scroll the bar itself, never the page, so a link's own jump isn't disturbed.
  useEffect(() => {
    const bar = barRef.current
    const link = bar?.querySelector('[aria-current]')
    if (!link || bar.scrollWidth <= bar.clientWidth) return
    bar.scrollTo({ left: link.offsetLeft - (bar.clientWidth - link.offsetWidth) / 2, behavior: 'smooth' })
  }, [active])

  return (
    <nav className="st-nav" aria-label="Sign types" ref={barRef}>
      <div className="st-nav-in">
        {signTypes.map((s) => (
          <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined}>{short(s.title)}</a>
        ))}
      </div>
    </nav>
  )
}

// How many photos a row's strip holds. A type with more photos shows one fewer
// and ends with a tile counting the rest, which opens Our Work on that type.
const STRIP = 5

// One sign type: its title and description, its buttons, and a strip of its photos.
function SignTypeRow({ id, title, details, onQuote }) {
  const all = projectsOf(id)
  const more = all.length > STRIP
  const shown = more ? all.slice(0, STRIP - 1) : all
  const workUrl = `${BASE}work/?type=${id}`

  return (
    <article className="st-row" id={id}>
      <div className="st-head">
        <div className="st-text">
          <h2>{title}</h2>
          <p>{details}</p>
        </div>
        <div className="st-actions">
          {more && <a className="btn ghost" href={workUrl}>See all {all.length} photos</a>}
          <button className="btn" type="button" aria-haspopup="dialog" onClick={() => onQuote(id)}>Get a free quote</button>
        </div>
      </div>
      {shown.length > 0 && (
        <div className="work st-strip">
          {shown.map((p) => <WorkTile key={p.img} {...p} />)}
          {more && (
            <a className="cell st-more" href={workUrl} aria-label={`See all ${all.length} ${title} photos`}>
              <img src={`${BASE}assets/${all[STRIP - 1].img}`} alt="" loading="lazy" />
              <span aria-hidden="true">+{all.length - shown.length}<small>more</small></span>
            </a>
          )}
        </div>
      )}
    </article>
  )
}

// The Sign Types page, /signs/ (signs/index.html): one row per sign type under a
// sticky bar of them. The intro is lightly edited from spacesign.com/signs. The
// bar and rows share a wrapper, so the bar stops sticking after the last row.
// `onQuote(id)` opens the quote pop-up with that sign type chosen.
export default function SignTypes({ onQuote }) {
  return (
    <>
      <PageHero title="Sign types" img={photos.heroLetters} onQuote={onQuote}>
        Our creative team works closely with each customer to produce all types of signs — custom or traditional. Our process covers custom layouts, fabrication and installation.
      </PageHero>
      <div className="st">
        <TypeNav />
        <section className="sec st-list">
          <div className="wrap">
            {signTypes.map((s) => <SignTypeRow key={s.id} {...s} onQuote={onQuote} />)}
          </div>
        </section>
      </div>
    </>
  )
}
