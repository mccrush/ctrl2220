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
  {
    path: '/404', // Первая, для перекрытия остальных
    name: '404',
    component: () => import('../views/HotFound.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: '/admin/:razdel/:id?',
        component: () => import('../compadmin/FormRazdel.vue')
      },
      {
        path: '/admin/:razdel/page/:id?',
        component: () => import('../compadmin/FormPage.vue'),
      }
    ],
    // ВКЛЮЧИТЬ на продакшине!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
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
    path: '*',
    name: 'notfound',
    redirect: '/404'
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
