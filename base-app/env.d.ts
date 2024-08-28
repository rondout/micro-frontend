/*
 * @Author: shufei.han
 * @Date: 2024-08-01 09:38:34
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-08 09:09:10
 * @FilePath: \base-app\env.d.ts
 * @Description: 
 */
/// <reference types="vite/client" />
import { MicroMessageType, SubApps } from '@/models/base.model'
import 'ant-design-vue/typings/global'

declare global {
    interface MicroMessage<T = any> {
        type: MicroMessageType;
        value:T
    }
}

declare module '@micro-zoe/micro-app' {
    interface MicroApp {
        setData: <T>(appName: SubApps, data: {type: MicroMessageType; value?:T}) => void;
    }
}
export {}