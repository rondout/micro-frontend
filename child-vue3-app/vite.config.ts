/*
 * @Author: shufei.han
 * @Date: 2024-08-01 16:14:55
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 18:32:02
 * @FilePath: \micro-frontend\child-vue3-app\vite.config.ts
 * @Description: 
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'node:path'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, resolve(__dirname, 'env'))
  const isMicro = env.VITE_IS_MICRO


  const plugins = [
    vue(),
    vueDevTools()
  ]
  if (isMicro) {
    plugins.pop()
  }
  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    envDir: './env',
    server: {
      port: 4002,
      host: '0.0.0.0',
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    },
  }
})
