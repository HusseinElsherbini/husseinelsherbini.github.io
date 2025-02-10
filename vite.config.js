import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/*
export default defineConfig({
  plugins: [react()],
  base: '/husseinelsherbini.github.io/',  // Replace with your repository name
  server: {
    open: true,  // Automatically open browser on dev server start
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
*/
export default defineConfig({
  plugins: [react()],
  // Remove the base path for local development
  // base: '/husseinelsherbini.github.io/', // Only use this when deploying to GitHub Pages
  server: {
    open: true
  }
})