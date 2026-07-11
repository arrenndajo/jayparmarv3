/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f4efe6",
        paper: "#fbf7f0",
        ink: "#2c2620",
        muted: "#6c6256",
        faint: "#9b9082",
        terracotta: "#b0593a",
        amber: "#c98a34",
        line: "#d9cdbc",
        codebg: "#ece4d6",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        hand: ["Caveat", "cursive"],
      },
      maxWidth: {
        content: "980px",
      },
    },
  },
  plugins: [],
};
