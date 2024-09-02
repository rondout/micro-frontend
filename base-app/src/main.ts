/*
 * @Author: shufei.han
 * @Date: 2024-08-01 09:38:34
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 10:39:21
 * @FilePath: \micro-frontend\base-app\src\main.ts
 * @Description: 
 */
import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import antDesign from 'ant-design-vue'

import App from './App.vue'
import router from './router'
import { startMicro } from "@/micro"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(antDesign)
startMicro()

app.mount('#app')

