const ICON_PROPS = { viewBox: '0 0 48 48', fill: 'none', stroke: 'currentColor', strokeWidth: 2.1, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const icons = {
  // Bold illuminated channel letter "A" with side depth + glow bulbs
  channel: (
    <svg {...ICON_PROPS} aria-hidden="true">
      <path d="M12 36 L23 11 L34 36" />
      <path d="M16.6 26 H29.4" />
      <path d="M34 36 L37.5 36 M23 11 L25 13.5" className="ic-dot" />
      <circle cx="18.7" cy="24" r="1.4" className="ic-dot" />
      <circle cx="27.3" cy="24" r="1.4" className="ic-dot" />
    </svg>
  ),
  // Illuminated bulb with rays
  neon: (
    <svg {...ICON_PROPS} aria-hidden="true">
      <path d="M24 9 a9 9 0 0 1 5.5 16.1 c-1.3 1-1.9 2.3-2 3.9 h-7 c-.1-1.6-.7-2.9-2-3.9 A9 9 0 0 1 24 9 Z" />
      <path d="M20.5 33 h7" />
      <path d="M21.5 37 h5" />
      <path d="M24 3.5 V6" className="ic-dot" />
      <path d="M37 11 l-1.8 1.8" className="ic-dot" />
      <path d="M11 11 l1.8 1.8" className="ic-dot" />
    </svg>
  ),
  // Projecting blade / hanging sign on a wall post
  blade: (
    <svg {...ICON_PROPS} aria-hidden="true">
      <path d="M13 7 V41" />
      <path d="M13 15 H21" />
      <rect x="19" y="18" width="20" height="13" rx="1.5" />
      <path d="M24 15 V18" className="ic-dot" />
      <path d="M34 15 V18" className="ic-dot" />
      <path d="M29 21.5 V27.5" />
    </svg>
  ),
  // Storefront awning with scalloped valance and stripes
  awning: (
    <svg {...ICON_PROPS} aria-hidden="true">
      <path d="M9 25 L13 15 H35 L39 25 Z" />
      <path d="M9 25 q3 5 6 0 q3 5 6 0 q3 5 6 0 q3 5 6 0" />
      <path d="M19 15 L17.5 25" className="ic-dot" />
      <path d="M28.5 15 L30.5 25" className="ic-dot" />
      <path d="M13 39 V29 M35 39 V29" />
    </svg>
  ),
  // Display panel on a stand (interior / print)
  interior: (
    <svg {...ICON_PROPS} aria-hidden="true">
      <rect x="11" y="9" width="26" height="19" rx="1.6" />
      <path d="M16 16 H32" className="ic-dot" />
      <path d="M16 21 H27" className="ic-dot" />
      <path d="M24 28 V35" />
      <path d="M17 39 L24 35 L31 39" />
    </svg>
  ),
  // Permit document with approval check seal
  permit: (
    <svg {...ICON_PROPS} aria-hidden="true">
      <path d="M14 7 H28 L34 13 V35 H14 Z" />
      <path d="M28 7 V13 H34" />
      <path d="M19 19 H29" className="ic-dot" />
      <path d="M19 24 H29" className="ic-dot" />
      <path d="M19 29 H24" className="ic-dot" />
      <circle cx="31" cy="35" r="7" />
      <path d="M28 35 l2.2 2.2 L34.5 32.5" />
    </svg>
  ),
  // Circled check mark — a small reassurance bullet
  check: (
    <svg {...ICON_PROPS} aria-hidden="true">
      <circle cx="24" cy="24" r="17" />
      <path d="M17 24.5 L21.8 29.3 L31 20" />
    </svg>
  ),
  // ID card — a sign hanger's license
  license: (
    <svg {...ICON_PROPS} aria-hidden="true">
      <rect x="6" y="11" width="36" height="26" rx="3" />
      <circle cx="17" cy="21.5" r="3.6" />
      <path d="M11 31.5 c1.2-3.2 3.3-4.8 6-4.8 s4.8 1.6 6 4.8" />
      <path d="M28 19 H36" className="ic-dot" />
      <path d="M28 24 H36" className="ic-dot" />
      <path d="M28 29 H33" className="ic-dot" />
    </svg>
  ),
  // Warning triangle — a sign violation
  violation: (
    <svg {...ICON_PROPS} aria-hidden="true">
      <path d="M24 8 L41.5 38.5 H6.5 Z" />
      <path d="M24 19 V28.5" />
      <circle cx="24" cy="33" r="1.2" className="ic-dot" />
    </svg>
  ),
  // Open-end wrench — sign repair and maintenance. Drawn upright, then turned 45°.
  repair: (
    <svg {...ICON_PROPS} aria-hidden="true">
      <path transform="rotate(45 24 24)" d="M21 22.5 V39 A3 3 0 0 0 27 39 V22.5 A9 9 0 0 0 27 5.5 V12 H21 V5.5 A9 9 0 0 0 21 22.5 Z" />
    </svg>
  ),
  // Speech bubble — "something else", a question for us
  message: (
    <svg {...ICON_PROPS} aria-hidden="true">
      <path d="M10 11 H38 a2 2 0 0 1 2 2 V31 a2 2 0 0 1 -2 2 H22 L14 39.5 V33 H10 a2 2 0 0 1 -2 -2 V13 a2 2 0 0 1 2 -2 Z" />
      <circle cx="17" cy="22" r="1.5" className="ic-dot" />
      <circle cx="24" cy="22" r="1.5" className="ic-dot" />
      <circle cx="31" cy="22" r="1.5" className="ic-dot" />
    </svg>
  ),
  // Social marks (footer) — filled glyphs on a 24 grid, not the line style above
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.6 22v-9h3.03l.45-3.5H13.6V7.26c0-1.01.28-1.7 1.74-1.7h1.86V2.43a25 25 0 0 0-2.71-.14c-2.68 0-4.52 1.64-4.52 4.65V9.5H6.94V13h3.03v9h3.63Z" />
    </svg>
  ),
}
