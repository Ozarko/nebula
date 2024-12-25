import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "var(--secondary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "border": "var(--border)",
      
      },
      backgroundImage: {
        "nebula-gradient":
          "linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)",
      },
      fontFamily: {
        'open-sans': ["var(--font-open-sans)", "sans-serif"],
      },
      boxShadow: {
        'primary': '2px 2px 6px 0px #543c9740'
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '330px',
          xl: '330px',
          '2xl': '330px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
