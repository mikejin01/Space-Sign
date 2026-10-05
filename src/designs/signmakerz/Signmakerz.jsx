import useDesignAssets from '../../shared/useDesignAssets.js'
import css from './signmakerz.css?inline'

export default function Signmakerz() {
  useDesignAssets(css, null, 'Space Sign — Signmakerz demo')
  return (
    <main className="placeholder">
      <h1>Signmakerz</h1>
      <p>Demo homepage coming soon.</p>
    </main>
  )
}
