/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'primary': ['Poppins', 'sans-serif'],
      'accent': ['Abel', 'sans-serif']
    },
    container: {
      screens: {
        xs: '500px',
        sm: '640px',
        md: '850px',
        lg: '950px',
        xl: '1280px',
      },
    },
    screens: {
      xs: '500px',
      sm: '640px',
      md: '850px',
      lg: '1000px',
      xl: '1280px',
    },
    extend: {
      maxWidth: {
        'md': '470px',
        '7xl': '1200px',
      },
      colors: {
        gradient: {
          pink: {
            300: '#F4C4F3',
            700: '#fc67f979'
          },
          purple: {
            100: 'hsl(255 100% 80%)',
            400: '#BCA5FF',
          },
          blue: {
            100: 'hsl(209 56% 20%)',
            400: '#214D76',
          }
        },
        primary: {
          800: "#00040F",
          900: "#11101D"
        },
        neutral: {
          400: "hsl(0 0% 100% / .7)",
          700: "#6D6D6D",
          800: "rgba(255, 255, 255, .2)",
          900: "#272727",
        },
        secondary: {
          400: "#5865f2",
          700: '#1A2980',
          900: 'hsl(260 29% 9%)'
        },
        accent: {
          100: "#DEF9FA",
          200: "hsl(169 89% 31% / .1)",
          400: "#5CE1E6",
          700: "#33BBCF"
        },
      }
    },
  },
  plugins: [],
}