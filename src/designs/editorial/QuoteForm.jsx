import { useState, useCallback, useRef, useLayoutEffect, useId } from 'react'
import { createPortal } from 'react-dom'
import { BASE, signTypes, otherServices, sendQuoteEmail } from '../../shared/content.js'
import { icons } from './icons.jsx'

// The service field's choices, by id: the sign types, then the other services.
const serviceById = Object.fromEntries([...signTypes, ...otherServices].map((s) => [s.id, s]))
// The other services have no photo, so each shows an icon in its own colour.
const serviceIcons = {
  permit: ['permit', 'tone-blue'], violation: ['violation', 'tone-red'],
  repair: ['repair', 'tone-amber'], other: ['message', 'tone-purple'],
}
// How the quote form's subtitle names a chosen service: "Tell us about your ___
// and we'll reply…". A choice not listed here ('other') keeps "sign".
const subjects = {
  'channel-letters': 'channel letters', '3d-letters': '3D letters', 'led-neon': 'LED neon sign',
  lightbox: 'lightbox sign', blade: 'blade sign', 'push-thru': 'push-thru sign', carved: 'carved sign',
  pylon: 'pylon sign', interior: 'interior sign', 'awning-vestibule': 'awning or vestibule',
  'digital-printing': 'printing project', 'trade-show': 'trade show booth',
  permit: 'sign permit', violation: 'sign violation', repair: 'sign repair',
}

// The picker's list, in order: no choice, the sign types, then the other
// services, the last two under group headings (`from`, `to` index `choices`).
const choices = [{ id: '', title: 'Not sure yet' }, ...signTypes, ...otherServices]
const groups = [
  { label: 'Sign types', from: 1, to: 1 + signTypes.length },
  { label: 'Permits and more', from: 1 + signTypes.length, to: choices.length },
]

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
    // `what` names the chosen service (from `subjects`), in bold
    sub: (what) => <>Tell us about your {what ? <strong>{what}</strong> : 'sign'} and we&rsquo;ll reply with a budget range and timeline.</>,
    service: 'What do you need? (optional)',
    message: 'Tell us about your project*', submit: 'Request my free quote', topic: 'Quote request',
  },
  contact: {
    kicker: 'Contact us', title: 'Send us a message',
    sub: () => 'Ask about a new sign, a permit or a violation.',
    service: 'What is it about? (optional)',
    message: 'Your message*', submit: 'Send message', topic: 'Website message',
  },
}

// A service's picture: a sign type's photo, another service's icon on a tile
// tinted in its own colour, or for no choice an empty dashed tile.
function ServiceMedia({ id }) {
  const s = serviceById[id]
  if (s?.img) return <img className="qc-media" src={`${BASE}assets/signs/${s.img}`} alt="" />
  const icon = serviceIcons[id]
  if (icon) return <span className={`qc-media qc-icon ${icon[1]}`} aria-hidden="true">{icons[icon[0]]}</span>
  return <span className="qc-media qc-media-none" aria-hidden="true" />
}

// The optional field after the contact details: which service the visitor needs,
// blank by default. A choice shows its picture at the start of the field (`key`
// replays its fade-in on each change).
//
// It's a select-only combobox (the WAI-ARIA pattern) rather than a native
// <select>, so the list can show every choice's picture. Focus stays on the
// field, which points at the highlighted option with aria-activedescendant.
// Keys: ↑ ↓ Home End to move, Enter or Space to choose, Esc to close (and only
// the list, not the pop-up), letters to jump to a choice. Leaving the field
// closes the list, which is why the list's mousedown is cancelled: a click on it
// must not take focus away.
//
// The card's overflow would clip the list, so it's portalled into the pop-up's
// <dialog> (to stay in its top layer) or the page, and placed with fixed
// positioning: below the field, or above it when there's more room there.
// `dark` matches it to a dark card.
function ServiceField({ value, onChange, placeholder, dark }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0) // the highlighted choice, an index into `choices`
  const [place, setPlace] = useState(null) // where the list goes: { host, style }
  const fieldRef = useRef(null)
  const listRef = useRef(null)
  const typed = useRef({ text: '', at: 0 }) // type-ahead letters, and when the last one came
  const id = useId()
  const optId = (i) => `${id}-opt-${i}`
  const chosen = serviceById[value]

  const show = (i = Math.max(0, choices.findIndex((c) => c.id === value))) => {
    setActive(i)
    setOpen(true)
  }
  const choose = (i) => {
    onChange(choices[i].id)
    setOpen(false)
  }

  // Place the list, and keep it beside the field as the page or pop-up scrolls
  // and the window resizes. Scrolling the list itself doesn't move it.
  useLayoutEffect(() => {
    if (!open) return setPlace(null)
    const field = fieldRef.current
    const host = field.closest('dialog') ?? document.body
    const position = () => {
      const r = field.getBoundingClientRect()
      const below = window.innerHeight - r.bottom - 12
      const above = r.top - 12
      const up = below < 260 && above > below
      setPlace({ host, style: {
        left: r.left, width: r.width, maxHeight: Math.max(160, Math.min(340, up ? above : below)),
        ...(up ? { bottom: window.innerHeight - r.top + 6 } : { top: r.bottom + 6 }),
      } })
    }
    const onScroll = (e) => { if (!listRef.current?.contains(e.target)) position() }
    position()
    window.addEventListener('resize', position)
    window.addEventListener('scroll', onScroll, true)
    return () => {
      window.removeEventListener('resize', position)
      window.removeEventListener('scroll', onScroll, true)
    }
  }, [open])

  // Keep the highlighted option in view inside the list.
  useLayoutEffect(() => {
    const list = listRef.current
    const opt = list && document.getElementById(optId(active))
    if (!opt) return
    if (opt.offsetTop < list.scrollTop) list.scrollTop = opt.offsetTop - 6
    else if (opt.offsetTop + opt.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = opt.offsetTop + opt.offsetHeight - list.clientHeight + 6
    }
  })

  // Typing jumps to the next choice starting with what's been typed in the last
  // 600ms. One letter again steps on to the next match.
  const isTyping = () => typed.current.text && Date.now() - typed.current.at < 600
  const typeAhead = (key) => {
    const t = typed.current
    t.text = (isTyping() ? t.text : '') + key.toLowerCase()
    t.at = Date.now()
    const from = open ? active : Math.max(0, choices.findIndex((c) => c.id === value))
    const start = t.text.length === 1 ? from + 1 : from
    for (let k = 0; k < choices.length; k++) {
      const i = (start + k) % choices.length
      if (choices[i].title.toLowerCase().startsWith(t.text)) return show(i)
    }
  }

  const onKeyDown = (e) => {
    const last = choices.length - 1
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      if (!open) return show()
      setActive((a) => Math.min(last, Math.max(0, a + (e.key === 'ArrowDown' ? 1 : -1))))
    } else if (open && (e.key === 'Home' || e.key === 'End')) {
      e.preventDefault()
      setActive(e.key === 'Home' ? 0 : last)
    } else if (e.key === 'Enter' || (e.key === ' ' && !isTyping())) {
      e.preventDefault()
      if (open) choose(active)
      else show()
    } else if (e.key === 'Escape' && open) {
      e.preventDefault() // cancelling the key stops the <dialog> closing too
      e.stopPropagation()
      setOpen(false)
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault()
      typeAhead(e.key)
    }
  }

  const option = (i) => {
    const c = choices[i]
    const selected = c.id === value
    return (
      <div key={c.id || 'none'} id={optId(i)} role="option" aria-selected={selected}
        className={`qc-opt${i === active ? ' active' : ''}`}
        onPointerMove={() => setActive(i)} onClick={() => choose(i)}>
        <ServiceMedia id={c.id} />
        <span className="qc-opt-text">{c.title}</span>
        {selected && <svg className="qc-tick" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>}
      </div>
    )
  }

  return (
    <>
      <div ref={fieldRef} className={`qc-select${chosen ? ' has-media' : ' is-empty'}`} role="combobox" tabIndex={0}
        aria-label="Service (optional)" aria-haspopup="listbox" aria-expanded={open}
        aria-controls={open ? `${id}-list` : undefined} aria-activedescendant={open ? optId(active) : undefined}
        onClick={() => (open ? setOpen(false) : show())} onKeyDown={onKeyDown} onBlur={() => setOpen(false)}>
        {chosen && <ServiceMedia key={value} id={value} />}
        <span className="qc-select-text">{chosen ? chosen.title : placeholder}</span>
      </div>
      {open && place && createPortal(
        <div ref={listRef} id={`${id}-list`} role="listbox" aria-label="Services"
          className={`qc-list${dark ? ' dark' : ''}`} style={place.style} onMouseDown={(e) => e.preventDefault()}>
          {option(0)}
          {groups.map((g) => (
            <div role="group" key={g.label} aria-labelledby={`${id}-group-${g.from}`}>
              <div className="qc-group label" id={`${id}-group-${g.from}`}>{g.label}</div>
              {choices.slice(g.from, g.to).map((_, k) => option(g.from + k))}
            </div>
          ))}
        </div>,
        place.host,
      )}
    </>
  )
}

// The lead form. It appears in the homepage hero, in the quote pop-up and on the
// Contact page; each copy keeps its own state. The pop-up's copy is handed its
// service and message (`service`/`onService`, `message`/`onMessage`) by the
// shell, so a button can choose a service and suggest a message before opening it.
export default function QuoteForm({ kind = 'quote', service, onService, message, onMessage }) {
  const c = copy[kind]
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [ownService, setOwnService] = useState('')
  const svc = service ?? ownService
  const setSvc = onService ?? setOwnService
  const msg = message ?? form.message
  const [sent, setSent] = useState(false)
  const phoneRef = useRef(null)
  const messageRef = useRef(null)
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
    if (el.name === 'message' && onMessage) onMessage(value)
    else setForm((f) => ({ ...f, [el.name]: value }))
  }, [onMessage])

  // A message set from outside (a suggested one) skips onField, so recheck it
  // here; otherwise an earlier "please tell us" error would block the submit.
  useLayoutEffect(() => {
    messageRef.current.setCustomValidity(fieldError.message(msg))
  }, [msg])

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

  // A chosen service gets its own line in the email and joins the subject:
  // "Quote request — Channel Letters Sign — Jane".
  const onSubmit = useCallback((e) => {
    e.preventDefault()
    const label = serviceById[svc]?.title
    sendQuoteEmail({ ...form, message: msg, extra: label ? { Service: label } : undefined }, label ? `${c.topic} — ${label}` : c.topic)
    setSent(true)
  }, [form, msg, svc, c.topic])

  return (
    <form className="quote-card" onSubmit={onSubmit}>
      <div className="qc-top">
        <span className="qc-kicker label">{c.kicker}</span>
        <h2 className="qc-h">{c.title}</h2>
        <p className="qc-sub">{c.sub(subjects[svc])}</p>
      </div>
      <div className="qc-div" />
      <div className="qc-fields">
        <input name="name" value={form.name} onChange={onField} onInvalid={onInvalid} placeholder="Name*" autoComplete="name" required />
        <input name="email" type="email" value={form.email} onChange={onField} onInvalid={onInvalid} placeholder="E-mail address*" autoComplete="email" required />
        <input ref={phoneRef} name="phone" type="tel" value={form.phone} onChange={onField} onInvalid={onInvalid} placeholder="Contact number*" autoComplete="tel" required />
        {/* the quote card is dark (hero, pop-up); the Contact page's is light */}
        <ServiceField value={svc} onChange={setSvc} placeholder={c.service} dark={kind === 'quote'} />
        <textarea ref={messageRef} name="message" value={msg} onChange={onField} onInvalid={onInvalid} placeholder={c.message} rows={4} required />
      </div>
      <button className="btn qc-submit" type="submit">
        {sent ? 'Thank you — opening your email…' : c.submit}
      </button>
      <p className="qc-fine label">Free quotes across the Tri-State · usually within one business day</p>
    </form>
  )
}
