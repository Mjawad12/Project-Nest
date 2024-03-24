/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      fontFamily: {
        pm: "var(--Font-primary)",
      },
      colors: {
        dullC: "#8E92BC",
        dullP: "#e3e3e3",
        hoverC: "#F5F5F7",
        Pdark: "#141522",
        "Pn-dark-900": "#10197A",
        "Pn-dark-800": "#1A2793",
        "Pn-dark-700": "#2A3BB7",
        "Pn-dark-600": "#3D53DB",
        "Pn-default-500": "#546FFF",
        "Pn-light-400": "#7E95FF",
        "Pn-light-300": "#7E95FF",
        "Pn-light-200": "#BAC8FF",
        "Pn-light-100": "#DCE4FF",
        primaryWhite: "#f0f0f0",
      },
      fontWeight: {
        bol: "800",
        semi: "700",
        med: "600",
        reg: "500",
      },
    },
  },
  plugins: [],
};
