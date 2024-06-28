<!-- components/Lesson.vue -->
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import images from '@/utils/importImages';

const route = useRoute()
const lessonContent = ref('')

const updateLessonContent = async () => {
  const moduleName = route.params.moduleName
  const lessonName = route.params.lessonName
  try {
    const response = await axios.get(`/lessons/${moduleName}/${lessonName}.html`)
    lessonContent.value = response.data
  } catch (error) {
    lessonContent.value = 'Ошибка при загрузке содержимого'
  }
}

watch(route, updateLessonContent)
updateLessonContent()
console.log(images);
</script>

<template>
  <main>
    <h1>{{ route.params.lessonName }}</h1>
    <div v-html="lessonContent"></div>
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

div {
  font-size: 16px;
}
</style>
