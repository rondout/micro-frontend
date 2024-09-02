<!--
 * @Author: shufei.han
 * @Date: 2024-08-01 16:14:55
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 10:23:17
 * @FilePath: \micro-frontend\child-vue3-app\src\views\ChildToBase.vue
 * @Description: 
-->
<template>
  <div class="about">
    <h2>Child to Base</h2>
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
import { MicroMessageType } from '@/models/base.model';
import { useMsgStore } from '@/stores/message';
import { ref } from 'vue';

const {messages} = useMsgStore()
const name = ref('')

const sendMessageToBase = () => {
  const msg = {
   type: MicroMessageType.TEXT_MSG,
   value: name.value
  }
  window.microApp?.dispatch(msg, () => {
    console.log("发送完成");
  })
}

</script>

<style>

</style>
