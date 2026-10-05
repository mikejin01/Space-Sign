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
  {
    id: 'speedpro',
    name: 'Speedpro',
    tagline: 'Bold & high-contrast',
    swatch: ['#ffffff', '#e1251b', '#000000'],
    load: () => import('./speedpro/Speedpro.jsx'),
  },
  {
    id: 'signmakerz',
    name: 'Signmakerz',
    tagline: 'Warm & hand-crafted',
    swatch: ['#f3e9e1', '#ac7051', '#161210'],
    load: () => import('./signmakerz/Signmakerz.jsx'),
  },
  {
    id: 'signsny',
    name: 'Signsny',
    tagline: 'Clean & corporate',
    swatch: ['#ffffff', '#046bd2', '#1a2d4e'],
    load: () => import('./signsny/Signsny.jsx'),
  },
]

export const designs = registry.map((d) => ({ ...d, Component: lazy(d.load) }))

export const DEFAULT_DESIGN = 'editorial'

export const getDesign = (id) => designs.find((d) => d.id === id)
