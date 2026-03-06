/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1B3A",
          navy2: "#07142D",
          blue: "#1C96BF",
          ice: "#DFECF0",
          lime: "#D2F250",
          gold: "#F2C94C",
        },
      },
      boxShadow: {
        soft: "0 12px 35px rgba(8, 20, 50, 0.16)",
        soft2: "0 18px 60px rgba(8, 20, 50, 0.18)",
      },
      borderRadius: {
        xl2: "22px",
        xl3: "28px",
        xl4: "36px",
      },
    },
  },
  plugins: [],
};