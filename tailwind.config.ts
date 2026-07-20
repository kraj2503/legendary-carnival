import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E12",
        surface: "#12171D",
        "surface-2": "#161C23",
        hairline: "#232A33",
        text: "#E8EAED",
        muted: "#8B95A1",
        amber: "#E8A33D",
        "amber-dim": "#7A5A26",
        signal: "#4FBE8E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
