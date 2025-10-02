import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	base: '/Frontend-Mentor-Weather-App/',
  plugins: [
		react(),
		tailwindcss(),
	],
})
