import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          800: "#122B4D",
          700: "#1A3760",
        },
        gold: {
          DEFAULT: "#BD9C6A",
          light: "#D9C39A",
          dark: "#8F7245",
        },
        cream: "#FAF7F1",
        ink: "#1C2230",
        muted: "#697083",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
