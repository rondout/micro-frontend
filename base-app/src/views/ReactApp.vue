<!--
 * @Author: shufei.han
 * @Date: 2024-08-02 16:15:26
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-20 11:08:36
 * @FilePath: \qiankun\base-app\src\views\ReactApp.vue
 * @Description: 
-->
<template>
    <micro-app name="ReactApp" @created="created" keep-alive url="http://localhost:4003/" iframe></micro-app>
</template> 

<script setup lang="ts">
const created= (event: CustomEvent) => {
    console.log('event', event.type);
}
</script> 

<style lang="scss" scoped></style>