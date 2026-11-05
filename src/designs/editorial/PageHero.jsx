import { BASE, PHONE, PHONE_TEL } from '../../shared/content.js'

// The banner atop every page but the homepage: the page's title and lede (the
// children) over a darkened photo, with the quote and call buttons. `img` is a
// path under public/assets/; the photo is decorative, so it has no alt text.
// `position` (CSS object-position) moves the crop off the photo's center when
// its sign sits higher or lower. `onQuote` opens the shell's quote pop-up.
export default function PageHero({ title, img, position, onQuote, children }) {
  return (
    <section className="page-hero dark">
      <img className="page-hero-bg" src={`${BASE}assets/${img}`} alt="" style={position ? { objectPosition: position } : undefined} />
      <div className="wrap page-hero-in">
        <h1>{title}</h1>
        <p>{children}</p>
        <div className="page-hero-actions">
          <button className="btn" type="button" aria-haspopup="dialog" onClick={onQuote}>Get a free quote</button>
          <a className="btn ghost" href={PHONE_TEL}>Call {PHONE}</a>
        </div>
      </div>
    </section>
  )
}
