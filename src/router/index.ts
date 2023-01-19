import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: () => import('@/views/Projects.vue')
    },
    {
      path: '/bio',
      name: 'bio',
      component: () => import('@/views/Bio.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue')
    }
  ]
})

export default router
