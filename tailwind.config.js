/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral_0: "hsl(0, 0%, 100%)",
        neutral_300: "hsl(252, 6%, 83%)",
        neutral_500: "hsl(245, 15%, 58%)",
        neutral_700: "hsl(245, 19%, 35%)",
        neutral_700_transparent: "hsla(245 19% 35% / 0.5)",
        neutral_900: "hsl(248, 70%, 10%)",
        orange_500: "hsl(7, 88%, 67%)",
        orange_700: "hsl(7, 71%, 60%)",
      },
      backgroundImage: {
        "ticket-image": "url('assets/images/pattern-ticket.svg')",
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
