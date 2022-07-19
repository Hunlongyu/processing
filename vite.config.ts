import fs from 'fs'
import { join, resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'

fs.rmSync('dist', { recursive: true, force: true })

export default defineConfig({
  plugins: [
    vue(),
    electron({
      main: {
        entry: 'src/main/index.ts',
        vite: {
          build: {
            sourcemap: 'inline',
            outDir: 'dist/main'
          }
        }
      },
      preload: {
        input: {
          index: join(__dirname, 'src/preload/index.ts')
        },
        vite: {
          build: {
            sourcemap: 'inline',
            outDir: 'dist/preload'
          }
        }
      },
      renderer: {}
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/renderer/views/about'),
        print: resolve(__dirname, 'src/renderer/views/print')
      }
    }
  }
})
