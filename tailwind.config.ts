import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral': '#FF7F50',
        'darkorange': '#FF8C00',
      },
      fontFamily: {
        'nanumsquare': ['nanumsquare', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config;

