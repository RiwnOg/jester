/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        vote: "vote 0.5s ease-in-out",
        fade: "fadeIn 1s ease-in",
      },
      keyframes: {
        vote: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            // transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            // transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
