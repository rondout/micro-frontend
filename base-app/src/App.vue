<!--
 * @Author: shufei.han
 * @Date: 2024-08-01 09:38:34
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-01 12:14:10
 * @FilePath: \main-app-vue\src\App.vue
 * @Description: 
-->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ConfigProvider } from 'ant-design-vue'
import useTheme from './hooks/useTheme';

const { antdTheme } = useTheme()

</script>

<template>
  <ConfigProvider :theme="antdTheme">
    <RouterView />
  </ConfigProvider>
</template>

<style scoped></style>
