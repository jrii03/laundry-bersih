/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#38BDF8',      // Biru Muda
        secondary: '#2DD4BF',    // Hijau Tosca
        textDark: '#374151',     // Abu-abu Gelap
        bgClean: '#FFFFFF'       // Putih
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
}