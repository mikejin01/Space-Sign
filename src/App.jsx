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

// ?style=<id> wins, then the last choice from localStorage, then the default.
function initialDesign() {
  const fromUrl = new URLSearchParams(window.location.search).get('style')
  if (getDesign(fromUrl)) return fromUrl
  const stored = readStored()
  if (getDesign(stored)) return stored
  return DEFAULT_DESIGN
}

const showSwitcher = new URLSearchParams(window.location.search).get('switcher') !== 'off'

export default function App() {
  const [activeId, setActiveId] = useState(initialDesign)
  const { Component } = getDesign(activeId)

  // Keep the URL and localStorage in sync so every design has a shareable link.
  useEffect(() => {
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
        <Component key={activeId} />
      </Suspense>
      {showSwitcher && <StyleSwitcher designs={designs} activeId={activeId} onSelect={select} />}
    </>
  )
}
