<!--
 * @Author: shufei.han
 * @Date: 2024-08-02 16:15:26
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-20 17:50:39
 * @FilePath: \qiankun\base-app\src\views\NativeApp.vue
 * @Description: 
-->
<template>
    <micro-app :name="SubApps.NATIVE" @created="created" url="http://192.168.8.125:4004/" iframe></micro-app>
</template> 

<script setup lang="ts">
import { SubApps } from '@/models/base.model';

const created= (event: CustomEvent) => {
    console.log('event', event.type);
}
</script> 

<style lang="scss" scoped></style>