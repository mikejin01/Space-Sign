import { BASE, LICENSE, photos } from '../../shared/content.js'
import { icons } from './icons.jsx'
import PageHero from './PageHero.jsx'

// NYC's sign permit rules, from spacesign.com/permit-violations.
const rules = [
  { title: 'Licensed sign hangers only',
    copy: 'NYC Administrative Code 26-182 states that all signs in New York City, including the 5 boroughs, must be performed by or under the supervision of a NYC Licensed Sign Hanger.' },
  { title: 'A DOB permit for every sign',
    copy: 'All signs require Sign Permits issued by the NYC Department of Buildings (DOB). Each sign requires a NYC DOB Sign Permit.' },
  { title: 'An electrical permit if it lights up',
    copy: 'Each lighted sign requires a NYC DOB Electrical Permit.' },
  { title: 'Zoning at every location',
    copy: 'All signs must meet the zoning requirements for each respective location.' },
  { title: 'Only sign hangers pull permits',
    copy: 'Licensed expeditors, engineers and architects may only apply for Sign Permits; they cannot legally pull them. NYC Licensed Sign Hangers are the only persons legally allowed to pull a Sign Permit in NYC.' },
  { title: 'LPC approval on landmarks',
    copy: 'NYC Landmarks Preservation Commission (LPC) permits are required for exterior work that alters the exterior of a landmarked property, including sign installation.' },
]

// What Space Sign does about them.
const services = [
  'We can apply for and pull all required Sign Permits.',
  'We can obtain NYC Landmarks Preservation Commission (LPC) approvals.',
  'We are licensed throughout the Tri-State area (NY, NJ, CT) for Sign Permits and installations.',
]

// The "check your sign hanger" panel, which closes the Permits and Violations pages.
export function LicenseCheck() {
  return (
    <article className="panel">
      <div className="panel-icon tone-blue">{icons.license}</div>
      <h3>Check your sign hanger&rsquo;s license</h3>
      <p>For your financial protection and your safety, ask to see their NYC Sign Hanger License Identification Card, call 311 or go to NYC.gov.</p>
      <a className="text-link" href="https://www.nyc.gov" target="_blank" rel="noreferrer">Go to NYC.gov <span aria-hidden="true">→</span></a>
    </article>
  )
}

// The Permits page, /permits/ (permits/index.html). The copy is lightly edited
// from spacesign.com/permit-violations. Its quote buttons choose the permit service.
export default function Permits({ onQuote }) {
  const quote = () => onQuote('permit')
  return (
    <>
      <PageHero title="NYC sign permits" img={photos.permits} onQuote={quote}>
        Space Sign is a NYC Licensed Sign Hanger ({LICENSE}). We help our clients with both sign and awning permits.
      </PageHero>

      {/* RULES */}
      <section className="sec" id="rules">
        <div className="wrap">
          <div className="sec-head">
            <h2>What NYC requires</h2>
          </div>
          <ol className="pv-rules">
            {rules.map((r, i) => (
              <li key={r.title}>
                <span className="pv-num label">{String(i + 1).padStart(2, '0')}</span>
                <h3>{r.title}</h3>
                <p>{r.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHAT WE DO — the licence count beside what it lets us do */}
      <section className="sec">
        <div className="wrap pv-feature">
          <div className="pv-stat">
            <span className="label">Fewer than</span>
            <b>44</b>
            <p>NYC Licensed Sign Hangers in the entire City of New York, and only 3 in Brooklyn.</p>
          </div>
          <div className="pv-body">
            <h2>We&rsquo;re one of them: Licensed Sign Hanger {LICENSE}</h2>
            <ul className="pv-checks">
              {services.map((s) => <li key={s}>{icons.check}<span>{s}</span></li>)}
            </ul>
            <button className="btn" type="button" aria-haspopup="dialog" onClick={quote}>Get a free quote</button>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="sec">
        <div className="wrap panels pair">
          <LicenseCheck />
          <article className="panel dark">
            <div className="panel-icon tone-red">{icons.violation}</div>
            <h3>Already have a sign violation?</h3>
            <p>NYC DOB and ECB sign violations can only be corrected and cleared by a NYC Licensed Sign Hanger. We can remove them for you.</p>
            <a className="text-link" href={`${BASE}violations/`}>Sign violations <span aria-hidden="true">→</span></a>
          </article>
        </div>
      </section>
    </>
  )
}
