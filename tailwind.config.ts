// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        // Можеш залишити border і тут про всяк випадок,
        // але для @apply border-border краще borderColor нижче.
        border: "var(--border)", // <--- Оце створює border-border як колір фону/тексту
      },
      // === ДОДАЙ ОЦЕЙ БЛОК ДЛЯ МЕЖ ===
      borderColor: {
        border: "var(--border)", // <--- Це створює кастомну утиліту для границь border-border
      },
    },
  },
  plugins: [],
};
export default config;