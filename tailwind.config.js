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
        'wiggle': {
          '0%': {
            transform: 'rotate(-12deg)'
          },
          '50%': {
            transform: 'rotate(12deg)'
          },
         
          '100%': {
           
            transform: 'rotate(-12deg)'
        }
      },
          'fade-in-left': {
              '0%': {
                  opacity: '0',
                  transform: 'translateX(-50px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateX(0)'
              },
          },
          'fade-in-right': {
            '0%': {
                opacity: '0',
                transform: 'translateX(50px)',
            },
            '100%': {
                opacity: '1',
                transform: 'translateX(0)'
            },
        }
      },
      animation: {
          'fade-in-left': 'fade-in-left 1.5s ease-out',
          'fade-in-right': 'fade-in-right 1.5s ease-out',
          'wiggle': 'wiggle 0.5s infinite'
      }
  },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
