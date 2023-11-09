import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(async () => {
  return {
    plugins: [vue()],
    test: {
      globals: true,
      environment: 'jsdom',
    },
  }
})
