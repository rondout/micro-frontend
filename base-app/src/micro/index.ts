/*
 * @Author: shufei.han
 * @Date: 2024-08-08 14:52:27
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 10:30:11
 * @FilePath: \micro-frontend\base-app\src\micro\index.ts
 * @Description: 
 */
import { SubAppList } from "@/models/base.model";
import microApp from "@micro-zoe/micro-app";

export function startMicro() {
    console.log("MicroApp start!");
    microApp.start();
}

export const sendMessageToAllChildren = ( message: MicroMessage) => {
    SubAppList.forEach(item => {
        // 给每个子应用发消息
        microApp.setData(item.key, message)
    })
}