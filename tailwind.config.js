/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'media', // 或 'media' 或 'class' 取决于你的需求
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: { //字体颜色配置
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'slate': {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a",
        "950": "#020617",
      },
      'gray': {
        "50": "#f9fafb",
        "100": "#f3f4f6",
        "200": "#e5e7eb",
        "300": "#d1d5db",
        "400": "#9ca3af",
        "500": "#6b7280",
        "600": "#4b5563",
        "700": "#374151",
        "800": "#1f2937",
        "900": "#111827",
        "950": "#030712"
      },
      'zinc': {
        "50": "#fafafa",
        "100": "#f4f4f5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b",
        "950": "#09090b"
      },
      'neutral': {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717",
        "950": "#0a0a0a"
      },
      'stone': {
        "50": "#fafaf9",
        "100": "#f5f5f4",
        "200": "#e7e5e4",
        "300": "#d6d3d1",
        "400": "#a8a29e",
        "500": "#78716c",
        "600": "#57534e",
        "700": "#44403c",
        "800": "#292524",
        "900": "#1c1917",
        "950": "#0c0a09"
      },
      'red': {
        "50": "#fdf2f2",
        "100": "#fde8e8",
        "200": "#fbd5d5",
        "300": "#f8b4b4",
        "400": "#f98080",
        "500": "#f05252",
        "600": "#e02424",
        "700": "#c81e1e",
        "800": "#9b1c1c",
        "900": "#771d1d",
        "950": "#5f1a1a"
      },
      'orange': {

      },
      'amber': {

      },
      'yellow': {
        "50": "#fdfdea",
        "100": "#fdf6b2",
        "200": "#fce96a",
        "300": "#faca15",
        "400": "#e3a008",
        "500": "#c27803",
        "600": "#9f580a",
        "700": "#8e4b10",
        "800": "#723b13",
        "900": "#633112",
        "950": "#4c1d0a"
      },
      'lime': {

      },
      'green': {

      },
      'emerald': {

      },
      'teal': {

      },
      'cyan': {

      },
      'sky': {

      },
      'blue': {

      },
      'indigo': {

      },
      'violet': {

      },
      'purple': {

      },
      'fuchsia': {

      },
      'pink': {

      },
      'rose': {

      },
      'white': {

      },
      'black': {

      },
      'transparent': 'transparent',
      'current': 'currentColor',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'dark': '#090909',
      'dark-10': '#101010',
      'surface-90': '#27272a'
    },
    fontSize: { //字体大小配置
      xs: ['.875rem', {
        lineHeight: '1rem',
        letterSpacing: '0.05em',
        fontWeight: '500',
      }],
      sm: ['1rem', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      article: ['1.125rem', '1.875rem'],
    },
    screens: { //屏幕配置
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // typography: { //typography配置
    //   css: {
    //     color: "#fff",
    //   },
    // },
    extend: { //扩展配置
      typography: { //typography扩展配置
        DEFAULT: {
          css: {
            maxWindth: '69ch',
            color: '#ffffff',
            blockquote: {
              color: '#ffffff',
            },
            h1: {
              fontSize: '2.875rem',
              fontWeight: '700',
              color: '#ffff',
            },
            h2: {
              fontSize: '2.25rem',
              fontWeight: '700',
              color: '#ffff',
            },
            h3: {
              fontSize: '1.7rem',
              fontWeight: '700',
              color: '#ffff',
            },
            h4: {
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#ffff',
            },
            h5: {
              fontSize: '1.325rem',
              fontWeight: '700',
              color: '#ffff',
            },
            h6: {
              fontSize: '1.125rem',
              fontWeight: '700',
              color: '#ffff',
            },
            hr: {
              borderColor: '#ffffff',
            },
            pre: {
              backgroundColor: '#18181b !important',
              padding: '0px',
              margin: '0px',
              fontSize: '1rem',
            },
            code: {
              color: '#ffff',
              fontSize: '1rem',
              backgroundColor: '#18181b !important',
              scrollbarColor: '#ffffff #464646',
            },
            blockquote: {
              borderInlineStartColor: '#8957e5',
            },
            p: {
              fontSize: '1.125rem',
              lineHeight: '1.8',
              letterSpacing: '0.02em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            },
            a: {
              color: '#ffffff',
              textDecoration: 'none',
              boxShadow: '0 1.5px 0 hsl(225deg 100% 75%)',
              '&:hover': {
                textDecoration: 'none',
                boxShadow: 'none',
              }
            }
          },
        },
      },
      spacing: { //配置间距
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {   //配置圆角
        'xl': '1rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      },
      gridTemplateColumns: { //配置网格布局
        // like this: grid-cols-services-xl
        'services-xl': 'repeat(auto-fill, minmax(280px, 1fr))',
        'services-2xl': 'repeat(auto-fill, minmax(360px, 1fr))',
      },
      animation: { //配置动画
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {  //配置关键帧
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    }
  },
  plugins: [ //插件配置
    require('@tailwindcss/typography'), //引入typography插件
  ],
}

