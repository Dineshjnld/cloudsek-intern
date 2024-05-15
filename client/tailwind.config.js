module.exports = {
  mode: 'jit', // Just-in-Time mode for faster compilation
  purge: ['./src/**/*.js', './public/index.html'], // Specify files to be purged for production builds
  darkMode: false, // Disable dark mode
  theme: {
    extend: {}, // Extend default theme or add custom theme options
  },
  variants: {
    extend: {}, // Extend default variants or add custom variants
  },
  plugins: [], // Add any Tailwind CSS plugins you may need
};
