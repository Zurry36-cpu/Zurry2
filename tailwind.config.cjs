/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#2B2B2B',   // fundo principal (lado direito)
        sidebar: '#1E1E1E',      // fundo sidebar (lado esquerdo)
        surface: '#3A3A3A',      // caixas, inputs
        text: '#E0E0E0',         // texto principal
        subtle: '#A0A0A0',       // texto secundário
        primary: '#4FC3F7',      // azul suave para botões e ícones
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
