// @ts-nocheck

module.exports = {
  mode: 'jit',
  content: ['./projects/netflix-portfolio/src/**/*.{html,ts}'],
  safelist: [],
  theme: {
    fontFamily: {
      sans: 'Poppins',
      body: 'Poppins',
      title: 'Roboto'
    },
    extend: {
      colors: {
        smokey: 'rgba(0, 0, 0, 0.75)'
      },
      backgroundImage: {
        'smokey-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, transparent);',
        'sign-in-banner': "url('/assets/sign-in-banner.jpg')"
      }
    },
    screens: {
      //All devices
      all: '0px',

      //Small/medium res phone
      xxs: '320px',

      //Std phones res
      xs: '500px',

      //small tablets res
      sm: '740px',

      //medium tablets res
      md: '890px',

      //large tablets & small pc res
      lg: '1024px',

      //extra-small pc res
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      //small pc res
      xxl: '1480px',

      //Std pc res
      '3xl': '1920px'
    }
  },
  plugins: []
};
