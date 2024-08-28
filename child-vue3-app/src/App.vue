<!--
 * @Author: shufei.han
 * @Date: 2024-08-01 16:14:55
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 12:19:48
 * @FilePath: \micro-frontend\child-vue3-app\src\App.vue
 * @Description: 
-->
<template>
  <ConfigProvider :theme="{ token: { colorPrimary: theme.primary } }">
    <router-view></router-view>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useMicro from './hooks/useMicro'
import { ConfigProvider } from 'ant-design-vue'
import { useMainStore } from './stores/main';

const { isMicro } = useMicro()

const {theme} = useMainStore()

onMounted(() => {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    console.log('我（Vue App）在微前端环境中', isMicro.value)
  } else {
    console.log('child-vue3-app mounted')
  }
})
</script>

<style scoped></style>
