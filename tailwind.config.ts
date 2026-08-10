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
        border: "var(--border)",
      },
      borderColor: {
        border: "var(--border)",
      },
      // === ДОДАЙ ОЦЕЙ БЛОК ДЛЯ ФОНОВИХ ЗОБРАЖЕНЬ ===
      backgroundImage: {
        // Це створить утиліту `bg-hero-pattern`, яка використовуватиме твою CSS-змінну
        'hero-pattern': 'var(--hero-bg-url)', 
      },
    },
  },
  plugins: [],
};
export default config;