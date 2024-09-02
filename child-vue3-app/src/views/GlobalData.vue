<!--
 * @Author: shufei.han
 * @Date: 2024-09-02 10:21:39
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 11:39:28
 * @FilePath: \micro-frontend\child-vue3-app\src\views\GlobalData.vue
 * @Description: 
-->
<template>
    <div>
        <h2>Global Data</h2>
        <a-button @click="getGlobalDataManually">Get Global Data Manually</a-button>
        <div class="flex-start">
            <a-input style="width: 250px;" v-model:value="inputValue"></a-input>
            <a-button type="primary" @click="sendGlobalData">Send Global Data</a-button>
        </div>
        <h3>Global Messages</h3>
        <div v-for="(msg, index) in globalMessages" :key="index">{{JSON.stringify(msg)}}</div>
    </div>
</template> 

<script setup lang="ts">
import { MicroMessageType } from '@/models/base.model';
import { useMsgStore } from '@/stores/message';
import { ref } from 'vue';

const inputValue = ref('')
const { setGlobalMessages, globalMessages, handleGlobalMessage }  = useMsgStore()
  
const sendGlobalData = () => {
    console.log(inputValue.value);
    setGlobalMessages({type: MicroMessageType.GLOBAL_MSG, value: inputValue.value})
}

const getGlobalDataManually = () => {
    const data = window.microApp?.getGlobalData()
    handleGlobalMessage(data)
}
</script> 

<style lang="scss" scoped></style>