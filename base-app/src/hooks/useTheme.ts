/*
 * @Author: shufei.han
 * @Date: 2024-08-01 09:58:58
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-27 18:37:42
 * @FilePath: \micro-frontend\base-app\src\hooks\useTheme.ts
 * @Description: 
 */
import { THEME_COLOR_KEY } from "@/models/theme.model";
import { useMainStore } from "@/stores/main";
import type { ThemeConfig } from "ant-design-vue/es/config-provider/context";
import { computed, onMounted, watch } from "vue";

export default function useTheme(onChange?: (primary: string) => void) {
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
        setColorToDocument()
    }

    onMounted(() => {
        initColors()
    })

    watch(theme, () => {
        setColorToDocument()
    })

    const changeTheme = (primary: string) => {
        changePrimary(primary)
        localStorage.setItem(THEME_COLOR_KEY, primary)
        onChange?.(primary)
    }

    return {theme, antdTheme, changeTheme}
}