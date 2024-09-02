<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!--
 * @Author: shufei.han
 * @Date: 2024-08-02 16:15:26
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 15:47:55
 * @FilePath: \micro-frontend\base-app\src\views\ReactApp.vue
 * @Description: 
-->
<template>
    <micro-app :name="SubApps.REACT" @created="created" baseroute="/react/" :data="data" keep-alive url="http://192.168.56.1:4003/" iframe  @datachange="handleChange"></micro-app>
</template> 

<script setup lang="ts">
/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'

import { MicroMessageType, SubApps } from '@/models/base.model';
import { ref } from 'vue';
import { useMainStore } from '@/stores/main';

const {setMsgFromChild} = useMainStore()

const data = ref<MicroMessage>({
    type: MicroMessageType.TEXT_MSG,
    value: 'This is a initial TextMessage'
})

const created= (event: CustomEvent) => {
    console.log('event', event.type);
}

const handleChange = (e) => {
    setMsgFromChild(SubApps.REACT, e.detail.data as MicroMessage)
}
</script> 

<style lang="scss" scoped></style>