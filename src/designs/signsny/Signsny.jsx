import useDesignAssets from '../../shared/useDesignAssets.js'
import css from './signsny.css?inline'

export default function Signsny() {
  useDesignAssets(css, null, 'Space Sign — Signsny demo')
  return (
    <main className="placeholder">
      <h1>Signsny</h1>
      <p>Demo homepage coming soon.</p>
    </main>
  )
}
