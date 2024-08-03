import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';

export default defineConfig({
  plugins: [react()], 
  css: {
    postcss: { plugins: [tailwindcss(), cssnano] }
  },
  server: {
    port: 3030,
  },
  preview: {
    port: 8080,
  },
  
})
