import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://photo.manasas.dev',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
})
