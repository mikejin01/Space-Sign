import { useState, useCallback } from 'react'
import { BASE, signTypes, projects, projectsOf, photos } from '../../shared/content.js'
import PageHero from './PageHero.jsx'

// A project photo with a hover caption: business name (when known) and sign type.
// The homepage's bento, the Sign Types rows and the Our Work page's grid use it.
export function WorkTile({ img, name, type }) {
  return (
    <figure className="cell">
      <img src={`${BASE}assets/${img}`} alt={name ? `${name}, ${type}` : type} loading="lazy" />
      <figcaption className="cap">{name && <b>{name}</b>}<span className="label">{type}</span></figcaption>
    </figure>
  )
}

// One filter per sign type that has photos, in `signTypes` order, with its photos.
const filters = signTypes
  .map(({ id, title }) => ({ id, title, photos: projectsOf(id) }))
  .filter((f) => f.photos.length)

// The filter named in the URL, /work/?type=<sign type id>, which is how the Sign
// Types page links here. A missing or unknown id shows every photo (null).
function typeFromUrl() {
  const id = new URLSearchParams(window.location.search).get('type')
  return filters.some((f) => f.id === id) ? id : null
}

// The Our Work page, /work/ (work/index.html).
export default function Work({ onQuote }) {
  const [type, setType] = useState(typeFromUrl)
  const shown = filters.find((f) => f.id === type)?.photos ?? projects

  // Keep the URL in step, so a filtered view can be shared or bookmarked.
  // replaceState, so Back still leaves the page rather than stepping through filters.
  const choose = useCallback((id) => {
    setType(id)
    const url = new URL(window.location.href)
    if (id) url.searchParams.set('type', id)
    else url.searchParams.delete('type')
    history.replaceState(history.state, '', url)
  }, [])

  return (
    <>
      <PageHero title="Our work" img={photos.lightbox} onQuote={onQuote}>
        Storefront, illuminated and interior signs we&rsquo;ve designed, built and installed across NYC and the Tri-State area.
      </PageHero>
      <section className="sec">
        <div className="wrap">
          <div className="work-filters" role="group" aria-label="Filter by sign type">
            <button type="button" aria-pressed={!type} onClick={() => choose(null)}>All <span>{projects.length}</span></button>
            {filters.map((f) => (
              <button type="button" key={f.id} aria-pressed={type === f.id} onClick={() => choose(f.id)}>
                {f.title.replace(/ Sign$/, '')} <span>{f.photos.length}</span>
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
