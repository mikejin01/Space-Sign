import useDesignAssets from '../../shared/useDesignAssets.js'
import css from './speedpro.css?inline'

export default function Speedpro() {
  useDesignAssets(css, null, 'Space Sign — Speedpro demo')
  return (
    <main className="placeholder">
      <h1>Speedpro</h1>
      <p>Demo homepage coming soon.</p>
    </main>
  )
}
