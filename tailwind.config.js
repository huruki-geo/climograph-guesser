/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',          // ルートの HTML
    './index.tsx',           // ルート直下の JSX/TSX
    './src/**/*.{js,ts,jsx,tsx}', // src 配下の全て
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
