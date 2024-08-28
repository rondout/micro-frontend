<!--
 * @Author: shufei.han
 * @Date: 2024-08-01 12:13:36
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-27 18:39:24
 * @FilePath: \micro-frontend\base-app\src\components\themeChanger.vue
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
import { sendMessageToAllChildren } from '@/micro';
import { MicroMessageType } from '@/models/base.model';
import { computed } from 'vue';

const sendThemeToChild = (primary:string) => {
  sendMessageToAllChildren({type: MicroMessageType.CHANGE_THEME, value: primary}
  )
}

const { changeTheme, theme } = useTheme(sendThemeToChild)

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