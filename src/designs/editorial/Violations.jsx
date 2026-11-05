import { BASE, LICENSE, photos } from '../../shared/content.js'
import { icons } from './icons.jsx'
import PageHero from './PageHero.jsx'
import { LicenseCheck } from './Permits.jsx'

// The signs NYC DOB and ECB issue violations for, from spacesign.com/permit-violations.
const triggers = [
  'Installed without a NYC Sign Permit',
  'Not performed using a NYC Licensed Sign Hanger',
  'Exceeding the zoning regulations',
  'Lighted signs, landmarks and many other code infractions',
]

// What an open violation can cost.
const stakes = [
  { n: '$10,000', copy: 'Each violation may incur $10,000, plus a $5,000 surcharge.' },
  { n: 'Class 1', copy: 'Each violation is now considered a Class 1 Hazardous Violation.' },
  { n: 'Until cleared', copy: 'NYC DOB & ECB can issue multiple violations to the same sign until the violations are corrected and cleared.' },
]

// The Violations page, /violations/ (violations/index.html). The copy is lightly
// edited from spacesign.com/permit-violations.
export default function Violations({ onQuote }) {
  return (
    <>
      <PageHero title="NYC sign violations" img={photos.subwayCorner} position="center 36%" onQuote={onQuote}>
        We can help eliminate any sign and awning violations. Everything is done in house.
      </PageHero>

      {/* WHAT GETS A VIOLATION */}
      <section className="sec" id="triggers">
        <div className="wrap">
          <div className="sec-head">
            <h2>What gets a sign violation</h2>
            <p>NYC DOB (Department of Buildings) and NYC ECB (Environmental Control Board) issue violations for all types of signs, awnings and canopies that are in violation of the NYC Administrative Codes. These violations apply to signs that are:</p>
          </div>
          <ul className="pv-rules four">
            {triggers.map((t) => (
              <li key={t}>
                <div className="panel-icon tone-red">{icons.violation}</div>
                <h3>{t}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT IT COSTS */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>What a violation can cost</h2>
          </div>
          <div className="pv-stakes dark">
            {stakes.map((s) => <div key={s.n}><b>{s.n}</b><p>{s.copy}</p></div>)}
          </div>
        </div>
      </section>

      {/* WHO CAN CLEAR THEM */}
      <section className="sec">
        <div className="wrap pv-feature">
          <div className="pv-stat">
            <span className="label">NYC Licensed Sign Hanger</span>
            <b>{LICENSE}</b>
            <p>The license it takes to correct and clear a NYC sign violation.</p>
          </div>
          <div className="pv-body">
            <h2>Only a licensed sign hanger can clear them</h2>
            <p>NYC Sign Violations can only be corrected and cleared by NYC Licensed Sign Hangers. Space Sign is a NYC Licensed Sign Hanger and can remove NYC DOB and NYC ECB Sign Violations.</p>
            <button className="btn" type="button" aria-haspopup="dialog" onClick={onQuote}>Get a free quote</button>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="sec">
        <div className="wrap panels pair">
          <article className="panel blue">
            <div className="panel-icon">{icons.permit}</div>
            <h3>Every sign needs a permit</h3>
            <p>All signs in NYC are required to have NYC Sign Permits and must be installed by NYC Licensed Sign Hangers.</p>
            <a className="text-link" href={`${BASE}permits/`}>Sign permits <span aria-hidden="true">→</span></a>
          </article>
          <LicenseCheck />
        </div>
      </section>
    </>
  )
}
