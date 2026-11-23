import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#06182B",
          primary: "#06182B",
          secondary: "#0A2238",
          card: "#0D2A45",
          border: "#16385A",
          muted: "#1B4168",
        },
        blue: {
          bright: "#087EAD",
          cyan: "#16A6D6",
        },
        gold: {
          DEFAULT: "#D9B65C",
          hover: "#C9A447",
          light: "#EAD694",
          dark: "#B89436",
        },
        gray: {
          light: "#F5F7FA",
          surface: "#FAFBFC",
          subtle: "#E5EAF0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(6, 24, 43, 0.08)",
        card: "0 10px 30px -4px rgba(6, 24, 43, 0.12)",
        gold: "0 8px 24px -4px rgba(217, 182, 92, 0.35)",
        darkCard: "0 12px 32px -4px rgba(2, 10, 18, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
