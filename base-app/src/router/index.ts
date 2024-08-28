/*
 * @Author: shufei.han
 * @Date: 2024-08-01 09:38:34
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 12:22:32
 * @FilePath: \micro-frontend\base-app\src\router\index.ts
 * @Description:
 */
import { getToken } from "@/models/base.model";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/layout/MainLayout.vue"),
      redirect: "/main",
      children: [
        {
          path: "/main",
          name: "main",
          component: () => import("@/views/MainPage.vue"),
        },

        {
          path: "/vue",
          name: "vue",
          component: () => import("@/views/VueApp.vue"),
        },
        {
          path: "/react",
          name: "react",
          component: () => import("@/views/ReactApp.vue"),
        },
        {
          path: "/native",
          name: "native",
          component: () => import("@/views/NativeApp.vue"),
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'notFound',
          component: () => import("@/views/layout/NotFound.vue"),
        }
      ],
    },
    {
      path:'/login',
      name: 'login',
      component: () => import("@/views/Login.vue"),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import("@/views/layout/NotFound.vue"),
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

router.beforeEach((to, from, next) => {
  if(getToken() || to.path === '/login') {
    next();
  }
  else {
    next('/login')
  }
})

export default router;
