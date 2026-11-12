import { useState, useCallback } from 'react'
import { BASE, signTypes, projects, projectsOf, photos } from '../../shared/content.js'
import PageHero from './PageHero.jsx'
import ProjectGallery from './ProjectGallery.jsx'

// A project's card: its cover photo with a hover caption (business name, when
// known, and sign type) and, for a project of several photos, a count. It's a
// button that opens the project gallery (`onOpen`), so the photo itself has no
// alt text; the caption names it. The homepage's bento, the Sign Types rows and
// the Our Work page's grid use it.
export function WorkTile({ project, onOpen }) {
  const { cover, name, type, photos: all } = project
  return (
    <button type="button" className="cell" aria-haspopup="dialog" onClick={onOpen}>
      <img src={`${BASE}assets/${cover}`} alt="" loading="lazy" />
      <span className="cap">{name && <b>{name}</b>}<span className="label">{type}</span></span>
      {all.length > 1 && (
        <span className="cell-count">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="13" height="13" rx="2" /><path d="M4 16V6a2 2 0 0 1 2-2h10" /></svg>
          {all.length} photos
        </span>
      )}
    </button>
  )
}

// One filter per sign type that has projects, in `signTypes` order, with its projects.
const filters = signTypes
  .map(({ id, title }) => ({ id, title, projects: projectsOf(id) }))
  .filter((f) => f.projects.length)

// The filter named in the URL, /work/?type=<sign type id>, which is how the Sign
// Types page links here. A missing or unknown id shows every project (null).
function typeFromUrl() {
  const id = new URLSearchParams(window.location.search).get('type')
  return filters.some((f) => f.id === id) ? id : null
}

// The Our Work page, /work/ (work/index.html): every project as a card, with a
// filter per sign type; a card opens the project gallery, which steps through
// the cards on show.
export default function Work({ onQuote }) {
  const [type, setType] = useState(typeFromUrl)
  const [gallery, setGallery] = useState(null) // { projects, at } while the gallery is open
  const shown = filters.find((f) => f.id === type)?.projects ?? projects

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
                {f.title.replace(/ Sign$/, '')} <span>{f.projects.length}</span>
              </button>
            ))}
          </div>
          <div className="work work-grid">
            {shown.map((p, k) => <WorkTile key={p.id} project={p} onOpen={() => setGallery({ projects: shown, at: k })} />)}
          </div>
        </div>
      </section>
      {/* the filters are on this page, so the gallery leaves out its "More …" link */}
      <ProjectGallery request={gallery} onClose={() => setGallery(null)} onQuote={onQuote} more={false} />
    </>
  )
}
