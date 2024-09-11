import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://christiandj456.github.io/3-WEBFE-REACT-VITE-CRIS/' // This will be the default path for the project
})
