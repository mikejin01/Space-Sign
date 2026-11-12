import { useState, useEffect, useRef, useCallback } from 'react'
import { BASE, signTypes } from '../../shared/content.js'

const src = (img) => `${BASE}assets/${img}`
const short = (title) => title.replace(/ Sign$/, '')
const chevron = (d) => <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>

// The project gallery pop-up, opened from a photo card on the Our Work page, the
// Sign Types rows and the homepage. The photo sits on a dark stage with arrows
// and a strip of the project's photos, beside the project's details and a quote
// button; on narrow screens the details go below.
//
// `request` is { projects, at } (the list the card is in, and its index), or
// null when closed. The arrows, ← → and a swipe step through the project's
// photos and on into the next or previous project in that list. The quote button
// closes the gallery first, so focus returns to the card, then opens the quote
// pop-up with the sign type chosen and a message suggested. `more` adds a link
// to Our Work filtered to the project's type.
export default function ProjectGallery({ request, onClose, onQuote, more = true }) {
  const ref = useRef(null)
  const swipe = useRef(null) // where a touch began
  const [shown, setShown] = useState(null) // the request on screen
  const [pos, setPos] = useState({ p: 0, i: 0 }) // project index, photo index

  // A new request starts at its card's first photo. (Adjusting state while
  // rendering, as React advises for a prop change, avoids a frame of the old one.)
  if (request !== shown) {
    setShown(request)
    if (request) setPos({ p: request.at, i: 0 })
  }

  useEffect(() => {
    if (request && !ref.current.open) ref.current.showModal()
  }, [request])

  const list = request?.projects
  const project = list?.[pos.p]
  const n = project?.photos.length ?? 0
  const photo = project?.photos[pos.i]
  const name = photo?.name ?? project?.name
  const type = project && signTypes.find((t) => t.id === project.typeId)

  // One photo on, or back; past either end of a project, into the next or previous one.
  const step = useCallback((d) => setPos(({ p, i }) => {
    if (i + d >= 0 && i + d < list[p].photos.length) return { p, i: i + d }
    const q = p + d
    if (q < 0 || q >= list.length) return { p, i }
    return { p: q, i: d > 0 ? 0 : list[q].photos.length - 1 }
  }), [list])

  // Fetch the photos either side, so stepping shows them at once.
  useEffect(() => {
    if (!list) return
    const near = [list[pos.p]?.photos[pos.i + 1], list[pos.p]?.photos[pos.i - 1],
      list[pos.p + 1]?.photos[0], list[pos.p - 1]?.photos.at(-1)]
    for (const ph of near) if (ph) new Image().src = src(ph.img)
  }, [list, pos])

  const close = () => ref.current.close()

  const quote = () => {
    const message = name
      ? `I'd like a sign like the one you made for ${name}.`
      : `I'd like a sign like one of your ${short(project.type).toLowerCase()} projects.`
    close()
    onQuote(project.typeId, message)
  }

  // A sideways swipe on the stage steps; a mostly vertical one scrolls as usual.
  const onPointerDown = (e) => { if (e.pointerType !== 'mouse') swipe.current = { x: e.clientX, y: e.clientY } }
  const onPointerUp = (e) => {
    const s = swipe.current
    swipe.current = null
    if (!s) return
    const dx = e.clientX - s.x
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(e.clientY - s.y)) step(dx < 0 ? 1 : -1)
  }

  const atStart = pos.p === 0 && pos.i === 0
  const atEnd = list && pos.p === list.length - 1 && pos.i === n - 1
  const title = name ?? `${short(project?.type ?? '')} project`

  return (
    <dialog
      ref={ref}
      className="gallery-modal"
      aria-label={project ? title : 'Project photos'}
      onClose={onClose}
      onClick={(e) => { if (e.target === e.currentTarget) close() }} // the backdrop
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') step(1)
        if (e.key === 'ArrowLeft') step(-1)
      }}
    >
      {project && (
        <>
          <button className="qm-close gm-close" type="button" aria-label="Close" onClick={close}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18" /></svg>
          </button>
          <div className="gm">
            <div className="gm-media">
              <div className="gm-stage" onPointerDown={onPointerDown} onPointerUp={onPointerUp}
                onPointerCancel={() => { swipe.current = null }}>
                <img key={photo.img} src={src(photo.img)} draggable="false"
                  alt={`${name ? `${name}, ` : ''}${project.type}${n > 1 ? `, photo ${pos.i + 1} of ${n}` : ''}`} />
                <button className="gm-arrow prev" type="button" disabled={atStart} onClick={() => step(-1)}
                  aria-label={pos.i > 0 ? 'Previous photo' : 'Previous project'}>{chevron('m15 5-7 7 7 7')}</button>
                <button className="gm-arrow next" type="button" disabled={atEnd} onClick={() => step(1)}
                  aria-label={pos.i < n - 1 ? 'Next photo' : 'Next project'}>{chevron('m9 5 7 7-7 7')}</button>
              </div>
              <div className="gm-bar">
                {n > 1 && (
                  <div className="gm-thumbs">
                    {project.photos.map((ph, k) => (
                      <button key={ph.img} type="button" aria-label={`Photo ${k + 1} of ${n}`}
                        aria-current={k === pos.i ? 'true' : undefined} onClick={() => setPos({ p: pos.p, i: k })}>
                        <img src={src(ph.img)} alt="" />
                      </button>
                    ))}
                  </div>
                )}
                <p className="gm-count" aria-live="polite">
                  {n > 1 && `Photo ${pos.i + 1} of ${n} · `}Project {pos.p + 1} of {list.length}
                </p>
              </div>
            </div>
            <div className="gm-info">
              <span className="gm-type label">{project.type}</span>
              <h2>{title}</h2>
              <p className="gm-caption">{project.caption}</p>
              <p className="gm-details">{type.details}</p>
              <div className="gm-actions">
                <button className="btn" type="button" aria-haspopup="dialog" onClick={quote}>Get a free quote</button>
                {more && (
                  <a className="text-link" href={`${BASE}work/?type=${project.typeId}`}>
                    More {short(project.type)} projects <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </dialog>
  )
}
