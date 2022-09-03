import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BloggingPage from '../views/BloggingPage.vue'
import Update from '../views/Update.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/blog/:id',
      name: 'BloggingPage',
      component: BloggingPage
    },
    {
      path: '/update/:id',
      name: 'Update',
      component: Update
    },
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
