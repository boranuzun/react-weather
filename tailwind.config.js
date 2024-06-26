/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#28518a",
        "weather-secondary": "#366dba",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    backgroundImage: {
      clouds: "url(src/assets/clouds.jpg)",
      noise: "url(src/assets/noise.png)",
    },
  },
};
