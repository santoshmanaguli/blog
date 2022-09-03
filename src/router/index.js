import { createRouter, createWebHistory } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'AppHeader',
    //   component: AppHeader
    // },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'AllPost',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AllPost.vue')
    }
  ]
})

export default router
