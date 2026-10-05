import { Suspense } from 'react'
import { DEFAULT_DESIGN, getDesign } from './designs/index.js'

export default function App() {
  const { Component } = getDesign(DEFAULT_DESIGN)
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  )
}
