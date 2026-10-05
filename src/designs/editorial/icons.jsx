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
}
