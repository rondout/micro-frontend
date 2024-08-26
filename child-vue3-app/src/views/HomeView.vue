<!--
 * @Author: shufei.han
 * @Date: 2024-08-01 16:14:55
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-26 11:41:41
 * @FilePath: \micro-frontend\child-vue3-app\src\views\HomeView.vue
 * @Description: 
-->
<template>
  <h1>This Child Vue3 App v3</h1>
  <Button @click="handleClick">监听消息</Button>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue'

const handleClick = () => {
  console.log(window.microApp)
}
window.microApp.addDataListener((data) => {
  console.log('监听到数据变化', data)
})
</script>
