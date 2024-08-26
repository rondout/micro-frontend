<!--
 * @Author: shufei.han
 * @Date: 2024-08-01 09:43:56
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-20 11:00:06
 * @FilePath: \qiankun\base-app\src\views\layout\MainLayout.vue
 * @Description: 
-->

<template>
    <a-layout class="main-layout">
        <a-layout-header :style="styles.headerStyle" class="flex-start">
            <ThemeChanger class="pointer" />
            <a-switch style="margin-left: 16px;" v-model:checked="isDark"></a-switch>
        </a-layout-header>
        <a-layout>
            <a-layout-sider :style="styles.siderStyle">
                <LayoutMenu :theme="themeMode"></LayoutMenu>
            </a-layout-sider>
            <a-layout-content class="router-container">
                <div class="content-container full-height">
                    <router-view></router-view>
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
import useTheme from '@/hooks/useTheme';
import type { CSSProperties } from 'vue';
import { computed } from 'vue';
import type { AnyObject } from '@/models/base.model'
import ThemeChanger from '@/components/themeChanger.vue';
import LayoutMenu from '@/views/layout/LayoutMenu.vue';
import type { MenuTheme } from 'ant-design-vue';
import { ref } from 'vue';

const { theme } = useTheme()

const themeMode = ref<MenuTheme>(localStorage.getItem('theme') as MenuTheme || 'dark')

const isDark = computed({
    get() {
        return themeMode.value === 'dark'
    },
    set(val) {
        themeMode.value = val ? 'dark' : 'light'
        localStorage.setItem('theme', themeMode.value)
    }
})

const styles = computed<AnyObject<CSSProperties>>(() => {
    return {
        headerStyle: {
            color: '#fff',
            height: '64px',
            paddingInline: '24px',
            lineHeight: '64px',
            backgroundColor: theme.primary.dark,
        },
        siderStyle: {
            textAlign: 'center',
            color: '#fff',
            lineHeight: '120px',
        },
    }
});

</script>

<style lang="scss" scoped>
.main-layout {
    height: 100%;
    .router-container {
        height: 100%;
        padding: 16px;
        .content-container {
            background-color: #fff;
            overflow: auto;    
        }
    }
}
</style>