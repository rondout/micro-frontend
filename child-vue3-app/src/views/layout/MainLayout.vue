<!--
 * @Author: shufei.han
 * @Date: 2024-08-26 11:42:20
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 11:55:37
 * @FilePath: \micro-frontend\child-vue3-app\src\views\layout\MainLayout.vue
 * @Description: 
-->
<template>
  <div class="vue-main-layout">
    <h3 v-if="isMicro" class="env-title">当前处于微前端环境中: 
      <a style="color: #fff;" target="_blank" :href="host">{{ host }}</a>
    </h3>
    <h3 v-else class="env-title no-env-title" :style="{backgroundColor: primary}">当前不处于微前端环境中</h3>
    <h3 style="margin-bottom: 16px;">
        <span>
        Child Vue App  
        </span>
        <span :style="{ color: 'var(--primary)', paddingLeft: 8, fontWeight: 'bold', fontSize: '24px' }">without Keep-Alive</span>
      </h3>
      <a-tabs v-model:activeKey="activeKey" @change="handleTabChange">
        <a-tab-pane key="/"  tab="Base to Child"></a-tab-pane>
        <a-tab-pane v-if="isMicro" key='/about' tab="Child to Base" force-render></a-tab-pane>
        <a-tab-pane key='/global' tab="GlobalData"></a-tab-pane>
      </a-tabs>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import useMicro from '@/hooks/useMicro';
import type { Key } from 'ant-design-vue/es/_util/type';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {useMainStore} from "@/stores/main"

const router = useRouter()
const route = useRoute()
const {isMicro} = useMicro()
const {theme: {primary}} = useMainStore()

const host = computed(() => {
  let hostname
  if (isMicro) {
    hostname= window.location.hostname
  }else {
    hostname =  window.rawWindow.location.hostname
  }
  return `http://${ hostname }:4002`
})

const activeKey = ref(route.path)

const handleTabChange = (key: Key) => {
  navigateTo(key as string)
}
const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<style lang="scss" scoped>
.vue-main-layout {
    padding: 24px;
    .env-title {
      background-color: var(--primary);
      color: #fff;
      padding: 6px 12px; 
      display: inline-block;
      border-radius: 12px; 
    }
}
</style>
