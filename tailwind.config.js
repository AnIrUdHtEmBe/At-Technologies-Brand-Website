/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3A6B',
        accent: '#4A7FC1',
        'bg-surface': '#F5F7FA',
        'text-main': '#1A1A2E',
        'text-muted': '#5A6A85',
        border: '#DDE3ED',
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
