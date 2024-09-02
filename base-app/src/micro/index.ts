/*
 * @Author: shufei.han
 * @Date: 2024-08-08 14:52:27
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 12:06:39
 * @FilePath: \micro-frontend\base-app\src\micro\index.ts
 * @Description: 
 */
import { SubAppList } from "@/models/base.model";
import { useMainStore } from "@/stores/main";
import microApp from "@micro-zoe/micro-app";
import { Modal } from "ant-design-vue";

export function startMicro() {
    console.log("MicroApp start!");
    microApp.start({
        // 'disable-memory-router':true,
        // 'router-mode':'native-scope'
    });
    const mainStore = useMainStore()
    microApp.addGlobalDataListener((msg) => {
        Modal.info({title:`BaseApp收到全局数据`, content: JSON.stringify(msg), centered:true})
        mainStore.setGlobalMessages(msg)
    }
  )
}

export const sendMessageToAllChildren = ( message: MicroMessage) => {
    SubAppList.forEach(item => {
        // 给每个子应用发消息
        microApp.setData(item.key, message)
    })
}

export const sendGlobalData = (message: MicroMessage) => {
    microApp.setGlobalData(message)
}