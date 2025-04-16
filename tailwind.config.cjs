// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#343541', // fundo escuro
        surface: '#FFFFFF',    // área branca da esquerda
        text: '#D1D5DB',       // texto claro (cinza claro)
        primary: '#AB68FF',    // botão roxo
        input: '#40414F',      // fundo do input
        border: '#565869',     // bordas sutis
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
