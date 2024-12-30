import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

declare type LibraryFormats = 'es' | 'cjs' | 'umd' | 'iife'

export default defineConfig(async () => {
  return {
    plugins: [vue(), dts()],
    test: {
      globals: true,
      environment: 'jsdom',
    },
    build: {
      target: 'es2015',
      lib: {
        entry: resolve(__dirname, './src/index.ts'),
        name: 'TextView',
        fileName: 'text-view',
        formats: ['es', 'cjs', 'umd'] as LibraryFormats[],
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  }
})
