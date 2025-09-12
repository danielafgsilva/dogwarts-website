/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {
      content: [
        './src/**/*.{js,jsx,ts,tsx,html}',
        './public/index.html'
      ],
    },
    autoprefixer: {
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead'
      ],
    },
  },
}

export default config
