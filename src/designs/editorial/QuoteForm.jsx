import { useState, useCallback, useRef, useLayoutEffect } from 'react'
import { sendQuoteEmail } from '../../shared/content.js'

// Lead-form checks, by field name. Each returns the message the browser shows, or '' when the value is fine.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const fieldError = {
  name: (v) => (v.trim() ? '' : 'Please enter your name.'),
  email: (v) => (EMAIL_RE.test(v) ? '' : 'Please enter a valid email, like name@company.com.'),
  phone: (v) => (v.replace(/\D/g, '').length === 10 ? '' : 'Please enter a 10-digit phone number.'),
  message: (v) => (v.trim() ? '' : 'Please tell us a little about your project.'),
}

// US numbers only: keep up to 10 digits (dropping a leading country code 1), shown as (718) 961-1112.
const phoneDigits = (s) => s.replace(/\D/g, '').replace(/^1/, '').slice(0, 10)
function formatPhone(d) {
  if (d.length < 4) return d && `(${d}`
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
}

// The form's words, by `kind`: 'quote' for the homepage hero and the quote pop-up,
// 'contact' for the Contact page. `topic` starts the email's subject line.
const copy = {
  quote: {
    kicker: 'Free · No obligation', title: 'Get a free quote',
    sub: <>Tell us about your sign and we&rsquo;ll reply with a budget range and timeline.</>,
    message: 'Tell us about your project*', submit: 'Request my free quote', topic: 'Quote request',
  },
  contact: {
    kicker: 'Contact us', title: 'Send us a message',
    sub: 'Ask about a new sign, a permit or a violation.',
    message: 'Your message*', submit: 'Send message', topic: 'Website message',
  },
}

// The lead form. It appears in the homepage hero, in the quote pop-up and on the
// Contact page; each copy keeps its own state.
export default function QuoteForm({ kind = 'quote' }) {
  const c = copy[kind]
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const phoneRef = useRef(null)
  const phoneCaret = useRef(null) // digits before the caret, restored after the phone field is reformatted

  const onField = useCallback((e) => {
    const el = e.target
    let value = el.value
    if (el.name === 'email') value = value.replace(/\s/g, '')
    if (el.name === 'phone') {
      phoneCaret.current = phoneDigits(value.slice(0, el.selectionStart ?? value.length)).length
      value = formatPhone(phoneDigits(value))
    }
    el.setCustomValidity(fieldError[el.name](value))
    setForm((f) => ({ ...f, [el.name]: value }))
  }, [])

  // Show our message instead of the browser's generic one, including for fields never typed in.
  const onInvalid = useCallback((e) => {
    e.target.setCustomValidity(fieldError[e.target.name](e.target.value))
  }, [])

  // Reformatting moves the caret to the end; put it back after the same digit so mid-number edits work.
  useLayoutEffect(() => {
    const n = phoneCaret.current
    const el = phoneRef.current
    phoneCaret.current = null
    if (n == null || document.activeElement !== el) return
    let pos = 0
    for (let seen = 0; pos < el.value.length && seen < n; pos++) if (/\d/.test(el.value[pos])) seen++
    el.setSelectionRange(pos, pos)
  })

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    sendQuoteEmail(form, c.topic)
    setSent(true)
  }, [form, c.topic])

  return (
    <form className="quote-card" onSubmit={onSubmit}>
      <div className="qc-top">
        <span className="qc-kicker label">{c.kicker}</span>
        <h2 className="qc-h">{c.title}</h2>
        <p className="qc-sub">{c.sub}</p>
      </div>
      <div className="qc-div" />
      <div className="qc-fields">
        <input name="name" value={form.name} onChange={onField} onInvalid={onInvalid} placeholder="Name*" autoComplete="name" required />
        <input name="email" type="email" value={form.email} onChange={onField} onInvalid={onInvalid} placeholder="E-mail address*" autoComplete="email" required />
        <input ref={phoneRef} name="phone" type="tel" value={form.phone} onChange={onField} onInvalid={onInvalid} placeholder="Contact number*" autoComplete="tel" required />
        <textarea name="message" value={form.message} onChange={onField} onInvalid={onInvalid} placeholder={c.message} rows={4} required />
      </div>
      <button className="btn qc-submit" type="submit">
        {sent ? 'Thank you — opening your email…' : c.submit}
      </button>
      <p className="qc-fine label">Free quotes across the Tri-State · usually within one business day</p>
    </form>
  )
}
