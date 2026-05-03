/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      colors: {
        primary: "#0A2540",       // Deep enterprise blue
        primaryLight: "#143A5A",
        accent: "#00C2FF",        // Cyan accent
        surface: "#F8FAFC",       // Light background
        darkBg: "#0B1220",        // Dark mode background
        darkSurface: "#111827",   // Dark cards
      },
    },
  },
  plugins: [],
  darkMode: "class",
}