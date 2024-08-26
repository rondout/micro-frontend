/*
 * @Author: shufei.han
 * @Date: 2024-08-01 11:05:53
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-20 17:43:48
 * @FilePath: \qiankun\base-app\src\models\base.model.ts
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
}

export const SubAppsConfigMap = new Map<SubApps, SubAppConfig>([
  [
    SubApps.VUE,
    {
      name: "vue",
      label: "VUE APP",
      description: 'Vue3 + Vite App',
      entry: "//localhost:3000",
      routerPath: "/vue",
    },
  ],
  [
    SubApps.REACT,
    {
      name: "react",
      label: "REACT APP",
      description: 'React + Vite App',
      entry: "//localhost:3001",
      routerPath: "/react",
    },
  ],
  [
    SubApps.NATIVE,
    {
      name: "native",
      label: "NATIVE APP",
      description: 'Native + Express App',
      entry: "//localhost:3002",
      routerPath: "/native",
    },
  ],
]);

export const SubAppList = [
  { key: SubApps.VUE, config: SubAppsConfigMap.get(SubApps.VUE) },
  { key: SubApps.REACT, config: SubAppsConfigMap.get(SubApps.REACT) },
  { key: SubApps.NATIVE, config: SubAppsConfigMap.get(SubApps.NATIVE) },
];
