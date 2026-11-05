import { BASE, signTypes, photos } from '../../shared/content.js'
import PageHero from './PageHero.jsx'

// Sign-type cards (photo, title, one line of copy). The homepage shows the first
// four; the Sign Types page shows them all.
export function SignTypeGrid({ items, className }) {
  return (
    <div className={className ? `svc ${className}` : 'svc'}>
      {items.map((s) => (
        <div className="svc-card" key={s.title}>
          <div className="svc-img"><img src={`${BASE}assets/signs/${s.img}`} alt={s.alt} loading="lazy" /></div>
          <h3>{s.title}</h3>
          <p>{s.copy}</p>
        </div>
      ))}
    </div>
  )
}

// The Sign Types page, /signs/ (signs/index.html). The intro is lightly edited
// from spacesign.com/signs.
export default function SignTypes({ onQuote }) {
  return (
    <>
      <PageHero title="Sign types" img={photos.heroLetters} onQuote={onQuote}>
        Our creative team works closely with each customer to produce all types of signs — custom or traditional. Our process covers custom layouts, fabrication and installation.
      </PageHero>
      <section className="sec">
        <div className="wrap">
          <SignTypeGrid items={signTypes} />
        </div>
      </section>
    </>
  )
}
