/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class', // 或 'media' 或 'class' 取决于你的需求
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: { //字体颜色配置
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
    },
    fontSize: {
      xs: ['.875rem', {
        lineHeight: '1rem',
        letterSpacing: '0.05em',
        fontWeight: '500',
      }],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    fontFamily: {

    },
    screens: { //屏幕配置
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: { //配置背景颜色
        'dark': '#090909',
        'dark-10': '#101010',
        'surface-90': '#27272a'
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'services-xl': 'repeat(auto-fill, minmax(280px, 1fr))',
        'services-2xl': 'repeat(auto-fill, minmax(360px, 1fr))',
      }
    }
  },
  plugins: [],
}

