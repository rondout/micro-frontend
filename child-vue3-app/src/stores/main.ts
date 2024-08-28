/*
 * @Author: shufei.han
 * @Date: 2024-08-01 16:14:55
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 12:22:07
 * @FilePath: \micro-frontend\child-vue3-app\src\stores\main.ts
 * @Description:
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { isMicroEnv } from '@/models/base.model'

export const useMainStore = defineStore('main', () => {
  let primary = window.localStorage.getItem('theme-color') || '#3f51b5'
  if (isMicroEnv) {
    primary = window.rawWindow.localStorage.getItem('theme-color') || '#3f51b5'
  }
  const theme = ref({ primary })
  const changeTheme = (color: string) => {
    theme.value.primary = color
    console.log(color, theme.value)
  }

  return { theme, changeTheme }
})
