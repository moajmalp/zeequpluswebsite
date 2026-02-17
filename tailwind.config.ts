import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "zeeque-violet": "#5B21B6", // Custom Primary
        "zeeque-deep": "#4C1D95",   // Deep Violet start
        "zeeque-indigo": "#6366F1", // Vibrant Indigo end
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "zeeque-gradient": "linear-gradient(to right, #4C1D95, #6366F1)",
      },
      maxWidth: {
        "7xl": "80rem", // Ensure 7xl is defined as requested
      },
    },
  },
  plugins: [],
};

export default config;
