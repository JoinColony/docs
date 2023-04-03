// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', '../docs/**/*.{mdx,md}'],
  darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    colors: {
      blue: {
        1000: '#021C2B',
        900: '#012138',
        800: '#00284B',
        400: '#289BDC',
      },
      grey: {
        500: '#A4B6C7',
      },
      pink: '#F5416E',
      purple: ' #FFBBDC',
      transparent: 'transparent',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Avenir Next', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
  },
  plugins: [],
};
