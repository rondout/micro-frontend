/*
 * @Author: shufei.han
 * @Date: 2024-08-01 09:58:58
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-20 17:47:21
 * @FilePath: \qiankun\base-app\src\hooks\useTheme.ts
 * @Description: 
 */
import { THEME_COLOR_KEY } from "@/models/theme.model";
import { useMainStore } from "@/stores/main";
import type { ThemeConfig } from "ant-design-vue/es/config-provider/context";
import { computed, onMounted, watch } from "vue";

export default function useTheme() {
    const { theme, changePrimary } = useMainStore()

    const antdTheme = computed<ThemeConfig>(() => {
        return {
            token: {
                colorPrimary: theme.primary.main,
            }
        }
    })

    const setColorToDocument = () => {
        document.documentElement.style.setProperty('--primary', theme.primary.main)
        document.documentElement.style.setProperty('--primary-light', theme.primary.light)
        document.documentElement.style.setProperty('--primary-dark', theme.primary.dark)
        document.documentElement.style.setProperty('--primary-contrast', theme.primary.contrastText)
    }

    const initColors = () => {
        const storageThemeColor = localStorage.getItem(THEME_COLOR_KEY)
        if(storageThemeColor) {
            changePrimary(storageThemeColor)
        } 
    }

    onMounted(() => {
        setColorToDocument()
        initColors()
    })

    watch(theme, () => {
        setColorToDocument()
    })

    const changeTheme = (primary: string) => {
        changePrimary(primary)
        localStorage.setItem(THEME_COLOR_KEY, primary)
    }

    return {theme, antdTheme, changeTheme}
}