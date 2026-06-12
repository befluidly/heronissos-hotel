import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        "hh-black": "#111111",
        "hh-off-white": "#f5f2ee",
        "hh-warm": "#e8e4dd",
        "hh-gold": "#b5a47c",
        "hh-green": "#4a6b4d",
      },
    },
  },
  plugins: [],
};

export default config;
