<!--
 * @Author: shufei.han
 * @Date: 2024-08-02 16:15:26
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 14:37:12
 * @FilePath: \micro-frontend\base-app\src\views\VueApp.vue
 * @Description: 
-->
<template>
    <!-- <micro-app :name="SubApps.VUE" @created="created" url="http://localhost:4002/" activeRule="/vue/*" :props="{base:'/vue'}" iframe @datachange="handleChange"></micro-app> -->
    <micro-app :name="SubApps.VUE" @created="created" url="http://localhost:4002/" activeRule="/vue/*" baseroute="/vue/" iframe @datachange="handleChange"></micro-app>
</template> 

<script setup lang="ts">
import { SubApps } from '@/models/base.model';
import { useMainStore } from '@/stores/main';

const {setMsgFromChild} = useMainStore()

const created= (event: CustomEvent) => {
    console.log('event', event.type);
}

const handleChange = (e) => {
    setMsgFromChild(SubApps.VUE, e.detail.data as MicroMessage)
}
</script> 

<style lang="scss" scoped></style>