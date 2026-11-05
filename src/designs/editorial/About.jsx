import { BASE, MAPS_URL, LICENSE, SINCE, RATING, serviceAreas, photos } from '../../shared/content.js'
import { icons } from './icons.jsx'
import PageHero from './PageHero.jsx'

// The three expertise panels: light gray, blue and dark, like the reference's
// feature trio. Each icon has its own tone; each panel links to the page that shows more.
const expertise = [
  {
    panel: '', icon: 'channel', tone: 'tone-red', title: 'Tailored to your project',
    copy: ['We offer an unparalleled spectrum of high-quality signage solutions, tailoring each project to your specific requirements. Based in New York City, we provide comprehensive and flexible service to clients all along the East Coast.'],
    link: [`${BASE}signs/`, 'View sign types'],
  },
  {
    panel: 'blue', icon: 'permit', tone: '', title: 'Licensed by the NYC DOB',
    copy: [
      'Licensed as a Special Sign Hanger by the NYC Department of Buildings, Space Sign is compliant with all applicable zoning and building code regulations.',
      'Our Permit Department handles new sign permit applications, ECB sign violation removal and many other Department of Buildings requirements, which many other sign companies may not be able to offer.',
    ],
    link: [`${BASE}permits/`, 'Sign permits'],
  },
  {
    panel: 'dark', icon: 'neon', tone: 'tone-amber', title: 'Craft meets technology',
    copy: ['Space Sign utilizes everything from traditional skills and materials to the latest and most advanced technology to put our signs on the cutting edge of the industry. Our methods make us nimble enough to craft a signage solution for any client.'],
    link: [`${BASE}work/`, 'View our work'],
  },
]

// The About Us page, /about/ (about/index.html). The copy is lightly edited
// from spacesign.com/about-us.
export default function About({ onQuote }) {
  return (
    <>
      <PageHero title="About us" img={photos.heroInstall} onQuote={onQuote}>
        Space Sign is a full-service sign company based out of Queens, NY.
      </PageHero>

      {/* STORY — a statement on the left, the detail on the right */}
      <section className="sec">
        <div className="wrap ab-story">
          <div>
            <p className="ab-kicker label">Since {SINCE}</p>
            <h2>Setting the industry standard for quality, selection and customer service.</h2>
          </div>
          <div className="ab-copy">
            <p>Since {SINCE}, Space Sign has developed a reputation for meeting and exceeding customers&rsquo; expectations and providing an outstanding level of service.</p>
            <p>That stems from the fact that we produce all our signs under one roof: a purpose-built factory designed to facilitate ease of communication and efficiency.</p>
            <ul className="about-facts label">
              <li>Est. {SINCE}</li>
              <li>Licensed Sign Hanger {LICENSE}</li>
              <li>{RATING}★ average rating</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="sec" id="expertise">
        <div className="wrap">
          <div className="sec-head">
            <h2>Our expertise</h2>
            <p>We at Space Sign are sign specialists.</p>
          </div>
          <div className="panels">
            {expertise.map((c) => (
              <article className={`panel ${c.panel}`} key={c.title}>
                <div className={`panel-icon ${c.tone}`}>{icons[c.icon]}</div>
                <h3>{c.title}</h3>
                {c.copy.map((p) => <p key={p}>{p}</p>)}
                <a className="text-link" href={c.link[0]}>{c.link[1]} <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="sec" id="service-area">
        <div className="wrap">
          <div className="ab-area">
            <div>
              <h2>Service area</h2>
              <p>The majority of our clients are in the New York area, including Brooklyn and Manhattan. We also serve clients all over the <span className="nowrap">Tri-State</span> area as well as Long Island.</p>
              <a className="text-link" href={MAPS_URL} target="_blank" rel="noreferrer">Our shop in College Point, Queens <span aria-hidden="true">→</span></a>
            </div>
            <ul className="ab-places">
              {serviceAreas.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* SIGN-OFF — the original page's closing note, before the shell's CTA band */}
      <section className="sec ab-signoff">
        <div className="wrap">
          <p className="ab-note">Thank you for your interest in Space&nbsp;Sign. We look forward to serving you.</p>
          <p className="ab-sign label">— Space Sign Team</p>
        </div>
      </section>
    </>
  )
}
