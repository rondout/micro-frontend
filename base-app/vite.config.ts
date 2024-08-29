/*
 * @Author: shufei.han
 * @Date: 2024-08-01 09:38:34
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 18:23:06
 * @FilePath: \micro-frontend\base-app\vite.config.ts
 * @Description: 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('micro-app')
        }
      }
    }),
    vueDevTools(),
  ],
  server: {
    host:'0.0.0.0'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
