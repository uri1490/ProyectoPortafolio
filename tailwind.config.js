/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-600%) " },
        },
      },
      fontFamily: {
        ubuntu: ["Rubik Doodle Shadow", "normal"],
        greco: ["Tilt Prism", "normal"],
        manus: ["Great Vibes", "normal"],
      },
      backgroundImage: {
        "hero-pattern": "url('../t1.jpg')",
        "proj1-pattern": "url('../pr1.jpg')",
        "pol1-pol": "url('../pol1.svg')",
        "enc1-enc": "url('../enc1.svg')",
        "test-enc": "url('../mrf.PNG')",
        "atmel-enc": "url('../atmel2.JPEG')",
        "arix-enc": "url('../arix.png')",
        "sipae-enc": "url('../sipa2.png')",
        "sql-enc": "url('../sql.png')",
        "enc-enc": "url('../enc2.gif')",
        "iray-enc": "url('../iray3.png')",
        "api-enc": "url('../ApiTopico.gif')",
        "sige-enc": "url('../sige9.JPEG')",
        "mrf-enc": "url('../mrf.PNG')",
        "ari-enc": "url('../ari2.gif')",
        "sige8-enc": "url('../sige9.JPEG')",
        "fondoOvni-enc": "url('../fondoOvni.jpg')",
        "fondoFoto2-enc": "url('../fondoFoto3.png')",
        "fondoCard-enc": "url('../fondoCard2.jpg')",
      },
    },
  },
  plugins: [],
};
