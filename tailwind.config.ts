import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mouride: {
          green: "#0F5132",
          gold: "#C9A227",
          cream: "#FAF6EC",
          dark: "#0B2E1F",
        },
      },
      fontFamily: {
        display: ["Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #0B2E1F 0%, #0F5132 60%, #C9A227 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
