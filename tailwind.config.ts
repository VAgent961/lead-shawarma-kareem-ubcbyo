import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
  "primary": "#E11D48",
  "secondary": "#F59E0B",
  "accent": "#1d8541",
  "background": "#FFFBF7",
  "surface": "#FFFFFF",
  "ink": "#1F2937",
  "muted": "#6B7280",
  "dark": "#121c2a"
},
      fontFamily: {
  "heading": [
    "Outfit",
    "sans-serif"
  ],
  "body": [
    "Inter",
    "sans-serif"
  ]
},
      fontSize: {},
      spacing: {},
      borderRadius: {},
      boxShadow: {
  "card": "0 4px 12px rgba(0,0,0,0.06)",
  "elevated": "0 10px 30px rgba(0,0,0,0.12)"
},
    },
  },
  plugins: [],
};

export default config;
