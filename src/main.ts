import { createApp } from 'vue'
import App from './App.vue'
import createPinia from './store'
import createRouter from './router'
import 'normalize.css'
import './assets/css/reset.css'

const pinia = createPinia()
const router = createRouter()

const app = createApp(App)

app.use(pinia).use(router).mount('#app')
