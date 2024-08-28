<!--
 * @Author: shufei.han
 * @Date: 2024-08-26 11:42:20
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 15:00:10
 * @FilePath: \micro-frontend\child-vue3-app\src\views\layout\MainLayout.vue
 * @Description: 
-->
<template>
  <div class="vue-main-layout">
    <h3 style="margin-bottom: 16px;">
        <span>
        Child Vue App  
        </span>
        <span :style="{ color: 'var(--primary)', paddingLeft: 8, fontWeight: 'bold', fontSize: '24px' }">without Keep-Alive</span>
      </h3>
    <ButtonGroup style="margin-bottom: 24px;">
      <Button @click="navigateTo('/')" type="primary">Base to Child</Button>
      <Button @click="navigateTo('/about')" type="primary">Child to Base</Button>
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
