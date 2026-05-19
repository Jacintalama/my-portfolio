import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      logo:["Archivo", "system-ui"],
      primary: ["Libre Franklin", "system-ui", "sans-serif"],
      heading: ["Archivo", "system-ui", "sans-serif"],
     }
    },
  },
  plugins: [],
};
export default config;
