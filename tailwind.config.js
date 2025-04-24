/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      height: {
        "screen-160": "calc(100vh - 160px)",
        "screen-60": "calc(100vh - 60px)",
      },
    },
  },

  plugins: [],
};
