import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/new-repo-name/', // Update this to your repository name
  plugins: [react()],
})

