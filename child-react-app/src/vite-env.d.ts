/*
 * @Author: shufei.han
 * @Date: 2024-08-02 09:29:40
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-08 15:57:54
 * @FilePath: \qiankun\child-react-app\src\vite-env.d.ts
 * @Description: 
 */
/// <reference types="vite/client" />

declare global {
    interface Window {
        __MICRO_APP_NAME__: string;
        /** micro-app 环境变量 */
        __MICRO_APP_ENVIRONMENT__: boolean;
        __MICRO_APP_BASE_ROUTE__: string;
        __MICRO_APP_BASE_APPLICATION__: string;
        __MICRO_APP_URL__: string;
    }
}

export {}