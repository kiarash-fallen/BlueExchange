/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'home': "url('/public/assets/images/bg/Home Page ( 1440 size ).png')",
      // }
      boxShadow: {
        'sidebar': '-4px 0px 16px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}