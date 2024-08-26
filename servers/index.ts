/*
 * @Author: shufei.han
 * @Date: 2024-08-01 15:52:42
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-02 10:56:11
 * @FilePath: \servers\index.ts
 * @Description:
 */

import { MicroServer, ServerEnum } from "./src/utils";
// 主应用服务
new MicroServer(ServerEnum.MAIN_APP);
// Vue 应用服务
new MicroServer(ServerEnum.VUE_APP);
// React 应用服务
new MicroServer(ServerEnum.REACT_APP);
// Native 应用服务
new MicroServer(ServerEnum.NATIVE_APP);
