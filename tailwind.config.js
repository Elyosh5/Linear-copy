/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(orientation: portrait)" },
        landscape: { raw: "(orientation: landscape)" },
        tablet: { max: "768px" }, // ← Changed this
      },
      boxShadow: {
        custom:
          "inset 0 -2.75px 4.75px rgba(255,255,255,.14), inset 0 -.752px .752px rgba(255,255,255,.1), 0 54px 73px 3px rgba(0,0,0,.5)",
      },
      background: {
        "linear-gradient":
          "linear-gradient(180deg, transparent 0%, #08090a 100%)",
      },
    },
  },
  plugins: [],
};
