import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite Configuration
 * 
 * Configures the development and build process for the application.
 * Documentation: https://vitejs.dev/config/
 */
export default defineConfig({
  // React plugin provides JSX support and Fast Refresh
  plugins: [react()],
  
  // Additional options can be added as needed:
  // server: {
  //   port: 3000,
  //   open: true
  // },
  // build: {
  //   outDir: 'dist',
  //   minify: 'terser'
  // },
  // css: {
  //   preprocessorOptions: {
  //     // CSS preprocessor options
  //   }
  // }
})
