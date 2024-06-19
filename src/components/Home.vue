<!-- components/Home.vue -->
<script setup>
import { useRouter } from 'vue-router'
import WelcomeItem from './WelcomeItem.vue'

const router = useRouter()

const navigateToModule = (moduleName) => {
  router.push(`/modul/${moduleName}`)
}
</script>

<template>
  <main>
    <WelcomeItem>
      <template #heading>
        <div class="lesson">
          <img src="../assets/logo.png" @click="() => navigateToModule('MIT App Inventor')">
          <a @click.prevent="() => navigateToModule('MIT App Inventor')">MIT App Inventor</a>
        </div>
      </template>
    </WelcomeItem>
  </main>
</template>

<style scoped>
.lesson {
  display: flex;
  align-items: center;
}

.lesson a {
  margin-left: 20px;
  font-size: 16px;
  font-weight: bold;
}

.lesson img {
  cursor: pointer;
}

.lesson img:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
