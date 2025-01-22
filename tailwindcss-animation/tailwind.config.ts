import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "marquee-up-slow": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        "marquee-up-slow": "marquee-up-slow 20s linear infinite",
        "spin-slow": "spin 5s linear infinite",
      },
      animationDelay: {
        "0": "0s",
        "4": "4s",
      },
    },
  },
  plugins: [],
} satisfies Config;
