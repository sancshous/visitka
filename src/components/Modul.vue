<!-- components/Modul.vue -->
<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const lessons = ref([])

const modulesLessons = {
  'MIT App Inventor': ['Занятие 1', 'Занятие 2', 'Занятие 3'],
  'Другой Модуль': ['Занятие 1', 'Занятие 2']
}

const updateLessons = () => {
  const moduleName = route.params.moduleName
  lessons.value = modulesLessons[moduleName] || []
}

watch(route, updateLessons)
updateLessons()

const navigateToLesson = (lessonName) => {
  router.push(`/modul/${route.params.moduleName}/${lessonName}`)
}
</script>

<template>
  <main>
    <h1>{{ route.params.moduleName }}</h1>
    <ul v-if="!route.params.lessonName">
      <li v-for="lesson in lessons" :key="lesson">
        <a @click.prevent="() => navigateToLesson(lesson)">{{ lesson }}</a>
      </li>
    </ul>
    <RouterView v-else />
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
