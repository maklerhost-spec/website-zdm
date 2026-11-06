/** @type {import('tailwindcss').Config} */
// Farben aus Nordfriesland: Priel (tiefes Nordseeblau), Watt (helles Schlickgrau), Reet (Gold der Reetdächer).
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tiefsee: "#071c24",
        priel: { DEFAULT: "#0e2f3a", 600: "#164252", 400: "#3f6b78" },
        ostsee: "#2f7f8c",
        watt: { DEFAULT: "#eef1ee", 200: "#dfe5e1" },
        nebel: "#c9d3cf",
        schlick: "#55625f",
        reet: { DEFAULT: "#c8a24b", 300: "#dcc07f", 700: "#8a6a22" },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Instrument Sans Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "none" } },
        drift: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        driftY: { "0%": { transform: "translateY(0)" }, "100%": { transform: "translateY(-50%)" } },
        zoom: { "0%": { transform: "scale(1.12)" }, "100%": { transform: "scale(1)" } },
        tide: { "0%,100%": { transform: "translateX(0)" }, "50%": { transform: "translateX(var(--tide, 18px))" } },
      },
      animation: {
        rise: "rise .9s cubic-bezier(.16,1,.3,1) both",
        drift: "drift 40s linear infinite",
        zoom: "zoom 2.4s cubic-bezier(.16,1,.3,1) both",
        tide: "tide 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
