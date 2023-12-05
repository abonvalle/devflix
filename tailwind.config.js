// @ts-nocheck

module.exports = {
  mode: 'jit',
  content: ['./projects/netflix-portfolio/src/**/*.{html,ts}'],
  safelist: [],
  theme: {
    fontFamily: {
      sans: 'Poppins',
      body: 'Poppins',
      title: 'Roboto',
      icomoon: 'icomoon'
    },
    extend: {
      colors: {
        smokey: 'rgba(0, 0, 0, 0.75)',
        'dark-gray': '#181818',
        recommended: '#46d369'
      },
      backgroundImage: {
        vignette: 'linear-gradient(198deg,rgba(0,0,0,.9),hsla(0,0%,9%,.5) 10%,transparent 15%)',
        'smokey-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, transparent);',
        'sign-in-banner':
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/ff708b8f-bb94-4c1a-8758-5474c47741df/FR-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg')"
      },
      animation: {
        'profile-gate': 'animateProfileGate .45s forwards'
      },
      keyframes: {
        animateProfileGate: {
          from: {
            opacity: 0,
            transform: 'scale(1.1)'
          },

          to: {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
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
