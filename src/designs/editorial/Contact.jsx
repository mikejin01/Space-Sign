import { PHONE, PHONE_TEL, FAX, EMAIL, ADDRESS, MAPS_URL, HOURS, photos } from '../../shared/content.js'
import PageHero from './PageHero.jsx'
import QuoteForm from './QuoteForm.jsx'

// The Contact Us page, /contact/ (contact/index.html), after spacesign.com/contact-us:
// the contact details beside a message form.
export default function Contact({ onQuote }) {
  return (
    <>
      <PageHero title="Contact us" img={photos.neonInterior} onQuote={onQuote}>
        Call, email or send us a message. We usually reply within one business day.
      </PageHero>

      <section className="sec">
        <div className="wrap ct">
          <div>
            <h2>Get in touch</h2>
            <dl className="ct-list">
              <div><dt className="label">Phone</dt><dd><a href={PHONE_TEL}>{PHONE}</a></dd></div>
              <div><dt className="label">Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
              <div><dt className="label">Fax</dt><dd>{FAX}</dd></div>
              <div>
                <dt className="label">Address</dt>
                <dd>
                  {ADDRESS}
                  <a className="text-link" href={MAPS_URL} target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">→</span></a>
                </dd>
              </div>
              <div>
                <dt className="label">Hours</dt>
                <dd>{HOURS.map((h) => <span className="ct-hours" key={h.days}><span>{h.days}</span> {h.time}</span>)}</dd>
              </div>
            </dl>
          </div>
          {/* the quote card in light colours (see .ct-form in editorial.css) */}
          <div className="ct-form">
            <QuoteForm kind="contact" />
          </div>
        </div>
      </section>
    </>
  )
}
