module.exports = {
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
]
  ,
  theme: {
    // colors:{
    //   'dark': '#100C2A'
    // },
    extend: {
      keyframes: {
          'fade-in-left': {
              '0%': {
                  opacity: '0',
                  transform: 'translateX(-30px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateX(0)'
              },
          },
          'fade-in-right': {
            '0%': {
                opacity: '0',
                transform: 'translateX(30px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateX(0)'
            },
        }
      },
      animation: {
          'fade-in-left': 'fade-in-left 1s ease-out',
          'fade-in-right': 'fade-in-right 1s ease-out'
      }
  },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
