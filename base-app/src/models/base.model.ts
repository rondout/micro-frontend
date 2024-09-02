/*
 * @Author: shufei.han
 * @Date: 2024-08-01 11:05:53
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 12:05:41
 * @FilePath: \micro-frontend\base-app\src\models\base.model.ts
 * @Description:
 */
export interface AnyObject<T = any> {
  [key: string]: T;
}

export enum SubApps {
  VUE = 'VUE',
  REACT = 'REACT',
  NATIVE = 'NATIVE',
}

export interface SubAppConfig {
  name: string;
  label: string;
  description: string;
  entry: string;
  routerPath: string;
  activeRule?: string;
}

export const SubAppsConfigMap = new Map<SubApps, SubAppConfig>([
  [
    SubApps.VUE,
    {
      name: SubApps.VUE,
      label: "VUE APP",
      description: 'Vue3 + Vite App',
      entry: "//http://192.168.8.125:3000",
      routerPath: "/vue",
      activeRule: "/vue",
    },
  ],
  [
    SubApps.REACT,
    {
      name: SubApps.REACT,
      label: "REACT APP",
      description: 'React + Vite App',
      entry: "//http://192.168.8.125:3001",
      routerPath: "/react",
    },
  ],
  [
    SubApps.NATIVE,
    {
      name: SubApps.NATIVE,
      label: "NATIVE APP",
      description: 'Native + Express App',
      entry: "//http://192.168.8.125:3002",
      routerPath: "/native",
    },
  ],
]);

export const SubAppList = [
  { key: SubApps.VUE, config: SubAppsConfigMap.get(SubApps.VUE) },
  { key: SubApps.REACT, config: SubAppsConfigMap.get(SubApps.REACT) },
  { key: SubApps.NATIVE, config: SubAppsConfigMap.get(SubApps.NATIVE) },
];

export enum MicroMessageType {
  CHANGE_THEME = 'change_theme',
  SET_COUNT = 'set_count',
  TEXT_MSG = 'text_msg',
  GLOBAL_MSG = 'global_msg'
}

export const TOKEN_KEY = 'token';

export const getToken = () => window.localStorage.getItem(TOKEN_KEY);

export const setToken = (token: string) => window.localStorage.setItem(TOKEN_KEY, token);

export const removeToken = () => window.localStorage.removeItem(TOKEN_KEY);