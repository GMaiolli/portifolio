/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta customizada do projeto: tema escuro com detalhes em vermelho escuro (oxblood).
        // Mantida em variáveis nomeadas para reforçar consistência visual em todo o site.
        bg: "#0a0908",
        surface: "#131110",
        "surface-hover": "#1a1716",
        border: "#26211f",
        "border-strong": "#3a302d",
        ink: "#ededea",
        muted: "#8f8883",
        accent: "#8c1c1c",
        "accent-dim": "#4a1010",
        "accent-bright": "#b3291f",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "48rem",
      },
      keyframes: {
        "caret-blink": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
