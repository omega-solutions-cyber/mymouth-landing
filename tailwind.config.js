/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#07070f',
        bg2: '#0d0d1a',
        bg3: '#111122',
        card: '#14142a',
        bd: 'rgba(255,255,255,0.08)',
        bd2: 'rgba(255,255,255,0.14)',
        tx: '#f0f0fa',
        mu: '#8080a8',
        mu2: '#4a4a6a',
        ac: '#5b7fff',
        ac2: '#8b5fff',
        gr: '#1ed98a',
        yw: '#f5c842',
        rd: '#ff5566',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
