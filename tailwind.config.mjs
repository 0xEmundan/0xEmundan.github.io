/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        cyber: '#00ff9d',
        dark: {
          900: '#0a0a0f',
          800: '#0d0d1a',
          700: '#111827',
          600: '#1e1e2e',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
