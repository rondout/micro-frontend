<!--
 * @Author: shufei.han
 * @Date: 2024-08-01 16:14:55
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-27 18:13:36
 * @FilePath: \micro-frontend\child-vue3-app\src\views\AboutView.vue
 * @Description: 
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="flex-start">
      <a-input style="width: 300px;" v-model:value="name"></a-input>
      <a-button @click="sendMessageToBase">给基座发送数据</a-button>
    </div>
    <div>
    <div v-for="(item, index) in messages" :key="index">
      {{ JSON.stringify(item) }}
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { useMsgStore } from '@/stores/message';
import { ref } from 'vue';

const {messages} = useMsgStore()
const name = ref('')

const sendMessageToBase = () => {
  const msg = {
    name: 'child-vue3-app',
    data: {
      name: name.value,
      age: 18
    }
  }
  window.microApp?.dispatch(msg, () => {
    console.log("发送完成");
  })
}

</script>

<style>

</style>
