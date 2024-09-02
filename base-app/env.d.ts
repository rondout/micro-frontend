/*
 * @Author: shufei.han
 * @Date: 2024-08-01 09:38:34
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 10:16:31
 * @FilePath: \micro-frontend\base-app\env.d.ts
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
        getGlobalData: () => MicroMessage;
        setGlobalData: <T extends MicroMessage = MicroMessage, C extends Function>(data:T, cb?: C) => void;
    }
}
export {}