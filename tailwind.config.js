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
        'blue': '0px 8px 12px rgba(45, 116, 255, 0.16), inset 2px 2px 6px rgba(255, 255, 255, 0.12), inset -1px -1px 6px rgba(0, 0, 0, 0.06)',
        'credit': '0px 8px 24px rgba(0, 0, 0, 0.12)',
        'red': ' 0px 8px 16px rgba(255, 92, 92, 0.2), inset 2px 2px 16px rgba(255, 255, 255, 0.24), inset -1px -1px 12px rgba(0, 0, 0, 0.06)',
        'blue-1': '0px 8px 16px rgba(45, 116, 255, 0.2), inset 2px 2px 16px rgba(255, 255, 255, 0.24), inset -1px -1px 12px rgba(0, 0, 0, 0.06)',
        'blue-3': 'inset 2px 2px 8px rgba(255, 255, 255, 0.12), inset -1px -1px 6px rgba(0, 0, 0, 0.08)',
        'side-menu': '-6px 6px 24px rgba(0, 0, 0, 0.16)',
        'green': '0px 8px 16px rgba(34, 243, 143, 0.08)'
      },
      borderRadius: {
        '2.5xl': "20px",
        "4xl": "32px",
      },
      fontSize: {
        '2xs': '10px'
      }
    },
  },
  plugins: [],
}