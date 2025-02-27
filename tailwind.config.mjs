/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem"
      },
      fontFamily: {
        heading: "Playfair Display",
        body: "Lato"
      },
      fontWeight: {
        thin: "100",
        normal: "400",
        bold: "700"
      },
      colors: {
        "site-bg-main": "var(--background-200)",
        "contact-bg-main": "var(--primary-200)",
        "contact-bg-secondary": "var(--secondary-200)",
        "slider-bg-text": "rgb(var(--slider-bg-text) / 1)",
        "nav-bg": "var(--background-200)",
        "bone": "var(--bone)",
        "silver": "var(--silver)",
        "ash-gray": "var(--ash-gray)",
        "cadet-gray": "var(--cadet-gray)",
        "air-superiority-blue": "var(--air-superiority-blue)",
        text: {
          50: "var(--text-50)",
          100: "var(--text-100)",
          200: "var(--text-200)",
          300: "var(--text-300)",
          400: "var(--text-400)",
          500: "var(--text-500)",
          600: "var(--text-600)",
          700: "var(--text-700)",
          800: "var(--text-800)",
          900: "var(--text-900)",
          950: "var(--text-950)"
        },
        background: {
          50: "var(--background-50)",
          100: "var(--background-100)",
          200: "var(--background-200)",
          300: "var(--background-300)",
          400: "var(--background-400)",
          500: "var(--background-500)",
          600: "var(--background-600)",
          700: "var(--background-700)",
          800: "var(--background-800)",
          900: "var(--background-900)",
          950: "var(--background-950)"
        },
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)"
        },
        secondary: {
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
          950: "var(--secondary-950)"
        },
        accent: {
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
          950: "var(--accent-950)"
        },
        bone: {
          50: "var(--bone-50)",
          100: "var(--bone-100)",
          200: "var(--bone-200)",
          300: "var(--bone-300)",
          400: "var(--bone-400)",
          500: "var(--bone-500)",
          600: "var(--bone-600)",
          700: "var(--bone-700)",
          800: "var(--bone-800)",
          900: "var(--bone-900)"
        },
        silver: {
          50: "var(--silver-50)",
          100: "var(--silver-100)",
          200: "var(--silver-200)",
          300: "var(--silver-300)",
          400: "var(--silver-400)",
          500: "var(--silver-500)",
          600: "var(--silver-600)",
          700: "var(--silver-700)",
          800: "var(--silver-800)",
          900: "var(--silver-900)"
        },
        "ash-gray": {
          50: "var(--ash-gray-50)",
          100: "var(--ash-gray-100)",
          200: "var(--ash-gray-200)",
          300: "var(--ash-gray-300)",
          400: "var(--ash-gray-400)",
          500: "var(--ash-gray-500)",
          600: "var(--ash-gray-600)",
          700: "var(--ash-gray-700)",
          800: "var(--ash-gray-800)",
          900: "var(--ash-gray-900)"
        },
        "cadet-gray": {
          50: "var(--cadet-gray-50)",
          100: "var(--cadet-gray-100)",
          200: "var(--cadet-gray-200)",
          300: "var(--cadet-gray-300)",
          400: "var(--cadet-gray-400)",
          500: "var(--cadet-gray-500)",
          600: "var(--cadet-gray-600)",
          700: "var(--cadet-gray-700)",
          800: "var(--cadet-gray-800)",
          900: "var(--cadet-gray-900)"
        },
        "air-superiority-blue": {
          50: "var(--air-superiority-blue-50)",
          100: "var(--air-superiority-blue-100)",
          200: "var(--air-superiority-blue-200)",
          300: "var(--air-superiority-blue-300)",
          400: "var(--air-superiority-blue-400)",
          500: "var(--air-superiority-blue-500)",
          600: "var(--air-superiority-blue-600)",
          700: "var(--air-superiority-blue-700)",
          800: "var(--air-superiority-blue-800)",
          900: "var(--air-superiority-blue-900)"
        }
      }
    },
    plugins: []
  }
};
