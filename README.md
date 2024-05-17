SetUp TailwindCss
->
1. npm install -D tailwindcss
2. npx tailwindcss init
3. now go to  tailwind.config.js file
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
4. Now go to src/index.css write
@tailwind base;
@tailwind components;
@tailwind utilities;

You are good to go Now
