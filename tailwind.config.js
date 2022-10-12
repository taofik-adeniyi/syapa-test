/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./comps/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        syarpamainblue: "#2033A0",
        syarpasecondaryarsh: "#8A90A8",
        syarpamainpink: "#FF276A",
      },
      fontFamily: {
        cerebri: ["Cerebri-Sans"],
        poppins: ["Poppins, sans-serif !important"],
      },
    },
  },
  plugins: [],
  important: true,
};
