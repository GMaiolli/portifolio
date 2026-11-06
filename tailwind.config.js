/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta customizada do projeto: tema escuro com detalhes em vermelho escuro (oxblood).
        // Mantida em variáveis nomeadas para reforçar consistência visual em todo o site.
        bg: "#080c1a",
        surface: "#10162a",
        "surface-hover": "#171e34",
        border: "#27304b",
        "border-strong": "#394362",
        ink: "#f4f3ff",
        muted: "#a9b1cc",
        accent: "#8f75ff",
        "accent-dim": "#352868",
        "accent-bright": "#b6a5ff",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "76rem",
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
