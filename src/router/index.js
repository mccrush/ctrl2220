import { createRouter, createWebHistory } from 'vue-router'
import { auth } from "@/firebase.js"

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/404', // Первая, для перекрытия остальных
      name: '404',
      component: () => import('../views/NotFound.vue')
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
      path: '/:catchAll(.*)',
      name: 'notfound',
      redirect: '/404'
    }
  ]
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
