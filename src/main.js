import './assets/main.css'
import { directoryImport } from 'directory-import'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const importedModules = directoryImport('./assets/images');
const app = createApp(App)

app.use(router)

app.mount('#app')
