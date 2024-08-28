/*
 * @Author: shufei.han
 * @Date: 2024-08-01 09:38:34
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 11:53:53
 * @FilePath: \micro-frontend\base-app\src\stores\main.ts
 * @Description: 
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { defaultTheme } from '@/models/theme.model'
import { darken, lighten } from 'color2k'
import { SubApps } from '@/models/base.model'
import { Modal } from 'ant-design-vue'

export interface MessageFromChild {
  child: SubApps;
  message: MicroMessage;
}

export const useMainStore = defineStore('main', () => {
  const theme = ref(defaultTheme)

  const msgsFromChild = ref<MessageFromChild[]>([])

  const changePrimary = (value: string) => {
    theme.value.primary.main = value
    theme.value.primary.dark = darken(value, 0.2)
    theme.value.primary.light = lighten(value, 0.2)
  }

  const setMsgFromChild = (child: SubApps, message: MicroMessage) => {
    msgsFromChild.value.push({child, message})
    Modal.info({title:`来自子应用${child}的数据`, content: JSON.stringify(message), centered:true})   
  }

  return { theme, changePrimary, msgsFromChild, setMsgFromChild }
})
