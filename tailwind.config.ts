import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        abhaya: ["Abhaya Libre", "serif"],
        abril: ["Abril Fatface", "serif"],
        barlow: ["Barlow", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        wine: "#5D0E41",
      },
    },
  },
  plugins: [],
};
export default config;
