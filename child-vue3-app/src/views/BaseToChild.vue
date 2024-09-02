<!--
 * @Author: shufei.han
 * @Date: 2024-08-01 16:14:55
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 11:18:12
 * @FilePath: \micro-frontend\child-vue3-app\src\views\BaseToChild.vue
 * @Description: 
-->
<template>
  <h2>This Child Vue3 App v3</h2>
  <div>
    <div>
      <a-button @click="getMessageManually" v-if="isMicro">主动获取主应用下发的数据</a-button>
      <a-button @click="viewToken">View child token</a-button>
    </div>
    <div  v-if="isMicro">
      <span>
        主动获取到的数据:  
      </span>
      <span>{{ latestDataDisplay }}</span>
    </div>
  </div>
  <h3  v-if="isMicro">
    message list from 
    <span class="title">BASE APP:</span>
  </h3>
  <div  v-if="isMicro">
    <div v-for="(item, index) in messages" :key="index">
      {{ JSON.stringify(item) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import useMicro from '@/hooks/useMicro';
import { getToken } from '@/models/base.model';
import { useMsgStore } from '@/stores/message';
import { Modal } from 'ant-design-vue';
import { computed, ref } from 'vue';

const {messages} = useMsgStore()
const {isMicro} = useMicro()

const latestData = ref()

const latestDataDisplay = computed(() => {
  if(typeof latestData.value === 'object') {
    return JSON.stringify(latestData.value)
  }
  return latestData.value
})

const getMessageManually = () => {
  const data = window.microApp?.getData()
  latestData.value = data
}

const viewToken = () => {
  const token = getToken()
  Modal.info({
    title: 'Child Vue app Token',
    content: token,
    centered:true
  })
}

</script>

<style scoped lang="scss">
.title {
  color: var(--primary);
}
</style>
