/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#343541', // fundo escuro
        surface: '#444654',    // caixas e mensagens
        border: '#565869',     // bordas
        text: '#ECECF1',        // texto principal
        subtle: '#A9A9BC',     // texto mais fraco
        input: '#40414F',      // fundo do input
        hover: '#2A2B32',      // hover menus
        primary: '#10A37F'     // botão ou destaques
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
