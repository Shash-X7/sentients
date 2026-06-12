import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary":    "#FFFFFF",
        "bg-secondary":  "#FAFAFA",
        "ink-primary":   "#111111",
        "ink-secondary": "#555555",
        "ink-tertiary":  "#888888",
        "border-DEFAULT":"#E5E5E5",
        "border-strong": "#CCCCCC",
        "accent-blue":   "#2563EB",
        "accent-purple": "#7C3AED",
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem",   { lineHeight: "1.08", letterSpacing: "-0.03em",  fontWeight: "600" }],
        "display-xl":  ["3.75rem",  { lineHeight: "1.1",  letterSpacing: "-0.025em", fontWeight: "600" }],
        "display-lg":  ["3rem",     { lineHeight: "1.15", letterSpacing: "-0.02em",  fontWeight: "600" }],
        "display-md":  ["2.25rem",  { lineHeight: "1.2",  letterSpacing: "-0.018em", fontWeight: "600" }],
        "display-sm":  ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.015em", fontWeight: "600" }],
        "body-xl":     ["1.25rem",  { lineHeight: "1.75" }],
        "body-lg":     ["1.125rem", { lineHeight: "1.75" }],
        "body-md":     ["1rem",     { lineHeight: "1.7"  }],
        "body-sm":     ["0.9375rem",{ lineHeight: "1.65" }],
        "body-xs":     ["0.875rem", { lineHeight: "1.6"  }],
        "label-lg":    ["0.875rem", { lineHeight: "1.4",  letterSpacing: "0.06em",  fontWeight: "500" }],
        "label-md":    ["0.8125rem",{ lineHeight: "1.4",  letterSpacing: "0.06em",  fontWeight: "500" }],
        "label-sm":    ["0.75rem",  { lineHeight: "1.4",  letterSpacing: "0.08em",  fontWeight: "500" }],
      },
      maxWidth: {
        reading: "68ch",
        site:    "1200px",
      },
      borderRadius: {
        card: "1rem",
        pill: "999px",
      },
      boxShadow: {
        card:       "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)",
        "card-hover":"0 4px 16px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
