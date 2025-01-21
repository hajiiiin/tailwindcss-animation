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
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "marquee-up-slow": "marquee-up-slow 20s linear infinite",
      },
      animationDelay: {
        "0": "0s",
        "2": "2s",
      },
      backgroundImage: {
        "gradient-marquee":
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgb(252, 0, 0, 0))",
      },
    },
  },
  plugins: [],
} satisfies Config;
