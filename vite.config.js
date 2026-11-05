import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Each page is its own HTML entry, so GitHub Pages serves it at a real URL:
// index.html is /Space-Sign/ and <page>/index.html is /Space-Sign/<page>/.
// appType 'mpa' makes dev and preview 404 unknown paths, as Pages does, instead
// of answering them with index.html.
// https://vite.dev/config/
export default defineConfig({
  base: '/Space-Sign/',
  appType: 'mpa',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        signs: resolve(import.meta.dirname, 'signs/index.html'),
        work: resolve(import.meta.dirname, 'work/index.html'),
        about: resolve(import.meta.dirname, 'about/index.html'),
        permits: resolve(import.meta.dirname, 'permits/index.html'),
        violations: resolve(import.meta.dirname, 'violations/index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
      },
    },
  },
})
