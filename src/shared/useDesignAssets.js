import { useLayoutEffect } from 'react'

// Each design ships page-wide CSS (body, header, :root…). Vite never removes
// imported CSS, so designs import their stylesheet with `?inline` and this hook
// adds it (plus the design's Google Fonts) before paint and removes both on
// unmount. Only the active design's CSS is ever in the document.
export default function useDesignAssets(css, fontsHref, title) {
  useLayoutEffect(() => {
    const style = document.createElement('style')
    style.dataset.design = ''
    style.textContent = css
    document.head.appendChild(style)

    let link
    if (fontsHref) {
      link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = fontsHref
      link.dataset.design = ''
      document.head.appendChild(link)
    }

    const prevTitle = document.title
    if (title) document.title = title

    return () => {
      style.remove()
      link?.remove()
      document.title = prevTitle
    }
  }, [css, fontsHref, title])
}
