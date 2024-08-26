<!--
 * @Author: shufei.han
 * @Date: 2024-08-26 11:42:20
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-26 11:57:17
 * @FilePath: \micro-frontend\child-vue3-app\src\views\layout\MainLayout.vue
 * @Description: 
-->
<template>
  <div class="vue-main-layout">
    <ButtonGroup style="margin-bottom: 24px;">
      <Button @click="navigateTo('/')" type="primary">Home</Button>
      <Button @click="navigateTo('/about')" type="primary">About</Button>
    </ButtonGroup>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { Button, ButtonGroup } from 'ant-design-vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<style lang="scss" scoped>
.vue-main-layout {
    padding: 24px;
}
</style>
