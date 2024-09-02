/*
 * @Author: shufei.han
 * @Date: 2024-08-27 17:18:57
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 10:58:37
 * @FilePath: \micro-frontend\child-vue3-app\src\stores\message.ts
 * @Description: 
 */
import { isMicroEnv, MicroMessageType } from "@/models/base.model";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { useMainStore } from "./main";
import { Modal } from "ant-design-vue";

export const useMsgStore = defineStore('msg', () => {
    if(!isMicroEnv) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return {messages: <MicroMessage[]>[], globalMessages: <MicroMessage[]>[], setGlobalMessages: (msg?: MicroMessage) => {}}
    }
    const messages= ref<MicroMessage[]>([])
    const globalMessages = ref<MicroMessage[]>([])
    const mainStore = useMainStore()
    const handleMessage = (data: MicroMessage<string>) => {
        console.log('child-vue3-app-receive message: ', data);
        if(data.type === MicroMessageType.CHANGE_THEME) {
            console.log("更改主题");
            mainStore.changeTheme(data.value)
        }
    }

    const handleGlobalMessage = (data: MicroMessage) => {
        Modal.info({title:`Vue3收到来自全局的数据`, content: JSON.stringify(data), centered:true})
        globalMessages.value.push(data)
    }

    onMounted(() => {
        window.microApp.addDataListener((data) => {
            handleMessage(data)
            messages.value.push(data)
          })    
        window.microApp.addGlobalDataListener((data) => {
            handleGlobalMessage(data)
        })
    })

    const setGlobalMessages = (msg: MicroMessage) => {
        window.microApp.setGlobalData(msg)
    }

    return { messages, globalMessages, setGlobalMessages, handleGlobalMessage }
})