import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../services/storeService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { quest: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
      meta: { quest: true }
    }
  ]
})

// check if route requires authentification
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requiresAuth)) {
    if (store.getters.isUserLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

// check if route requires quest
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.quest)) {
    if (store.getters.isUserLoggedIn) {
      next('/dashboard')
      return
    }
    next()
  } else {
    next()
  }
})

export default router
