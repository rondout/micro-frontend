<!--
 * @Author: shufei.han
 * @Date: 2024-08-01 09:38:34
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-27 17:56:30
 * @FilePath: \micro-frontend\base-app\src\App.vue
 * @Description: 
-->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import useTheme from './hooks/useTheme';

const { antdTheme } = useTheme()

</script>

<template>
  <AConfigProvider :theme="antdTheme">
    <RouterView />
  </AConfigProvider>
</template>

<style scoped></style>
