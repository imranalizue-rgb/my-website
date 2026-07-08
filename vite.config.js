import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()], // <--- Is line ke aakhir mein comma (,) lagayein
  base: '/my-website/', 
})