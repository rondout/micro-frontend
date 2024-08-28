<!--
 * @Author: shufei.han
 * @Date: 2024-08-26 12:27:46
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 12:14:35
 * @FilePath: \micro-frontend\base-app\src\views\layout\MainHeader.vue
 * @Description: 
-->
<template>
  <div class="flex-btw base-header flex-1">
    <div class="flex-start">
      <ThemeChanger class="pointer" />
      <a-button style="margin: 0 24px;" @click="sendMsg">Send Message {{ count }}</a-button>
      <a-button @click="viewToken">ViewToken</a-button>
    </div>
    <div>
      <a-button danger @click="handelLogout">Logout</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getToken, MicroMessageType, removeToken } from '@/models/base.model';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ThemeChanger from "@/components/themeChanger.vue";
import { sendMessageToAllChildren } from '@/micro';
import { Modal } from 'ant-design-vue';

const router = useRouter()
// 发送数据给子应用 my-app，setData第二个参数只接受对象类型
const count = ref(0)
const sendMsg = () => {
  count.value++
  sendMessageToAllChildren({type: MicroMessageType.SET_COUNT, value: count.value})
};

const handelLogout = () => {
  removeToken()
  router.push('/login')
}

const viewToken = () => {
  const token = getToken()
  Modal.info({
    title: 'Token',
    content: token,
    centered:true,
    maskClosable:true
  })
}
</script>

<style lang="scss" scoped>
.base-header {
  padding: 0 16px;
}
</style>
