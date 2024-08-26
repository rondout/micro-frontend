<!--
 * @Author: shufei.han
 * @Date: 2024-08-01 12:13:36
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-01 12:20:50
 * @FilePath: \main-app-vue\src\components\themeChanger.vue
 * @Description: 
-->
<template>
    <label for="themeColor">
        <div>{{ themeColor }}</div>
        <a-input style="display: none;" type="color" id="themeColor" v-model:value="themeColor"></a-input>
    </label>
</template>

<script setup lang="ts">
import useTheme from '@/hooks/useTheme';
import { computed } from 'vue';
const { changeTheme, theme } = useTheme()

const themeColor = computed({
    get() {
        return theme.primary.main
    },
    set(val) {
        changeTheme(val)
    }
}) 
</script>

<style lang="scss" scoped></style>