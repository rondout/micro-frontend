<!--
 * @Author: shufei.han
 * @Date: 2024-08-26 12:27:46
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-26 12:29:16
 * @FilePath: \micro-frontend\base-app\src\views\layout\MainHeader.vue
 * @Description: 
-->
<template>
  <div class="flex base-header">
    <a-button @click="sendMsg">Send Message</a-button>
  </div>
</template>

<script setup lang="ts">
const sendMsg = () => {
  console.log("sendMsg");
};
</script>

<style lang="scss" scoped>
.base-header {
  padding: 0 16px;
}
</style>
