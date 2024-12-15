/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          blue: "#243066",
        },
        complementary: {
          white: "#F9F9F9",
          black: "#1E1E1E"
        }
      },
    },
  },

  plugins: [],
}

