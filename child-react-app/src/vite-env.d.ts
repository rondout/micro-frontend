/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: shufei.han
 * @Date: 2024-08-02 09:29:40
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 09:41:53
 * @FilePath: \micro-frontend\child-react-app\src\vite-env.d.ts
 * @Description: 
 */
/// <reference types="vite/client" />

import { MicroMessageType } from "./models/base.model";

declare global {

    interface MicroMessage<T = any> {
        type: MicroMessageType;
        value?: T;
    }
    interface Window {
        microApp: {
            addDataListener:(dataListener: (data: MicroMessage) => any, autoTrigger?: boolean) => void;
            removeDataListener:(dataListener: (data: MicroMessage) => any, autoTrigger?: boolean) => void;
            removeGlobalDataListener:(dataListener: (data: MicroMessage) => any, autoTrigger?: boolean) => void;
            addGlobalDataListener:(dataListener: (data: MicroMessage) => any, autoTrigger?: boolean) => void;
            clearDataListener: () => void;
            getData: () => MicroMessage;
            // eslint-disable-next-line @typescript-eslint/ban-types
            dispatch: <T extends MicroMessage = MicroMessage, C extends Function>(data:T, cb?: C) => void
            getGlobalData: () => MicroMessage;
            setGlobalData: <T extends MicroMessage = MicroMessage, C extends Function>(data:T, cb?: C) => void;
        };
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