/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
      },
      colors: {
        'brand-accent':       '#5AAF00',
        'brand-accent-light': '#6BC400',
        'brand-accent-dark':  '#4A9200',
        'brand-gray':         '#323335',
      },
      animation: {
        "fade-in-up": "fadeInUp 0.65s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 9s ease-in-out infinite",
        "float-slow": "float 13s ease-in-out infinite",
        ticker: "ticker 30s linear infinite",
        "expand-bar": "expandBar 0.6s ease forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-22px) rotate(1.5deg)" },
          "66%": { transform: "translateY(-10px) rotate(-1deg)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        expandBar: {
          "0%": { width: "0px" },
          "100%": { width: "56px" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};
