import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from "@/main.js";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  // {
  //   path: '/:razdel',
  //   name: 'razdel',
  //   component: () => import('../views/Razdel.vue'),
  //   children: [
  //     {
  //       path: '/:page',
  //       component: () => import('../views/Page.vue'),
  //     }
  //   ]
  // },
  {
    path: '/:razdel',
    name: 'razdel',
    component: () => import('../views/Razdel.vue')
  },
  {
    path: '/:razdel/:page',
    name: 'page',
    component: () => import('../views/Page.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
    // ВКЛЮЧИТЬ на продакшине!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('../views/HotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // 3
  if (requiresAuth) {
    if (currentUser) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
