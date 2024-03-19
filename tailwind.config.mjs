/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        heroImage:
          "url('/src/assets/images/tim-mossholder-uicdmDWW9RQ-unsplash.jpg')",
      },
    },
  },
  plugins: [],
}
