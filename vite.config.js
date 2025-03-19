import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ensure correct base path for Netlify
export default defineConfig({
  plugins: [react()],
  base: "/",  // Ensure this is correct, especially if deploying under a subpath
})