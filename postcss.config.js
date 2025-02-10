// PostCSS configuration for processing Tailwind CSS and adding vendor prefixes
export default {
    // Define the plugins PostCSS should use
    plugins: {
      // Tailwind CSS - processes utility classes and generates corresponding CSS
      tailwindcss: {},
      
      // Autoprefixer - automatically adds vendor prefixes for browser compatibility
      autoprefixer: {
        // Enable Grid layout prefixes for better browser support
        grid: true,
        // Use flexbox fallbacks where possible
        flexbox: 'no-2009'
      }
    }
  }