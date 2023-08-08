import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: `url('/office.jpg),    linear-gradient(rgba(70, 130, 180, .8), rgba(178, 34, 34, .8))`,
      },
      colors: {
        // "hero-overlay": "#355f08",
        "hero-overlay": "#4682B4",
        muted: "#808085",
      },
      fontSize: {
        "clamp-hero-h1": "clamp(1.5rem, 1rem + 2.5vw, 4rem);",
        "clamp-hero-feature": "clamp(1.5rem, 1.2rem + 1.5vw, 3rem);",
      },
    },
  },
  plugins: [],
};
export default config;
