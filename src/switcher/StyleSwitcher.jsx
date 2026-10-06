import { useCallback, useEffect, useId, useRef, useState } from 'react'
import './StyleSwitcher.css'

// Diagonal 2–3 color split, e.g. ['#fff', '#e1251b', '#000'].
export function swatchBackground(colors) {
  const step = 100 / colors.length
  const stops = colors.map((c, i) => `${c} ${i * step}% ${(i + 1) * step}%`)
  return `linear-gradient(135deg, ${stops.join(', ')})`
}

export default function StyleSwitcher({ designs, activeId, onSelect }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const pillRef = useRef(null)
  const rowRefs = useRef([])
  const menuId = useId()
  const active = designs.find((d) => d.id === activeId)
  const lift = useCtaAvoidance(pillRef, active.cta, open)

  const close = useCallback((refocus) => {
    setOpen(false)
    if (refocus) pillRef.current?.focus()
  }, [])

  // Preload every design so switching feels instant, and focus the active row.
  useEffect(() => {
    if (!open) return
    designs.forEach((d) => d.load())
    const i = designs.findIndex((d) => d.id === activeId)
    rowRefs.current[i]?.focus()
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  // Outside click and Escape close the panel.
  useEffect(() => {
    if (!open) return
    const onPointer = (e) => {
      if (rootRef.current?.contains(e.target)) return
      close(rootRef.current?.contains(document.activeElement))
    }
    const onKey = (e) => {
      if (e.key === 'Escape') close(true)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  // Tabbing out of the switcher closes it without stealing focus back.
  const onBlur = (e) => {
    if (open && e.relatedTarget && !rootRef.current?.contains(e.relatedTarget)) setOpen(false)
  }

  const onMenuKey = (e) => {
    const rows = rowRefs.current.filter(Boolean)
    const i = rows.indexOf(document.activeElement)
    let next = null
    if (e.key === 'ArrowDown') next = (i + 1) % rows.length
    else if (e.key === 'ArrowUp') next = (i - 1 + rows.length) % rows.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = rows.length - 1
    if (next === null) return
    e.preventDefault()
    rows[next].focus()
  }

  const choose = (id) => {
    onSelect(id)
    close(true)
  }

  return (
    <div className="ss-root" ref={rootRef} onBlur={onBlur} style={lift ? { transform: `translateY(${-lift}px)` } : undefined}>
      {open && (
        <div className="ss-panel" id={menuId} role="menu" aria-label="Choose a design style" onKeyDown={onMenuKey}>
          <div className="ss-panel-head" aria-hidden="true">Choose a design style</div>
          {designs.map((d, i) => {
            const isActive = d.id === activeId
            return (
              <button
                key={d.id}
                ref={(el) => (rowRefs.current[i] = el)}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                className={`ss-row${isActive ? ' ss-active' : ''}`}
                onClick={() => choose(d.id)}
              >
                <span className="ss-swatch ss-swatch-lg" style={{ background: swatchBackground(d.swatch) }} />
                <span className="ss-text">
                  <span className="ss-name">{d.name}</span>
                  <span className="ss-tagline">{d.tagline}</span>
                </span>
                {isActive && (
                  <svg className="ss-check" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            )
          })}
        </div>
      )}
      <button
        ref={pillRef}
        type="button"
        className="ss-pill"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="ss-swatch" style={{ background: swatchBackground(active.swatch) }} />
        <span className="ss-text">
          <span className="ss-label">Design style</span>
          <span className="ss-current">{active.name}</span>
        </span>
        <svg className={`ss-chev${open ? ' ss-chev-open' : ''}`} viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 10 8 6l4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

// Slides the switcher up when one of the active design's primary buttons
// scrolls underneath it, so it never covers a call to action.
function useCtaAvoidance(pillRef, ctaSelector, frozen) {
  const [lift, setLift] = useState(0)
  useEffect(() => {
    if (!ctaSelector || frozen) return
    let frame = 0
    const measure = () => {
      frame = 0
      const pill = pillRef.current
      if (!pill) return
      // the pill's resting position (bottom-right, 16px inset), ignoring any lift or transition
      const r = pill.getBoundingClientRect()
      const bottom = document.documentElement.clientHeight - 16
      const base = { left: r.left, right: r.right, top: bottom - pill.offsetHeight, bottom }
      const ctas = [...document.querySelectorAll(ctaSelector)].map((el) => el.getBoundingClientRect())
        .filter((b) => b.width && b.right > base.left && b.left < base.right)
      // lift above any button under the pill, then re-check in case that lands on another one
      let next = 0
      for (let pass = 0; pass < 4; pass++) {
        const top = base.top - next
        const bottom = base.bottom - next
        const hit = ctas.filter((b) => b.bottom > top && b.top < bottom)
        if (!hit.length) break
        next = base.bottom - Math.min(...hit.map((b) => b.top)) + 10
      }
      if (next > window.innerHeight * 0.6) next = 0
      setLift((cur) => (cur === next ? cur : next))
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(measure) }
    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    const timer = setInterval(schedule, 1000) // late layout shifts (fonts, images)
    return () => {
      cancelAnimationFrame(frame)
      clearInterval(timer)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [ctaSelector, frozen, pillRef])
  return lift
}
