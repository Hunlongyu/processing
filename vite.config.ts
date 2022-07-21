import fs from 'fs'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

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
      }
    }),
    renderer()
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        print: resolve(__dirname, 'pages/print.html')
      }
    }
  }
})
