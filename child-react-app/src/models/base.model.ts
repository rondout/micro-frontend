/*
 * @Author: shufei.han
 * @Date: 2024-08-01 11:05:53
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 14:31:34
 * @FilePath: \micro-frontend\child-react-app\src\models\base.model.ts
 * @Description:
 */
export interface AnyObject<T = any> {
  [key: string]: T;
}

export enum MicroMessageType {
  CHANGE_THEME = 'change_theme',
  SET_COUNT = 'set_count',
  TEXT_MSG = 'text_msg',
  GLOBAL_MSG = 'global_msg'
}

export const isMicroEnv = window.__MICRO_APP_ENVIRONMENT__;

export const TOKEN_KEY = 'token';

export const getToken = () =>  {
    if(isMicroEnv) {
       return window.rawWindow.localStorage.getItem(TOKEN_KEY);
    }
    return window.localStorage.getItem(TOKEN_KEY);
}

export const setToken = (token: string) =>  {
    if(isMicroEnv) {
       return window.rawWindow.localStorage.setItem(TOKEN_KEY, token);
    }
    return window.localStorage.setItem(TOKEN_KEY, token);
}

export const removeToken = () =>  {
    if(isMicroEnv) {
       return window.rawWindow.localStorage.removeItem(TOKEN_KEY);
    }
    return window.localStorage.removeItem(TOKEN_KEY);
}