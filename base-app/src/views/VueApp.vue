<!--
 * @Author: shufei.han
 * @Date: 2024-08-02 16:15:26
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-20 17:50:18
 * @FilePath: \qiankun\base-app\src\views\VueApp.vue
 * @Description: 
-->
<template>
    <micro-app name="Vue3App" @created="created" url="http://localhost:4002/" iframe></micro-app>
</template> 

<script setup lang="ts">
const created= (event: CustomEvent) => {
    console.log('event', event.type);
}
</script> 

<style lang="scss" scoped></style>