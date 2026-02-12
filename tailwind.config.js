import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        eco: "#10B981",
        leaf: "#34D399",
        ocean: "#3B82F6",
        sunset: "#F59E0B",
        danger: "#EF4444",
        dark: "#111827",
      },
    },
  },
  plugins: [],
} satisfies Config;
