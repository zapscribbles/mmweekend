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
          myDarkblue: '#1E3A8A'
        },
      },
    },
    variants: {},
    plugins: [],
  }