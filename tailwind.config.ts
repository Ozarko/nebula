import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        border: "var(--border)",
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
      },
      maxWidth: {
        'sub-container': '330px',
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
