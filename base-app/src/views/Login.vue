<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Author: shufei.han
 * @Date: 2024-08-27 17:26:14
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 12:09:56
 * @FilePath: \micro-frontend\base-app\src\views\Login.vue
 * @Description: 
-->
<template>
    <div class="login-container flex full-height">
        <div class="login-content">
            <h2>请登录</h2>
            <a-form :rules="rules" :model="state.formData" ref="formRef">
                <a-form-item prop="username">
                    <a-input v-model:value="state.formData.username"></a-input>
                </a-form-item>

                <a-form-item prop="password">
                    <a-input-password v-model:value="state.formData.password"></a-input-password>
                </a-form-item>
                <a-button :loading="state.loading" @click="handleLogin" type="primary" class="full-width">Login</a-button>
            </a-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { setToken } from '@/models/base.model';
import { FormInstance, message } from 'ant-design-vue';
import { Rule } from 'ant-design-vue/es/form';
import { nanoid } from 'nanoid';
import { computed, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const formRef = ref<FormInstance>()
const router = useRouter()

const state = reactive({
    loading: false,
    formData: {
        username: '',
        password: '',
    },
});

const rules = computed<{[propName:string]: Rule[]}>(() => {
    return {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }],
    }
})

const handleLogin = async () => {
    try {
        await formRef.value.validateFields()
        state.loading = true
        await new Promise(resolve => setTimeout(resolve, 1000))
        state.loading = false
        setToken(nanoid())
        router.push('/')
    } catch (error) {
        message.error("请输入正确的用户名和密码")
    }
}
</script>

<style lang="scss" scoped></style>