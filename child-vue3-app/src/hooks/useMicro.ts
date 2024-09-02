/*
 * @Author: shufei.han
 * @Date: 2024-08-08 15:58:41
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-08 16:01:48
 * @FilePath: \qiankun\child-vue3-app\src\hooks\useMicro.ts
 * @Description: 
 */
export default function useMicro() {
    const isMicro = window.__MICRO_APP_ENVIRONMENT__;

    return {
        isMicro
    }
 };