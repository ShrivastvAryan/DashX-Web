import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      /* ---------------- FONT FAMILIES ---------------- */
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],

        // Existing usage across the app (kept for backwards compatibility).
        "inter-display": ["var(--font-display)", "ui-serif", "Georgia", "serif"],

        primary: ["var(--font-sans)", "system-ui"],
        secondary: ["var(--font-sans)", "system-ui"],
        regular: ["var(--font-sans)", "system-ui"],

        // New fonts
        redaction: ["var(--font-redaction)", "serif"],
        redaction10: ["var(--font-redaction10)", "serif"],
        dmsans: ["var(--font-dmsans)", "sans-serif"],
      },

      /* ---------------- COLORS ---------------- */
      colors: {
        primary: "#0f172a",
        secondary: "#64748b",
        stroke: "#e2e8f0",
        "card-bg": "#f8fafc",
        brand: "#4166fb",
        outline: "#ebebeb",

        "brand-new":{
          secondary:"#EDEBE6",
        },
        "theme-white":"#F9F4EF",
        "theme-blue": "#4166FB",
        gold: "#FFD700",
        silver: "#C0C0C0",
        bronze: "#CD7F32",
        "theme-primary": "#2F2E31",
        "theme-secondary": "#A19F9F",
        "theme-accent": "#0B4AE1",

        // token-based colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primaryToken: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondaryToken: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accentToken: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        cardToken: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      /* ---------------- SPACING ---------------- */
      spacing: {
        none: "0px",
        "xx-small": "2px",
        "x-small": "4px",
        small: "8px",
        regular: "16px",
        large: "32px",
        "x-large": "64px",
        "xx-large": "128px",
      },

      /* ---------------- TEXT SIZES ---------------- */
      fontSize: {
        "12": ["12px", { lineHeight: "17px", letterSpacing: "-0.001em" }],
        "12m": ["12px", { lineHeight: "17px" }],

        "14": ["14px", { lineHeight: "19px", letterSpacing: "-0.001em" }],
        "14m": ["14px", { lineHeight: "19px" }],
        "14sb": ["14px", { lineHeight: "19px" }],

        "16": ["16px", { lineHeight: "22px" }],
        "16m": ["16px", { lineHeight: "22px" }],
        "16sb": ["16px", { lineHeight: "22px" }],

        "18": ["18px", { lineHeight: "24px", letterSpacing: "-0.002em" }],
        "18m": ["18px", { lineHeight: "24px", letterSpacing: "-0.002em" }],
        "18sb": ["18px", { lineHeight: "24px" }],

        "24": ["24px", { lineHeight: "30px", letterSpacing: "-0.002em" }],
        "24m": ["24px", { lineHeight: "30px" }],
        "24sb": ["24px", { lineHeight: "30px" }],

        "28": ["28px", { lineHeight: "35px", letterSpacing: "-0.002em" }],
        "28m": ["28px", { lineHeight: "35px" }],
        "28sb": ["28px", { lineHeight: "35px", letterSpacing: "-0.012em" }],

        "32": ["32px", { lineHeight: "39px" }],
        "32m": ["32px", { lineHeight: "39px" }],
        "32sb": ["32px", { lineHeight: "39px", letterSpacing: "-0.014em" }],
      },

      /* ---------------- BORDERS ---------------- */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* ---------------- ANIMATIONS ---------------- */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        upDown: "upDown 2s ease-in-out infinite",
      },

      padding: {
        4.5: "18px",
      },
    },
  },

  plugins: [animate],
};

export default config;
