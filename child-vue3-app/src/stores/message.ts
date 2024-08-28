/*
 * @Author: shufei.han
 * @Date: 2024-08-27 17:18:57
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 12:18:28
 * @FilePath: \micro-frontend\child-vue3-app\src\stores\message.ts
 * @Description: 
 */
import { isMicroEnv, MicroMessageType } from "@/models/base.model";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { useMainStore } from "./main";

export const useMsgStore = defineStore('msg', () => {
    if(!isMicroEnv) {
        return {messages: <MicroMessage[]>[]}
    }
    const messages= ref<MicroMessage[]>([])
    const mainStore = useMainStore()
    const handleMessage = (data: MicroMessage<string>) => {
        console.log('child-vue3-app-receive message: ', data);
        if(data.type === MicroMessageType.CHANGE_THEME) {
            console.log("更改主题");
            mainStore.changeTheme(data.value)
        }
    }

    onMounted(() => {
        window.microApp.addDataListener((data) => {
            handleMessage(data)
            messages.value.push(data)
          })    
    })

    return { messages }
})