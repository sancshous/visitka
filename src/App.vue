<!-- App.vue -->
<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const currentModuleName = ref('')
const currentLessonName = ref('')

watch(route, () => {
  if (route.name === 'lessonDetail') {
    currentModuleName.value = route.params.moduleName
    currentLessonName.value = route.params.lessonName
  } else if (route.name === 'moduleDetail') {
    currentModuleName.value = route.params.moduleName
    currentLessonName.value = ''
  } else {
    currentModuleName.value = ''
    currentLessonName.value = ''
  }
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Модули</RouterLink>
        <span v-if="currentModuleName"> / <RouterLink :to="'/modul/' + currentModuleName">{{ currentModuleName }}</RouterLink></span>
        <span v-if="currentLessonName"> / {{ currentLessonName }}</span>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
