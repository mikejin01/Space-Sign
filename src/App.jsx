import { Suspense, startTransition, useEffect, useState } from 'react'
import { DEFAULT_DESIGN, designs, getDesign } from './designs/index.js'
import StyleSwitcher from './switcher/StyleSwitcher.jsx'

const STORAGE_KEY = 'space-sign-design'

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function store(id) {
  try {
    localStorage.setItem(STORAGE_KEY, id)
  } catch {
    // storage blocked (private mode etc.) — the URL still carries the choice
  }
}

const params = new URLSearchParams(window.location.search)

// The page, from the path: '/Space-Sign/' is 'home', '/Space-Sign/signs/' is 'signs'.
// Each page has its own HTML entry (see vite.config.js).
const page = window.location.pathname.slice(import.meta.env.BASE_URL.length)
  .replace(/index\.html$/, '').replace(/\/+$/, '') || 'home'
const isHome = page === 'home'

// The switcher is for design reviews: it shows only with ?switcher=on, on the homepage.
const showSwitcher = isHome && params.get('switcher') === 'on'

// Only Editorial has pages beyond the homepage. On the homepage ?style=<id> wins,
// then (while the switcher is out) the last choice from localStorage, then the
// default, so a hidden switcher never leaves someone stuck on another design.
function initialDesign() {
  if (!isHome) return 'editorial'
  const fromUrl = params.get('style')
  if (getDesign(fromUrl)) return fromUrl
  const stored = showSwitcher && readStored()
  if (getDesign(stored)) return stored
  return DEFAULT_DESIGN
}

export default function App() {
  const [activeId, setActiveId] = useState(initialDesign)
  const { Component } = getDesign(activeId)

  // While the switcher is out, keep the URL and localStorage in sync so every design has a shareable link.
  useEffect(() => {
    if (!showSwitcher) return
    const url = new URL(window.location.href)
    if (url.searchParams.get('style') !== activeId) {
      url.searchParams.set('style', activeId)
      history.replaceState(history.state, '', url)
    }
    store(activeId)
  }, [activeId])

  const select = (id) => {
    if (id === activeId) return
    window.scrollTo({ top: 0, behavior: 'instant' })
    // a transition keeps the current design on screen until the next one loads
    startTransition(() => setActiveId(id))
  }

  return (
    <>
      <Suspense fallback={null}>
        <Component key={activeId} page={page} />
      </Suspense>
      {showSwitcher && <StyleSwitcher designs={designs} activeId={activeId} onSelect={select} />}
    </>
  )
}
