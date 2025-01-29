import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/earthquake-tracker/', // 🔥 Esto es clave para GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    manifest: true, // 🔥 Genera un manifest.json para evitar problemas de rutas
  },
})
