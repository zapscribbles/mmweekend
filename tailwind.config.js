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
        fontFamily: {
          'handwritten': ['Zeyada', 'cursive'],
          'typewriter': ['Newsreader', 'serif'],
        },
        // transitionDuration: {
        //   '0': '0ms',
        //   '50': '50ms',
        //   '100': '100ms',
        //   '150': '150ms',
        //   '200': '200ms',
        //   '250': '250ms',
        //   '300': '300ms',
        //   '350': '350ms',
        //   '400': '400ms',
        //   '450': '450ms',
        //   '500': '500ms',
        //   '550': '550ms',
        //   '600': '600ms',
        //   '650': '650ms',
        //   '700': '700ms',
        //   '800': '800ms',
        //   '850': '850ms',
        //   '900': '900ms',
        //   '950': '950ms',
        //   '1000': '1000ms',
        //   '1050': '1050ms',
        //   '1100': '1100ms',
        //   '1150': '1150ms',
        //   '1200': '1200ms',
        //   '1250': '1250ms',
        //   '1300': '1300ms',
        // },
        // transitionDelay: {
        //   '0': '0ms',
        //   '50': '50ms',
        //   '100': '100ms',
        //   '150': '150ms',
        //   '200': '200ms',
        //   '250': '250ms',
        //   '300': '300ms',
        //   '350': '350ms',
        //   '400': '400ms',
        //   '450': '450ms',
        //   '500': '500ms',
        //   '550': '550ms',
        //   '600': '600ms',
        //   '650': '650ms',
        //   '700': '700ms',
        //   '800': '800ms',
        //   '850': '850ms',
        //   '900': '900ms',
        //   '950': '950ms',
        //   '1000': '1000ms',
        //   '1050': '1050ms',
        //   '1100': '1100ms',
        //   '1150': '1150ms',
        //   '1200': '1200ms',
        //   '1250': '1250ms',
        //   '1300': '1300ms',
        // }
      },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }