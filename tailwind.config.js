/** @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js}",
    "public/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        shop: "url('./assets/shopBg.jpg')",
      },
    },
  },
  plugins: [],
};
