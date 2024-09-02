/*
 * @Author: shufei.han
 * @Date: 2024-08-28 10:11:51
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 11:44:55
 * @FilePath: \micro-frontend\child-react-app\src\hooks\useMicro.ts
 * @Description: 
 */
import { useDispatch, useSelector } from "react-redux";
import { selectMessages, setMessages, setThemeColor } from "../store/main";
import { useCallback, useEffect } from "react";
import { isMicroEnv, MicroMessageType } from "../models/base.model";

let initialed = false
export default function useMicro() {
    
    const dispatch = useDispatch()

    const messages = useSelector(selectMessages)

    const handleMessage = useCallback((data:MicroMessage) => {
        if(data.type === MicroMessageType.CHANGE_THEME) {
            dispatch(setThemeColor(data.value))
        }
        dispatch(setMessages(data))
    }, [])

    useEffect(() => {
        if(initialed || !isMicroEnv) {
            return
        }
        const data = window.microApp.getData()
        data && handleMessage(data)
        // 监听基座消息
        window.microApp.addDataListener((data: MicroMessage) => {
            handleMessage(data)
        })
        initialed = true
    }, [])

    return {
        messages,
        handleMessage
    }
}

export const sendMessageToBase = (message: MicroMessage) => {
    window.microApp.dispatch(message)
}