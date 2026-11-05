import { useState } from 'react'
import { BASE, signTypes, work, portfolio, photos } from '../../shared/content.js'
import PageHero from './PageHero.jsx'

// A project photo with a hover caption: business name (when known) and sign type.
// The homepage's bento and the Our Work page's grid both use it.
export function WorkTile({ img, name, type }) {
  return (
    <figure className="cell">
      <img src={`${BASE}assets/${img}`} alt={name ? `${name}, ${type}` : type} loading="lazy" />
      <figcaption className="cap">{name && <b>{name}</b>}<span className="label">{type}</span></figcaption>
    </figure>
  )
}

// Every photo: `work` first, then the gallery photos by sign type.
const all = [
  ...work,
  ...portfolio.flatMap(({ type, photos }) => photos.map(({ file, name }) => ({ img: `portfolio/${file}`, name, type }))),
]

// One filter per sign type that has photos, in `signTypes` order, with its count.
const filters = signTypes
  .map(({ title }) => [title, all.filter((p) => p.type === title).length])
  .filter(([, n]) => n)

// The Our Work page, /work/ (work/index.html).
export default function Work({ onQuote }) {
  const [type, setType] = useState(null) // null shows every photo
  const shown = type ? all.filter((p) => p.type === type) : all

  return (
    <>
      <PageHero title="Our work" img={photos.lightbox} onQuote={onQuote}>
        Storefront, illuminated and interior signs we&rsquo;ve designed, built and installed across NYC and the Tri-State area.
      </PageHero>
      <section className="sec">
        <div className="wrap">
          <div className="work-filters" role="group" aria-label="Filter by sign type">
            <button type="button" aria-pressed={!type} onClick={() => setType(null)}>All <span>{all.length}</span></button>
            {filters.map(([t, n]) => (
              <button type="button" key={t} aria-pressed={type === t} onClick={() => setType(t)}>
                {t.replace(/ Sign$/, '')} <span>{n}</span>
              </button>
            ))}
          </div>
          <div className="work work-grid">
            {shown.map((p) => <WorkTile key={p.img} {...p} />)}
          </div>
        </div>
      </section>
    </>
  )
}
