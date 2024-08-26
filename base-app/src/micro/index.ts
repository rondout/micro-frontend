/*
 * @Author: shufei.han
 * @Date: 2024-08-08 14:52:27
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-08 14:58:22
 * @FilePath: \qiankun\base-app\src\micro\index.ts
 * @Description: 
 */
import microApp from "@micro-zoe/micro-app";

export function startMicro() {
    console.log("MicroApp start!");
    microApp.start();
}