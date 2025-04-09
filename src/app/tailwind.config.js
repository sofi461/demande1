/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Important: Scanne le dossier app
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Gardez si vous avez aussi le dossier pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Important: Scanne le dossier components
    // Ajoutez d'autres dossiers si vous mettez des composants ailleurs
  ],
  theme: {
    extend: {
      // ... vos extensions de thème ...
    },
  },
  plugins: [
    // ... vos plugins ...
  ],
};
