import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-main": "var(--background-main)",
        main: "var(--main)",
        dark: "var(--dark)",
        secondary: "var(--secondary)",
        special: "var(--special)",
        border: "var(--border-main)",
      },
      backgroundImage: {
        "nebula-gradient":
          "linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)",
      },
      fontFamily: {
        "open-sans": ["var(--font-open-sans)", "sans-serif"],
      },
      boxShadow: {
        primary: "2px 2px 6px 0px #543c9740",
        special: "0px 4px 4px 0px #D8D6D640",
      },
      maxWidth: {
        "sub-container": "330px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1232px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
