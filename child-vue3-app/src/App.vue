<!--
 * @Author: shufei.han
 * @Date: 2024-08-01 16:14:55
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-20 17:48:02
 * @FilePath: \qiankun\child-vue3-app\src\App.vue
 * @Description: 
-->
<template>
  <h1>This Child Vue3 App v3</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useMicro from './hooks/useMicro';

const {isMicro} = useMicro()


onMounted(() => {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    console.log('我（Vue App）在微前端环境中', isMicro.value, window)
  }else {
    console.log('child-vue3-app mounted')
  }
})
</script>

<style scoped></style>
