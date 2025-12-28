// tailwind.config.js
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        orchid: "#DA70D6",
        "orchid-dark": "#9B30FF",
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
