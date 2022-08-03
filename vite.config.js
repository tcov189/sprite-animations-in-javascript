import checker from 'vite-plugin-checker'
export default {
  plugins: [checker({ typescript: true })], // e.g. use TypeScript check
  base: '/sprite-animations-in-javascript/'
}