import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			page: 'rgb(var(--page) / <alpha-value>)',
  			ink: 'rgb(var(--ink) / <alpha-value>)',
  			body: 'rgb(var(--body) / <alpha-value>)',
  			subtle: 'rgb(var(--subtle) / <alpha-value>)',
  			muted: 'rgb(var(--muted) / <alpha-value>)',
  			link: 'rgb(var(--link) / <alpha-value>)',
  			rule: 'rgb(var(--rule) / <alpha-value>)'
  		}
  	}
  },
  darkMode: ["class"],
  plugins: [nextui(), require("tailwindcss-animate")],
};
export default config;
