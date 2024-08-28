/*
 * @Author: shufei.han
 * @Date: 2024-08-28 09:44:18
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 14:55:50
 * @FilePath: \micro-frontend\child-react-app\src\store\main.ts
 * @Description: 
 */
import { createSlice } from "@reduxjs/toolkit";
import { isMicroEnv, MicroMessageType } from "../models/base.model";
import { RootState } from ".";

let initPrimary = window.localStorage.getItem("theme-color") || "#3f51b5";

if(isMicroEnv) {
    initPrimary = window.rawWindow.localStorage.getItem("theme-color") || "#3f51b5";
}

const initialState: {messages: MicroMessage[], theme: string} = {
    messages: [{type: MicroMessageType.SET_COUNT, value: null}] as MicroMessage[],
    theme: initPrimary
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any @ts-ignore
export const mainSlice = createSlice({
    name:"main",
    initialState,
    reducers: {
        setMessages(state, action) {
            state.messages.push(action.payload)
        },
        setThemeColor(state, action) {
            state.theme = action.payload
        }
    },
})

export const {setMessages, setThemeColor} = mainSlice.actions

export default mainSlice.reducer    

export const selectTheme = (state: RootState) => state.main.theme
export const selectMessages = (state: RootState) => state.main.messages