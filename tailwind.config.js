/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

//Apabila warna background tampilan web menjadi hitam, tambahkan kode berikut
daisyui: {
  themes: ["cupcake"],
},
}

