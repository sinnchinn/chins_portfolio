import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['mainFont']
      },
      colors: {
        'navPink' : "rgb(236,201,201)",
        "bgPink" : 'rgb(255	255	219)',
        "bgYellow": 'rgb(255,255,236)',
        'greenTxt' : 'rgb(153,204,153)'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
