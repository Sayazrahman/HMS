// tailwind.config.js

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      colors: {
        background: "var(--background)",
        border: "var(--border)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
