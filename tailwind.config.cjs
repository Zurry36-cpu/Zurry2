/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#10A37F',      // Verde ChatGPT
        background: '#F7F7F8',   // Fundo geral
        surface: '#FFFFFF',      // Cartões e caixas
        border: '#E5E5E5',       // Bordas suaves
        text: '#202123',         // Texto principal
        subtle: '#6B6C7E',       // Texto secundário
        input: '#F0F0F0',        // Fundo de inputs
        hover: '#ECECF1',        // Hover em menus
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
