import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import '@/assets/index.css'

const app = createApp(App)
const head = createHead()
app.use(head)

app.use(createPinia())
app.use(router)

app.mount('#app')
