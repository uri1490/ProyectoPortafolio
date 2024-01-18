/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Rubik Doodle Shadow", "normal"],
      },
      backgroundImage: {
        "hero-pattern": "url('./t1.jpg')",
      },
    },
  },
  plugins: [],
};
