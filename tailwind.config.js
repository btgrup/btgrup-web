/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#baddfd",
          300: "#7ec1fc",
          400: "#3b9ef8",
          500: "#0f81ec",
          600: "#0264cb",
          700: "#034fa4",
          800: "#074386",
          900: "#0c396f",
          950: "#082449",
        },
        accent: {
          500: "#00d294",
          600: "#00ab78",
        },
      },
    },
  },
  plugins: [],
};
