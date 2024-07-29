/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/**/*.html"],
  theme: {
        extend: {
      // colors: {
      //   "text-blue" : "var(--text-blue)",
      // textblue: 'var(--text-blue)', 
      // },
      colors: {
        textblue: 'var(--text-blue)', 
        whitecolor: 'var(--white-color)',
        btnbgcolor: 'var(--btn-bg-color)',
        btnbghovercolor: 'var(--btn-bg-hover-color)',
        pcolor: 'var(--p-color)',
        darkcolor: 'var( --dark-color)',
        background: 'var(--background)',
        sectioncolor: 'var(--section-bg-color)',
        sectionpadding: 'var(--section-padding)',
        f1: 'var(--f1)',
      },
    },
  },
  plugins: [],
}

