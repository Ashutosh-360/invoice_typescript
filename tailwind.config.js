/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "var(--primary)",
        primary_text: "var(--primary_text)",
        secondary_text: "var(--secondary_text)",
      },
      backgroundColor: {
        body: "var(--body)",
        secondary_background: "var(--secondary_background)",
        form: "rgb(20, 22, 37);",
      },
    },
  },
  plugins: [],
};
