/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#343541',   // Fundo geral (lateral escura)
        surface: '#FFFFFF',      // Área principal (conteúdo)
        text: '#202123',         // Texto principal
        subtle: '#6B6C7E',       // Texto secundário
        border: '#E5E5E5',       // Bordas
        input: '#F0F0F0',        // Fundo de inputs
        hover: '#ECECF1',        // Cor de hover
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
