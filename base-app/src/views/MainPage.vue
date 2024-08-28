<!--
 * @Author: shufei.han
 * @Date: 2024-08-20 11:01:58
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 12:03:11
 * @FilePath: \micro-frontend\base-app\src\views\MainPage.vue
 * @Description: 
-->
<template>
  <div class="main-page full-height">
    <div class="flex-start flex-column">
      <h1>
        <span> This is </span>
        <span class="title-micro">BASE APP PAGE</span>
      </h1>
      <h1>
        <span>Lets's learn </span>
        <span class="title-micro">Micro App</span>
      </h1>
    </div>
    <h1 style="margin: 32px 0">App List:</h1>
    <ul>
      <li
        v-for="item of SubAppList"
        :key="item.key"
        @click="navigateTo(item.config)"
      >
        <a-tooltip title="click to view child app">
          <span>{{ item.config.label + ": " }}</span>
          <span>{{ item.config.description }}</span>
        </a-tooltip>
      </li>
    </ul>
    <div>
      <h2>
        Messages from child: 
      </h2>
      <div v-for="(item, index) of msgsFromChild" :key="index" class="flex-start msg-li">
        <div>
          来自
            <span class="msg-from">
              {{ item.child }}
            </span>
           的消息： 
        </div>
        <div>
          {{ JSON.stringify(item.message) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SubAppConfig, SubAppList } from "@/models/base.model";
import { useMainStore } from "@/stores/main";
import { useRouter } from "vue-router";

const router = useRouter();
const {msgsFromChild} = useMainStore()

const navigateTo = (config: SubAppConfig) => {
  router.push({
    path: config.routerPath,
  });
};
</script>

<style lang="scss" scoped>
.main-page {
  color: var(--primary);
  padding: 24px;
  h1 {
    font-size: 24px;
    .title-micro {
      font-size: 32px;
      font-weight: 900;
    }
  }
  ul {
    li {
      font-size: 24px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .msg-li {
    color: grey;
    .msg-from {
      color: var(--primary);
      font-weight: bold;
    }
  }
}
</style>
