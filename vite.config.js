import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this matches your deployment environment
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    open: true,
  },
});
