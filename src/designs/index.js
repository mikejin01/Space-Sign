import { lazy } from 'react'

// Registry of design styles. `load` is kept separate from the lazy component
// so the switcher can preload a design before it is chosen.
const registry = [
  {
    id: 'editorial',
    name: 'Editorial',
    tagline: 'Dark & industrial',
    swatch: ['#0c0c0b', '#e4121d'],
    load: () => import('./editorial/Editorial.jsx'),
  },
]

export const designs = registry.map((d) => ({ ...d, Component: lazy(d.load) }))

export const DEFAULT_DESIGN = 'editorial'

export const getDesign = (id) => designs.find((d) => d.id === id)
