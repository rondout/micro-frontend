/*
 * @Author: shufei.han
 * @Date: 2024-08-02 09:29:40
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-20 17:54:34
 * @FilePath: \qiankun\child-vue3-app\env.d.ts
 * @Description: 
 */
/// <reference types="vite/client" />

declare global {
    interface Window {
        /** 应用名称 */
        __MICRO_APP_NAME__: string;
        /** 判断应用是否在微前端环境中 */
        __MICRO_APP_ENVIRONMENT__: boolean;
        /** 子应用的静态资源前缀 */
        __MICRO_APP_PUBLIC_PATH__: string;
        /** 子应用的基础路径 */
        __MICRO_APP_BASE_ROUTE__: string;
        /** 判断当前应用是否是主应用 */
        __MICRO_APP_BASE_APPLICATION__: string;
        /** 获取真实window（即主应用window） */
        rawWindow: Window;
        /** 获取真实document（即主应用document） */
        rawDocument: Document;
    }
}

export {}