module.exports = {
    purge: {
      content: ['_site/**/*.html'],
      options: {
        safelist: [],
      },
    },
    theme: {
      extend: {
        colors: {
          change: 'black',
          myPurple: '#7C3AED',
          myBlue: '#1E40AF',
          myDarkBlue: '#1E3A8A'
        },
      },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }