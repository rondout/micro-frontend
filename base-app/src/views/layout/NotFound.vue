<!--
 * @Author: shufei.han
 * @Date: 2024-08-20 10:52:01
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-20 17:04:42
 * @FilePath: \qiankun\base-app\src\views\layout\NotFound.vue
 * @Description: 
-->
<template>
    <div class="not-found flex flex-column full-height">
        <h1 style="margin-bottom: 64px;">
            Page Lost
        </h1>
        <a-button @click="handleGoBack" type="primary">Go Back</a-button>
    </div>
</template> 

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const handleGoBack = () => {
    router.push('/')
}
</script> 

<style lang="scss" scoped>
.not-found {
    H1 {
        text-align: center;
        font-size: 28px;
    }
}
</style>