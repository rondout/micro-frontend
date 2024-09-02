/*
 * @Author: shufei.han
 * @Date: 2024-08-01 16:14:55
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 14:34:49
 * @FilePath: \micro-frontend\child-vue3-app\src\router\index.ts
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import BaseToChild from '../views/BaseToChild.vue'
import MainLayout from '@/views/layout/MainLayout.vue'
import { getToken } from '@/models/base.model'

const router = createRouter({
  
  history: createWebHashHistory(window.__MICRO_APP_BASE_ROUTE__ || '/'),
  // history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: BaseToChild
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/ChildToBase.vue')
        },
        {
          path: '/global',
          name: 'global',
          // route level code-splitting
          // this generates a separate chunk (global.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/GlobalData.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/layout/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(getToken() || to.path === '/login'){
    next()
  }
  else {
    next('/login')
  }
})

export default router
