import fs from 'fs'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

fs.rmSync('dist', { recursive: true, force: true })

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: 'typings/auto-imports.d.ts'
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: 'typings/components.d.ts',
      dirs: ['src/renderer/components', 'src/renderer/pages/main/views']
    }),
    electron({
      main: {
        entry: 'src/main/index.ts',
        vite: {
          build: {
            sourcemap: false,
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
        about: resolve(__dirname, 'index_about.html'),
        print: resolve(__dirname, 'index_print.html')
      }
    }
  }
})
