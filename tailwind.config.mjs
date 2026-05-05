/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          nude: '#F5F0EB', // Bege suave/Nude
          white: '#FFFFFF', // Branco puro
          gold: '#D4AF37', // Dourado/Gold
          dark: '#3E2723', // Marrom Escuro/Café
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
