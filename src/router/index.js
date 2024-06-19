import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Modul from '../components/Modul.vue'
import Lesson from '../components/Lesson.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/modul/:moduleName',
      name: 'moduleDetail',
      component: Modul,
      children: [
        {
          path: ':lessonName',
          name: 'lessonDetail',
          component: Lesson
        }
      ]
    }
  ]
})

export default router
