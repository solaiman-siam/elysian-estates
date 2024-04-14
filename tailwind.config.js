/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['"Lato", sans-serif'],
      },
      backgroundImage: {
        hero1: "url('https://i.postimg.cc/LXJcH0jc/slide02.jpg')",
        hero2: "url('https://i.postimg.cc/Gt05b3LD/slide03.jpg')",
        hero3: "url('https://i.postimg.cc/WzDHvFcT/slide01.jpg')",
      },
    },
  },
  plugins: [require("daisyui", "flowbite/plugin")],
};
