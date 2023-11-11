/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "signiture-red": "FF6550",
      colors: {
        "my-red": "#B3483A",
        "my-light-red": "#FFCAC3",
        "my-deep-red": "#DE6655",
        "my-green": "#11434A",
        "my-light-green": "#B6D8DD",
        "my-tree": "#0B733A",
        "my-yellow": "#CD9300",
        "my-purple": "#282085",
        "my-error": "#FF6550",
        "my-font-red": "#76291E",
      },
    },
    mode: "jit",
  },
  plugins: [],
};
