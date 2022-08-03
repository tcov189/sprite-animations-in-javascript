import checker from 'vite-plugin-checker'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [checker({ typescript: true })], // e.g. use TypeScript check
  base: '/sprite-animations-in-javascript/'
}